import React, { useMemo, useState } from 'react';
import { reoPhotos } from '../assets/reoPhotoSet';

const packages = [
  {
    id: 'basic',
    name: 'Basic',
    badge: 'Event Host Plan',
    description: 'Core hosting support built from REO deck event hosting structure.',
    oneTimePrice: 500000,
    retainerPrice: 450000,
    features: ['Event Hosting (Within Lagos)', 'Audience energy management', 'Program flow direction'],
    bestFor: ['Corporate events', 'Traditional events', 'Private celebrations'],
  },
  {
    id: 'pro',
    name: 'Pro',
    badge: 'Wedding Premium Plan',
    description: 'Wedding-focused premium delivery with stronger event control.',
    oneTimePrice: 700000,
    retainerPrice: 650000,
    features: ['Wedding Event MC (Outside Lagos)', 'Event strategy support', 'Structured audience flow'],
    bestFor: ['Weddings', 'High-profile ceremonies', 'Family celebrations'],
  },
  {
    id: 'elite',
    name: 'Elite',
    badge: 'Media + Event Combo',
    description: 'For clients combining event hosting with media visibility support.',
    oneTimePrice: 900000,
    retainerPrice: 850000,
    features: ['Hosting + media mention support', 'Priority execution', 'Expanded campaign support'],
    bestFor: ['Brand activations', 'Campaign events', 'Public audience events'],
  },
];

const addOns = [
  { id: 'afterparty', name: 'Wedding After Party Coverage', oneTimePrice: 200000, retainerPrice: 180000 },
  { id: 'radio', name: 'Radio Shoutout (With Video)', oneTimePrice: 50000, retainerPrice: 45000 },
  { id: 'tv', name: 'Television Mention', oneTimePrice: 80000, retainerPrice: 70000 },
  { id: 'jingle', name: 'Jingle Voice Over', oneTimePrice: 80000, retainerPrice: 70000 },
  { id: 'social', name: 'Social Media Creative Content', oneTimePrice: 500000, retainerPrice: 450000 },
];

const comparisonRows = [
  { label: 'MC Hosting', basic: true, pro: true, elite: true },
  { label: 'Event Strategy Support', basic: false, pro: true, elite: true },
  { label: 'Media Mention Support', basic: false, pro: false, elite: true },
  { label: 'After Party Add-on Access', basic: true, pro: true, elite: true },
  { label: 'Priority Scheduling', basic: false, pro: false, elite: true },
];

const faqs = [
  {
    q: 'Are these prices fixed?',
    a: 'Rates are based on your provided deck and can adjust by location, schedule complexity, and event duration.',
  },
  {
    q: 'Can I combine event hosting with media mentions?',
    a: 'Yes. Use the add-on options to combine event hosting with radio/TV and content support.',
  },
  {
    q: 'Do you cover events outside Lagos?',
    a: 'Yes. Outside-Lagos delivery is available and reflected in package/rate planning.',
  },
];

function naira(value) {
  return `N${value.toLocaleString()}`;
}

function PackagesPage() {
  const [billing, setBilling] = useState('oneTime');
  const [selectedPackageId, setSelectedPackageId] = useState('pro');
  const [selectedAddOns, setSelectedAddOns] = useState(['radio']);
  const [openFaq, setOpenFaq] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const selectedPackage = useMemo(
    () => packages.find((pkg) => pkg.id === selectedPackageId) || packages[1],
    [selectedPackageId]
  );

  const packagePrice = billing === 'oneTime' ? selectedPackage.oneTimePrice : selectedPackage.retainerPrice;

  const addOnTotal = useMemo(
    () =>
      selectedAddOns.reduce((sum, addOnId) => {
        const addOn = addOns.find((item) => item.id === addOnId);
        if (!addOn) return sum;
        return sum + (billing === 'oneTime' ? addOn.oneTimePrice : addOn.retainerPrice);
      }, 0),
    [billing, selectedAddOns]
  );

  const totalEstimate = packagePrice + addOnTotal;

  const toggleAddOn = (id) => {
    setSelectedAddOns((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]));
  };

  return (
    <main className="relative overflow-hidden bg-[#050a14] px-3 pb-16 pt-10 text-white sm:px-4 md:px-10 md:pb-24 md:pt-14">
      <div className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(circle_at_12%_10%,rgba(34,211,238,0.18),transparent_35%),radial-gradient(circle_at_88%_28%,rgba(16,185,129,0.14),transparent_35%)]" />

      <section className="mx-auto max-w-6xl rounded-[2rem] border border-white/20 bg-white/10 p-6 text-center shadow-[0_0_60px_rgba(56,189,248,0.16)] backdrop-blur-2xl sm:p-10 md:p-14">
        <p className="mb-3 text-[10px] uppercase tracking-[0.3em] text-cyan-100/90 sm:text-xs sm:tracking-[0.45em]">Pricing & Packages</p>
        <h1 className="mx-auto max-w-4xl text-3xl font-semibold leading-tight sm:text-4xl md:text-6xl">REO Rate Plans</h1>
        <p className="mx-auto mt-5 max-w-3xl text-sm leading-relaxed text-cyan-50/85 sm:text-base md:text-lg">All figures updated to the rate direction in your PDF deck.</p>

        <div className="mx-auto mt-8 inline-flex rounded-full border border-white/20 bg-slate-900/60 p-1">
          <button type="button" onClick={() => setBilling('oneTime')} className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] transition sm:text-sm ${billing === 'oneTime' ? 'bg-cyan-300/20 text-cyan-50' : 'text-white/70 hover:text-white'}`}>
            One-Time Event
          </button>
          <button type="button" onClick={() => setBilling('retainer')} className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] transition sm:text-sm ${billing === 'retainer' ? 'bg-cyan-300/20 text-cyan-50' : 'text-white/70 hover:text-white'}`}>
            Retainer
          </button>
        </div>
      </section>

      <section className="mx-auto mt-8 grid max-w-6xl gap-4 md:grid-cols-2">
        <img src={reoPhotos.photo4} alt="MC REO event profile" className="h-72 w-full rounded-3xl border border-white/15 object-cover" />
        <img src={reoPhotos.photo8} alt="REO service details page" className="h-72 w-full rounded-3xl border border-white/15 object-cover" />
      </section>

      <section className="mx-auto mt-8 grid max-w-6xl gap-6 lg:grid-cols-3">
        <div className="space-y-6 lg:col-span-2">
          <div className="grid gap-4 md:grid-cols-3">
            {packages.map((pkg) => {
              const price = billing === 'oneTime' ? pkg.oneTimePrice : pkg.retainerPrice;
              const active = selectedPackageId === pkg.id;
              return (
                <article key={pkg.id} className={`rounded-2xl border p-5 backdrop-blur-xl transition ${active ? 'border-cyan-200/50 bg-cyan-300/10 shadow-[0_0_30px_rgba(34,211,238,0.25)]' : 'border-white/15 bg-white/5 hover:border-white/30'}`}>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-cyan-100/80">{pkg.badge}</p>
                  <h2 className="mt-2 text-2xl font-semibold">{pkg.name}</h2>
                  <p className="mt-1 text-sm text-cyan-50/75">{pkg.description}</p>
                  <p className="mt-4 text-3xl font-semibold">{naira(price)}</p>
                  <button type="button" onClick={() => setSelectedPackageId(pkg.id)} className="mt-5 w-full rounded-xl border border-white/25 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] transition hover:bg-white/20">
                    {active ? 'Selected' : 'Choose Plan'}
                  </button>
                </article>
              );
            })}
          </div>

          <article className="rounded-3xl border border-white/15 bg-white/5 p-5 backdrop-blur-xl sm:p-8">
            <p className="text-xs uppercase tracking-[0.3em] text-cyan-100/80">Selected Package Details</p>
            <h3 className="mt-3 text-2xl font-semibold sm:text-3xl">{selectedPackage.name}</h3>
            <div className="mt-5 grid gap-5 md:grid-cols-2">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-white/70">What is included</p>
                <ul className="mt-2 space-y-2 text-sm text-cyan-50/85">{selectedPackage.features.map((feature) => <li key={feature}>✔ {feature}</li>)}</ul>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-white/70">Best for</p>
                <ul className="mt-2 space-y-2 text-sm text-cyan-50/85">{selectedPackage.bestFor.map((item) => <li key={item}>✔ {item}</li>)}</ul>
              </div>
            </div>
          </article>

          <article className="rounded-3xl border border-white/15 bg-white/5 p-5 backdrop-blur-xl sm:p-8">
            <p className="text-xs uppercase tracking-[0.3em] text-cyan-100/80">Service Comparison</p>
            <h3 className="mt-3 text-2xl font-semibold sm:text-3xl">Plan Matrix</h3>
            <div className="mt-4 overflow-x-auto">
              <table className="w-full min-w-[640px] text-left text-sm">
                <thead>
                  <tr className="border-b border-white/15 text-white/80"><th className="px-3 py-3">Feature</th><th className="px-3 py-3">Basic</th><th className="px-3 py-3">Pro</th><th className="px-3 py-3">Elite</th></tr>
                </thead>
                <tbody className="text-cyan-50/90">{comparisonRows.map((row) => <tr key={row.label} className="border-b border-white/10"><td className="px-3 py-3">{row.label}</td><td className="px-3 py-3">{row.basic ? '✔' : '-'}</td><td className="px-3 py-3">{row.pro ? '✔' : '-'}</td><td className="px-3 py-3">{row.elite ? '✔' : '-'}</td></tr>)}</tbody>
              </table>
            </div>
          </article>
        </div>

        <aside className="space-y-6">
          <article className="rounded-3xl border border-white/15 bg-white/5 p-5 backdrop-blur-xl sm:p-6 lg:sticky lg:top-24">
            <p className="text-xs uppercase tracking-[0.3em] text-emerald-100/80">Estimator</p>
            <h3 className="mt-3 text-xl font-semibold">Build Your Package</h3>

            <div className="mt-4 space-y-3">
              {addOns.map((item) => {
                const price = billing === 'oneTime' ? item.oneTimePrice : item.retainerPrice;
                const checked = selectedAddOns.includes(item.id);
                return (
                  <label key={item.id} className="flex cursor-pointer items-start justify-between gap-3 rounded-xl border border-white/15 bg-slate-900/50 p-3">
                    <span><span className="block text-sm text-white">{item.name}</span><span className="text-xs text-cyan-100/75">+ {naira(price)}</span></span>
                    <input type="checkbox" checked={checked} onChange={() => toggleAddOn(item.id)} className="mt-1 h-4 w-4 accent-cyan-300" />
                  </label>
                );
              })}
            </div>

            <div className="mt-5 rounded-2xl border border-cyan-200/30 bg-cyan-300/10 p-4">
              <p className="text-sm text-cyan-50/90">Selected Plan: {selectedPackage.name}</p>
              <p className="mt-1 text-sm text-cyan-50/90">Base: {naira(packagePrice)}</p>
              <p className="mt-1 text-sm text-cyan-50/90">Add-ons: {naira(addOnTotal)}</p>
              <p className="mt-3 text-2xl font-semibold text-cyan-100">Total: {naira(totalEstimate)}</p>
            </div>

            <button type="button" onClick={() => setShowModal(true)} className="mt-5 w-full rounded-full border border-cyan-100/40 bg-cyan-300/20 px-5 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-50 transition hover:bg-cyan-300/35 sm:text-sm">Book Selected Package</button>
          </article>
        </aside>
      </section>

      <section className="mx-auto mt-8 max-w-6xl rounded-3xl border border-white/15 bg-white/5 p-5 backdrop-blur-xl sm:p-8 md:p-10">
        <p className="text-xs uppercase tracking-[0.3em] text-cyan-100/80">FAQs</p>
        <div className="mt-5 space-y-3">{faqs.map((faq, index) => <article key={faq.q} className="rounded-2xl border border-white/15 bg-slate-900/50"><button type="button" onClick={() => setOpenFaq(openFaq === index ? -1 : index)} className="flex w-full items-center justify-between gap-3 px-4 py-4 text-left"><span className="text-sm font-semibold sm:text-base">{faq.q}</span><span className="text-cyan-100">{openFaq === index ? '-' : '+'}</span></button>{openFaq === index && <p className="px-4 pb-4 text-sm leading-relaxed text-cyan-50/85">{faq.a}</p>}</article>)}</div>
      </section>

      {showModal && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm">
          <div className="w-full max-w-lg rounded-3xl border border-white/20 bg-slate-950/90 p-5 text-white shadow-[0_0_40px_rgba(34,211,238,0.35)] sm:p-7">
            <div className="mb-4 flex items-center justify-between"><h3 className="text-xl font-semibold">Package Booking Request</h3><button type="button" onClick={() => setShowModal(false)} className="rounded-lg border border-white/20 px-3 py-1 text-sm text-white/90 hover:bg-white/10">Close</button></div>
            <form className="space-y-3" onSubmit={(e) => { e.preventDefault(); setShowModal(false); }}>
              <input required placeholder="Name" className="w-full rounded-xl border border-white/20 bg-slate-900/70 px-4 py-3 text-sm outline-none focus:ring focus:ring-cyan-300/40" />
              <input required placeholder="Email" type="email" className="w-full rounded-xl border border-white/20 bg-slate-900/70 px-4 py-3 text-sm outline-none focus:ring focus:ring-cyan-300/40" />
              <input value={selectedPackage.name} readOnly className="w-full rounded-xl border border-white/20 bg-slate-900/70 px-4 py-3 text-sm text-white/80" />
              <input value={billing === 'oneTime' ? 'One-Time Event' : 'Retainer'} readOnly className="w-full rounded-xl border border-white/20 bg-slate-900/70 px-4 py-3 text-sm text-white/80" />
              <input value={`Estimated total: ${naira(totalEstimate)}`} readOnly className="w-full rounded-xl border border-white/20 bg-slate-900/70 px-4 py-3 text-sm text-white/80" />
              <button type="submit" className="mt-2 w-full rounded-full border border-cyan-100/40 bg-cyan-300/20 px-5 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-50 transition hover:bg-cyan-300/35 sm:text-sm">Submit Request</button>
            </form>
          </div>
        </div>
      )}
    </main>
  );
}

export default PackagesPage;



