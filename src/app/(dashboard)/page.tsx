"use client";
import Dashboard from "./_components/templates/dashboard";
import { useSearchParams } from "next/navigation";
import Favorites from "./_components/templates/favorites";

export default function HomePage(): JSX.Element {
  const searchParams = useSearchParams();
  const favorites: string | null = searchParams.get("favorites");

  return favorites === "true" ? <Favorites /> : <Dashboard />;
}
