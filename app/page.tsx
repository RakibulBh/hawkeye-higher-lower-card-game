"use client";
import Button from "@/components/button";
import CardPlaceholder from "@/components/card-placeholder";
import User from "@/components/user";
import { useEffect, useState } from "react";
import { Buttons } from "../lib/data";
import { Card } from "@/types";
import CardComponent from "@/components/card";
import { createDeck, getRandomCard } from "./actions";
import { decl } from "postcss";

export default function MainContent() {
  const [turn, setTurn] = useState(false);
  const [deck, setDeck] = useState<Card[]>([]);
  const [currentCard, setCurrentCard] = useState<Card | null>(null);

  const [lives1, setScore1] = useState(3);
  const [lives2, setScore2] = useState(3);

  const [guess, setGuess] = useState(null);

  useEffect(() => {
    async function setupGame() {
      const shuffledDeck = await createDeck();
      setDeck(shuffledDeck);
      const randomCard = await getRandomCard(shuffledDeck);
      setCurrentCard(randomCard);
    }

    setupGame();
  }, []);

  async function getNewCard(guess: string) {
    const randomCard = await getRandomCard(deck);
    const lastCard = currentCard;
    setCurrentCard(randomCard);
    // TODO: HANDLE GAME LOGIC
  }

  return (
    <main className="h-screen bg-[#101215]">
      <div className="min-h-full max-h-full flex flex-col items-center justify-between px-28 pb-12">
        <div className="w-full mt-16">
          <p className="text-[4rem] font-bold text-center text-white">50</p>
          <div className="w-full flex justify-between items-center">
            <User score={lives1} />
            <div className="w-24 h-32 relative">
              {currentCard ? (
                <CardComponent card={currentCard} />
              ) : (
                <CardPlaceholder />
              )}
            </div>
            <User score={lives2} />
          </div>
        </div>
        <div className="flex gap-4">
          {Buttons.map((button) => (
            <Button
              onClick={getNewCard}
              key={button.text}
              disabled={turn}
              color={button.color}
              Icon={button.icon}
            >
              {button.text}
            </Button>
          ))}
        </div>
        {/* <div className="absolute bg-gradient-to-b from-[#272537] to-black -z-20 w-[100rem] h-[100rem] rounded-full top-56 border-[1rem] border-black" />
        <div className="bg-[#5B3BAC] w-[70rem] h-[70rem] rounded-full -z-30 absolute blur-3xl top-48" /> */}
      </div>
    </main>
  );
}
