import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { heroPhotoSlides } from '../assets/reoPhotoSet';

function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroPhotoSlides.length);
    }, 4200);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative isolate overflow-hidden px-3 pb-14 pt-10 sm:px-4 sm:pb-20 sm:pt-14 md:px-10 md:pb-28 md:pt-24">
      <div className="pointer-events-none absolute inset-0 -z-30">
        {heroPhotoSlides.map((src, index) => (
          <img
            key={src}
            src={src}
            alt=""
            aria-hidden="true"
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
              activeSlide === index ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
      </div>

      <div className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(circle_at_15%_20%,rgba(45,212,191,0.30),transparent_35%),radial-gradient(circle_at_85%_15%,rgba(34,211,238,0.25),transparent_35%),linear-gradient(135deg,rgba(4,7,15,0.82)_0%,rgba(10,19,36,0.78)_45%,rgba(9,13,25,0.84)_100%)]" />

      <div
        className="pointer-events-none absolute -left-16 top-10 -z-10 h-72 w-72 rounded-[40%_60%_56%_44%/54%_44%_56%_46%] bg-cyan-300/35 blur-3xl"
        style={{ clipPath: 'polygon(5% 0%, 100% 8%, 78% 100%, 0% 82%)' }}
      />
      <div
        className="pointer-events-none absolute -right-16 bottom-4 -z-10 h-72 w-72 rounded-[55%_45%_40%_60%/50%_40%_60%_50%] bg-emerald-300/25 blur-3xl"
        style={{ clipPath: 'polygon(20% 8%, 100% 0%, 100% 75%, 5% 100%)' }}
      />

      <div className="mx-auto max-w-6xl rounded-[1.5rem] border border-white/20 bg-white/10 p-5 text-center text-white shadow-[0_0_60px_rgba(56,189,248,0.20)] backdrop-blur-2xl sm:rounded-[2rem] sm:p-8 md:p-14">
        <p className="mb-3 text-[10px] uppercase tracking-[0.28em] text-cyan-100/90 sm:mb-4 sm:text-xs sm:tracking-[0.45em] md:text-sm">
          REO Entertainment
        </p>

        <h1 className="mx-auto max-w-4xl text-[1.8rem] font-semibold leading-tight sm:text-4xl md:text-6xl">
          Event Host / MC, OAP, Content Creator
        </h1>

        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-cyan-50/90 sm:mt-6 md:text-lg">
          Delivering high-impact event hosting, media appearances, and strategic audience engagement for weddings, conferences, tours, and brand activations.
        </p>

        <div className="mt-8 grid w-full max-w-md grid-cols-1 gap-3 sm:mt-10 sm:max-w-none sm:grid-cols-3 sm:gap-4">
          <NavLink to="/contact" className="w-full rounded-full border border-cyan-100/40 bg-cyan-300/20 px-5 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-50 shadow-[0_0_24px_rgba(34,211,238,0.55)] transition hover:bg-cyan-300/35 sm:px-7 sm:text-sm sm:tracking-widest text-center">
            Book REO
          </NavLink>
          <NavLink to="/packages" className="w-full rounded-full border border-white/30 bg-white/10 px-5 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-white/20 sm:px-7 sm:text-sm sm:tracking-widest text-center">
            View Rates
          </NavLink>
          <NavLink to="/portfolio" className="w-full rounded-full border border-emerald-200/40 bg-emerald-300/15 px-5 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-50 shadow-[0_0_26px_rgba(16,185,129,0.45)] transition hover:bg-emerald-300/30 sm:px-7 sm:text-sm sm:tracking-widest text-center">
            Showreel
          </NavLink>
        </div>

        <div className="mt-8 flex items-center justify-center gap-2">
          {heroPhotoSlides.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setActiveSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`h-2.5 rounded-full transition-all ${
                activeSlide === index ? 'w-8 bg-cyan-300' : 'w-2.5 bg-white/45'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;

