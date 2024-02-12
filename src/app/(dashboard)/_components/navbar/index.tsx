import { UserButton } from "@clerk/nextjs";
import React from "react";

export default function Navbar(): JSX.Element {
  return (
    <nav className="flex w-full items-center px-4 py-2">
      {/* TODO: add search here */}
      <UserButton />
    </nav>
  );
}
