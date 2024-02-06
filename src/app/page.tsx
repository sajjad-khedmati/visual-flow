import { UserButton } from "@clerk/nextjs";

export default function HomePage(): JSX.Element {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <UserButton />
      NEXT.JS with T3
    </main>
  );
}
