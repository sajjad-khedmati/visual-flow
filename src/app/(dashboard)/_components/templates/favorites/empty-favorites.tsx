import Image from "next/image";

export default function EmptyFavorites(): JSX.Element {
  return (
    <main className="page-container flex h-full flex-col items-center justify-center gap-6 ">
      <Image src={"/empty-favorites.svg"} width={120} height={120} alt="no any boards found!" />
      <div className="text-center">
        <h1 className="text-2xl font-semibold">You have not Favorite Board!</h1>
        <p className="text-sm text-gray-700">
          You can put any board you want in this category for easier access
        </p>
      </div>
    </main>
  );
}
