/* eslint-disable @next/next/no-img-element */
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Efecto para cambiar el fondo al hacer scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Nosotros", href: "#nosotros" },
    { name: "Servicios", href: "#servicios" },
    { name: "Trabaja con Nosotros", href: "#trabaja" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-white/95 backdrop-blur-md shadow-md py-3" 
          : "bg-white py-6 shadow-sm" // Ahora siempre es blanco
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="relative w-64 h-20 transition-transform hover:scale-105">
          <img
            src="/assets/images/logo.png"
            alt="GN5 Logo"
            className="w-full h-full object-cover"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`font-bold text-sm uppercase tracking-wider transition-colors hover:text-[#fed518] ${
                scrolled ? "text-slate-800" : "text-black"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="#footer"
            className="bg-[#fed518] text-white px-6 py-2.5 rounded-full font-bold text-sm uppercase transition-all hover:bg-[#b39613] hover:shadow-lg active:scale-95"
          >
            Contáctanos
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`md:hidden p-2 rounded-lg outline-none ${
            scrolled ? "text-slate-800" : "text-white"
          }`}
        >
          <svg
            className="w-8 h-8 text-slate-900"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-white shadow-xl transition-all duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="flex flex-col p-6 gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-slate-800 font-bold uppercase py-2 border-b border-slate-100"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="#footer"
            onClick={() => setIsOpen(false)}
            className="bg-[#e91e63] text-white text-center py-4 rounded-xl font-bold uppercase mt-2"
          >
            Contáctanos
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;