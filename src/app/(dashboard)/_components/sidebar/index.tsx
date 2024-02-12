"use client";
import AddNewOrganization from "./add-new-org";
import OrganizationsList from "./org-list";

export default function Sidebar(): JSX.Element {
  return (
    <aside className="flex h-full w-[60px] flex-col gap-2 bg-violet-950 px-2 py-4">
      <AddNewOrganization />
      <OrganizationsList />
    </aside>
  );
}
