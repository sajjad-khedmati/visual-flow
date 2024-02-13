import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useEffect, useState } from "react";

import { useDebounceCallback } from "usehooks-ts";
import qs from "query-string";
import { useRouter } from "next/navigation";

export default function SearchBar(): JSX.Element {
  const [value, setValue] = useState("");
  const debounced = useDebounceCallback(setValue, 500);

  const router = useRouter();

  useEffect(() => {
    const url = qs.stringifyUrl(
      {
        url: "/",
        query: {
          search: value,
        },
      },
      {
        skipEmptyString: true,
        skipNull: true,
      }
    );

    router.push(url);
  }, [value, router]);

  return (
    <div className="relative max-w-[560px] flex-1">
      <Search className="absolute inset-y-1/2 left-2 size-4 -translate-y-1/2" />
      <Input
        className="pl-9 outline-none focus:ring-0"
        defaultValue={value}
        onChange={(event) => debounced(event.target.value)}
        placeholder="Search Boards"
      />
    </div>
  );
}
