"use client";
import Hint from "@/components/common/hint";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { CreateOrganization } from "@clerk/nextjs";
import { Plus } from "lucide-react";
import React from "react";

export default function AddNewOrganization(): React.ReactNode {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="">
          <Hint side="right" align="center" label="create new organization">
            <Button
              size={"icon"}
              className="
      flex 
      aspect-square 
      cursor-pointer 
      items-center 
      justify-center
      rounded-xl 
      border-2
      border-violet-700
    bg-violet-800
      transition
    hover:bg-violet-800/60 
      hover:ring-violet-800
      active:scale-95"
            >
              <Plus className="size-6 text-violet-300" />
            </Button>
          </Hint>
        </div>
      </DialogTrigger>
      <DialogContent className="max-w-[480px] border-none bg-transparent p-0">
        <CreateOrganization />
      </DialogContent>
    </Dialog>
  );
}
