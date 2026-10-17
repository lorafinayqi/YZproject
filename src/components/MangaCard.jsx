import { Link } from "react-router-dom";

function MangaCard({ manga }) {
  return (
    <Link
      to={`/manga/${manga.slug}`}
      className="group block min-w-0"
    >
      <div className="overflow-hidden rounded-lg bg-gray-900">
        <img
          src={manga.cover}
          alt={manga.title}
          loading="lazy"
          className="aspect-[3/4] w-full object-cover transition duration-300 group-hover:scale-105"
        />
      </div>

      <h3 className="mt-3 truncate font-semibold text-white group-hover:text-orange-400">
        {manga.title}
      </h3>

      <p className="mt-1 text-sm text-orange-400">
        {manga.chapter}
      </p>

      <p className="mt-1 truncate text-xs text-gray-500">
        {manga.genre}
      </p>
    </Link>
  );
}

export default MangaCard;