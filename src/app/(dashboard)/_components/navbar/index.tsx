import { UserButton } from "@clerk/nextjs";
import Logo from "@/public/logo";
export default function Navbar(): JSX.Element {
  return (
    <nav className="flex w-full items-center justify-between px-2 py-4">
      {/* TODO: add search here */}

      <Logo full />
      <UserButton />
    </nav>
  );
}
