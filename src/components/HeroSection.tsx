'use client';

import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function HeroSection() {
  return (
    <section id="hero" className="relative bg-industrial-grid-light bg-[#F8FAFC] border-b border-slate-200 overflow-hidden min-h-[calc(100vh-80px)] flex flex-col justify-center">
      <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch min-h-[calc(100vh-80px)]">
        
        {/* Left Container - All Information */}
        <div className="lg:col-span-7 flex flex-col justify-center px-4 sm:px-8 lg:pl-16 lg:pr-10 py-8 lg:py-12 space-y-6">
          
          {/* Main Commanding Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight uppercase font-heading text-slate-900 leading-[1.08] text-left">
            HEAVY LIFTING SOLUTIONS <br className="hidden sm:inline" />
            <span className="text-[#D97706]">FOR ANY SCALE</span>
          </h1>

          {/* Brief Subheadline */}
          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed text-left max-w-2xl">
            Indonesia&apos;s trusted heavy equipment rental partner. Rent high-tonnage mobile cranes, industrial forklifts, boom lifts, and scissor lifts with certified SIO operators and 24/7 on-site support.
          </p>

          {/* Action CTAs */}
          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <a href="#quote-form" className="btn-yellow text-base px-8 py-4 text-center">
              <span>Request a Quote</span>
              <ArrowRight className="w-5 h-5" />
            </a>
            <a href="#fleet" className="btn-outline text-base px-8 py-4 text-center">
              <span>Explore Equipment Fleet</span>
            </a>
          </div>

          {/* Key Bullet Highlights */}
          <div className="flex flex-wrap gap-y-2 gap-x-6 text-xs sm:text-sm text-slate-700 font-semibold pt-1">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#D97706] shrink-0" /> 100% Certified K3 Operators
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#D97706] shrink-0" /> Daily, Weekly & Monthly Contracts
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#D97706] shrink-0" /> Nationwide Rapid Mobilization
            </span>
          </div>

          {/* Consolidated Metric Highlights Box */}
          <div className="pt-4">
            <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
              <div className="grid grid-cols-2 sm:grid-cols-4 divide-y divide-x-0 sm:divide-y-0 sm:divide-x divide-slate-200">
                
                <div className="p-4 text-center">
                  <div className="text-2xl sm:text-3xl font-black font-heading text-slate-900">500+</div>
                  <div className="text-[11px] uppercase font-bold text-[#D97706] tracking-wider mt-0.5">Fleet Heavy Units</div>
                  <div className="text-[10px] text-slate-500 mt-0.5">Cranes, Forklifts & Lifts</div>
                </div>

                <div className="p-4 text-center">
                  <div className="text-2xl sm:text-3xl font-black font-heading text-slate-900">99.8%</div>
                  <div className="text-[11px] uppercase font-bold text-[#D97706] tracking-wider mt-0.5">Operational Readiness</div>
                  <div className="text-[10px] text-slate-500 mt-0.5">Strict Maintenance</div>
                </div>

                <div className="p-4 text-center">
                  <div className="text-2xl sm:text-3xl font-black font-heading text-slate-900">15+ YRS</div>
                  <div className="text-[11px] uppercase font-bold text-[#D97706] tracking-wider mt-0.5">Industry Leadership</div>
                  <div className="text-[10px] text-slate-500 mt-0.5">Mining, Ports & Infra</div>
                </div>

                <div className="p-4 text-center">
                  <div className="text-2xl sm:text-3xl font-black font-heading text-slate-900">24/7</div>
                  <div className="text-[11px] uppercase font-bold text-[#D97706] tracking-wider mt-0.5">On-Site Dispatch</div>
                  <div className="text-[10px] text-slate-500 mt-0.5">Mobile Engineers</div>
                </div>

              </div>
            </div>
          </div>

        </div>

        {/* Right Container - Image (Full Viewport Height & Object Cover) */}
        <div className="lg:col-span-5 relative w-full h-[380px] lg:h-full min-h-full p-0 m-0 overflow-hidden">
          <img
            src="/assets/forklift.jpg"
            alt="PT Atlas Teknindo Lestari Forklift Equipment"
            className="lg:absolute lg:inset-0 w-full h-full object-cover object-center p-0 m-0 block"
          />
        </div>

      </div>
    </section>
  );
}
