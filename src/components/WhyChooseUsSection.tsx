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
            Standar Operasional Tanpa Kompromi
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold uppercase font-heading text-slate-900 tracking-wide leading-tight">
            ALASAN INDUSTRI TERKEMUKA MEMILIH <br className="hidden sm:inline" />
            <span className="text-[#D97706]">ATLAS TEKNINDO LESTARI</span>
          </h2>
          <p className="text-slate-600 text-base">
            Pekerjaan heavy lifting tidak memiliki ruang untuk kesalahan. Kami menggabungkan armada canggih dengan personel berpengalaman untuk menjaga lokasi kerja Anda tetap aman, efisien, dan sesuai jadwal.
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
              <div className="text-xs font-bold uppercase tracking-wider text-[#D97706] mb-1">Pilar 01</div>
              <h3 className="text-2xl font-bold uppercase font-heading text-slate-900 tracking-wide mb-3">
                OPERATOR TERSERTIFIKASI SIO
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Setiap pengoperasian unit didukung oleh operator berpengalaman yang memiliki lisensi SIO (Surat Izin Operator) resmi dari Depnaker dan MIGAS.
              </p>
            </div>

            <ul className="space-y-2.5 pt-4 border-t border-slate-200 text-xs text-slate-700 font-medium">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#D97706] shrink-0" />
                <span>100% Tersertifikasi Keselamatan K3 Depnaker</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#D97706] shrink-0" />
                <span>Briefing Keselamatan Sebelum Kerja (Toolbox Talk)</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#D97706] shrink-0" />
                <span>Pola Pikir Tanpa Kecelakaan (Zero Accident)</span>
              </li>
            </ul>
          </div>

          {/* Column 2: Rigorously Maintained Fleet */}
          <div className="industrial-card p-8 flex flex-col justify-between relative group border-t-4 border-t-[#FFB800] bg-white">
            <div>
              <div className="w-14 h-14 bg-amber-100 border border-amber-300 rounded-xl flex items-center justify-center text-[#D97706] mb-6 group-hover:bg-[#FFB800] group-hover:text-[#0F141C] transition-colors">
                <ShieldAlert className="w-7 h-7 stroke-[2]" />
              </div>
              <div className="text-xs font-bold uppercase tracking-wider text-[#D97706] mb-1">Pilar 02</div>
              <h3 className="text-2xl font-bold uppercase font-heading text-slate-900 tracking-wide mb-3">
                ARMADA TERAWAT SECARA KETAT
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Peralatan kami melalui inspeksi 50 poin sebelum dikirim ke lokasi. Kami menerapkan perawatan berkala standar OEM untuk mencegah kendala teknis di lapangan.
              </p>
            </div>

            <ul className="space-y-2.5 pt-4 border-t border-slate-200 text-xs text-slate-700 font-medium">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#D97706] shrink-0" />
                <span>Jaminan Suku Cadang Asli OEM</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#D97706] shrink-0" />
                <span>Inspeksi SILO Tahunan & Pengujian NDT</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#D97706] shrink-0" />
                <span>Tingkat Kesiapan Alat Hingga 99.8%</span>
              </li>
            </ul>
          </div>

          {/* Column 3: 24/7 On-Site Support */}
          <div className="industrial-card p-8 flex flex-col justify-between relative group border-t-4 border-t-[#FFB800] bg-white">
            <div>
              <div className="w-14 h-14 bg-amber-100 border border-amber-300 rounded-xl flex items-center justify-center text-[#D97706] mb-6 group-hover:bg-[#FFB800] group-hover:text-[#0F141C] transition-colors">
                <Clock className="w-7 h-7 stroke-[2]" />
              </div>
              <div className="text-xs font-bold uppercase tracking-wider text-[#D97706] mb-1">Pilar 03</div>
              <h3 className="text-2xl font-bold uppercase font-heading text-slate-900 tracking-wide mb-3">
                DUKUNGAN TEKNIS 24/7 DI LOKASI
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Proyek Anda berjalan terus, dan begitu pula layanan kami. Unit servis bergerak dan teknisi ahli kami siap dikirim dengan cepat ke Jawa, Sumatra, dan seluruh Indonesia.
              </p>
            </div>

            <ul className="space-y-2.5 pt-4 border-t border-slate-200 text-xs text-slate-700 font-medium">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#D97706] shrink-0" />
                <span>Armada Transportasi Heavy Lowbed Sendiri</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#D97706] shrink-0" />
                <span>Mobil Servis Mekanik Bergerak Siaga</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#D97706] shrink-0" />
                <span>Garansi Penggantian Unit Cepat</span>
              </li>
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
}
