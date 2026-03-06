import React, { useState } from 'react';
import { reoPhotos } from '../assets/reoPhotoSet';

const initialForm = {
  name: '',
  email: '',
  phone: '',
  eventType: 'Corporate Event',
  serviceInterest: 'Event Strategy',
  eventDate: '',
  location: '',
  budget: '',
  message: '',
};

function Contact() {
  const whatsappLink =
    'https://wa.me/2348139505261?text=Hello%20MC%20REO%2C%20I%20want%20to%20book%20you%20for%20an%20event.';
  const [formData, setFormData] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const onChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData(initialForm);
  };

  return (
    <main className="relative overflow-hidden bg-[#050a14] px-3 pb-16 pt-10 text-white sm:px-4 md:px-10 md:pb-24 md:pt-14">
      <div className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(circle_at_12%_10%,rgba(34,211,238,0.18),transparent_35%),radial-gradient(circle_at_88%_28%,rgba(16,185,129,0.14),transparent_35%)]" />

      <section className="mx-auto max-w-6xl rounded-[2rem] border border-white/20 bg-white/10 p-6 text-center shadow-[0_0_60px_rgba(56,189,248,0.16)] backdrop-blur-2xl sm:p-10 md:p-14">
        <p className="mb-3 text-[10px] uppercase tracking-[0.3em] text-cyan-100/90 sm:text-xs sm:tracking-[0.45em]">Contact Us</p>
        <h1 className="mx-auto max-w-4xl text-3xl font-semibold leading-tight sm:text-4xl md:text-6xl">
          Let’s Plan Your Next Event
        </h1>
      </section>

      <section className="mx-auto mt-8 grid max-w-6xl gap-4 md:grid-cols-2">
        <img src={reoPhotos.photo1} alt="MC REO profile" className="h-72 w-full rounded-3xl border border-white/15 object-cover" />
        <img src={reoPhotos.photo6} alt="MC REO contact branding" className="h-72 w-full rounded-3xl border border-white/15 object-cover" />
      </section>

      <section className="mx-auto mt-8 grid max-w-6xl gap-6 lg:grid-cols-5">
        <aside className="space-y-4 lg:col-span-2">
          <article className="rounded-3xl border border-white/15 bg-white/5 p-5 backdrop-blur-xl sm:p-6">
            <p className="text-xs uppercase tracking-[0.3em] text-cyan-100/80">Direct Contact</p>
            <h2 className="mt-3 text-2xl font-semibold">Reach the Team</h2>
            <div className="mt-4 space-y-3 text-sm text-cyan-50/85 sm:text-base">
              <p><span className="text-white">Email:</span> robbinmcreo@gmail.com</p>
              <p><span className="text-white">Phone:</span> +234 813 950 5261</p>
              <p><span className="text-white">Instagram:</span> @mcreo_</p>
              <p><span className="text-white">X/Twitter:</span> @mcreo22</p>
              <p><span className="text-white">Facebook:</span> Mc Reo</p>
              <p><span className="text-white">YouTube:</span> MC Reo</p>
            </div>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex w-full items-center justify-center rounded-full border border-emerald-200/40 bg-emerald-300/20 px-5 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-50 transition hover:bg-emerald-300/35 sm:text-sm"
            >
              Book Now on WhatsApp
            </a>
          </article>

          <article className="rounded-3xl border border-white/15 bg-white/5 p-5 backdrop-blur-xl sm:p-6">
            <p className="text-xs uppercase tracking-[0.3em] text-emerald-100/80">Booking Flow</p>
            <ul className="mt-4 space-y-2 text-sm text-cyan-50/85">
              <li>1. Submit your event brief</li>
              <li>2. Get rate guidance and service recommendation</li>
              <li>3. Confirm timeline and scope</li>
              <li>4. Receive final booking document</li>
            </ul>
          </article>
        </aside>

        <section className="rounded-3xl border border-white/15 bg-white/5 p-5 backdrop-blur-xl sm:p-7 lg:col-span-3">
          <p className="text-xs uppercase tracking-[0.3em] text-cyan-100/80">Project Inquiry Form</p>
          <h2 className="mt-3 text-2xl font-semibold sm:text-3xl">Send Us Your Brief</h2>

          {submitted && (
            <div className="mt-4 rounded-xl border border-emerald-200/30 bg-emerald-300/10 px-4 py-3 text-sm text-emerald-50">
              Inquiry submitted successfully. Our team will contact you shortly.
            </div>
          )}

          <form className="mt-5 grid gap-3 sm:grid-cols-2" onSubmit={onSubmit}>
            <input required name="name" value={formData.name} onChange={onChange} placeholder="Full Name" className="rounded-xl border border-white/20 bg-slate-900/70 px-4 py-3 text-sm outline-none focus:ring focus:ring-cyan-300/40" />
            <input required type="email" name="email" value={formData.email} onChange={onChange} placeholder="Email Address" className="rounded-xl border border-white/20 bg-slate-900/70 px-4 py-3 text-sm outline-none focus:ring focus:ring-cyan-300/40" />
            <input name="phone" value={formData.phone} onChange={onChange} placeholder="Phone Number" className="rounded-xl border border-white/20 bg-slate-900/70 px-4 py-3 text-sm outline-none focus:ring focus:ring-cyan-300/40" />
            <input type="date" name="eventDate" value={formData.eventDate} onChange={onChange} className="rounded-xl border border-white/20 bg-slate-900/70 px-4 py-3 text-sm outline-none focus:ring focus:ring-cyan-300/40" />

            <select name="eventType" value={formData.eventType} onChange={onChange} className="rounded-xl border border-white/20 bg-slate-900/70 px-4 py-3 text-sm outline-none focus:ring focus:ring-cyan-300/40">
              <option>Corporate Event</option>
              <option>Wedding</option>
              <option>Conference</option>
              <option>Brand Activation</option>
              <option>Religious Event</option>
            </select>

            <select name="serviceInterest" value={formData.serviceInterest} onChange={onChange} className="rounded-xl border border-white/20 bg-slate-900/70 px-4 py-3 text-sm outline-none focus:ring focus:ring-cyan-300/40">
              <option>Event Strategy</option>
              <option>Event Hosting (MC/Compere)</option>
              <option>Radio/TV Promotions</option>
              <option>Social Media Management</option>
              <option>Public Relations (PR)</option>
            </select>

            <input name="location" value={formData.location} onChange={onChange} placeholder="Event Location" className="rounded-xl border border-white/20 bg-slate-900/70 px-4 py-3 text-sm outline-none focus:ring focus:ring-cyan-300/40 sm:col-span-2" />
            <input name="budget" value={formData.budget} onChange={onChange} placeholder="Estimated Budget (Naira)" className="rounded-xl border border-white/20 bg-slate-900/70 px-4 py-3 text-sm outline-none focus:ring focus:ring-cyan-300/40 sm:col-span-2" />
            <textarea required rows={5} name="message" value={formData.message} onChange={onChange} placeholder="Tell us about your event goals..." className="rounded-xl border border-white/20 bg-slate-900/70 px-4 py-3 text-sm outline-none focus:ring focus:ring-cyan-300/40 sm:col-span-2" />

            <button type="submit" className="sm:col-span-2 rounded-full border border-cyan-100/40 bg-cyan-300/20 px-5 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-50 transition hover:bg-cyan-300/35 sm:text-sm">Submit Inquiry</button>
          </form>
        </section>
      </section>
    </main>
  );
}

export default Contact;



