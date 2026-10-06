'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Truck, Menu, X, PhoneCall, ChevronRight } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white/95 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50 shadow-sm">
      {/* Top Banner Contact Line */}
      <div className="bg-[#0F141C] py-1.5 px-4 text-xs font-medium text-slate-200">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="text-slate-400">
              MIGAS & K3 Safety Certified Operations Across Indonesia
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="tel:+62215558899"
              className="flex items-center gap-1 text-slate-200 hover:text-yellow-400 transition"
            >
              <PhoneCall className="w-3.5 h-3.5 text-yellow-400" />
              <span>(021) 555-8899</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-11 h-11 bg-[#FFB800] rounded-lg flex items-center justify-center text-[#0F141C] font-black text-xl shadow-md group-hover:bg-yellow-400 transition">
            <Truck className="w-6 h-6 stroke-[2.5]" />
          </div>
          <div className="flex flex-col">
            <span className="text-xl sm:text-2xl font-extrabold tracking-wide uppercase font-heading text-slate-900 leading-none">
              ATLAS <span className="text-[#D97706]">TEKNINDO</span> LESTARI
            </span>
            <span className="text-[10px] tracking-widest text-slate-500 font-semibold uppercase mt-0.5">
              PT. Heavy Lifting & Equipment Rental
            </span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-semibold tracking-wide uppercase font-heading text-slate-700">
          <a href="#hero" className="hover:text-[#D97706] transition-colors py-2">
            Home
          </a>
          <a href="#fleet" className="hover:text-[#D97706] transition-colors py-2">
            Our Fleet
          </a>
          <a href="#why-us" className="hover:text-[#D97706] transition-colors py-2">
            Why Choose Us
          </a>
          <a href="#estimator" className="hover:text-[#D97706] transition-colors py-2">
            Rental Estimator
          </a>
          <a href="#quote-form" className="hover:text-[#D97706] transition-colors py-2">
            Contact Us
          </a>
        </nav>

        {/* CTA Button */}
        <div className="hidden lg:flex items-center gap-4">
          <a href="#quote-form" className="btn-yellow text-xs px-5 py-3">
            <span>Request a Quote</span>
            <ChevronRight className="w-4 h-4" />
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2.5 rounded-lg bg-slate-100 border border-slate-200 text-slate-800 hover:text-[#D97706] transition"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-4 pb-6 space-y-3 font-heading uppercase text-lg font-bold text-slate-800 shadow-xl">
          <a
            href="#hero"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 hover:text-[#D97706] border-b border-slate-100"
          >
            Home
          </a>
          <a
            href="#fleet"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 hover:text-[#D97706] border-b border-slate-100"
          >
            Our Fleet
          </a>
          <a
            href="#why-us"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 hover:text-[#D97706] border-b border-slate-100"
          >
            Why Choose Us
          </a>
          <a
            href="#estimator"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 hover:text-[#D97706] border-b border-slate-100"
          >
            Rental Estimator
          </a>
          <a
            href="#quote-form"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 hover:text-[#D97706] border-b border-slate-100"
          >
            Contact & Quote Form
          </a>
          <div className="pt-2">
            <a
              href="#quote-form"
              onClick={() => setMobileMenuOpen(false)}
              className="btn-yellow w-full py-3 text-center text-sm"
            >
              Request Equipment Quote
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
