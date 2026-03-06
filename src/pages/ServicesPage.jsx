import React, { useEffect, useMemo, useRef, useState } from 'react';
import { reoPhotos } from '../assets/reoPhotoSet';

const categories = [
  { id: 'core', label: 'Core Experience' },
  { id: 'media', label: 'Media & PR' },
  { id: 'growth', label: 'Digital & Branding' },
];

const services = [
  {
    id: 'event-host',
    category: 'core',
    title: 'Event Hosting (MC/Compere)',
    rate: 'From N500k',
    summary: 'Professional event hosting with structured flow and audience control.',
    description: 'MC REO delivers culturally aware, high-energy hosting for weddings, conferences, seminars, religious and traditional events.',
    benefits: ['Strong audience connection', 'Program flow control', 'Professional stage command'],
    eventTypes: ['Wedding', 'Birthday', 'Funeral', 'Conference', 'Seminar'],
  },
  {
    id: 'event-strategy',
    category: 'core',
    title: 'Event Strategy',
    rate: 'Cost on Request',
    summary: 'Event structure, audience flow, and timing architecture.',
    description: 'Detailed planning and strategy design to ensure each segment drives engagement and event objectives.',
    benefits: ['Clear run-of-show', 'Audience retention', 'Better sponsor visibility'],
    eventTypes: ['Corporate events', 'Brand events', 'Religious events'],
  },
  {
    id: 'event-consult',
    category: 'core',
    title: 'Event Consultation',
    rate: 'Cost on Request',
    summary: 'Expert advisory for event concept, execution, and experience quality.',
    description: 'Consulting support for event teams who need strategic direction and premium execution standards.',
    benefits: ['Improved planning quality', 'Reduced execution risks', 'Professional event structure'],
    eventTypes: ['Corporate event', 'Conference', 'Traditional events'],
  },
  {
    id: 'radio-shoutout',
    category: 'media',
    title: 'Radio Shoutout',
    rate: 'N35k - N50k',
    summary: 'Broadcast mention options with or without video support.',
    description: 'Radio mention packages designed for awareness, shoutouts, and campaign promotion.',
    benefits: ['Fast awareness boost', 'Flexible media option', 'Good for short campaigns'],
    eventTypes: ['Brand promo', 'Event announcements', 'Audience reminders'],
  },
  {
    id: 'tv-mention',
    category: 'media',
    title: 'Television Mention',
    rate: 'N80k',
    summary: 'On-air television mention for elevated brand credibility.',
    description: 'Visibility-focused TV mention service suited for promotions and key event announcements.',
    benefits: ['Premium visibility', 'Broad audience reach', 'High trust media touchpoint'],
    eventTypes: ['Launch campaigns', 'PR moments', 'Brand events'],
  },
  {
    id: 'jingle',
    category: 'media',
    title: 'Jingle Voice Over',
    rate: 'N80k',
    summary: 'Voice-over production for promo jingles and media assets.',
    description: 'Professional voice-over service for ad spots, event stings, and campaign identifiers.',
    benefits: ['Brand recall', 'Professional audio identity', 'Multi-channel use'],
    eventTypes: ['Radio ads', 'Promo campaigns', 'Event branding'],
  },
  {
    id: 'social-management',
    category: 'growth',
    title: 'Social Media Management',
    rate: 'Cost on Request',
    summary: 'Content and engagement management for social growth and campaign support.',
    description: 'Creative social media management aligned with event goals, audience tone, and campaign outcomes.',
    benefits: ['Stronger online presence', 'Consistent posting', 'Audience engagement growth'],
    eventTypes: ['Brand campaigns', 'Event publicity', 'Ongoing promotions'],
  },
  {
    id: 'digital-marketing',
    category: 'growth',
    title: 'Digital Marketing',
    rate: 'Cost on Request',
    summary: 'Targeted digital campaign planning and execution.',
    description: 'Marketing strategies built to improve visibility, ticketing momentum, and promotional performance.',
    benefits: ['Reach expansion', 'Conversion support', 'Performance-focused campaigns'],
    eventTypes: ['Product launch', 'Brand activation', 'Event promotion'],
  },
  {
    id: 'pr-branding',
    category: 'growth',
    title: 'Public Relations & Branding',
    rate: 'Cost on Request',
    summary: 'Positioning support for visibility, trust, and brand growth.',
    description: 'PR and branding services for organizations, individuals, and religious institutions.',
    benefits: ['Reputation lift', 'Brand consistency', 'Strategic positioning'],
    eventTypes: ['Corporate comms', 'Public campaigns', 'Artist branding'],
  },
];

const timelineSteps = ['Strategy', 'Flow Design', 'Audience Engagement', 'Execution', 'Post Event Impact'];

const recommendationMap = {
  'Corporate Event': ['event-host', 'event-strategy', 'pr-branding', 'digital-marketing'],
  Wedding: ['event-host', 'event-consult', 'social-management'],
  Conference: ['event-host', 'event-strategy', 'tv-mention'],
  'Brand Activation': ['event-host', 'radio-shoutout', 'digital-marketing', 'pr-branding'],
  'Religious Event': ['event-host', 'event-consult', 'social-management'],
};

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

function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState('core');
  const [expandedId, setExpandedId] = useState('event-strategy');
  const [selectedEventType, setSelectedEventType] = useState('Corporate Event');
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [bookingService, setBookingService] = useState('Event Strategy');
  const [isTimelineVisible, setIsTimelineVisible] = useState(false);
  const timelineRef = useRef(null);

  const filteredServices = useMemo(
    () => services.filter((service) => service.category === activeCategory),
    [activeCategory]
  );

  const recommendedServices = useMemo(() => {
    const ids = recommendationMap[selectedEventType] || [];
    return services.filter((service) => ids.includes(service.id));
  }, [selectedEventType]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsTimelineVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (timelineRef.current) observer.observe(timelineRef.current);

    return () => observer.disconnect();
  }, []);

  const openBooking = (serviceTitle) => {
    setBookingService(serviceTitle);
    setShowBookingModal(true);
  };

  return (
    <main className="relative overflow-hidden bg-[#050a14] px-3 pb-16 pt-10 text-white sm:px-4 md:px-10 md:pb-24 md:pt-14">
      <div className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(circle_at_10%_10%,rgba(34,211,238,0.20),transparent_35%),radial-gradient(circle_at_90%_30%,rgba(16,185,129,0.15),transparent_35%)]" />

      <section className="mx-auto max-w-6xl rounded-[2rem] border border-white/20 bg-white/10 p-6 text-center shadow-[0_0_60px_rgba(56,189,248,0.16)] backdrop-blur-2xl sm:p-10 md:p-14">
        <p className="mb-3 text-[10px] uppercase tracking-[0.3em] text-cyan-100/90 sm:text-xs sm:tracking-[0.45em]">Services Hub</p>
        <h1 className="mx-auto max-w-4xl text-3xl font-semibold leading-tight sm:text-4xl md:text-6xl">REO Services & Rates</h1>
        <p className="mx-auto mt-5 max-w-3xl text-sm leading-relaxed text-cyan-50/85 sm:text-base md:text-lg">
          Updated to match your deck: event hosting, strategy, media mentions, PR, and growth services with rate references.
        </p>

        <div className="mt-8 grid gap-3 sm:grid-cols-3 sm:gap-4">
          <Counter target={9} suffix="+" label="Service Domains" />
          <Counter target={9} suffix="+" label="Featured Collaborations" />
          <Counter target={24} suffix="hr" label="Typical Response Time" />
        </div>
      </section>

      <section className="mx-auto mt-8 grid max-w-6xl gap-4 md:grid-cols-2">
        <img src={reoPhotos.photo3} alt="MC REO media branding" className="h-72 w-full rounded-3xl border border-white/15 object-cover" />
        <img src={reoPhotos.photo7} alt="REO collaborations profile" className="h-72 w-full rounded-3xl border border-white/15 object-cover" />
      </section>

      <section className="mx-auto mt-8 max-w-6xl rounded-3xl border border-white/15 bg-white/5 p-5 backdrop-blur-xl sm:p-8 md:p-10">
        <div className="mb-5 flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category.id}
              type="button"
              onClick={() => {
                setActiveCategory(category.id);
                setExpandedId('');
              }}
              className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] transition sm:text-sm ${
                activeCategory === category.id
                  ? 'border border-cyan-200/50 bg-cyan-300/20 text-cyan-50 shadow-[0_0_20px_rgba(34,211,238,0.45)]'
                  : 'border border-white/20 bg-slate-900/50 text-white/80 hover:bg-white/10'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {filteredServices.map((service) => {
            const isExpanded = expandedId === service.id;
            return (
              <article key={service.id} className="rounded-2xl border border-white/15 bg-slate-900/55 p-5 transition hover:border-cyan-200/40">
                <button type="button" onClick={() => setExpandedId(isExpanded ? '' : service.id)} className="w-full text-left">
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-lg font-semibold">{service.title}</p>
                    <span className="rounded-full border border-emerald-200/30 bg-emerald-300/10 px-2 py-1 text-[10px] uppercase tracking-[0.15em] text-emerald-100">{service.rate}</span>
                  </div>
                  <p className="mt-2 text-sm text-cyan-50/80">{service.summary}</p>
                  <p className="mt-3 text-xs uppercase tracking-[0.2em] text-cyan-200/90">{isExpanded ? 'Hide details' : 'Click to expand'}</p>
                </button>

                {isExpanded && (
                  <div className="mt-4 space-y-4 border-t border-white/15 pt-4">
                    <p className="text-sm leading-relaxed text-cyan-50/85">{service.description}</p>
                    <div>
                      <p className="text-xs uppercase tracking-[0.2em] text-white/70">Benefits</p>
                      <ul className="mt-2 space-y-1 text-sm text-cyan-50/85">{service.benefits.map((benefit) => <li key={benefit}>✔ {benefit}</li>)}</ul>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.2em] text-white/70">Sample event types</p>
                      <ul className="mt-2 space-y-1 text-sm text-cyan-50/85">{service.eventTypes.map((eventType) => <li key={eventType}>✔ {eventType}</li>)}</ul>
                    </div>
                    <button type="button" onClick={() => openBooking(service.title)} className="rounded-full border border-cyan-100/40 bg-cyan-300/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-50 transition hover:bg-cyan-300/35">
                      Book This Service
                    </button>
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </section>

      <section className="mx-auto mt-8 grid max-w-6xl gap-6 lg:grid-cols-2">
        <article className="rounded-3xl border border-white/15 bg-white/5 p-6 backdrop-blur-xl md:p-8">
          <p className="text-xs uppercase tracking-[0.3em] text-cyan-100/80">Find the Right Service</p>
          <h2 className="mt-3 text-2xl font-semibold sm:text-3xl">Smart Selector</h2>

          <label className="mt-5 block text-sm text-white/85" htmlFor="eventType">Event Type</label>
          <select id="eventType" value={selectedEventType} onChange={(e) => setSelectedEventType(e.target.value)} className="mt-2 w-full rounded-xl border border-white/20 bg-slate-900/70 px-4 py-3 text-sm text-white outline-none ring-cyan-300/40 transition focus:ring">
            {Object.keys(recommendationMap).map((eventType) => <option key={eventType} value={eventType}>{eventType}</option>)}
          </select>

          <div className="mt-5 rounded-2xl border border-emerald-200/25 bg-emerald-300/10 p-4">
            <p className="text-xs uppercase tracking-[0.2em] text-emerald-100/80">Recommended Services</p>
            <ul className="mt-3 space-y-2 text-sm text-emerald-50/90">{recommendedServices.map((service) => <li key={service.id}>✔ {service.title}</li>)}</ul>
          </div>
        </article>

        <article className="rounded-3xl border border-white/15 bg-white/5 p-6 backdrop-blur-xl md:p-8" ref={timelineRef}>
          <p className="text-xs uppercase tracking-[0.3em] text-cyan-100/80">Event Experience Timeline</p>
          <h2 className="mt-3 text-2xl font-semibold sm:text-3xl">How We Deliver</h2>

          <div className="mt-6 space-y-4">
            {timelineSteps.map((step, index) => (
              <div
                key={step}
                className={`flex items-center gap-3 rounded-xl border border-white/15 bg-slate-900/55 p-3 transition-all duration-700 ${isTimelineVisible ? 'translate-x-0 opacity-100' : 'translate-x-6 opacity-0'}`}
                style={{ transitionDelay: `${index * 120}ms` }}
              >
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-cyan-300/20 text-sm font-semibold text-cyan-100">{index + 1}</span>
                <span className="text-sm text-cyan-50/90 sm:text-base">{step}</span>
              </div>
            ))}
          </div>
        </article>
      </section>

      {showBookingModal && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm">
          <div className="w-full max-w-lg rounded-3xl border border-white/20 bg-slate-950/90 p-5 text-white shadow-[0_0_40px_rgba(34,211,238,0.35)] sm:p-7">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-xl font-semibold">Book This Service</h3>
              <button type="button" onClick={() => setShowBookingModal(false)} className="rounded-lg border border-white/20 px-3 py-1 text-sm text-white/90 hover:bg-white/10">Close</button>
            </div>

            <form className="space-y-3" onSubmit={(e) => { e.preventDefault(); setShowBookingModal(false); }}>
              <input required placeholder="Name" className="w-full rounded-xl border border-white/20 bg-slate-900/70 px-4 py-3 text-sm outline-none focus:ring focus:ring-cyan-300/40" />
              <input value={bookingService} onChange={(e) => setBookingService(e.target.value)} className="w-full rounded-xl border border-white/20 bg-slate-900/70 px-4 py-3 text-sm outline-none focus:ring focus:ring-cyan-300/40" />
              <input placeholder="Budget" className="w-full rounded-xl border border-white/20 bg-slate-900/70 px-4 py-3 text-sm outline-none focus:ring focus:ring-cyan-300/40" />
              <button type="submit" className="mt-2 w-full rounded-full border border-cyan-100/40 bg-cyan-300/20 px-5 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-50 transition hover:bg-cyan-300/35 sm:text-sm">Submit Request</button>
            </form>
          </div>
        </div>
      )}
    </main>
  );
}

export default ServicesPage;



