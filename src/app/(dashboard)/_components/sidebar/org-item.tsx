import Image from "next/image";
import { useOrganization, useOrganizationList } from "@clerk/nextjs";
import { cn } from "@/lib/utils";
import Hint from "@/components/common/hint";

type OrganizationItemProps = {
  id: string;
  imageUrl: string;
  name: string;
};

export default function OrganizationItem({
  id,
  imageUrl,
  name,
}: OrganizationItemProps): JSX.Element {
  const { organization } = useOrganization();
  const { setActive } = useOrganizationList();

  const isActive = id === organization?.id;

  const setActiveOrg = async (): Promise<void> => {
    if (setActive === undefined) return;

    await setActive({ organization: id });
  };
  return (
    <Hint label={name} align="center" side="right">
      <div
        onClick={setActiveOrg}
        className={cn(
          "relative my-2 aspect-square cursor-pointer overflow-hidden rounded-xl border border-violet-700 opacity-60",
          isActive && "opacity-100"
        )}
      >
        <Image src={imageUrl} alt={name} fill />
      </div>
    </Hint>
  );
}
