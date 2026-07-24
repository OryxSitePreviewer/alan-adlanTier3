import React from 'react';
import { Language } from '../types';
import { CLINIC_INFO } from '../data/clinicData';
import { ClinicLogo } from './ClinicLogo';
import { MapPin, Navigation, ExternalLink, Phone, ShieldCheck, Sparkles } from 'lucide-react';

interface ClinicStorefrontProps {
  lang: Language;
  compact?: boolean;
}

export const ClinicStorefront: React.FC<ClinicStorefrontProps> = ({ lang, compact = false }) => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-xl border border-slate-200 text-slate-800">
      
      {/* Header Banner representing the iconic facade */}
      <div className="relative bg-gradient-to-b from-[#1E293B] to-[#0F172A] p-6 text-white overflow-hidden">
        
        {/* Decorative Golden Tooth Emblem Background Accent */}
        <div className="absolute right-3 -bottom-6 opacity-20 pointer-events-none">
          <div className="w-48 h-48 rounded-full border-8 border-amber-400 flex items-center justify-center">
            <span className="font-serif font-black text-6xl text-amber-300">AA</span>
          </div>
        </div>

        <div className="relative z-10 flex flex-col gap-3">
          <div className="inline-flex items-center gap-2 bg-amber-400/20 border border-amber-400/40 text-amber-300 px-3 py-1 rounded-full text-xs font-semibold w-fit">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>{lang === 'bm' ? 'Fasad & Premis Utama Klinik' : 'Main Clinic Building & Storefront'}</span>
          </div>

          <div className="flex items-center gap-4">
            {/* Golden Tooth Logo Emblem matching official image */}
            <div className="bg-white/10 backdrop-blur-md p-2 rounded-2xl border border-amber-400/30 shrink-0">
              <ClinicLogo size="lg" showTopText={false} showSideText={false} />
            </div>

            <div>
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-white leading-tight">
                {CLINIC_INFO.name}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 font-medium mt-1 flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Seksyen 1, Bandar Baru Bangi</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Building Photo / Exterior Representation Container */}
      <div className="relative bg-slate-100 border-y border-slate-200">
        <div className="relative h-64 sm:h-80 overflow-hidden group">
          <img
            src="/ClinicAAstorefront.png"
            alt="Klinik Pergigian Alan Adlan Storefront Exterior"
            referrerPolicy="no-referrer"
            onError={(e) => {
              const target = e.currentTarget;
              if (target.src.includes('ClinicAAstorefront')) {
                target.src = "/clinic.jpg";
              } else if (target.src.includes('clinic.jpg')) {
                target.src = "/clinic.png";
              } else {
                target.src = "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80";
              }
            }}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent flex flex-col justify-end p-5 text-white">
            <div className="bg-slate-900/90 backdrop-blur-md border border-amber-400/40 p-3 sm:p-4 rounded-xl shadow-lg">
              <p className="text-xs sm:text-sm font-bold text-amber-300 mb-1 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-amber-400" />
                <span>Ground Floor & First Floor (No 3 & 3A)</span>
              </p>
              <p className="text-xs text-slate-200 font-normal leading-relaxed">
                {lang === 'bm'
                  ? 'Klinik dua tingkat bersaiz luas lengkap dengan bilik rawatan moden, surau, dan fasiliti mesra pesakit.'
                  : 'Spacious two-storey dental clinic with modern surgery rooms, prayer room, and patient-friendly facilities.'}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Storefront Signboard Info Panel (matching the photo details) */}
      <div className="p-5 sm:p-6 bg-[#FAF8F5] space-y-4">
        
        {/* Treatment Oval Sign replica from storefront photo */}
        <div className="bg-white border border-slate-200 rounded-xl p-3 shadow-xs text-center">
          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block mb-1.5">
            {lang === 'bm' ? 'Perkhidmatan Utama Fasad Klinik' : 'Key Dental Specialties'}
          </span>
          <div className="flex flex-wrap items-center justify-center gap-1.5 text-xs font-semibold text-slate-800">
            <span className="px-2.5 py-1 bg-amber-50 text-amber-900 border border-amber-200/60 rounded-full">ESTETIK</span>
            <span className="text-slate-300">•</span>
            <span className="px-2.5 py-1 bg-amber-50 text-amber-900 border border-amber-200/60 rounded-full">IMPLAN</span>
            <span className="text-slate-300">•</span>
            <span className="px-2.5 py-1 bg-amber-50 text-amber-900 border border-amber-200/60 rounded-full">ORTODONTIK</span>
            <span className="text-slate-300">•</span>
            <span className="px-2.5 py-1 bg-amber-50 text-amber-900 border border-amber-200/60 rounded-full">PEMUTIHAN GIGI</span>
            <span className="text-slate-300">•</span>
            <span className="px-2.5 py-1 bg-amber-50 text-amber-900 border border-amber-200/60 rounded-full">RAWATAN SALUR AKAR</span>
          </div>
        </div>

        {/* Address & Navigation Quick Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
          <div className="text-xs text-slate-600 space-y-0.5 text-center sm:text-left">
            <p className="font-bold text-slate-900">{CLINIC_INFO.address}</p>
            <p className="flex items-center justify-center sm:justify-start gap-1 text-slate-500 mt-1">
              <Phone className="w-3.5 h-3.5 text-amber-600" />
              <span>{CLINIC_INFO.phoneLandline} | {CLINIC_INFO.phoneWhatsApp}</span>
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <a
              href={CLINIC_INFO.googleMapsUrl}
              target="_blank"
              rel="noreferrer"
              className="px-3.5 py-2 rounded-xl bg-white border border-slate-300 text-slate-800 font-bold text-xs hover:border-amber-500 hover:text-amber-800 transition flex items-center gap-1.5 shadow-xs"
            >
              <Navigation className="w-3.5 h-3.5 text-amber-600" />
              <span>Google Maps</span>
            </a>
            <a
              href={CLINIC_INFO.wazeUrl}
              target="_blank"
              rel="noreferrer"
              className="px-3.5 py-2 rounded-xl bg-amber-500 text-slate-950 font-bold text-xs hover:bg-amber-400 transition flex items-center gap-1.5 shadow-xs"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Waze</span>
            </a>
          </div>
        </div>

      </div>

    </div>
  );
};
