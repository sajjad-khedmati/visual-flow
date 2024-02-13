"use client";
import { OrganizationSwitcher, UserButton, useAuth, useOrganization } from "@clerk/nextjs";
import SearchBar from "./search-bar";
import InviteMember from "./invite-member";
import BoardMembers from "./board-members";

export default function Navbar(): JSX.Element {
  const { organization } = useOrganization();
  const auth = useAuth();

  return (
    <nav className="flex w-full items-center justify-between gap-4 px-2 py-4 sm:gap-6 md:gap-8 lg:px-6">
      <SearchBar />

      <div className="block flex-1 lg:hidden">
        <OrganizationSwitcher
          hidePersonal
          appearance={{
            elements: {
              rootBox: {
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
                maxWidth: "370px",
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
      </div>

      <div className="flex items-center gap-4">
        {organization !== null ? (
          auth.orgRole === "org:admin" ? (
            <InviteMember />
          ) : (
            <BoardMembers />
          )
        ) : null}

        <UserButton
          appearance={{
            elements: {
              avatarBox: {
                width: "37px",
                height: "37px",
              },
            },
          }}
        />
      </div>
    </nav>
  );
}
