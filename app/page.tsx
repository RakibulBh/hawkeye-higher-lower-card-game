"use client";
import Button2 from "@/components/button";
import CardPlaceholder from "@/components/card-placeholder";
import User from "@/components/user";
import { useEffect, useState } from "react";
import { Buttons, cardRanks } from "../lib/data";
import { Card } from "@/types";
import CardComponent from "@/components/card";
import { createDeck, getRandomCard } from "./actions";
import LostGameDialog from "@/components/lost-game-dialog";
import { Button } from "@/components/ui/button";

export default function MainContent() {
  const [turn, setTurn] = useState(false);
  const [deck, setDeck] = useState<Card[]>([]);
  const [currentCard, setCurrentCard] = useState<Card>();

  const [dialogOpen, setDialogOpen] = useState(false);

  const [lives1, setScore1] = useState(3);

  const [guesses, setGuesses] = useState<number>(0);

  const [correct, setCorrect] = useState<boolean | null>(null);

  const [gameFinished, setGameFinished] = useState(false);

  async function setupGame() {
    setGameFinished(false);
    setGuesses(0);
    setDialogOpen(false);
    const shuffledDeck = await createDeck();
    setDeck(shuffledDeck);
    const randomCard = await getRandomCard(shuffledDeck);
    setScore1(3);
    setCurrentCard(randomCard);
  }

  useEffect(() => {
    setupGame();
  }, []);

  async function getNewCard(guess: string) {
    if (!currentCard) {
      return;
    }

    const randomCard = await getRandomCard(deck);
    const lastCard = currentCard;

    if (!lastCard) {
      return;
    }

    let currLives = lives1;

    switch (guess) {
      case "red":
        if (
          cardRanks[lastCard.value] < cardRanks[randomCard.value] ||
          cardRanks[lastCard.value] === cardRanks[randomCard.value]
        ) {
          currLives -= 1;
          setScore1(currLives);
          setCorrect(false);
        } else {
          setGuesses(guesses + 1);
          setCorrect(true);
        }
        break;
      case "gray":
        if (cardRanks[lastCard.value] !== cardRanks[randomCard.value]) {
          currLives -= 1;
          setScore1(currLives);
          setCorrect(false);
        } else {
          setGuesses(guesses + 1);
          setCorrect(true);
        }
        break;
      case "green":
        if (
          cardRanks[lastCard.value] > cardRanks[randomCard.value] ||
          cardRanks[lastCard.value] === cardRanks[randomCard.value]
        ) {
          currLives -= 1;
          setScore1(currLives);
          setCorrect(false);
        } else {
          setGuesses(guesses + 1);
          setCorrect(true);
        }
        break;
    }

    if (currLives === 0) {
      setGameFinished(true);
      setDialogOpen(true);
    }

    setCurrentCard(randomCard);
  }

  return (
    <>
      <LostGameDialog
        setIsOpen={setDialogOpen}
        open={dialogOpen}
        guesses={guesses}
        onClick={setupGame}
      />
      <main className="h-screen bg-[#101215]">
        <div className="min-h-full max-h-full flex flex-col items-center justify-between px-28 pb-12">
          <div className="w-full mt-16">
            <p
              style={{ color: correct ? "green" : "red" }}
              className="text-[4rem] font-bold text-center"
            >
              lives left: {lives1}
            </p>
            <div className="w-full flex justify-between items-center">
              <User name={"Player 1"} />
              <div className="w-24 h-32 relative">
                {currentCard ? (
                  <CardComponent card={currentCard} />
                ) : (
                  <CardPlaceholder />
                )}
              </div>
              <User dealer={true} />
            </div>
          </div>
          <div className="flex gap-4">
            {!gameFinished ? (
              Buttons.map((button) => (
                <Button2
                  onClick={getNewCard}
                  key={button.text}
                  disabled={turn}
                  color={button.color}
                  Icon={button.icon}
                >
                  {button.text}
                </Button2>
              ))
            ) : (
              <Button
                className="bg-white p-6 text-black hover:text-white"
                onClick={setupGame}
              >
                Reset
              </Button>
            )}
          </div>
          {/* <div className="absolute bg-gradient-to-b from-[#272537] to-black -z-20 w-[100rem] h-[100rem] rounded-full top-56 border-[1rem] border-black" />
        <div className="bg-[#5B3BAC] w-[70rem] h-[70rem] rounded-full -z-30 absolute blur-3xl top-48" /> */}
        </div>
      </main>
    </>
  );
}
