'use client';

import React, { useState } from 'react';
import { Send, CheckCircle2, ShieldCheck, PhoneCall, Mail, MapPin } from 'lucide-react';

export default function QuoteFormSection() {
  const [formData, setFormData] = useState({
    full_name: '',
    company: '',
    phone: '',
    email: '',
    equipment_category: 'Mobile & All-Terrain Cranes',
    capacity: '',
    start_date: '',
    end_date: '',
    location: '',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate API webhook post / CRM routing
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      console.log('Lead submission payload ready for CRM webhook:', formData);
    }, 800);
  };

  return (
    <section id="quote-form" className="py-20 lg:py-28 bg-[#F8FAFC] border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Contact & Hotline Info */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 text-[#D97706] text-xs font-bold uppercase tracking-wider mb-2">
                <span className="w-2.5 h-2.5 bg-[#FFB800] rounded-sm"></span>
                Lead Generation & Direct Inquiry
              </div>
              <h2 className="text-3xl sm:text-5xl font-extrabold uppercase font-heading text-slate-900 tracking-wide leading-tight">
                REQUEST AN EQUIPMENT <span className="text-[#D97706]">QUOTE</span>
              </h2>
              <p className="text-slate-600 text-sm mt-3 leading-relaxed">
                Fill out the project details below to receive a formal commercial proposal, equipment specification sheet, and mobilization timeline within 2 hours.
              </p>
            </div>

            <div className="space-y-4">
              <div className="industrial-card p-5 flex items-start gap-4 border-l-4 border-l-[#FFB800] bg-white">
                <PhoneCall className="w-6 h-6 text-[#D97706] shrink-0 mt-1" />
                <div>
                  <h4 className="text-sm font-bold uppercase font-heading text-slate-900">Direct Dispatch Hotline</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Speak with a heavy equipment logistics specialist</p>
                  <a href="tel:+62215558899" className="text-base font-bold font-mono text-[#D97706] hover:underline mt-1 block">
                    (021) 555-8899 / +62 812-3456-7890
                  </a>
                </div>
              </div>

              <div className="industrial-card p-5 flex items-start gap-4 border-l-4 border-l-[#FFB800] bg-white">
                <Mail className="w-6 h-6 text-[#D97706] shrink-0 mt-1" />
                <div>
                  <h4 className="text-sm font-bold uppercase font-heading text-slate-900">Commercial Proposal Office</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Send RFPs, engineering drawings, and site specs</p>
                  <a href="mailto:inquiry@atlasteknindo.co.id" className="text-sm font-semibold text-slate-700 hover:text-[#D97706] mt-1 block">
                    inquiry@atlasteknindo.co.id
                  </a>
                </div>
              </div>

              <div className="industrial-card p-5 flex items-start gap-4 border-l-4 border-l-[#FFB800] bg-white">
                <MapPin className="w-6 h-6 text-[#D97706] shrink-0 mt-1" />
                <div>
                  <h4 className="text-sm font-bold uppercase font-heading text-slate-900">Headquarters & Staging Yard</h4>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Kawasan Industri Jababeka Phase V, Jl. Industri Selatan No. 88, Cikarang, West Java
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-white border border-slate-200 rounded-lg text-xs text-slate-600 flex items-center gap-3 shadow-sm">
              <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
              <span>All quote requests are governed under standard ATL HSE & Safety Guidelines. Response guaranteed within 2 hours.</span>
            </div>
          </div>

          {/* Right Column: High-Converting Lead Gen Contact Form */}
          <div className="lg:col-span-7">
            <div className="industrial-card p-8 lg:p-10 border-2 border-slate-200 relative bg-white shadow-xl">
              
              {submitted ? (
                <div className="text-center py-12 space-y-6">
                  <div className="w-16 h-16 bg-emerald-100 border-2 border-emerald-500 rounded-full flex items-center justify-center text-emerald-600 mx-auto animate-bounce">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold uppercase font-heading text-slate-900 tracking-wide">
                    QUOTE REQUEST RECEIVED!
                  </h3>
                  <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="font-semibold text-slate-900">{formData.full_name}</span> from <span className="font-semibold text-slate-900">{formData.company || 'your organization'}</span>. Our heavy equipment logistics team is preparing your proposal for <span className="text-[#D97706] font-semibold">{formData.equipment_category}</span>.
                  </p>
                  <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg text-xs font-mono text-slate-600 max-w-md mx-auto">
                    Inquiry Reference: ATL-QT-{Math.floor(100000 + Math.random() * 900000)}
                  </div>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        full_name: '',
                        company: '',
                        phone: '',
                        email: '',
                        equipment_category: 'Mobile & All-Terrain Cranes',
                        capacity: '',
                        start_date: '',
                        end_date: '',
                        location: '',
                        notes: '',
                      });
                    }}
                    className="btn-outline text-xs px-6 py-3"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  <div className="border-b border-slate-200 pb-4">
                    <h3 className="text-xl font-extrabold uppercase font-heading text-slate-900 tracking-wide">
                      EQUIPMENT RENTAL INQUIRY FORM
                    </h3>
                    <p className="text-xs text-slate-500 mt-1">
                      Complete the form below to receive customized pricing and machine availability.
                    </p>
                  </div>

                  {/* 2-Column Responsive Input Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    
                    {/* Full Name */}
                    <div className="space-y-1.5">
                      <label htmlFor="full_name" className="text-xs font-bold uppercase tracking-wider text-slate-700">
                        Full Name <span className="text-[#D97706]">*</span>
                      </label>
                      <input
                        type="text"
                        id="full_name"
                        name="full_name"
                        required
                        placeholder="e.g. Ir. Budi Santoso"
                        value={formData.full_name}
                        onChange={handleChange}
                        className="industrial-input"
                      />
                    </div>

                    {/* Company Name */}
                    <div className="space-y-1.5">
                      <label htmlFor="company" className="text-xs font-bold uppercase tracking-wider text-slate-700">
                        Company / Contractor <span className="text-[#D97706]">*</span>
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        required
                        placeholder="e.g. PT. Konstruksi Utama"
                        value={formData.company}
                        onChange={handleChange}
                        className="industrial-input"
                      />
                    </div>

                    {/* Phone / WhatsApp */}
                    <div className="space-y-1.5">
                      <label htmlFor="phone" className="text-xs font-bold uppercase tracking-wider text-slate-700">
                        Phone / WhatsApp <span className="text-[#D97706]">*</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        placeholder="e.g. 0812-3456-7890"
                        value={formData.phone}
                        onChange={handleChange}
                        className="industrial-input"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-1.5">
                      <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-slate-700">
                        Corporate Email <span className="text-[#D97706]">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        placeholder="e.g. budi@konstruksi.co.id"
                        value={formData.email}
                        onChange={handleChange}
                        className="industrial-input"
                      />
                    </div>

                  </div>

                  {/* 2-Column Equipment Selection & Capacity */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    
                    {/* Equipment Category Dropdown */}
                    <div className="space-y-1.5">
                      <label htmlFor="equipment_category" className="text-xs font-bold uppercase tracking-wider text-slate-700">
                        Equipment Required <span className="text-[#D97706]">*</span>
                      </label>
                      <select
                        id="equipment_category"
                        name="equipment_category"
                        value={formData.equipment_category}
                        onChange={handleChange}
                        className="industrial-input cursor-pointer"
                      >
                        <option value="Mobile & All-Terrain Cranes">Mobile & All-Terrain Cranes (25T - 250T)</option>
                        <option value="Heavy Industrial Forklifts">Heavy Industrial Forklifts (3T - 32T)</option>
                        <option value="Boom Lifts & Aerial Platforms">Boom Lifts & Articulating Lifts (16m - 43m)</option>
                        <option value="Scissor Lifts">Scissor Lifts (Electric & Rough Terrain)</option>
                        <option value="Reach Stackers & Port Handlers">Reach Stackers & Container Handlers (45T)</option>
                        <option value="Crawler Cranes & Multi-Fleet">Crawler Cranes & Multi-Unit Package</option>
                      </select>
                    </div>

                    {/* Estimated Tonnage / Specs */}
                    <div className="space-y-1.5">
                      <label htmlFor="capacity" className="text-xs font-bold uppercase tracking-wider text-slate-700">
                        Estimated Tonnage / Boom Height
                      </label>
                      <input
                        type="text"
                        id="capacity"
                        name="capacity"
                        placeholder="e.g. 50 Ton / 40m Boom"
                        value={formData.capacity}
                        onChange={handleChange}
                        className="industrial-input"
                      />
                    </div>

                  </div>

                  {/* Rental Dates & Job Site Location */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    
                    <div className="space-y-1.5">
                      <label htmlFor="start_date" className="text-xs font-bold uppercase tracking-wider text-slate-700">
                        Rental Start Date <span className="text-[#D97706]">*</span>
                      </label>
                      <input
                        type="date"
                        id="start_date"
                        name="start_date"
                        required
                        value={formData.start_date}
                        onChange={handleChange}
                        className="industrial-input"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="end_date" className="text-xs font-bold uppercase tracking-wider text-slate-700">
                        Expected End Date
                      </label>
                      <input
                        type="date"
                        id="end_date"
                        name="end_date"
                        value={formData.end_date}
                        onChange={handleChange}
                        className="industrial-input"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="location" className="text-xs font-bold uppercase tracking-wider text-slate-700">
                        Project Site Location <span className="text-[#D97706]">*</span>
                      </label>
                      <input
                        type="text"
                        id="location"
                        name="location"
                        required
                        placeholder="e.g. Cikarang / Merak / Balikpapan"
                        value={formData.location}
                        onChange={handleChange}
                        className="industrial-input"
                      />
                    </div>

                  </div>

                  {/* Project Notes & Special Requirements */}
                  <div className="space-y-1.5">
                    <label htmlFor="notes" className="text-xs font-bold uppercase tracking-wider text-slate-700">
                      Project Notes / Special Ground Conditions
                    </label>
                    <textarea
                      id="notes"
                      name="notes"
                      rows={3}
                      placeholder="Specify ground soil conditions, indoor/outdoor restrictions, or SIO operator requirements..."
                      value={formData.notes}
                      onChange={handleChange}
                      className="industrial-input resize-none"
                    ></textarea>
                  </div>

                  {/* Form Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-yellow w-full py-4 text-sm flex justify-center items-center gap-2"
                  >
                    {loading ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin"></span>
                        Processing Request...
                      </span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Submit Equipment Quote Request</span>
                      </>
                    )}
                  </button>

                  <p className="text-[11px] text-slate-500 text-center">
                    Your data is securely stored and handled under strict confidentiality for commercial bidding purposes.
                  </p>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
