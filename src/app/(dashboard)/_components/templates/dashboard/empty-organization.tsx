import Image from "next/image";
import { CreateOrganization } from "@clerk/nextjs";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export default function EmptyOrganization(): JSX.Element {
  return (
    <main className="page-container flex h-full flex-col items-center justify-center gap-6 ">
      <Image src={"/note.svg"} alt="you have not in an organizations" width={120} height={120} />

      <div className="text-center">
        <h1 className="text-2xl font-semibold">Create an Organization</h1>
        <p className="text-sm text-gray-700">
          You can try to create your own organizations or requeste to join an valid organization
        </p>
      </div>

      <Dialog>
        <DialogTrigger asChild>
          <Button size={"lg"}>Create Organization</Button>
        </DialogTrigger>

        <DialogContent className="max-w-[480px] border-none bg-transparent p-0">
          <CreateOrganization />
        </DialogContent>
      </Dialog>
    </main>
  );
}
