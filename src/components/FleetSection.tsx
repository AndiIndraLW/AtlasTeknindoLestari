'use client';

import React, { useState } from 'react';
import { ShieldCheck, Gauge, Check, ArrowRight } from 'lucide-react';

interface EquipmentItem {
  id: string;
  category: 'cranes' | 'forklifts' | 'boomlifts' | 'scissorlifts' | 'stackers';
  name: string;
  badge: string;
  capacity: string;
  reach: string;
  power: string;
  idealFor: string;
  features: string[];
}

const fleetData: EquipmentItem[] = [
  {
    id: 'mobile-crane',
    category: 'cranes',
    name: 'All-Terrain Mobile Cranes',
    badge: 'High Tonnage',
    capacity: '25 Ton – 250 Ton',
    reach: 'Up to 80m Main Boom',
    power: 'Turbo Diesel 4x4 / 8x8',
    idealFor: 'Infrastructure, Steel Erection & Heavy Plant Assembly',
    features: ['SIO Certified Operator Included', 'Hydraulic Jib Extension', 'Computerized Load Indicator (LMI)'],
  },
  {
    id: 'heavy-forklift',
    category: 'forklifts',
    name: 'Heavy Industrial Forklifts',
    badge: 'Heavy Material',
    capacity: '3 Ton – 32 Ton',
    reach: '3m – 6m Duplex/Triplex Mast',
    power: 'Isuzu / Cummins Heavy Diesel',
    idealFor: 'Warehouses, Steel Mills & Factory Logistics',
    features: ['Side Shifter & Fork Positioner', 'Non-Marking Solid Tires Available', 'Heavy Counterweight Balance'],
  },
  {
    id: 'articulating-boomlift',
    category: 'boomlifts',
    name: 'Articulating & Telescopic Boom Lifts',
    badge: 'High Altitude',
    capacity: '230kg – 450kg Basket Cap',
    reach: '16m – 43m Working Height',
    power: '4x4 Diesel / Electric Hybrid',
    idealFor: 'High-Altitude Piping, Maintenance & Construction',
    features: ['360° Continuous Turntable Rotation', 'Rough Terrain Foam-Filled Tires', 'Zero Tailswing Models'],
  },
  {
    id: 'scissor-lift',
    category: 'scissorlifts',
    name: 'Electric & Rough-Terrain Scissor Lifts',
    badge: 'Aerial Access',
    capacity: '350kg – 680kg Large Platform',
    reach: '8m – 18m Working Height',
    power: 'Battery Electric / 4x4 Diesel',
    idealFor: 'Indoor Facility Overhead Work & Exterior Cladding',
    features: ['Roll-Out Extension Deck', 'Proportional Drive & Lift Controls', 'Automatic Pothole Protection'],
  },
  {
    id: 'reach-stacker',
    category: 'stackers',
    name: 'Heavy Reach Stackers & Port Handlers',
    badge: 'Port Logistics',
    capacity: '45 Ton Lifting Cap',
    reach: '5-High Container Stacking',
    power: 'Volvo / Cummins Tier 3 Diesel',
    idealFor: 'Port Terminals, Intermodal Yards & Heavy Freight Hubs',
    features: ['Automatic Spreader Lock', 'Load Weight Measuring System', 'Comfort Ergonomic Operator Cabin'],
  },
  {
    id: 'crawler-crane',
    category: 'cranes',
    name: 'Heavy Crawler Cranes',
    badge: 'Rough Terrain',
    capacity: '50 Ton – 150 Ton',
    reach: 'Up to 64m Lattice Boom',
    power: 'Heavy Tracked Crawler Chassis',
    idealFor: 'Soft Soil Groundwork, Bridge Construction & Mining',
    features: ['High Ground Clearance Tracks', 'Heavy Duty Hoisting Winch', '360° Load Swing Radius'],
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
              OUR HEAVY EQUIPMENT <span className="text-[#D97706]">FLEET</span>
            </h2>
            <p className="text-slate-600 text-base max-w-2xl mt-2">
              Rigorously maintained equipment compliant with K3 safety standards. Available for daily, monthly, or long-term project contracts.
            </p>
          </div>

          {/* Fleet Filter Tabs */}
          <div className="flex flex-wrap gap-2">
            {[
              { id: 'all', label: 'All Fleet' },
              { id: 'cranes', label: 'Cranes' },
              { id: 'forklifts', label: 'Forklifts' },
              { id: 'boomlifts', label: 'Boom Lifts' },
              { id: 'scissorlifts', label: 'Scissor Lifts' },
              { id: 'stackers', label: 'Reach Stackers' },
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
                  <span className="text-xs font-semibold text-slate-500 flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> Inspected
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
                  <span className="text-slate-500">Lifting Capacity:</span>
                  <span className="font-bold text-slate-900 font-mono">{item.capacity}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-500">Reach / Mast:</span>
                  <span className="font-semibold text-slate-700">{item.reach}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-500">Engine / Power:</span>
                  <span className="font-semibold text-slate-700">{item.power}</span>
                </div>
              </div>

              {/* Feature Highlights */}
              <div className="p-6 pt-4 space-y-2 flex-grow">
                <div className="text-[11px] uppercase font-bold text-slate-400 tracking-wider mb-2">Key Unit Advantages</div>
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
                  href={`#quote-form`}
                  className="w-full btn-outline py-2.5 text-xs flex justify-center items-center gap-2 hover:bg-[#FFB800] hover:text-[#0F141C] hover:border-[#FFB800]"
                >
                  <span>Book This Category</span>
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
              <h4 className="text-lg font-bold text-slate-900 font-heading uppercase">Custom Tonnage or Special Machinery Required?</h4>
              <p className="text-xs text-slate-600 mt-0.5">We source specialized heavy transport, modular trailers, and custom rigging configurations upon request.</p>
            </div>
          </div>
          <a href="#quote-form" className="btn-yellow text-xs py-3 px-6 shrink-0">
            Consult Heavy Specialist
          </a>
        </div>

      </div>
    </section>
  );
}
