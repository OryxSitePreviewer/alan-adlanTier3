import React from 'react';
import { Language } from '../types';
import { CLINIC_INFO } from '../data/clinicData';
import { ClinicLogo } from './ClinicLogo';
import { Phone, MapPin, Clock, MessageCircle } from 'lucide-react';

interface FooterProps {
  lang: Language;
}

export const Footer: React.FC<FooterProps> = ({ lang }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-transparent text-slate-700 py-12 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          {/* Column 1: Brand Info */}
          <div className="md:col-span-1 space-y-4">
            <ClinicLogo size="sm" showTopText={false} showSideText={true} />

            <p className="text-xs text-slate-600 leading-relaxed font-normal">
              {lang === 'bm'
                ? 'Perkhidmatan pergigian pakar yang menyampaikan senyuman sihat dan berkeyakinan di Seksyen 1, Bandar Baru Bangi, Selangor.'
                : 'Expert dental services delivering healthy, confident smiles in Bandar Baru Bangi, Selangor.'}
            </p>

            <div className="pt-2">
              <a
                href={`https://wa.me/${CLINIC_INFO.whatsappNumberDigits}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-[#8B6508] hover:underline font-bold"
              >
                <MessageCircle className="w-3.5 h-3.5 text-[#B8860B]" />
                <span>WhatsApp Hotline: {CLINIC_INFO.phoneWhatsApp}</span>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-[#8B6508] font-bold text-xs mb-4 uppercase tracking-wider">
              {lang === 'bm' ? 'PAUTAN PANTAS' : 'QUICK LINKS'}
            </h4>
            <ul className="space-y-2.5 text-xs font-semibold text-slate-700">
              <li><a href="#home" className="hover:text-[#B8860B] transition">{lang === 'bm' ? 'Utama' : 'Home'}</a></li>
              <li><a href="#about" className="hover:text-[#B8860B] transition">{lang === 'bm' ? 'Mengenai Kami' : 'About Us'}</a></li>
              <li><a href="#services" className="hover:text-[#B8860B] transition">{lang === 'bm' ? 'Perkhidmatan Rawatan' : 'Services'}</a></li>
              <li><a href="#calculator" className="hover:text-[#B8860B] transition">{lang === 'bm' ? 'Kalkulator Harga' : 'Price Estimator'}</a></li>
              <li><a href="#reviews" className="hover:text-[#B8860B] transition">{lang === 'bm' ? 'Ulasan Pesakit Google' : 'Patient Reviews'}</a></li>
              <li><a href="#faq" className="hover:text-[#B8860B] transition">FAQ</a></li>
            </ul>
          </div>

          {/* Column 3: Treatments */}
          <div>
            <h4 className="text-[#8B6508] font-bold text-xs mb-4 uppercase tracking-wider">
              {lang === 'bm' ? 'SENARAI RAWATAN' : 'TREATMENTS'}
            </h4>
            <ul className="space-y-2.5 text-xs font-semibold text-slate-700">
              <li><a href="#services" className="hover:text-[#B8860B] transition">Ortodontik (Braces)</a></li>
              <li><a href="#services" className="hover:text-[#B8860B] transition">Implan Gigi (Implants)</a></li>
              <li><a href="#services" className="hover:text-[#B8860B] transition">Pemutihan Gigi (Whitening)</a></li>
              <li><a href="#services" className="hover:text-[#B8860B] transition">Rawatan Salur Akar</a></li>
              <li><a href="#services" className="hover:text-[#B8860B] transition">Cabutan Gigi Bongsu</a></li>
              <li><a href="#services" className="hover:text-[#B8860B] transition">Scaling & Polishing</a></li>
            </ul>
          </div>

          {/* Column 4: Contact info */}
          <div>
            <h4 className="text-[#8B6508] font-bold text-xs mb-4 uppercase tracking-wider">
              {lang === 'bm' ? 'HUBUNGI KLINIK' : 'GET IN TOUCH'}
            </h4>
            <p className="text-xs text-slate-600 mb-2.5 leading-relaxed font-normal">
              {CLINIC_INFO.address}
            </p>
            <p className="text-xs text-slate-600 mb-2 font-normal">
              Phone: {CLINIC_INFO.phoneLandline}
            </p>
            <p className="text-xs text-slate-600 mb-2 font-normal">
              WhatsApp: {CLINIC_INFO.phoneWhatsApp}
            </p>
            <div className="flex items-center gap-3 mt-3">
              <a href={CLINIC_INFO.socials.facebook} target="_blank" rel="noreferrer" className="text-xs font-semibold text-[#8B6508] hover:underline">
                Facebook
              </a>
              <span className="text-slate-300">•</span>
              <a href={CLINIC_INFO.socials.instagram} target="_blank" rel="noreferrer" className="text-xs font-semibold text-[#8B6508] hover:underline">
                Instagram
              </a>
            </div>
            <p className="text-xs text-emerald-700 font-bold mt-2">
              Open Daily: 9:00 AM - 9:00 PM
            </p>
          </div>

        </div>

        {/* Footer Bottom Line */}
        <div className="pt-8 border-t border-slate-200 text-center text-xs text-slate-500 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p>&copy; {currentYear} Klinik Pergigian Alan Adlan. Hak Cipta Terpelihara / All Rights Reserved.</p>
          <p>Kualiti Penjagaan Pergigian di Bandar Baru Bangi, Selangor.</p>
        </div>
      </div>
    </footer>
  );
};
