export default function Home() {
  return (
    <main className="bg-white min-h-screen">
      {/* Navbar */}
      <header className="flex items-center justify-between px-8 py-4 shadow-md bg-white">
        <div className="text-2xl font-bold text-blue-700">✈️ SKYSHARE</div>
        <nav className="space-x-6 text-sm text-blue-700 font-medium">
          <a href="#">Home</a>
          <a href="#">My Bookings</a>
          <a href="#">Available Flights</a>
          <a href="#">Contacts</a>
        </nav>
        <div className="text-blue-700 text-xl">👤</div>
      </header>

      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center text-white py-24 px-8"
        style={{ backgroundImage: "url('/background.jpg')" }}
      >
        <div className="max-w-4xl">
          <h1 className="text-5xl font-bold mb-4">Fly the World</h1>
          <p className="text-xl font-light">As you've never done before!</p>
        </div>

        {/* Card images */}
        <div className="absolute right-8 bottom-[-4rem] space-x-4 flex">
          <div className="w-48 h-32 bg-blue-300 rounded-xl p-2 shadow-lg text-white">
            <p className="font-semibold text-sm">➕ Nusa Penida</p>
            <p className="text-xs">Bali Island</p>
          </div>
          <div className="w-48 h-32 bg-blue-500 rounded-xl p-2 shadow-lg text-white">
            <p className="font-semibold text-sm">➕ Nusa Penida</p>
            <p className="text-xs">Bali Island</p>
          </div>
        </div>
      </section>

      {/* Search Bar */}
      <section className="mt-20 mx-auto max-w-5xl bg-white shadow-lg rounded-xl px-8 py-6 flex flex-wrap items-center gap-4 justify-between">
        <div className="flex flex-col">
          <label className="text-xs text-gray-500 mb-1">Departure</label>
          <span className="font-medium">INDONESIA</span>
        </div>
        <div className="text-2xl">🔁</div>
        <div className="flex flex-col">
          <label className="text-xs text-gray-500 mb-1">Destination</label>
          <span className="font-medium">LONDON</span>
        </div>
        <div className="flex flex-col">
          <label className="text-xs text-gray-500 mb-1">Leaving on</label>
          <span className="font-medium">Fri, 15 March</span>
        </div>
        <div className="flex flex-col">
          <label className="text-xs text-gray-500 mb-1">Returning on</label>
          <span className="font-medium">Mon, 18 March</span>
        </div>
        <div className="flex flex-col">
          <label className="text-xs text-gray-500 mb-1">Passengers</label>
          <span className="font-medium">1 Adult</span>
        </div>
        <button className="bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700">
          🔍
        </button>
      </section>
    </main>
  );
}
