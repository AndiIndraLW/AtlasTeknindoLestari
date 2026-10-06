'use client';

import React from 'react';
import { UserCheck, ShieldAlert, Clock, CheckCircle, Flame } from 'lucide-react';

export default function WhyChooseUsSection() {
  return (
    <section id="why-us" className="py-20 lg:py-28 bg-[#F8FAFC] border-b border-slate-200 relative">
      {/* Visual Ambient Light */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-400/10 blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-[#D97706] text-xs font-bold uppercase tracking-widest px-3 py-1 bg-white rounded border border-slate-200 shadow-sm">
            <Flame className="w-3.5 h-3.5" />
            Uncompromising Operational Standards
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold uppercase font-heading text-slate-900 tracking-wide leading-tight">
            WHY LEADING INDUSTRIES CHOOSE <br className="hidden sm:inline" />
            <span className="text-[#D97706]">ATLAS TEKNINDO LESTARI</span>
          </h2>
          <p className="text-slate-600 text-base">
            Heavy lifting carries zero room for error. We combine state-of-the-art machinery with certified personnel to keep your site safe, efficient, and on schedule.
          </p>
        </div>

        {/* 3-Column Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Column 1: Certified Operators */}
          <div className="industrial-card p-8 flex flex-col justify-between relative group border-t-4 border-t-[#FFB800] bg-white">
            <div>
              <div className="w-14 h-14 bg-amber-100 border border-amber-300 rounded-xl flex items-center justify-center text-[#D97706] mb-6 group-hover:bg-[#FFB800] group-hover:text-[#0F141C] transition-colors">
                <UserCheck className="w-7 h-7 stroke-[2]" />
              </div>
              <div className="text-xs font-bold uppercase tracking-wider text-[#D97706] mb-1">Pillar 01</div>
              <h3 className="text-2xl font-bold uppercase font-heading text-slate-900 tracking-wide mb-3">
                CERTIFIED SIO OPERATORS
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Every equipment deployment comes backed by experienced, fully certified operators holding valid SIO (Surat Izin Operator) licenses from Depnaker and MIGAS.
              </p>
            </div>

            <ul className="space-y-2.5 pt-4 border-t border-slate-200 text-xs text-slate-700 font-medium">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#D97706] shrink-0" />
                <span>100% Depnaker K3 Safety Certified</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#D97706] shrink-0" />
                <span>Rigorous Pre-Job Safety Briefing (Toolbox Talks)</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#D97706] shrink-0" />
                <span>Zero Accident Record Mindset</span>
              </li>
            </ul>
          </div>

          {/* Column 2: Rigorously Maintained Fleet */}
          <div className="industrial-card p-8 flex flex-col justify-between relative group border-t-4 border-t-[#FFB800] bg-white">
            <div>
              <div className="w-14 h-14 bg-amber-100 border border-amber-300 rounded-xl flex items-center justify-center text-[#D97706] mb-6 group-hover:bg-[#FFB800] group-hover:text-[#0F141C] transition-colors">
                <ShieldAlert className="w-7 h-7 stroke-[2]" />
              </div>
              <div className="text-xs font-bold uppercase tracking-wider text-[#D97706] mb-1">Pillar 02</div>
              <h3 className="text-2xl font-bold uppercase font-heading text-slate-900 tracking-wide mb-3">
                RIGOROUSLY MAINTAINED FLEET
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Our machinery undergoes mandatory 50-point inspection before every deployment. We enforce OEM scheduled maintenance to prevent unexpected downtime on your job site.
              </p>
            </div>

            <ul className="space-y-2.5 pt-4 border-t border-slate-200 text-xs text-slate-700 font-medium">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#D97706] shrink-0" />
                <span>Genuine OEM Spare Parts Guarantee</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#D97706] shrink-0" />
                <span>Annual SILO Inspection & NDT Testing</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#D97706] shrink-0" />
                <span>99.8% Proven Fleet Uptime</span>
              </li>
            </ul>
          </div>

          {/* Column 3: 24/7 On-Site Support */}
          <div className="industrial-card p-8 flex flex-col justify-between relative group border-t-4 border-t-[#FFB800] bg-white">
            <div>
              <div className="w-14 h-14 bg-amber-100 border border-amber-300 rounded-xl flex items-center justify-center text-[#D97706] mb-6 group-hover:bg-[#FFB800] group-hover:text-[#0F141C] transition-colors">
                <Clock className="w-7 h-7 stroke-[2]" />
              </div>
              <div className="text-xs font-bold uppercase tracking-wider text-[#D97706] mb-1">Pillar 03</div>
              <h3 className="text-2xl font-bold uppercase font-heading text-slate-900 tracking-wide mb-3">
                24/7 ON-SITE SUPPORT
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Projects run around the clock, and so do we. Mobile service units and master technicians stand ready for immediate dispatch across Java, Sumatra, and outer islands.
              </p>
            </div>

            <ul className="space-y-2.5 pt-4 border-t border-slate-200 text-xs text-slate-700 font-medium">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#D97706] shrink-0" />
                <span>Dedicated Heavy Transport Lowbed Fleet</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#D97706] shrink-0" />
                <span>On-Site Mobile Mechanical Vans</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#D97706] shrink-0" />
                <span>Immediate Replacement Guarantee</span>
              </li>
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
}
