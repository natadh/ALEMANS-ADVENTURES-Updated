import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-[#1A0A0B] text-[#F5D547] border-b border-[#F5D547]/20 fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo + Brand */}
          <div className="shrink-0 flex items-center space-x-4 group">
            <img
              className="h-10 w-10 object-cover border border-[#F5D547] group-hover:border-white transition-colors duration-300"
              src="/logo.jpeg"
              alt="Alemans Adventures Logo"
            />
            <span className="uppercase text-base sm:text-lg tracking-[0.2em] font-light">
              <span className="text-white group-hover:text-[#F5D547] transition-colors duration-300">
                ALEMANS
              </span>
              <span className="text-[#F5D547]/60 ml-2 text-sm tracking-[0.15em]">
                ADVENTURES
              </span>
            </span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8 font-light">
            {[
              { name: "Home", path: "/" },
              { name: "About", path: "/about" },
              { name: "Destinations", path: "/destinations" },
              { name: "Safaris", path: "/safaris" },
              { name: "Contact", path: "/contact" },
            ].map((link) => (
              <a
                key={link.path}
                href={link.path}
                className="relative text-[#F5D547]/80 hover:text-white transition-colors duration-300 uppercase text-xs tracking-[0.15em] py-2 group/link"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-px bg-[#F5D547] group-hover/link:w-full transition-all duration-300"></span>
              </a>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-[#F5D547] focus:outline-none hover:text-white transition-colors duration-300 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <div className="relative w-6 h-6">
              <span
                className={`absolute top-1/2 left-0 w-full h-px bg-current transform transition-all duration-300 ${
                  menuOpen ? "rotate-45 translate-y-0" : "-translate-y-2"
                }`}
              ></span>
              <span
                className={`absolute top-1/2 left-0 w-full h-px bg-current transition-all duration-300 ${
                  menuOpen ? "opacity-0" : "opacity-100"
                }`}
              ></span>
              <span
                className={`absolute top-1/2 left-0 w-full h-px bg-current transform transition-all duration-300 ${
                  menuOpen ? "-rotate-45 translate-y-0" : "translate-y-2"
                }`}
              ></span>
            </div>
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="py-4 space-y-px border-t border-[#F5D547]/20">
            {[
              { name: "Home", path: "/" },
              { name: "About", path: "/about" },
              { name: "Destinations", path: "/destinations" },
              { name: "Safaris", path: "/safaris" },
              { name: "Contact", path: "/contact" },
            ].map((link) => (
              <a
                key={link.path}
                href={link.path}
                className="block py-4 px-4 text-[#F5D547]/80 hover:text-white hover:bg-[#F5D547]/5 transition-all duration-200 uppercase text-xs tracking-[0.15em] border-l-2 border-transparent hover:border-[#F5D547]"
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}