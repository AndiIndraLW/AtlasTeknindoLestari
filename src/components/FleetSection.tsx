'use client';

import React, { useState } from 'react';
import { Gauge, Check, ArrowRight } from 'lucide-react';

interface EquipmentItem {
  id: string;
  category: 'cranes' | 'forklifts' | 'boomlifts' | 'scissorlifts' | 'stackers';
  name: string;
  badge: string;
  capacity: string;
  reach: string;
  power: string;
  seriesNumber: string;
  idealFor: string;
  features: string[];
}

const fleetData: EquipmentItem[] = [
  {
    id: 'mobile-crane',
    category: 'cranes',
    name: 'Mobile Crane All-Terrain',
    badge: 'Tonase Tinggi',
    capacity: '25 Ton – 250 Ton',
    reach: 'Main Boom hingga 80m',
    power: 'Turbo Diesel 4x4 / 8x8',
    seriesNumber: 'ATL-CR250-AT',
    idealFor: 'Infrastruktur, Ereksi Baja & Perakitan Pabrik Berat',
    features: ['Termasuk Operator Tersertifikasi SIO', 'Ekstensi Jib Hidrolik', 'Indikator Beban Komputerisasi (LMI)'],
  },
  {
    id: 'heavy-forklift',
    category: 'forklifts',
    name: 'Forklift Industri Heavy Duty',
    badge: 'Material Berat',
    capacity: '3 Ton – 32 Ton',
    reach: 'Mast Duplex/Triplex 3m – 6m',
    power: 'Isuzu / Cummins Heavy Diesel',
    seriesNumber: 'ATL-FL320-HD',
    idealFor: 'Pergudangan, Pabrik Baja & Logistik Pabrik',
    features: ['Side Shifter & Fork Positioner', 'Tersedia Ban Mati (Solid Non-Marking)', 'Penyeimbang Counterweight Berat'],
  },
  {
    id: 'articulating-boomlift',
    category: 'boomlifts',
    name: 'Boom Lift Articulating & Telescopic',
    badge: 'Akses Ketinggian',
    capacity: 'Kapasitas Keranjang 230kg – 450kg',
    reach: 'Ketinggian Kerja 16m – 43m',
    power: '4x4 Diesel / Hibrida Elektrik',
    seriesNumber: 'ATL-BL430-RT',
    idealFor: 'Pekerjaan Pipa Ketinggian, Perawatan & Konstruksi',
    features: ['Rotasi Turntable Kontinu 360°', 'Ban Foam-Filled Medan Kasar', 'Model Zero Tailswing'],
  },
  {
    id: 'scissor-lift',
    category: 'scissorlifts',
    name: 'Scissor Lift Elektrik & Medan Kasar',
    badge: 'Akses Elevasi',
    capacity: 'Platform Luas 350kg – 680kg',
    reach: 'Ketinggian Kerja 8m – 18m',
    power: 'Baterai Elektrik / 4x4 Diesel',
    seriesNumber: 'ATL-SL180-E',
    idealFor: 'Pekerjaan Plafon Dalam Ruangan & Fasad Luar Gedung',
    features: ['Deck Ekstensi Roll-Out', 'Kontrol Kemudi & Angkat Proporsional', 'Perlindungan Lubang (Pothole) Otomatis'],
  },
  {
    id: 'reach-stacker',
    category: 'stackers',
    name: 'Reach Stacker Heavy Duty & Port Handler',
    badge: 'Logistik Pelabuhan',
    capacity: 'Kapasitas Angkat 45 Ton',
    reach: 'Penumpukan Kontainer Hingga 5 Tingkat',
    power: 'Volvo / Cummins Tier 3 Diesel',
    seriesNumber: 'ATL-RS450-PH',
    idealFor: 'Terminal Pelabuhan, Depo Kontainer & Hub Kargo Berat',
    features: ['Kunci Spreader Otomatis', 'Sistem Penimbangan Beban', 'Kabin Operator Ergonomis'],
  },
  {
    id: 'crawler-crane',
    category: 'cranes',
    name: 'Crawler Crane Heavy Duty',
    badge: 'Medan Ekstrem',
    capacity: '50 Ton – 150 Ton',
    reach: 'Lattice Boom hingga 64m',
    power: 'Chassis Crawler Rantai Berat',
    seriesNumber: 'ATL-CC150-HD',
    idealFor: 'Pekerjaan Tanah Lunak, Konstruksi Jembatan & Pertambangan',
    features: ['Track dengan Ground Clearance Tinggi', 'Winch Pengangkat Heavy Duty', 'Radius Putar Beban 360°'],
  },
];

export default function FleetSection() {
  const [activeTab, setActiveTab] = useState<string>('all');

  const filteredFleet = activeTab === 'all' 
    ? fleetData 
    : fleetData.filter(item => item.category === activeTab);

  return (
    <section id="fleet" className="py-20 lg:py-28 bg-white border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title & Subtitle */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="text-3xl sm:text-5xl font-extrabold uppercase font-heading text-slate-900 tracking-wide">
              ARMADA ALAT BERAT <span className="text-[#D97706]">KAMI</span>
            </h2>
            <p className="text-slate-600 text-base max-w-2xl mt-2">
              Peralatan yang dirawat secara ketat dan memenuhi standar keselamatan K3. Tersedia untuk kontrak proyek harian, bulanan, maupun jangka panjang.
            </p>
          </div>

          {/* Fleet Filter Tabs */}
          <div className="flex flex-wrap gap-2">
            {[
              { id: 'all', label: 'Semua Armada' },
              { id: 'cranes', label: 'Mobile Crane' },
              { id: 'forklifts', label: 'Forklift' },
              { id: 'boomlifts', label: 'Boom Lift' },
              { id: 'scissorlifts', label: 'Scissor Lift' },
              { id: 'stackers', label: 'Reach Stacker' },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-md transition-all ${
                  activeTab === tab.id
                    ? 'bg-[#FFB800] text-[#0F141C] shadow-md'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Fleet Card Grid (4 Columns responsive) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredFleet.map(item => (
            <div key={item.id} className="industrial-card group flex flex-col justify-between overflow-hidden bg-white border border-slate-200">
              
              {/* Card Header & Badge */}
              <div className="p-6 pb-4">
                <div className="flex justify-between items-start gap-2 mb-3">
                  <span className="px-2.5 py-1 rounded bg-amber-50 border border-amber-200 text-[#D97706] text-[11px] font-bold uppercase tracking-wider">
                    {item.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold uppercase font-heading text-slate-900 tracking-wide group-hover:text-[#D97706] transition-colors">
                  {item.name}
                </h3>
                <p className="text-xs text-slate-600 mt-1 line-clamp-2">
                  {item.idealFor}
                </p>
              </div>

              {/* Specification Table */}
              <div className="px-6 py-3 bg-[#F8FAFC] border-y border-slate-200 space-y-2 text-xs">
                <div className="flex justify-between items-center">
                  <span className="text-slate-500">Kapasitas Angkat:</span>
                  <span className="font-bold text-slate-900 font-mono">{item.capacity}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-500">Jangkauan / Mast:</span>
                  <span className="font-semibold text-slate-700">{item.reach}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-500">Mesin / Daya:</span>
                  <span className="font-semibold text-slate-700">{item.power}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-500">Nomor Seri:</span>
                  <span className="font-bold text-slate-900 font-mono">{item.seriesNumber}</span>
                </div>
              </div>

              {/* Feature Highlights */}
              <div className="p-6 pt-4 space-y-2 flex-grow">
                <div className="text-[11px] uppercase font-bold text-slate-400 tracking-wider mb-2">Keunggulan Utama Unit</div>
                {item.features.map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-slate-700">
                    <Check className="w-3.5 h-3.5 text-[#D97706] shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              {/* Card Footer Action */}
              <div className="p-6 pt-0">
                <a
                  href={`https://wa.me/6288888888888?text=Halo%20PT.%20Atlas%20Teknindo%20Lestari%2C%20saya%20tertarik%20untuk%20bertanya%20mengenai%20penyewaan%20${encodeURIComponent(item.name)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full btn-outline py-2.5 text-xs flex justify-center items-center gap-2 hover:bg-[#FFB800] hover:text-[#0F141C] hover:border-[#FFB800]"
                >
                  <span>Sewa Kategori Ini</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>
          ))}
        </div>

        {/* Banner Note below Fleet */}
        <div className="mt-12 p-6 rounded-xl bg-[#F8FAFC] border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-[#D97706]">
              <Gauge className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-slate-900 font-heading uppercase">Butuh Tonase Khusus atau Mesin Spesialis?</h4>
              <p className="text-xs text-slate-600 mt-0.5">Kami menyediakan transportasi alat berat khusus, trailer modular, dan konfigurasi rigging kustom sesuai kebutuhan Anda.</p>
            </div>
          </div>
          <a 
            href="https://wa.me/6288888888888?text=Halo%20PT.%20Atlas%20Teknindo%20Lestari%2C%20saya%20tertarik%20dengan%20tonase%20khusus%20atau%20mesin%20spesialis."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-yellow text-xs py-3 px-6 shrink-0"
          >
            Konsultasi dengan Spesialis
          </a>
        </div>

      </div>
    </section>
  );
}
