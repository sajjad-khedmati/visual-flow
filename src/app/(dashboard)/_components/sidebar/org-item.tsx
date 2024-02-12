import Hint from "@/components/common/hint";
import Image from "next/image";

type OrganizationItemProps = {
  imageUrl: string;
  name: string;
};

export default function OrganizationItem({ imageUrl, name }: OrganizationItemProps): JSX.Element {
  return (
    <Hint label={name} align="center" side="right">
      <div
        className="relative my-2 aspect-square cursor-pointer overflow-hidden
    rounded-xl border border-violet-700"
      >
        <Image src={imageUrl} alt={name} fill />
      </div>
    </Hint>
  );
}
