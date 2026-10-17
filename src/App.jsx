import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Navbar from "./components/Navbar";
import MangaCard from "./components/MangaCard";
import { mangaList } from "./data/manga";

import MangaDetail from "./pages/MangaDetail";
import Reader from "./pages/Reader";

function Home() {
const [search, setSearch] = useState("");

const filteredManga = mangaList.filter((manga) =>
manga.title.toLowerCase().includes(search.toLowerCase())
);

return (
<>
<Navbar />

  <main className="mx-auto max-w-7xl px-4 py-8">
    <section className="mb-10 rounded-2xl bg-gradient-to-r from-orange-950 to-gray-900 p-6 sm:p-10">
      <p className="mb-3 text-sm font-bold uppercase tracking-widest text-orange-400">
        Your Anime destination
      </p>

      <h1 className="text-3xl font-black sm:text-5xl">
        Temukan Anime Favoritmu
      </h1>

      <p className="mt-4 text-gray-300">
        Jelajahi berbagai judul Anime.
      </p>
    </section>

    <section id="latest">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <h2 className="text-2xl font-bold">
          Anime Terbaru
        </h2>

        <input
          type="search"
          placeholder="Cari manga..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          className="w-full rounded-lg border border-gray-700 bg-gray-900 px-4 py-2 outline-none focus:border-orange-400 sm:w-64"
        />
      </div>

      {filteredManga.length > 0 ? (
        <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {filteredManga.map((manga) => (
            <MangaCard key={manga.id} manga={manga} />
          ))}
        </div>
      ) : (
        <p className="text-gray-400">
          Anime tidak ditemukan.
        </p>
      )}
    </section>
  </main>
</>

);
}

function App() {
return (
<BrowserRouter>
<div className="min-h-screen bg-gray-950 text-white">
<Routes>
<Route path="/" element={<Home />} />

      <Route
        path="/manga/:slug"
        element={<MangaDetail />}
      />

      <Route
        path="/manga/:slug/:chapter"
        element={<Reader />}
      />

      <Route
        path="*"
        element={
          <main className="p-10 text-center text-white">
            <h1 className="text-2xl font-bold">
              Halaman tidak ditemukan
            </h1>

            <a
              href="/"
              className="mt-4 inline-block text-orange-400 hover:underline"
            >
              Kembali ke Home
            </a>
          </main>
        }
      />
    </Routes>

    <footer className="border-t border-gray-800 px-4 py-8 text-center text-sm text-gray-500">
      YZProject 
    </footer>
  </div>
</BrowserRouter>

);
}

export default App;