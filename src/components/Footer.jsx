import React from 'react';

function Footer() {
  return (
    <footer className="mt-14 bg-black text-white sm:mt-20">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 md:px-10">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h2 className="font-bold text-lg">REOtainment</h2>
            <p className="text-sm mt-2">
              Engineering unforgettable event experiences through hosting,
              strategy and technology.
            </p>
          </div>

          <div>
            <h3 className="font-bold">Quick Links</h3>
            <ul className="space-y-2 mt-2 text-sm sm:text-base">
              <li>Home</li>
              <li>About</li>
              <li>Services</li>
              <li>Packages</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold">Services</h3>
            <ul className="space-y-2 mt-2 text-sm sm:text-base">
              <li>Event Hosting</li>
              <li>Event Strategy</li>
              <li>Artist Management</li>
              <li>Production Management</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold">Contact</h3>
            <p className="mt-2 text-sm sm:text-base">Email: info@reotainment.com</p>
            <p className="text-sm sm:text-base">Phone: +234 xxx xxx xxxx</p>
          </div>
        </div>

        <div className="mt-10 border-t border-white/15 pt-6 text-center text-sm text-white/80">
          © 2026 REOtainment
        </div>
      </div>
    </footer>
  );
}

export default Footer;

