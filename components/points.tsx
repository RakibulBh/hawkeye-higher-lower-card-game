import { Bitcoin } from "lucide-react";

const Points = ({ points }: { points: number }) => {
  return (
    <div className="rounded-xl flex gap-1 bg-white text-white text-opacity-35 bg-opacity-15 px-2 py-1">
      <Bitcoin />
      <p className="">{points}</p>
    </div>
  );
};

export default Points;
