function Navbar({ search, setSearch }) {
  return (
    <header className="relative z-50 px-4 pt-2 sm:px-6">
      <nav className="relative mx-auto flex max-w-[1800px] items-center justify-between rounded-[40px] border border-white/80 bg-white/90 gap-2 px-3 py-3 sm:gap-4 shadow-sm backdrop-blur-xl sm:px-10 sm:py-4">

        {/* LOGO */}
        <a
          href="/"
          className="shrink-0 text-2xl font-black tracking-tight sm:text-4xl"
        >
          <span className="text-pink-500">YZ</span>
          <span className="text-[#493545]">Project</span>
        </a>

        {/* MENU NAVIGASI */}
        <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-2 md:flex">

          <a
            href="/"
            className="flex items-center gap-2 rounded-full bg-pink-50 px-6 py-3 font-semibold text-[#493545] transition-all duration-300 hover:bg-pink-500 hover:text-white hover:shadow-lg hover:shadow-pink-200"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21"
              viewBox="0 0 24 24" fill="none" stroke="currentColor"
              strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="m3 10 9-7 9 7" />
              <path d="M5 9v12h14V9" />
              <path d="M9 21v-8h6v8" />
            </svg>
            Home
          </a>

          <a
            href="/#latest"
            className="flex items-center gap-2 rounded-full bg-pink-50 px-6 py-3 font-semibold text-[#493545] transition-all duration-300 hover:bg-pink-500 hover:text-white hover:shadow-lg hover:shadow-pink-200"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21"
              viewBox="0 0 24 24" fill="none" stroke="currentColor"
              strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22c4.5 0 8-3.5 8-8 0-3-2-5-4-7-1 3-3 4-3 4s-1-5-5-8c0 5-4 7-4 12 0 4 3.5 7 8 7Z" />
            </svg>
            Latest
          </a>

          <a
            href="/#popular"
            className="flex items-center gap-2 rounded-full bg-pink-50 px-6 py-3 font-semibold text-[#493545] transition-all duration-300 hover:bg-pink-500 hover:text-white hover:shadow-lg hover:shadow-pink-200"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21"
              viewBox="0 0 24 24" fill="none" stroke="currentColor"
              strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-3-5.6 3 1.1-6.2L3 9.6l6.2-.9L12 3Z" />
            </svg>
            Popular
          </a>
        </div>

        {/* SEARCH */}
       <div className="flex w-36.25 shrink-0 items-center gap-2 rounded-full border border-pink-100 bg-pink-100 px-3 py-3 text-pink-500 transition-all duration-300 focus-within:border-pink-400 focus-within:ring-2 focus-within:ring-pink-200 sm:w-40 sm:px-5 md:w-44">

  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="21"
    height="21"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="shrink-0"
  >
    <circle cx="11" cy="11" r="8" />
    <path d="m21 21-4.35-4.35" />
  </svg>

  <input
    type="search"
    placeholder="Search"
    value={search}
    onChange={(event) => setSearch(event.target.value)}
    className="w-full min-w-0 flex-1 bg-transparent text-sm font-semibold text-pink-600 outline-none placeholder:text-pink-500"
  />
</div>

      </nav>
    </header>
  );
}

export default Navbar;