import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";
import { Trophy, ArrowRight } from "lucide-react";
import { Dispatch, SetStateAction } from "react";

const LostGameDialog = ({
  guesses,
  onClick,
  open,
  setIsOpen,
}: {
  guesses: number;
  onClick: () => void;
  open: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <Dialog open={open} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader className="flex flex-col items-center space-y-6 pt-8">
          <div className="rounded-full bg-yellow-100 p-3">
            <Trophy className="h-8 w-8 text-yellow-600" />
          </div>

          <DialogTitle className="text-xl font-bold text-center">
            Game Over!
          </DialogTitle>

          <div className="text-center space-y-2">
            <p className="text-3xl font-bold text-yellow-600">{guesses}</p>
            <p className="text-gray-500">Correct Guesses</p>
          </div>

          <Button
            onClick={onClick}
            className="w-full mt-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-2 px-6 rounded-lg flex items-center justify-center gap-2 transition-all duration-300"
          >
            Play Again
            <ArrowRight className="h-4 w-4" />
          </Button>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default LostGameDialog;
