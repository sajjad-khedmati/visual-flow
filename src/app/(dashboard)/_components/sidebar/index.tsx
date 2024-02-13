"use client";
import Logo from "@/public/logo";
import AddNewOrganization from "./add-new-org";
import OrganizationsList from "./org-list";

export default function Sidebar(): JSX.Element {
  return (
    <aside className="flex h-full w-[60px] flex-col gap-2 bg-violet-950 px-2 py-4">
      <div className="lg:hidden">
        <Logo />
        <hr className="mb-1 mt-4 border-[0.5px] border-violet-700" />
      </div>
      <AddNewOrganization />
      <OrganizationsList />
    </aside>
  );
}
