import React from 'react';

const services = [
  {
    title: 'Event Strategy',
    desc: 'Detailed audience and flow strategy for corporate, wedding, funeral, conference, seminar, and traditional events.',
  },
  {
    title: 'Event Hosting (MC/Compere)',
    desc: 'Professional hosting that keeps timing, audience energy, and event experience consistent from start to finish.',
  },
  {
    title: 'Media & PR Services',
    desc: 'Radio/TV promotions, public relations, branding, and digital marketing across channels.',
  },
  {
    title: 'Social Media Management',
    desc: 'Creative social media content and brand engagement execution.',
  },
  {
    title: 'Advertising',
    desc: 'Campaign direction and media support tailored to event and brand goals.',
  },
  {
    title: 'Event Consultation',
    desc: 'Professional advisory support for event structure, audience impact, and delivery standards.',
  },
];

function Services() {
  return (
    <section className="relative px-3 py-12 sm:px-4 sm:py-16 md:px-10 md:py-20">
      <div className="mx-auto max-w-6xl rounded-3xl border border-white/15 bg-white/5 p-5 text-white shadow-[0_0_40px_rgba(56,189,248,0.14)] backdrop-blur-xl sm:p-8 md:p-12">
        <div className="mb-10 flex flex-col gap-3 md:mb-12">
          <p className="text-xs uppercase tracking-[0.35em] text-cyan-100/80">Capabilities</p>
          <h2 className="text-2xl font-semibold sm:text-3xl md:text-4xl">Core Service Areas</h2>
          <p className="max-w-3xl text-cyan-50/80">
            Based on your media deck: strategy, hosting, media, PR, branding, and promotions delivered with premium execution.
          </p>
        </div>

        <div className="grid gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((item) => (
            <article
              key={item.title}
              className="group rounded-2xl border border-white/15 bg-slate-900/50 p-6 transition hover:-translate-y-1 hover:border-cyan-200/45 hover:shadow-[0_0_24px_rgba(34,211,238,0.35)]"
            >
              <div className="mb-4 h-2 w-14 rounded-full bg-gradient-to-r from-cyan-300 to-emerald-300 opacity-80 transition group-hover:w-20" />
              <h3 className="text-xl font-semibold text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-cyan-50/80">{item.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
