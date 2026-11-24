import { useState } from "react";
import { Link } from "react-router";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-orange-100/60 bg-[#fffef8]">

      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-12">

        {/* Logo */}
        <Link
          to="/"
          onClick={closeMenu}
          className="text-3xl font-bold tracking-tight text-[#e8a477]"
        >
         <img src="/assets/Logo.png" alt="Epixelab logo" /> 
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-9 text-sm font-medium text-[#172c5c] md:flex">

          <Link to="/" className="transition hover:text-[#ed7058]">
            Home
          </Link>

          <Link to="/about" className="transition hover:text-[#ed7058]">
            About Us
          </Link>

          <Link to="/our-apps" className="transition hover:text-[#ed7058]">
            Our App
          </Link>

          <Link to="/contact" className="transition hover:text-[#ed7058]">
            Contacts
          </Link>

        </div>

        {/* Desktop Login and Signup */}
        <div className="hidden items-center gap-6 md:flex">

          <Link
            to="/login"
            className="text-sm font-medium text-[#172c5c] transition hover:text-orange-500"
          >
            Log in
          </Link>

          <Link
            to="/signup"
            className="rounded-lg bg-[#ed7058] px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#df5945]"
          >
            Sign up
          </Link>

        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-orange-200 text-2xl text-[#172c5c] md:hidden"
        >
          {menuOpen ? "×" : "☰"}
        </button>

      </nav>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="border-t border-orange-100 bg-[#fffef8] px-6 py-5 shadow-lg md:hidden">

          <div className="flex flex-col gap-5 text-sm font-medium text-[#172c5c]">

            <Link to="/" onClick={closeMenu}>
              Home
            </Link>

            <Link to="/about" onClick={closeMenu}>
              About Us
            </Link>

            <Link to="/our-apps" onClick={closeMenu}>
              Our App
            </Link>

            <Link to="/contact" onClick={closeMenu}>
              Contacts
            </Link>

            <div className="flex items-center gap-5 border-t border-orange-100 pt-5">

              <Link to="/login" onClick={closeMenu}>
                Log in
              </Link>

              <Link
                to="/signup"
                onClick={closeMenu}
                className="rounded-lg bg-[#ed7058] px-5 py-3 text-white"
              >
                Sign up
              </Link>

            </div>

          </div>
        </div>
      )}

    </header>
  );
}