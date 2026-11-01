import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { mangaList } from "../data/manga";
import AnimeTrailer from "../components/AnimeTrailer";
import AnimeCharacters from "../components/AnimeCharacters";

const API = "https://api.tenrai.org/v1";

// Link video untuk setiap anime
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

  "Girls & Panzer: Motto Love Love Sakusen desu!": [
    {
      id: 1,
      links: [
        { name: "Link Bluraynime", url: "https://bluraynime.my.id/?search=%5BBluraynime%5D+Silent+Witch+%3A+Chinmoku+no+Majo+no+Kakushigoto+%28BD+1080p%29" },
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

function normalizeTitle(value = "") {
  return value.toLowerCase().replace(/[^a-z0-9]/g, "");
}

function MangaDetail() {
  const { slug } = useParams();

  const selectedManga = mangaList.find(
    (item) => item.slug === slug
  );

  const [manga, setManga] = useState(selectedManga || null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!selectedManga) {
      setLoading(false);
      return;
    }

    const controller = new AbortController();

    async function fetchDetail() {
      setLoading(true);

      try {
        const response = await fetch(
          `${API}/anime?q=${encodeURIComponent(selectedManga.title)}`,
          { signal: controller.signal }
        );

        if (!response.ok) {
          throw new Error("Gagal mengambil data anime");
        }

        const result = await response.json();
        const results = result.data || [];

        const anime =
          results.find((item) =>
            [
              item.title,
              item.title_english,
              item.title_japanese,
            ].some(
              (name) =>
                name &&
                normalizeTitle(name) === normalizeTitle(selectedManga.title)
            )
          ) || results[0];

        if (anime) {
          setManga({
            ...selectedManga,
            mal_id: anime.mal_id,
            title: anime.title || selectedManga.title,
            cover:
              anime.images?.jpg?.large_image_url ||
              anime.images?.jpg?.image_url ||
              selectedManga.cover,
            genre: (anime.genres || [])
              .map((genre) => genre.name)
              .join(", "),
            synopsis: anime.synopsis || "Sinopsis belum tersedia.",
          });
        }
      } catch (error) {
        if (error.name !== "AbortError") {
          console.error("Gagal mengambil detail anime:", error);
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    }

    fetchDetail();

    return () => controller.abort();
  }, [slug]);

  if (loading) {
    return (
      <main className="min-h-screen bg-[#FFF7FB] p-10 text-center text-pink-500">
        Memuat detail anime...
      </main>
    );
  }

  if (!manga) {
    return (
      <main className="min-h-screen bg-[#FFF7FB] p-10 text-center text-[#493545]">
        <h1 className="text-2xl font-bold">Anime tidak ditemukan</h1>
        <Link
          to="/"
          className="mt-4 inline-block font-semibold text-pink-500 hover:text-pink-700 hover:underline"
        >
          Kembali ke Home
        </Link>
      </main>
    );
  }

  const chapters = chapterData[selectedManga.title] || [];

  return (
    <main className="min-h-screen bg-[#FFF7FB] px-4 py-8 text-[#493545] sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-pink-500 transition hover:text-pink-700"
        >
          ← Kembali ke Home
        </Link>

        <section className="mt-6 flex flex-col gap-6 rounded-3xl border border-pink-100 bg-white p-5 shadow-lg shadow-pink-100/60 sm:p-8 md:flex-row">
          <div className="shrink-0">
            {manga.cover ? (
              <img
                src={manga.cover}
                alt={manga.title}
                className="mx-auto aspect-3/4 w-48 rounded-2xl object-cover shadow-md shadow-pink-100 sm:w-56 md:mx-0"
              />
            ) : (
              <div className="flex aspect-3/4 w-48 items-center justify-center rounded-2xl bg-pink-50 text-sm text-pink-400">
                Cover belum tersedia
              </div>
            )}
          </div>

          <div className="min-w-0 flex-1">
            <p className="text-sm font-bold uppercase tracking-widest text-pink-500">
              Anime Detail
            </p>

            <h1 className="mt-2 text-2xl font-black text-[#493545] sm:text-3xl lg:text-4xl">
              {manga.title}
            </h1>

            <p className="mt-3 text-sm text-[#9B8292]">
              {manga.genre || "Genre belum tersedia"}
            </p>

            <div className="mt-6">
              <h2 className="font-bold text-[#493545]">Sinopsis</h2>
              <p className="mt-2 leading-7 text-[#765D6D]">
                {manga.synopsis || "Sinopsis belum tersedia."}
              </p>
            </div>
          </div>
        </section>

        <AnimeCharacters animeId={manga.mal_id} />
        <AnimeTrailer title={selectedManga.title} />

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
                        Link {chapter.id}
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