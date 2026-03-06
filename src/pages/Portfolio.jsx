import React, { useEffect, useMemo, useState } from 'react';
import { NavLink } from 'react-router-dom';
import reo1 from '../assets/portfolio/reo-1.png';
import reo2 from '../assets/portfolio/reo-2.png';
import reo3 from '../assets/portfolio/reo-3.png';
import reo4 from '../assets/portfolio/reo-4.png';
import reo5 from '../assets/portfolio/reo-5.png';
import reo6 from '../assets/portfolio/reo-6.png';

const galleryItems = [
  { id: 1, title: 'Brand Identity Profile', category: 'Branding', image: reo1 },
  { id: 2, title: 'Hosting & Event Rate Card', category: 'Events', image: reo2 },
  { id: 3, title: 'Media Personality Services', category: 'Media', image: reo3 },
  { id: 4, title: 'Collaborations & Clients', category: 'Collaborations', image: reo4 },
  { id: 5, title: 'Additional Services Overview', category: 'Services', image: reo5 },
  { id: 6, title: 'Contact & Booking Sheet', category: 'Branding', image: reo6 },
];

const filters = ['All', 'Events', 'Media', 'Collaborations', 'Services', 'Branding'];

const eventRates = [
  { service: 'Event Host (Within Lagos)', price: 'N500k' },
  { service: 'Event Host (Outside Lagos)', price: 'N600k' },
  { service: 'Wedding MC (Within Lagos)', price: 'N600k' },
  { service: 'Wedding MC (Outside Lagos)', price: 'N700k' },
  { service: 'Wedding After Party', price: 'N200k' },
  { service: 'Standup Comedy Performance', price: 'N500k' },
  { service: 'Social Media Creative Content', price: 'N500k' },
];

const mediaRates = [
  { service: 'Radio Shoutout (With Video)', price: 'N50k' },
  { service: 'Radio Shoutout (Without Video)', price: 'N35k' },
  { service: 'Television Mention', price: 'N80k' },
  { service: 'Jingle Voice Over', price: 'N80k' },
  { service: 'Brand Promotion / PR', price: 'Cost on Request' },
  { service: 'Social Media Manager', price: 'Cost on Request' },
];

const collaborators = [
  'Happluse Global',
  'Reflect Image',
  'Crown FM',
  'OAU Great FM (Osun State)',
  'Dux FM',
  'Star FM & MiTV',
  'Experion Logistics Services',
  'El-Chairis Logistics Company',
  'Gnee Production',
];

const expertise = [
  'Event Strategy',
  'Event Consultation',
  'Advertising',
  'Public Relations (PR)',
  'Event Hosting (Wedding MC / Compere)',
  'Digital Marketing',
  'Social Media Management',
  'Branding',
  'Radio / TV Promotions and Tours',
];

function Counter({ target, suffix, label }) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let frame;
    const duration = 1200;
    const start = performance.now();

    const animate = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      setValue(Math.floor(progress * target));
      if (progress < 1) frame = requestAnimationFrame(animate);
    };

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [target]);

  return (
    <article className="rounded-2xl border border-white/20 bg-slate-950/45 p-4 text-center sm:p-5">
      <p className="text-2xl font-semibold text-cyan-200 sm:text-3xl">{value}{suffix}</p>
      <p className="mt-1 text-xs uppercase tracking-[0.2em] text-white/75">{label}</p>
    </article>
  );
}

function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [activeSlide, setActiveSlide] = useState(0);
  const [previewItem, setPreviewItem] = useState(null);

  const slides = [reo1, reo2, reo3, reo4, reo5, reo6];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 4200);
    return () => clearInterval(timer);
  }, [slides.length]);

  const filteredGallery = useMemo(() => {
    if (activeFilter === 'All') return galleryItems;
    return galleryItems.filter((item) => item.category === activeFilter);
  }, [activeFilter]);

  return (
    <main className="relative overflow-hidden bg-[#050a14] px-3 pb-16 pt-10 text-white sm:px-4 md:px-10 md:pb-24 md:pt-14">
      <div className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(circle_at_12%_10%,rgba(34,211,238,0.18),transparent_35%),radial-gradient(circle_at_88%_28%,rgba(16,185,129,0.14),transparent_35%)]" />

      <section className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] border border-white/20 bg-white/10 p-6 text-center shadow-[0_0_60px_rgba(56,189,248,0.16)] backdrop-blur-2xl sm:p-10 md:p-14">
        <div className="pointer-events-none absolute inset-0 -z-10">
          {slides.map((src, index) => (
            <img
              key={src}
              src={src}
              alt=""
              className={`absolute inset-0 h-full w-full object-cover opacity-20 transition-opacity duration-1000 ${
                activeSlide === index ? 'opacity-25' : 'opacity-0'
              }`}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-900/70 to-slate-950/90" />
        </div>

        <p className="mb-3 text-[10px] uppercase tracking-[0.3em] text-cyan-100/90 sm:text-xs sm:tracking-[0.45em]">Portfolio</p>
        <h1 className="mx-auto max-w-4xl text-3xl font-semibold leading-tight sm:text-4xl md:text-6xl">
          Real Work. Real Audience Impact.
        </h1>
        <p className="mx-auto mt-5 max-w-3xl text-sm leading-relaxed text-cyan-50/85 sm:text-base md:text-lg">
          Built using your official REO media deck: rates, collaborations, services, and delivery profile translated into a modern portfolio experience.
        </p>

        <div className="mt-8 grid gap-3 sm:grid-cols-3 sm:gap-4">
          <Counter target={120} suffix="+" label="Projects Delivered" />
          <Counter target={9} suffix="+" label="Featured Collaborations" />
          <Counter target={15} suffix="+" label="Service Capabilities" />
        </div>
      </section>

      <section className="mx-auto mt-8 max-w-6xl rounded-3xl border border-white/15 bg-white/5 p-5 backdrop-blur-xl sm:p-8 md:p-10">
        <div className="mb-5 flex flex-wrap gap-2">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] transition sm:text-sm ${
                activeFilter === filter
                  ? 'border border-cyan-200/50 bg-cyan-300/20 text-cyan-50 shadow-[0_0_20px_rgba(34,211,238,0.45)]'
                  : 'border border-white/20 bg-slate-900/50 text-white/80 hover:bg-white/10'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filteredGallery.map((item) => (
            <article
              key={item.id}
              className="group overflow-hidden rounded-2xl border border-white/15 bg-slate-900/55"
            >
              <button type="button" onClick={() => setPreviewItem(item)} className="w-full text-left">
                <img src={item.image} alt={item.title} className="h-52 w-full object-cover transition duration-500 group-hover:scale-105" />
                <div className="p-4">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-cyan-100/80">{item.category}</p>
                  <h3 className="mt-1 text-sm font-semibold sm:text-base">{item.title}</h3>
                </div>
              </button>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-8 grid max-w-6xl gap-6 lg:grid-cols-2">
        <article className="rounded-3xl border border-white/15 bg-white/5 p-5 backdrop-blur-xl sm:p-8">
          <p className="text-xs uppercase tracking-[0.3em] text-cyan-100/80">Event Pricing Snapshot</p>
          <h2 className="mt-3 text-2xl font-semibold sm:text-3xl">Hosting & Event Rates</h2>
          <div className="mt-4 space-y-2 text-sm text-cyan-50/85">
            {eventRates.map((item) => (
              <div key={item.service} className="flex items-center justify-between rounded-xl border border-white/15 bg-slate-900/50 px-3 py-2">
                <span>{item.service}</span>
                <span className="font-semibold text-cyan-100">{item.price}</span>
              </div>
            ))}
          </div>
        </article>

        <article className="rounded-3xl border border-white/15 bg-white/5 p-5 backdrop-blur-xl sm:p-8">
          <p className="text-xs uppercase tracking-[0.3em] text-cyan-100/80">Media Pricing Snapshot</p>
          <h2 className="mt-3 text-2xl font-semibold sm:text-3xl">On-Air & PR Rates</h2>
          <div className="mt-4 space-y-2 text-sm text-cyan-50/85">
            {mediaRates.map((item) => (
              <div key={item.service} className="flex items-center justify-between rounded-xl border border-white/15 bg-slate-900/50 px-3 py-2">
                <span>{item.service}</span>
                <span className="font-semibold text-cyan-100">{item.price}</span>
              </div>
            ))}
          </div>
        </article>
      </section>

      <section className="mx-auto mt-8 max-w-6xl rounded-3xl border border-white/15 bg-white/5 p-5 backdrop-blur-xl sm:p-8 md:p-10">
        <p className="text-xs uppercase tracking-[0.3em] text-cyan-100/80">Collaborations</p>
        <h2 className="mt-3 text-2xl font-semibold sm:text-3xl">Brands and Platforms We Have Worked With</h2>
        <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {collaborators.map((name) => (
            <div key={name} className="rounded-xl border border-white/15 bg-slate-900/55 px-4 py-3 text-sm text-cyan-50/90">
              {name}
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-8 max-w-6xl rounded-3xl border border-white/15 bg-white/5 p-5 backdrop-blur-xl sm:p-8 md:p-10">
        <p className="text-xs uppercase tracking-[0.3em] text-emerald-100/80">Areas of Expertise</p>
        <div className="mt-5 flex flex-wrap gap-3">
          {expertise.map((item) => (
            <span key={item} className="rounded-full border border-white/25 bg-slate-900/55 px-4 py-2 text-xs tracking-wide text-cyan-50/90 sm:text-sm">
              {item}
            </span>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-8 max-w-6xl rounded-3xl border border-white/20 bg-gradient-to-r from-cyan-400/15 via-white/10 to-emerald-400/15 p-7 text-center shadow-[0_0_50px_rgba(34,211,238,0.2)] backdrop-blur-xl md:p-10">
        <h2 className="text-2xl font-semibold sm:text-3xl md:text-4xl">Ready to Feature Your Event as the Next Case Study?</h2>
        <p className="mx-auto mt-3 max-w-2xl text-sm text-cyan-50/85 sm:text-base">
          Let’s build a high-impact event experience with strategy, performance, and measurable audience results.
        </p>
        <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
          <NavLink to="/contact" className="rounded-full border border-cyan-100/40 bg-cyan-300/20 px-7 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-50 transition hover:bg-cyan-300/35 sm:text-sm">
            Book REO
          </NavLink>
          <NavLink to="/packages" className="rounded-full border border-white/30 bg-white/10 px-7 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-white/20 sm:text-sm">
            View Packages
          </NavLink>
        </div>
      </section>

      {previewItem && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm">
          <div className="w-full max-w-5xl overflow-hidden rounded-3xl border border-white/20 bg-slate-950/95">
            <div className="flex items-center justify-between border-b border-white/15 px-4 py-3 sm:px-6">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-cyan-100/80">{previewItem.category}</p>
                <h3 className="text-sm font-semibold sm:text-base">{previewItem.title}</h3>
              </div>
              <button
                type="button"
                onClick={() => setPreviewItem(null)}
                className="rounded-lg border border-white/20 px-3 py-1 text-sm text-white/90 hover:bg-white/10"
              >
                Close
              </button>
            </div>
            <img src={previewItem.image} alt={previewItem.title} className="max-h-[80vh] w-full object-contain" />
          </div>
        </div>
      )}
    </main>
  );
}

export default Portfolio;
