import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Plus } from "lucide-react";
import CreateNewBoard from "./create-new-board";

export default function CreateNewBoardCard(): JSX.Element {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          type="button"
          className="group flex aspect-[100/127] flex-col items-center justify-center overflow-hidden rounded-xl
          bg-blue-600/80 text-white transition-colors duration-300 hover:bg-blue-600"
        >
          <Plus />
          <p className="mt-2 text-xs">Create New Board</p>
        </button>
      </DialogTrigger>
      <DialogContent>
        <CreateNewBoard />
      </DialogContent>
    </Dialog>
  );
}
