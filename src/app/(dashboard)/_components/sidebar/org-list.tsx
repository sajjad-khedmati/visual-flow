import { useOrganizationList } from "@clerk/nextjs";
import OrganizationItem from "./org-item";
export default function OrganizationsList(): JSX.Element | null {
  const { userMemberships } = useOrganizationList({
    userMemberships: {
      infinite: true,
    },
  });

  if (userMemberships.data?.length === undefined) return null;

  return (
    <div>
      {userMemberships?.data.map((memberShip) => (
        <OrganizationItem
          key={memberShip.id}
          id={memberShip.organization.id}
          imageUrl={memberShip.organization.imageUrl}
          name={memberShip.organization.name}
        />
      ))}
    </div>
  );
}
