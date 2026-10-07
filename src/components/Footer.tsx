import React from 'react';
import Link from 'next/link';
import { Truck, MapPin, Phone, Mail, Clock, ShieldCheck, Award, FileText } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0B0F17] border-t border-slate-800 text-slate-300 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Col 1: Company Profile */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#FFB800] rounded-lg flex items-center justify-center text-[#0F141C]">
                <Truck className="w-5 h-5 stroke-[2.5]" />
              </div>
              <span className="text-xl font-extrabold tracking-wide font-heading text-white uppercase">
                ATLAS <span className="text-[#FFB800]">TEKNINDO</span>
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              PT. Atlas Teknindo Lestari adalah mitra terdepan di Indonesia untuk pekerjaan heavy lifting, mobile crane tonase tinggi, forklift industri, dan platform kerja ketinggian.
            </p>
            <div className="pt-2 flex items-center gap-3 text-xs text-yellow-400 font-semibold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4" />
              <span>Tersertifikasi ISO 9001:2015 & K3</span>
            </div>
          </div>

          {/* Col 2: Equipment Fleet Quick Links */}
          <div>
            <h4 className="text-white font-heading uppercase tracking-wider font-bold text-lg mb-4 flex items-center gap-2">
              <span className="w-2 h-2 bg-[#FFB800] rounded-full"></span>
              Armada Peralatan
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>
                <a href="#fleet" className="hover:text-yellow-400 transition-colors flex items-center gap-1.5">
                  Mobile & Terrain Crane (25T - 250T)
                </a>
              </li>
              <li>
                <a href="#fleet" className="hover:text-yellow-400 transition-colors flex items-center gap-1.5">
                  Forklift Industri (3T - 32T)
                </a>
              </li>
              <li>
                <a href="#fleet" className="hover:text-yellow-400 transition-colors flex items-center gap-1.5">
                  Boom Lift Telescopic & Articulating
                </a>
              </li>
              <li>
                <a href="#fleet" className="hover:text-yellow-400 transition-colors flex items-center gap-1.5">
                  Scissor Lift Elektrik & Medan Kasar
                </a>
              </li>
              <li>
                <a href="#fleet" className="hover:text-yellow-400 transition-colors flex items-center gap-1.5">
                  Reach Stacker & Port Handler
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact & Headquarters */}
          <div>
            <h4 className="text-white font-heading uppercase tracking-wider font-bold text-lg mb-4 flex items-center gap-2">
              <span className="w-2 h-2 bg-[#FFB800] rounded-full"></span>
              Kantor Pusat
            </h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#FFB800] shrink-0 mt-0.5" />
                <span>
                  Kawasan Industri Jababeka Phase V, Jl. Industri Selatan No. 88, Cikarang, Bekasi, Jawa Barat 17530, Indonesia
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#FFB800] shrink-0" />
                <span>+62 (021) 555-8899 / +62 888-8888-8888</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#FFB800] shrink-0" />
                <span>inquiry@atlasteknindo.co.id</span>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-[#FFB800] shrink-0" />
                <span>Operasional 24/7 & Bantuan Darurat di Lokasi</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Corporate Governance & Safety */}
          <div>
            <h4 className="text-white font-heading uppercase tracking-wider font-bold text-lg mb-4 flex items-center gap-2">
              <span className="w-2 h-2 bg-[#FFB800] rounded-full"></span>
              Keselamatan & Kepatuhan
            </h4>
            <p className="text-xs text-slate-400 mb-4 leading-relaxed">
              Setiap unit dalam armada kami melalui pengujian NDT 100% dan inspeksi tersertifikasi. Seluruh operator mengantongi sertifikat SIO aktif.
            </p>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="p-2 bg-[#171E28] border border-slate-800 rounded flex items-center gap-1.5 text-slate-300">
                <Award className="w-3.5 h-3.5 text-yellow-400" />
                <span>K3 Depnaker</span>
              </div>
              <div className="p-2 bg-[#171E28] border border-slate-800 rounded flex items-center gap-1.5 text-slate-300">
                <FileText className="w-3.5 h-3.5 text-yellow-400" />
                <span>Terdaftar MIGAS</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>&copy; {new Date().getFullYear()} PT. Atlas Teknindo Lestari. Hak Cipta Dilindungi Undang-Undang.</p>
          <div className="flex gap-6">
            <a href="#hero" className="hover:text-slate-300 transition">Syarat & Ketentuan Sewa</a>
            <a href="#hero" className="hover:text-slate-300 transition">Protokol Keselamatan HSE</a>
            <a href="#hero" className="hover:text-slate-300 transition">Kebijakan Privasi</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
