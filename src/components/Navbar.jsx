function Navbar() {
return (
<header className="sticky top-0 z-50 border-b border-gray-800 bg-gray-950/95 backdrop-blur">
<nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4">
<a href="/" className="shrink-0 text-2xl font-black text-orange-400">
YZ<span className="text-white">Project</span>
</a>

    <div className="hidden gap-6 text-sm text-gray-300 md:flex">
      <a href="/" className="hover:text-orange-400">Home</a>
      <a href="#latest" className="hover:text-orange-400">Latest</a>
      <a href="#popular" className="hover:text-orange-400">Popular</a>
    </div>

    <button
      aria-label="Search manga"
      className="rounded-lg bg-gray-800 px-4 py-2 text-sm hover:bg-gray-700"
    >
      <span className="hidden sm:inline">Search</span>
    </button>
  </nav>
</header>

)
}

export default Navbar