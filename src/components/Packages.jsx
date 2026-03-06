import React from 'react';

const packageList = [
  {
    name: 'Event Host (Within Lagos)',
    price: 'N500k',
    features: ['Professional event hosting', 'Audience engagement', 'Structured flow control'],
    glow: 'shadow-[0_0_26px_rgba(56,189,248,0.28)]',
  },
  {
    name: 'Wedding Event (Outside Lagos)',
    price: 'N700k',
    features: ['Wedding MC/Compere', 'Program flow design', 'Premium crowd management'],
    glow: 'shadow-[0_0_26px_rgba(16,185,129,0.28)]',
  },
  {
    name: 'Media Mention Pack',
    price: 'From N35k',
    features: ['Radio shoutout', 'Television mention', 'Jingle voice over'],
    glow: 'shadow-[0_0_26px_rgba(244,114,182,0.28)]',
  },
];

function Packages() {
  return (
    <section className="relative px-3 pb-14 pt-6 sm:px-4 sm:pb-20 sm:pt-8 md:px-10 md:pb-28">
      <div className="mx-auto max-w-6xl rounded-3xl border border-white/15 bg-white/5 p-5 text-white shadow-[0_0_40px_rgba(56,189,248,0.10)] backdrop-blur-xl sm:p-8 md:p-12">
        <div className="mb-10 flex flex-col gap-3 md:mb-12">
          <p className="text-xs uppercase tracking-[0.35em] text-emerald-100/80">Rate Snapshot</p>
          <h2 className="text-2xl font-semibold sm:text-3xl md:text-4xl">Popular Rates from REO Deck</h2>
          <p className="max-w-3xl text-cyan-50/80">
            Updated with the pricing details in your provided PDF document.
          </p>
        </div>

        <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {packageList.map((item) => (
            <article
              key={item.name}
              className={`rounded-2xl border border-white/15 bg-slate-900/50 p-7 transition hover:-translate-y-1 hover:border-white/30 ${item.glow}`}
            >
              <p className="text-xs uppercase tracking-[0.3em] text-cyan-100/75">{item.name}</p>
              <p className="mt-3 text-2xl font-semibold sm:text-3xl">{item.price}</p>
              <ul className="mt-5 space-y-3 text-sm text-cyan-50/85">
                {item.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <span className="h-2 w-2 rounded-full bg-cyan-300" />
                    {feature}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Packages;
