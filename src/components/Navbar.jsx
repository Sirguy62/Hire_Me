export default function Navbar({ activePage, setActivePage }) {
  const tabs = ["About", "Resume", "Portfolio", "Contact"];

  return (
    <nav className="flex gap-6 bg-gray-300/40 px-6 py-4 rounded-tr-xl rounded-bl-xl overflow-x-auto">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActivePage(tab)}
          className={`text-sm whitespace-nowrap ${
            activePage === tab
              ? "text-orange-400"
              : "text-gray-400 hover:text-white"
          }`}
        >
          {tab}
        </button>
      ))}
    </nav>
  );
}
