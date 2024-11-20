import Button from "@/components/button";
import CardPlaceholder from "@/components/card-placeholder";
import User from "@/components/user";
import { ArrowBigDownDash, ArrowBigUpDash, Minus } from "lucide-react";

export default function MainContent() {
  return (
    <main className="h-full flex flex-col items-center justify-between">
      <div className="w-full">
        <p className="text-[4rem] font-bold text-center text-white">50</p>
        <div className="w-full flex justify-between items-center">
          <User />
          <div className="w-24 h-32 relative">
            <CardPlaceholder />
          </div>
          <User />
        </div>
      </div>
      <div className="flex gap-4">
        <Button color="green" Icon={ArrowBigUpDash}>
          Higher
        </Button>
        <Button color="gray" Icon={Minus}>
          Same
        </Button>
        <Button color="red" Icon={ArrowBigDownDash}>
          Lower
        </Button>
      </div>
      <div className="absolute bg-gradient-to-b from-[#272537] to-black bg-red-200 -z-20 w-[100rem] h-[100rem] rounded-full top-56 border-[1rem] border-black" />
      <div className="bg-[#5B3BAC] w-[70rem] h-[70rem] rounded-full -z-30 absolute blur-3xl top-48" />
    </main>
  );
}
