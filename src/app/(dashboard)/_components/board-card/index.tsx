import Link from "next/link";
import Image from "next/image";
import Footer from "./footer";
import Overlay from "./overlay";
import Action from "./action";

type BoardProps = {
  title: string;
  id: string;
  imageUrl: string;
  isFavorited: boolean;
  authorName: string;
  createdAt: string;
};
export default function BoardCard({
  title,
  id,
  imageUrl,
  isFavorited,
  authorName,
  createdAt,
}: BoardProps): JSX.Element {
  return (
    <Link href={`/boards/${id}`}>
      <div className="group flex aspect-[100/127] flex-col justify-between overflow-hidden rounded-xl border">
        <div className="relative flex-1 bg-amber-50">
          <Image src={imageUrl} alt={title} fill className="object-fill" />
          <Overlay />
          <Action />
        </div>

        <Footer
          title={title}
          isFavorited={isFavorited}
          authorName={authorName}
          createdAt={createdAt}
        />
      </div>
    </Link>
  );
}
