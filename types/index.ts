export interface Card {
  suit: string;
  value: CardValue; // This ensures card values are type-safe
}
export type CardValue =
  | "Ace"
  | "King"
  | "Queen"
  | "Jack"
  | "10"
  | "9"
  | "8"
  | "7"
  | "6"
  | "5"
  | "4"
  | "3"
  | "2";
