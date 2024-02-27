import { cn } from "@/lib/utils";
import { Star } from "lucide-react";

type FooterProps = {
  title: string;
  isFavorited: boolean;
  authorName: string;
  createdAt: string;
};

export default function Footer({
  title,
  isFavorited,
  authorName,
  createdAt,
}: FooterProps): JSX.Element {
  return (
    <div className="z-50 flex flex-col p-2">
      <div className="flex items-center justify-between">
        <p className="max-w-[calc(100% - 20px)] truncate text-sm">{title}</p>
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <Star
            className={cn(
              "size-4 text-gray-600 opacity-0 transition-all duration-300 hover:text-blue-600 group-hover:opacity-100",
              isFavorited && "fill-blue-600 text-blue-600"
            )}
          />
        </button>
      </div>

      <p className="text-[10px] text-gray-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        {authorName} at {createdAt}
      </p>
    </div>
  );
}
