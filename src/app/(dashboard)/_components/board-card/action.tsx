import { MoreHorizontal } from "lucide-react";

export default function Action(): JSX.Element {
  return (
    <div className="absolute right-1 top-1 z-50">
      <button
        type="button"
        className="px-2 py-1 text-gray-200 opacity-0 hover:text-gray-50 group-hover:opacity-100"
      >
        <MoreHorizontal className="size-6" />
      </button>
    </div>
  );
}
