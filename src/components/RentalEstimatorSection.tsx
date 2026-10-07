'use client';

import React, { useState } from 'react';
import { Calculator, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';

export default function RentalEstimatorSection() {
  const [equipmentType, setEquipmentType] = useState('crane');
  const [tonnage, setTonnage] = useState(50);
  const [duration, setDuration] = useState('monthly');
  const [includeOperator, setIncludeOperator] = useState(true);

  // Dynamic recommendation based on selection
  const getRecommendation = () => {
    if (equipmentType === 'crane') {
      if (tonnage <= 35) return 'Tadano / Kato 25T - 35T All-Terrain Mobile Crane';
      if (tonnage <= 80) return 'Liebherr / Kato 50T - 80T Crane Hidrolik dengan Jib 45m';
      return 'Sany / Liebherr 100T - 250T Heavy All-Terrain Crane dengan Fly Jib Berat';
    } else if (equipmentType === 'forklift') {
      if (tonnage <= 7) return 'Toyota / Isuzu 3T - 7T Forklift Industri Diesel';
      if (tonnage <= 15) return 'TCM / Kalmar 10T - 15T Forklift Industri Heavy Duty';
      return 'Kalmar / Caterpillar 20T - 32T Forklift Kontainer Heavy Duty';
    } else if (equipmentType === 'boom') {
      return 'Genie / JLG 26m - 43m Boom Lift Articulating Medan Kasar (4x4)';
    } else {
      return 'Kalmar / Sany 45 Ton Container Reach Stacker (Stacking 5 Tingkat)';
    }
  };

  const handleApplyToForm = () => {
    const durText = duration === 'daily' ? 'Shift Harian' : duration === 'weekly' ? 'Mingguan' : 'Kontrak Bulanan';
    const opText = includeOperator ? 'Dengan Operator SIO & Tim Rigging' : 'Lepas Kunci (Dry Lease)';
    const msg = `Halo PT. Atlas Teknindo Lestari, saya telah membuat estimasi sewa untuk: ${getRecommendation()} (Kapasitas: ${tonnage} Ton, Durasi: ${durText}, ${opText}). Mohon info ketersediaan unit dan penawaran resminya.`;
    window.open(`https://wa.me/6288888888888?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <section id="estimator" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="industrial-card p-8 lg:p-12 border-2 border-slate-200 bg-white relative overflow-hidden shadow-lg">
          {/* Top Hazard Accent */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#FFB800]"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Controls Column */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <div className="inline-flex items-center gap-2 text-[#D97706] text-xs font-bold uppercase tracking-wider mb-2">
                  <Calculator className="w-4 h-4" />
                  Kalkulator Estimasi Spesifikasi Unit
                </div>
                <h3 className="text-2xl sm:text-4xl font-extrabold uppercase font-heading text-slate-900 tracking-wide">
                  ESTIMASI SPESIFIKASI SEWA
                </h3>
                <p className="text-slate-600 text-sm mt-1">
                  Pilih parameter beban proyek Anda untuk mendapatkan rekomendasi unit alat berat dan rencana operasional yang optimal.
                </p>
              </div>

              {/* Step 1: Equipment Category */}
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                  1. Pilih Kategori Alat Berat
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {[
                    { id: 'crane', label: 'Mobile Crane' },
                    { id: 'forklift', label: 'Forklift' },
                    { id: 'boom', label: 'Boom Lift' },
                    { id: 'stacker', label: 'Reach Stacker' },
                  ].map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setEquipmentType(item.id)}
                      className={`p-3 text-xs font-bold uppercase tracking-wider rounded-lg border transition ${
                        equipmentType === item.id
                          ? 'bg-[#FFB800] text-[#0F141C] border-[#FFB800] shadow-md'
                          : 'bg-[#F8FAFC] text-slate-700 border-slate-200 hover:border-slate-400'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Estimated Tonnage / Payload slider */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs font-bold uppercase tracking-wider text-slate-700">
                  <span>2. Target Kapasitas / Beban Angkat</span>
                  <span className="text-[#D97706] font-mono text-base font-extrabold">{tonnage} Ton</span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="150"
                  step="5"
                  value={tonnage}
                  onChange={(e) => setTonnage(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#D97706]"
                />
                <div className="flex justify-between text-[11px] text-slate-500 font-mono">
                  <span>5T Ringan</span>
                  <span>50T Sedang</span>
                  <span>100T Berat</span>
                  <span>150T Ekstra Berat</span>
                </div>
              </div>

              {/* Step 3: Contract Type */}
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                  3. Rencana Durasi Sewa
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { id: 'daily', label: 'Shift Harian' },
                    { id: 'weekly', label: 'Mingguan' },
                    { id: 'monthly', label: 'Kontrak Bulanan' },
                  ].map((dur) => (
                    <button
                      key={dur.id}
                      type="button"
                      onClick={() => setDuration(dur.id)}
                      className={`p-2.5 text-xs font-semibold uppercase tracking-wider rounded-lg border transition ${
                        duration === dur.id
                          ? 'bg-amber-100 text-[#D97706] border-[#D97706]'
                          : 'bg-[#F8FAFC] text-slate-600 border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      {dur.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Checkbox Operator */}
              <div className="flex items-center gap-3 pt-2">
                <input
                  type="checkbox"
                  id="includeOperator"
                  checked={includeOperator}
                  onChange={(e) => setIncludeOperator(e.target.checked)}
                  className="w-4 h-4 rounded bg-white border-slate-300 text-[#D97706] focus:ring-[#D97706]"
                />
                <label htmlFor="includeOperator" className="text-xs font-medium text-slate-700 cursor-pointer">
                  Termasuk Operator Tersertifikasi SIO & Tim Rigging
                </label>
              </div>

            </div>

            {/* Right Result Column */}
            <div className="lg:col-span-5 bg-[#F8FAFC] p-6 lg:p-8 rounded-xl border border-slate-200 space-y-6 flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-slate-500 mb-4 border-b border-slate-200 pb-3">
                  <span>Konfigurasi Armada Direkomendasikan</span>
                  <span className="text-[#D97706] flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5" /> Rekomendasi Terbaik
                  </span>
                </div>

                <div className="p-4 bg-amber-50 rounded-lg border border-amber-300 mb-6">
                  <div className="text-xs text-[#D97706] uppercase font-bold tracking-wider mb-1">
                    Model Direkomendasikan
                  </div>
                  <div className="text-lg font-bold font-heading text-slate-900 uppercase leading-snug">
                    {getRecommendation()}
                  </div>
                </div>

                <div className="space-y-2 text-xs text-slate-700">
                  <div className="flex items-center justify-between py-1 border-b border-slate-200">
                    <span className="text-slate-500">Kapasitas Dipilih:</span>
                    <span className="font-mono text-slate-900 font-bold">{tonnage} Ton</span>
                  </div>
                  <div className="flex items-center justify-between py-1 border-b border-slate-200">
                    <span className="text-slate-500">Durasi Kontrak:</span>
                    <span className="capitalize font-semibold text-slate-800">
                      {duration === 'daily' ? 'Shift Harian' : duration === 'weekly' ? 'Mingguan' : 'Kontrak Bulanan'}
                    </span>
                  </div>
                  <div className="flex items-center justify-between py-1 border-b border-slate-200">
                    <span className="text-slate-500">Dukungan Crew:</span>
                    <span className="text-emerald-700 font-semibold flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5" /> {includeOperator ? 'Termasuk Operator SIO' : 'Lepas Kunci (Dry Lease)'}
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <button
                  type="button"
                  onClick={handleApplyToForm}
                  className="btn-yellow w-full py-3.5 text-xs flex items-center justify-center gap-2"
                >
                  <span>Terapkan Estimasi ke Pesan WhatsApp</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
