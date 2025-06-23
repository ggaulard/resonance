// components/StickyHeader.tsx
"use client"; // Nécessaire si vous utilisez le App Router de Next.js 13+

import React, { useState } from "react";

// Un tableau pour gérer les liens de navigation de manière dynamique
const navItems = [
  { name: "Démo", href: "/", current: true },
  { name: "Companion", href: "/companion", current: false },
  { name: "Audio profile", href: "/audio-profile", current: false },
  { name: "AI Mingling", href: "/ai-mingling", current: false },
  { name: "Best friend", href: "/best-friend", current: false },
  { name: "Onboarding", href: "/onboarding", current: false },
  { name: "Voice recording", href: "/voice-recording", current: false },
];

const StickyHeader = () => {
  // État pour gérer l'ouverture/fermeture du menu mobile
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#0A0A1A]/80 backdrop-blur-lg">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8">
        {/* --- Logo --- */}
        <a href="#" className="flex-none">
          <span className="text-2xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
            Resonance
          </span>
        </a>

        {/* --- Liens de navigation pour ordinateur --- */}
        <ul className="hidden lg:flex lg:gap-x-12">
          {navItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className={`text-sm font-semibold leading-6 transition-colors duration-300 ${
                  item.current ? "text-white" : "text-gray-400 hover:text-white"
                }`}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        {/* --- Bouton d'action pour ordinateur --- */}
        <a
          href="#"
          className="hidden lg:block rounded-full bg-gradient-to-r from-pink-500 to-purple-600 px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:scale-105 transition-transform duration-300"
        >
          Commencer
        </a>

        {/* --- Bouton du menu Hamburger pour mobile --- */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="sr-only">Ouvrir le menu principal</span>
            {/* Icône "X" ou "Hamburger" en fonction de l'état */}
            {isMenuOpen ? (
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* --- Menu déroulant pour mobile --- */}
      {isMenuOpen && (
        <div className="lg:hidden" id="mobile-menu">
          <div className="space-y-1 px-2 pb-3 pt-2">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`block rounded-md px-3 py-2 text-base font-medium transition-colors duration-300 ${
                  item.current
                    ? "bg-gray-900 text-white"
                    : "text-gray-400 hover:bg-gray-700 hover:text-white"
                }`}
              >
                {item.name}
              </a>
            ))}
            <a
              href="#"
              className="block rounded-md px-3 py-4 text-base font-medium text-white bg-gradient-to-r from-pink-500 to-purple-600 text-center"
            >
              Commencer
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default StickyHeader;
