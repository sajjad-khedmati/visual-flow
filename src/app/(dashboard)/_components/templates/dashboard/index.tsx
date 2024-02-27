import { useAuth, useOrganization } from "@clerk/nextjs";
import EmptyBoard from "./empty-board";
import EmptyOrganization from "./empty-organization";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import BoardCard from "@/app/(dashboard)/_components/board-card";

import { formatDistanceToNow } from "date-fns";
import CreateNewBoardCard from "./modules/create-new-board-card";

export default function Dashboard(): JSX.Element {
  const { organization } = useOrganization();
  const { userId } = useAuth();

  if (!organization) return <EmptyOrganization />;

  const data = useQuery(api.boards.getBoards, { orgId: organization.id });

  if (data === undefined) return <p>loading...</p>;

  if (data.length === 0) return <EmptyBoard />;

  return (
    <main className="page-container">
      <h1 className="text-2xl font-semibold">Team Boards</h1>
      <div className="mt-8 grid grid-cols-2 gap-4 pb-10 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
        <CreateNewBoardCard />
        {data?.map((board) => (
          <BoardCard
            key={board._id}
            title={board.title}
            authorName={userId === board.authorId ? "You" : board.authorId}
            id={board._id}
            createdAt={formatDistanceToNow(board._creationTime, {
              addSuffix: true,
            })}
            imageUrl={board.imageUrl}
            isFavorited={false}
          />
        ))}
      </div>
    </main>
  );
}
