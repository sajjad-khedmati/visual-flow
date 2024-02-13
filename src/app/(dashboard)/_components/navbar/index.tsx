"use client";
import { UserButton } from "@clerk/nextjs";
import SearchBar from "./search-bar";
export default function Navbar(): JSX.Element {
  return (
    <nav className="flex w-full items-center justify-between gap-8 px-2 py-4 lg:px-6">
      <SearchBar />
      <UserButton />
    </nav>
  );
}
