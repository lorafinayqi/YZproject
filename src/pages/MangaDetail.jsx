import { Link, useParams } from "react-router-dom";
import { mangaList } from "../data/manga";
import AnimeTrailer from "../components/AnimeTrailer";

// Link Google Drive untuk setiap anime
const chapterData = {
  "Hitoribocchi no Isekai Kouryaku": [
    {
      id: 1,
      links: [
        { name: "Google Drive", url: "https://drive.google.com/drive/my-drive" },
        { name: "Uptobox", url: "https://uptobox.com/" },
      ],
    },
    {
      id: 2,
      links: [
        { name: "Google Drive", url: "https://drive.google.com/drive/my-drive" },
        { name: "Uptobox", url: "https://uptobox.com/" },
      ],
    },
  ],

  "Girl und Panzer Motto motto Love sakusen": [
    {
      id: 1,
      links: [
        { name: "Google Drive", url: "https://drive.google.com/drive/my-drive" },
        { name: "Uptobox", url: "https://uptobox.com/" },
      ],
    },
  ],

  "Otaku ni Yasashii Gal wa Inai": [
    {
      id: 1,
      links: [
        { name: "Google Drive", url: "https://drive.google.com/drive/my-drive" },
        { name: "Uptobox", url: "https://uptobox.com/" },
      ],
    },
  ],
};

function MangaDetail() {
  const { slug } = useParams();

  const manga = mangaList.find((item) => item.slug === slug);

  if (!manga) {
    return (
      <main className="min-h-screen bg-[#FFF7FB] p-10 text-center text-[#493545]">
        <h1 className="text-2xl font-bold">
          Anime tidak ditemukan
        </h1>

        <Link
          to="/"
          className="mt-4 inline-block font-semibold text-pink-500 hover:text-pink-700 hover:underline"
        >
          Kembali ke Home
        </Link>
      </main>
    );
  }

  // Mengambil daftar episode berdasarkan judul anime
  const chapters = chapterData[manga.title] || [];

  return (
    <main className="min-h-screen bg-[#FFF7FB] px-4 py-8 text-[#493545] sm:px-6 lg:px-8">

      {/* KEMBALI KE HOME */}
      <div className="mx-auto max-w-7xl">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-pink-500 transition hover:text-pink-700"
        >
          <span>←</span>
          Kembali ke Home
        </Link>

        {/* DETAIL ANIME */}
        <section className="mt-6 flex flex-col gap-6 rounded-3xl border border-pink-100 bg-white p-5 shadow-lg shadow-pink-100/60 sm:p-8 md:flex-row">

          {/* COVER */}
          <div className="shrink-0">
            <img
              src={manga.cover}
              alt={manga.title}
              className="mx-auto aspect-[3/4] w-48 rounded-2xl object-cover shadow-md shadow-pink-100 sm:w-56 md:mx-0"
            />
          </div>

          {/* INFORMASI ANIME */}
          <div className="min-w-0 flex-1">

            <p className="text-sm font-bold uppercase tracking-widest text-pink-500">
              Anime Detail
            </p>

            <h1 className="mt-2 text-2xl font-black text-[#493545] sm:text-3xl lg:text-4xl">
              {manga.title}
            </h1>

            <p className="mt-3 text-sm text-[#9B8292]">
              {manga.genre}
            </p>

            <div className="mt-6">
              <h2 className="font-bold text-[#493545]">
                Sinopsis
              </h2>

              <p className="mt-2 leading-7 text-[#765D6D]">
                {manga.synopsis || "Sinopsis belum tersedia."}
              </p>
            </div>
          </div>
        </section>

            {/* TRAILER ANIME */}
        <AnimeTrailer title={manga.title} />

        {/* DAFTAR VIDEO */}
        {/* DAFTAR VIDEO */}
<section id="chapters" className="mt-10 scroll-mt-6">

  <div className="mb-5 flex items-center justify-between gap-3">
    <h2 className="text-2xl font-black text-[#493545]">
      Daftar Video
    </h2>

    <span className="rounded-full bg-pink-100 px-4 py-2 text-sm font-semibold text-pink-600">
      {chapters.length} Episode
    </span>
  </div>

  {chapters.length > 0 ? (
    <div className="overflow-hidden rounded-2xl border border-pink-100 bg-white shadow-sm">

      {chapters.map((chapter) => (
        <div
          key={chapter.id}
          className="flex flex-col gap-4 border-b border-pink-100 px-4 py-4 last:border-b-0 hover:bg-pink-50 sm:flex-row sm:items-center sm:justify-between sm:px-6"
        >
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-pink-100 font-bold text-pink-500">
              {chapter.id}
            </div>

            <div>
              <h3 className="font-semibold text-[#493545]">
                Episode {chapter.id}
              </h3>

              <p className="mt-1 text-xs text-[#9B8292]">
                Pilih server untuk menonton
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {chapter.links.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-pink-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-pink-600"
              >
                {link.name} →
              </a>
            ))}
          </div>
        </div>
      ))}

    </div>
  ) : (
    <p className="rounded-2xl border border-pink-100 bg-white p-5 text-[#9B8292]">
      Link video belum ditambahkan.
    </p>
  )}

</section>
      </div>
    </main>
  );
}

export default MangaDetail;