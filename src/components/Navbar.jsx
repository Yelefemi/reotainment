import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `relative px-2.5 py-2 rounded-full text-xs sm:text-sm tracking-wide transition ${
      isActive
        ? 'text-white bg-white/20'
        : 'text-white/80 hover:text-white hover:bg-white/10'
    }`;

  return (
    <header className="sticky top-0 z-50 px-3 pt-3 sm:px-4 md:px-10 md:pt-4">
      <nav className="mx-auto flex max-w-6xl items-center justify-between rounded-2xl border border-white/20 bg-black/35 px-3 py-3 text-white shadow-[0_0_40px_rgba(45,212,191,0.25)] backdrop-blur-xl sm:px-4 md:px-8">
        <h1 className="text-base font-semibold tracking-[0.15em] sm:text-xl md:text-2xl md:tracking-[0.2em]">
          REOtainment
        </h1>

        <div className="hidden items-center gap-2 md:flex">
          <NavLink to="/" className={linkClass}>Home</NavLink>
          <NavLink to="/about" className={linkClass}>About</NavLink>
          <NavLink to="/services" className={linkClass}>Services</NavLink>
          <NavLink to="/packages" className={linkClass}>Packages</NavLink>
          <NavLink to="/portfolio" className={linkClass}>Portfolio</NavLink>
          <NavLink to="/contact" className={linkClass}>Contact</NavLink>
        </div>

        <div className="flex items-center">
          <NavLink
            to="/contact"
            className="rounded-full border border-cyan-200/40 bg-cyan-300/20 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-cyan-50 shadow-[0_0_24px_rgba(34,211,238,0.45)] transition hover:bg-cyan-300/30 sm:text-xs md:px-4 md:text-sm md:tracking-widest"
          >
            Book Now
          </NavLink>

          <button
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
            onClick={() => setIsOpen((prev) => !prev)}
            className="ml-2 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/25 bg-white/10 text-white transition hover:bg-white/20 md:hidden"
          >
            <span className="relative block h-4 w-5">
              <span
                className={`absolute left-0 top-0 h-0.5 w-5 bg-white transition ${
                  isOpen ? 'translate-y-[7px] rotate-45' : ''
                }`}
              />
              <span
                className={`absolute left-0 top-[7px] h-0.5 w-5 bg-white transition ${
                  isOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`absolute left-0 top-[14px] h-0.5 w-5 bg-white transition ${
                  isOpen ? '-translate-y-[7px] -rotate-45' : ''
                }`}
              />
            </span>
          </button>
        </div>
      </nav>

      {isOpen && (
        <nav className="mx-auto mt-2 grid max-w-6xl grid-cols-2 gap-1 rounded-xl border border-white/10 bg-black/40 p-2 backdrop-blur-xl md:hidden">
          <NavLink to="/" className={linkClass} onClick={() => setIsOpen(false)}>Home</NavLink>
          <NavLink to="/services" className={linkClass} onClick={() => setIsOpen(false)}>Services</NavLink>
          <NavLink to="/packages" className={linkClass} onClick={() => setIsOpen(false)}>Packages</NavLink>
          <NavLink to="/portfolio" className={linkClass} onClick={() => setIsOpen(false)}>Portfolio</NavLink>
          <NavLink to="/about" className={linkClass} onClick={() => setIsOpen(false)}>About</NavLink>
          <NavLink to="/contact" className={linkClass} onClick={() => setIsOpen(false)}>Contact</NavLink>
        </nav>
      )}
    </header>
  );
}

export default Navbar;
