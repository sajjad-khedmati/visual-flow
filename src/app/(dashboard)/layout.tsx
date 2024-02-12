import React from "react";
import Sidebar from "./_components/sidebar";
import OrganizationsSide from "./_components/org-side";
import Navbar from "./_components/navbar";

type DashboardLayoutProps = {
  children: React.ReactNode;
};
export default function DashboardLayout({ children }: DashboardLayoutProps): JSX.Element {
  return (
    <main className="flex size-full">
      <Sidebar />
      <section className="flex w-full">
        <OrganizationsSide />
        <section className="flex flex-1 flex-col">
          <Navbar />
          {children}
        </section>
      </section>
    </main>
  );
}
