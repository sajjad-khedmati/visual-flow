import EmptyFavorites from "./empty-favorites";

export default function Favorites(): JSX.Element {
  // TODO: Get favorite list
  const favorites = [];
  if (favorites.length === 0) return <EmptyFavorites />;
  return <div>Favorites</div>;
}
