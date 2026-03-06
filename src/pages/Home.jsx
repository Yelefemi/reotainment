import React from 'react';

import Hero from '../components/Hero';
import Services from '../components/Services';
import Packages from '../components/Packages';
import { reoPhotos } from '../assets/reoPhotoSet';

function Home() {
  return (
    <main className="relative overflow-hidden bg-[#050a14]">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_10%_10%,rgba(34,211,238,0.18),transparent_30%),radial-gradient(circle_at_90%_30%,rgba(16,185,129,0.16),transparent_35%)]" />
      <Hero />

      <section className="mx-auto mt-2 grid max-w-6xl gap-4 px-3 sm:px-4 md:grid-cols-2 md:px-10">
        <img src={reoPhotos.photo1} alt="MC REO portrait" className="h-72 w-full rounded-3xl border border-white/15 object-cover" />
        <img src={reoPhotos.photo2} alt="MC REO media profile" className="h-72 w-full rounded-3xl border border-white/15 object-cover" />
      </section>

      <Services />
      <Packages />
    </main>
  );
}

export default Home;
