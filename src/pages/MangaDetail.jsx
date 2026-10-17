import { Link, useParams } from "react-router-dom";
import { mangaList } from "../data/manga";

// Masukkan link Google Drive untuk setiap chapter di sini.
const chapterData = {
  "Hitoribocchi no Isekai Kouryaku": [
    {
      id: 1,
      driveUrl: "https://drive.google.com/drive/my-drive",
    },
        {
      id: 2,
      driveUrl: "https://drive.google.com/drive/my-drive",
    },
  ],
  "Girl und Panzer Motto motto Love sakusen": [
    {
      id: 1,
      driveUrl: "https://drive.google.com/drive/my-drive",
    },
  ],
    "Otaku ni Yasashii Gal wa Inai": [
    {
      id: 1,
      driveUrl: "https://drive.google.com/drive/my-drive",
    },
  ]
};

function MangaDetail() {
  const { slug } = useParams();

  const manga = mangaList.find((item) => item.slug === slug);

  if (!manga) {
    return (
      <main className="min-h-screen bg-gray-950 p-10 text-center text-white">
        <h1 className="text-2xl font-bold">
          Manga tidak ditemukan
        </h1>

        <Link
          to="/"
          className="mt-4 inline-block text-orange-400 hover:underline"
        >
          Kembali ke Home
        </Link>
      </main>
    );
  }

  // Gunakan chapter yang sudah memiliki link Drive.
  const chapters = chapterData[slug] || [];

  return (
    <main className="mx-auto max-w-7xl px-4 py-8 text-white">
      <Link
        to="/"
        className="text-sm text-orange-400 hover:underline"
      >
        ← Kembali ke Home
      </Link>

      <section className="mt-6 flex flex-col gap-6 rounded-xl border border-gray-800 bg-gray-900 p-5 sm:flex-row sm:p-8">
        <img
          src={manga.cover}
          alt={manga.title}
          className="mx-auto aspect-[3/4] w-48 rounded-lg object-cover sm:mx-0 sm:w-56"
        />

        <div className="flex-1">
          <p className="text-sm font-semibold uppercase tracking-wider text-orange-400">
            Anime Detail
          </p>

          <h1 className="mt-2 text-3xl font-black sm:text-4xl">
            {manga.title}
          </h1>

          <p className="mt-3 text-gray-400">
            {manga.genre}
          </p>

          <h2 className="mt-6 font-bold">Sinopsis</h2>

         <p className="mt-2 leading-7 text-gray-300">
  {manga.synopsis || "Sinopsis belum tersedia."}
</p>

          <a
            href="#chapters"
            className="mt-6 inline-block rounded-lg bg-orange-500 px-5 py-3 font-semibold hover:bg-orange-600"
          >
            Lihat Video
          </a>
        </div>
      </section>

      <section id="chapters" className="mt-10">
        <h2 className="mb-5 text-2xl font-bold">
          Daftar Video
        </h2>

        {chapters.length > 0 ? (
          <div className="overflow-hidden rounded-xl border border-gray-800">
            {chapters.map((chapter) => (
              <div
                key={chapter.id}
                className="flex items-center justify-between gap-3 border-b border-gray-800 bg-gray-900 px-4 py-4 last:border-b-0 hover:bg-gray-800"
              >
                <div>
                  <h3 className="font-medium">
                    Video {chapter.id}
                  </h3>

                  <p className="mt-1 text-xs text-gray-500">
                    Link Google Drive
                  </p>
                </div>

                <a
                  href={chapter.driveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 rounded-lg bg-orange-500 px-3 py-2 text-sm font-semibold hover:bg-orange-600"
                >
                  Baca →
                </a>
              </div>
            ))}
          </div>
        ) : (
          <p className="rounded-xl border border-gray-800 bg-gray-900 p-5 text-gray-400">
            Link chapter belum ditambahkan.
          </p>
        )}
      </section>
    </main>
  );
}

export default MangaDetail;