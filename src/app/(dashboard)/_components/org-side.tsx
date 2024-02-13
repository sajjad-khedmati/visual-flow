"use client";
import { Button } from "@/components/ui/button";
import Logo from "@/public/logo";
import { OrganizationSwitcher } from "@clerk/nextjs";
import { LayoutDashboard, Star } from "lucide-react";
import Link from "next/link";

import { useSearchParams } from "next/navigation";

export default function OrganizationsSide(): JSX.Element {
  const searchParams = useSearchParams();
  const favorites = searchParams.get("favorites");
  return (
    <section className="hidden w-[206px] flex-col gap-4 border-r px-2 py-4 lg:flex">
      <Logo full />

      <OrganizationSwitcher
        hidePersonal
        appearance={{
          elements: {
            rootBox: {
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
            },
            organizationSwitcherTrigger: {
              width: "100%",
              padding: "6px",
              borderRadius: "10px",
              border: "1px solid #E5E7EB",
              display: "flex",
              justifyContent: "space-between",
            },
          },
        }}
      />

      <div className="flex flex-col gap-2">
        <Button
          variant={favorites !== null ? "ghost" : "secondary"}
          size={"lg"}
          asChild
          className="justify-start p-[6px]"
        >
          <div className="flex items-center gap-4">
            <span className="flex size-8 items-center justify-center">
              <LayoutDashboard className="size-4" />
            </span>
            <Link href="/">Team Boards</Link>
          </div>
        </Button>

        <Button
          variant={favorites !== null ? "secondary" : "ghost"}
          size={"lg"}
          asChild
          className="justify-start p-[6px]"
        >
          <div className="flex items-center gap-4">
            <span className="flex size-8 items-center justify-center">
              <Star className="size-4" />
            </span>
            <Link
              href={{
                pathname: "/",
                query: {
                  favorites: true,
                },
              }}
            >
              Favorite Boards
            </Link>
          </div>
        </Button>
      </div>
    </section>
  );
}
