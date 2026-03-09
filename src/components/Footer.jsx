import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  const contactInfo = {
    email: 'robbinmcreo@gmail.com',
    phone: '+234 813 950 5261',
    instagram: '@mcreo_',
    facebook: 'Mc Reo',
    twitter: '@mcreo22',
    youtube: 'MC Reo',
  };

  const socialLinks = {
    instagram: 'https://instagram.com/mcreo_',
    facebook: 'https://facebook.com/search/top/?q=Mc%20Reo',
    twitter: 'https://twitter.com/mcreo22',
    youtube: 'https://youtube.com/search?query=MC%20Reo',
  };

  const handleEmailClick = () => {
    window.location.href = `mailto:${contactInfo.email}`;
  };

  const handlePhoneClick = () => {
    window.location.href = `tel:${contactInfo.phone.replace(/\s+/g, '')}`;
  };

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
              <li><Link to="/" className="hover:text-cyan-400 transition">Home</Link></li>
              <li><Link to="/about" className="hover:text-cyan-400 transition">About</Link></li>
              <li><Link to="/services" className="hover:text-cyan-400 transition">Services</Link></li>
              <li><Link to="/packages" className="hover:text-cyan-400 transition">Packages</Link></li>
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
            <div className="mt-2 space-y-2 text-sm sm:text-base">
              <p>
                <button
                  onClick={handleEmailClick}
                  className="hover:text-cyan-400 transition cursor-pointer"
                >
                  Email: {contactInfo.email}
                </button>
              </p>
              <p>
                <button
                  onClick={handlePhoneClick}
                  className="hover:text-cyan-400 transition cursor-pointer"
                >
                  Phone: {contactInfo.phone}
                </button>
              </p>
            </div>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="mt-8 pt-6 border-t border-white/15">
          <h3 className="font-bold text-sm mb-4">Follow Us</h3>
          <div className="flex gap-4 flex-wrap">
            <a
              href={socialLinks.instagram}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 hover:bg-cyan-500/20 transition text-sm"
            >
              Instagram: {contactInfo.instagram}
            </a>
            <a
              href={socialLinks.facebook}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 hover:bg-blue-500/20 transition text-sm"
            >
              Facebook: {contactInfo.facebook}
            </a>
            <a
              href={socialLinks.twitter}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 hover:bg-sky-500/20 transition text-sm"
            >
              Twitter: {contactInfo.twitter}
            </a>
            <a
              href={socialLinks.youtube}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 hover:bg-red-500/20 transition text-sm"
            >
              YouTube: {contactInfo.youtube}
            </a>
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

