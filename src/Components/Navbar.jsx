
import { useState } from "react";

const navLinks = [
  { name: "Accueil", href: "/", active: true },
  { name: "À propos", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Réalisations", href: "/realisations" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 lg:px-8">

        {/* LOGO */}
        <a href="/" className="flex items-center gap-3">
          <img
            src="/logo.jpeg"
            alt="3S COM & SERVICES"
            className="h-14 w-14 object-contain"
          />
          <div>
            <h1 className="text-lg font-extrabold tracking-tight text-[#243C91]">
              3S COM & SERVICES
            </h1>
            <p className="text-[10px] font-medium tracking-wider text-gray-500">
              PRINTING & DELIVERY AGENCY
            </p>
          </div>
        </a>

        {/* DESKTOP MENU */}
        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`relative py-2 text-sm font-semibold transition-colors
                ${
                  link.active
                    ? "text-[#243C91] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-[#243C91]"
                    : "text-gray-600 hover:text-[#243C91]"
                }`}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* CTA DESKTOP */}
        <a
          href="/contact"
          className="hidden rounded-lg bg-[#243C91] px-5 py-3 text-sm font-semibold text-white transition-all hover:bg-[#1B2D70] hover:shadow-lg lg:inline-flex"
        >
          Demander un devis
          <span className="ml-2">→</span>
        </a>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={menuOpen}
          className="rounded-lg p-2 text-[#243C91] hover:bg-gray-100 lg:hidden"
        >
          {menuOpen ? (
            <svg
              className="h-7 w-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="h-7 w-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </nav>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="border-t border-gray-100 bg-white px-5 py-5 shadow-lg lg:hidden">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`rounded-lg px-4 py-3 text-sm font-semibold transition-colors
                  ${
                    link.active
                      ? "bg-blue-50 text-[#243C91]"
                      : "text-gray-600 hover:bg-gray-50 hover:text-[#243C91]"
                  }`}
              >
                {link.name}
              </a>
            ))}

            <a
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="mt-3 rounded-lg bg-[#243C91] px-5 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-[#1B2D70]"
            >
              Demander un devis →
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
