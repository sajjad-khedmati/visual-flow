import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import CreateNewBoard from "./modules/create-new-board";

export default function EmptyBoard(): JSX.Element {
  return (
    <main className="page-container flex h-full flex-col items-center justify-center gap-6 ">
      <Image src={"/elements.svg"} width={200} height={150} alt="no any boards found!" />
      <div className="text-center">
        <h1 className="text-2xl font-semibold">Create Your First Board!</h1>
        <p className="text-sm text-gray-700">Start by creating a board for your organization</p>
      </div>

      <Dialog>
        <DialogTrigger asChild>
          <Button size={"lg"}>Create New Board</Button>
        </DialogTrigger>
        <DialogContent className="max-w-[550px]">
          <DialogHeader>
            <DialogTitle>Create New Board</DialogTitle>
          </DialogHeader>

          <CreateNewBoard />
        </DialogContent>
      </Dialog>
    </main>
  );
}
