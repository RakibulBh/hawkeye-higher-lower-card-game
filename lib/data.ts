import { CardValue } from "@/types";
import { ArrowBigDownDash, ArrowBigUpDash, Minus } from "lucide-react";

export const Buttons = [
  {
    icon: ArrowBigUpDash,
    text: "Higher",
    color: "green",
  },
  {
    icon: Minus,
    text: "Same",
    color: "gray",
  },
  {
    icon: ArrowBigDownDash,
    text: "Lower",
    color: "red",
  },
];

export const suits = ["Hearts", "Diamonds", "Clubs", "Spades"];

export const values = [
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "Jack",
  "Queen",
  "King",
  "Ace",
];

export const cardRanks: Record<CardValue, number> = {
  Ace: 14,
  King: 13,
  Queen: 12,
  Jack: 11,
  "10": 10,
  "9": 9,
  "8": 8,
  "7": 7,
  "6": 6,
  "5": 5,
  "4": 4,
  "3": 3,
  "2": 2,
};
