import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { OrganizationProfile } from "@clerk/nextjs";
import { Plus } from "lucide-react";

export default function InviteMember(): JSX.Element {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={"outline"} className="text-xs">
          <Plus className="size-4 sm:mr-2" />
          <span className="hidden sm:block">Invite Member</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-max border-none bg-transparent p-0 lg:max-w-[880px]">
        <OrganizationProfile />
      </DialogContent>
    </Dialog>
  );
}
