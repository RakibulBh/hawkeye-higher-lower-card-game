import { Card } from "@/types";
import React from "react";
import { Club, Diamond, Spade, Heart } from "lucide-react";

const CardComponent = ({ card }: { card: Card }) => {
  const suitToComponent: { [key: string]: React.FC } = {
    Spades: Spade,
    Clubs: Club,
    Hearts: Heart,
    Diamonds: Diamond,
  };

  const Component = suitToComponent[card.suit];

  return (
    <div className="absolute w-24 h-32 border-2 border-black bg-white top-20 rounded-xl flex flex-col pb-2">
      <div className="h-1/2 flex items-center justify-center text-3xl font-bold">
        {card.value}
      </div>
      <div className="h-1/2 flex items-end justify-center">
        <Component />
      </div>
    </div>
  );
};

export default CardComponent;
