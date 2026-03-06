import React from 'react';
import { NavLink } from 'react-router-dom';
import { reoPhotos } from '../assets/reoPhotoSet';

const differentiators = [
  {
    title: 'Culturally Conscious Hosting',
    text: 'Event delivery tailored for weddings, birthdays, funerals, conferences, seminars, and traditional/religious events.',
  },
  {
    title: 'Media and PR Competence',
    text: 'Extensive media background across television, radio, content creation, and public relations support.',
  },
  {
    title: 'Strategic Event Thinking',
    text: 'Structured event strategy, flow design, and audience experience engineering from start to finish.',
  },
];

const expertise = [
  'Event Strategy',
  'Advertising',
  'Event Hosting (Wedding MC/Compere)',
  'Social Media Management',
  'Radio/TV Promotions and Tours',
  'Event Consultation',
  'Public Relations (PR)',
  'Digital Marketing',
  'Branding',
];

const stats = [
  { value: '9+', label: 'Featured Collaborations' },
  { value: '10+', label: 'Service Domains' },
  { value: '24hr', label: 'Typical Response Window' },
];

function About() {
  return (
    <main className="relative overflow-hidden bg-[#050a14] px-3 pb-16 pt-10 text-white sm:px-4 md:px-10 md:pb-24 md:pt-14">
      <div className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(circle_at_15%_5%,rgba(56,189,248,0.20),transparent_35%),radial-gradient(circle_at_90%_20%,rgba(16,185,129,0.15),transparent_35%)]" />

      <section className="mx-auto max-w-6xl rounded-[2rem] border border-white/20 bg-white/10 p-6 text-center shadow-[0_0_60px_rgba(56,189,248,0.16)] backdrop-blur-2xl sm:p-10 md:p-14">
        <p className="mb-3 text-[10px] uppercase tracking-[0.3em] text-cyan-100/90 sm:text-xs sm:tracking-[0.45em]">
          About REOtainment
        </p>
        <h1 className="mx-auto max-w-4xl text-3xl font-semibold leading-tight sm:text-4xl md:text-6xl">
          MC REO: Event Host, OAP, and Content Creator
        </h1>
        <p className="mx-auto mt-5 max-w-3xl text-sm leading-relaxed text-cyan-50/85 sm:text-base md:text-lg">
          REO Entertainment is a registered entertainment, production, media management, advertising, and PR brand delivering creative and impactful event/media solutions.
        </p>

        <div className="mt-8 grid gap-3 sm:grid-cols-3 sm:gap-4">
          {stats.map((stat) => (
            <article key={stat.label} className="rounded-2xl border border-white/20 bg-slate-950/45 p-4 sm:p-5">
              <p className="text-2xl font-semibold text-cyan-200 sm:text-3xl">{stat.value}</p>
              <p className="mt-1 text-xs uppercase tracking-[0.2em] text-white/75">{stat.label}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-8 grid max-w-6xl gap-4 md:grid-cols-2">
        <img src={reoPhotos.photo5} alt="MC REO profile" className="h-80 w-full rounded-3xl border border-white/15 object-cover" />
        <img src={reoPhotos.photo6} alt="MC REO event moments" className="h-80 w-full rounded-3xl border border-white/15 object-cover" />
      </section>

      <section className="mx-auto mt-8 grid max-w-6xl gap-6 lg:grid-cols-5">
        <article className="rounded-3xl border border-white/15 bg-white/5 p-6 backdrop-blur-xl lg:col-span-3 md:p-10">
          <p className="text-xs uppercase tracking-[0.3em] text-emerald-100/80">Who is MC REO</p>
          <h2 className="mt-3 text-2xl font-semibold sm:text-3xl">Culturally Aware, Audience-Driven Delivery</h2>
          <p className="mt-4 leading-relaxed text-cyan-50/80">
            Robbin Emmanuel Oluwafemi (MC REO) is committed to honoring clients with event hosting that is culturally informed, traditionally observant, and professionally executed.
          </p>
          <p className="mt-4 leading-relaxed text-cyan-50/80">
            From weddings and birthdays to funerals, conferences, seminars, and tours, the goal is always to create memorable experiences that people talk about long after the event.
          </p>
        </article>

        <article className="rounded-3xl border border-white/15 bg-white/5 p-6 backdrop-blur-xl lg:col-span-2 md:p-8">
          <p className="text-xs uppercase tracking-[0.3em] text-cyan-100/80">Founder Profile</p>
          <h3 className="mt-3 text-xl font-semibold sm:text-2xl">Robbin Emmanuel Oluwafemi</h3>
          <p className="mt-4 text-sm leading-relaxed text-cyan-50/80 sm:text-base">
            Founder and Director of REO Entertainment, with broad media experience in television, radio, and content creation.
          </p>
        </article>
      </section>

      <section className="mx-auto mt-8 max-w-6xl rounded-3xl border border-white/15 bg-white/5 p-6 backdrop-blur-xl md:p-10">
        <p className="text-xs uppercase tracking-[0.3em] text-cyan-100/80">What Makes REO Different</p>
        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {differentiators.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-white/15 bg-slate-900/50 p-5 transition hover:-translate-y-1 hover:border-cyan-200/40 hover:shadow-[0_0_24px_rgba(34,211,238,0.3)]"
            >
              <div className="mb-3 h-2 w-14 rounded-full bg-gradient-to-r from-cyan-300 to-emerald-300" />
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-cyan-50/80">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-8 max-w-6xl rounded-3xl border border-white/15 bg-white/5 p-6 backdrop-blur-xl md:p-10">
        <p className="text-xs uppercase tracking-[0.3em] text-emerald-100/80">Core Expertise</p>
        <div className="mt-5 flex flex-wrap gap-3">
          {expertise.map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/25 bg-slate-900/55 px-4 py-2 text-xs tracking-wide text-cyan-50/90 sm:text-sm"
            >
              {item}
            </span>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-10 max-w-6xl rounded-3xl border border-white/20 bg-gradient-to-r from-cyan-400/15 via-white/10 to-emerald-400/15 p-7 text-center shadow-[0_0_50px_rgba(34,211,238,0.2)] backdrop-blur-xl md:p-10">
        <h2 className="text-2xl font-semibold sm:text-3xl md:text-4xl">
          Let’s Build Your Next Event Experience
        </h2>
        <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
          <NavLink
            to="/contact"
            className="rounded-full border border-cyan-100/40 bg-cyan-300/20 px-7 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-50 shadow-[0_0_24px_rgba(34,211,238,0.55)] transition hover:bg-cyan-300/35 sm:text-sm"
          >
            Book REO
          </NavLink>
          <NavLink
            to="/packages"
            className="rounded-full border border-white/30 bg-white/10 px-7 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-white/20 sm:text-sm"
          >
            View Rates
          </NavLink>
        </div>
      </section>
    </main>
  );
}

export default About;



