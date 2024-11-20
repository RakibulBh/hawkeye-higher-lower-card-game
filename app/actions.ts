"use server";

import { suits, values } from "@/lib/data";
import { Card } from "@/types";

export async function createDeck() {
  const currDeck: Card[] = [];

  for (let suit of suits) {
    for (let value of values) {
      currDeck.push({ suit, value });
    }
  }
  const shuffledDeck = await shuffleDeck(currDeck);

  return shuffledDeck;
}

export async function shuffleDeck(newDeck: Card[]) {
  const shuffledArray = [...newDeck];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }

  return shuffledArray;
}

export async function getRandomCard(shuffledDeck: Card[]) {
  const randomIndex = Math.round(Math.random() * shuffledDeck.length);
  const randomCard = shuffledDeck[randomIndex];
  return randomCard;
}
