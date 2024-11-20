import React from "react";
import Points from "./points";

const User = ({ score }: { score: number }) => {
  return (
    <div className="flex flex-col items-center gap-4">
      <p className="py-2 bg-gray-200 bg-opacity-10 rounded-xl px-4 text-white text-opacity-20 text-xs">
        Player 1
      </p>
      <div className="w-32 h-32 rounded-full bg-orange-300"></div>
      <Points points={score} />
    </div>
  );
};

export default User;
