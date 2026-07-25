import React from 'react';
import { Language } from '../types';
import { CLINIC_INFO } from '../data/clinicData';
import { ClinicLogo } from './ClinicLogo';
import { Award, ShieldCheck, Heart, Stethoscope, Sparkles, Quote, Calendar, CheckCircle, MessageCircle } from 'lucide-react';

interface FounderSectionProps {
  lang: Language;
}

export const FounderSection: React.FC<FounderSectionProps> = ({ lang }) => {
  return (
    <section className="py-16 bg-transparent border-b border-slate-200 overflow-hidden relative">
      {/* Decorative Gold Accent Background Circle */}
      <div className="absolute top-1/2 -right-36 w-96 h-96 rounded-full bg-amber-400/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-yellow-500/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-400/40 text-amber-900 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-4 h-4 text-amber-600" />
            <span>{lang === 'bm' ? 'Pengasas & Doktor Pergigian Utama' : 'Founder & Principal Dental Surgeon'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 leading-tight">
            {lang === 'bm' ? (
              <>
                Kepimpinan Profesional oleh <span className="gold-gradient-text">{CLINIC_INFO.doctorName}</span>
              </>
            ) : (
              <>
                Professional Leadership by <span className="gold-gradient-text">{CLINIC_INFO.doctorName}</span>
              </>
            )}
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            {lang === 'bm'
              ? 'Membawa kepakaran pergigian komprehensif, estetika, dan penjagaan peribadi beretika tinggi ke Bandar Baru Bangi.'
              : 'Bringing comprehensive dental expertise, aesthetics, and high-ethical personalized patient care to Bandar Baru Bangi.'}
          </p>
        </div>

        {/* Founder Card Container */}
        <div className="bg-white rounded-3xl border border-slate-200/90 shadow-xl overflow-hidden grid lg:grid-cols-12 gap-0">
          
          {/* Left Column: Founder Portrait Image Container (5 cols) */}
          <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 p-6 sm:p-8 flex flex-col justify-between relative text-white min-h-[420px] sm:min-h-[480px]">
            
            {/* Background Aesthetic Medallion Watermark */}
            <div className="absolute top-4 right-4 opacity-10 pointer-events-none">
              <ClinicLogo size="xl" showTopText={false} showSideText={false} />
            </div>

            {/* Top Badge Overlay */}
            <div className="relative z-10 flex items-center justify-between">
              <span className="px-3 py-1 bg-amber-400/20 border border-amber-400/50 text-amber-300 font-bold text-xs rounded-full flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                <span>MMC Registered #48102</span>
              </span>
              <span className="text-xs text-slate-300 font-serif italic">Est. Bandar Baru Bangi</span>
            </div>

            {/* Founder Professional Portrait Artwork */}
            <div className="my-auto py-6 relative z-10 flex flex-col items-center">
              <div className="relative w-48 h-60 sm:w-56 sm:h-72 rounded-2xl overflow-hidden border-4 border-amber-400/60 shadow-2xl bg-gradient-to-b from-slate-200 to-slate-400 group">
                <img
                  src="founder.jpg"
                  alt={CLINIC_INFO.doctorName}
                  loading="lazy"
                  decoding="async"
                  onError={(e) => {
                    // Fallback to high-quality dental surgeon portrait if local /founder.jpg isn't placed yet
                    e.currentTarget.src = "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=800&q=80";
                  }}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-3">
                  <span className="text-xs text-amber-300 font-bold bg-slate-900/80 backdrop-blur-md px-2.5 py-1 rounded-lg border border-amber-400/30">
                    Dr. Mohd Rusman Adlan
                  </span>
                </div>
              </div>

              {/* Doctor Name & Designation Title */}
              <div className="text-center mt-4 space-y-1">
                <h3 className="font-serif font-bold text-xl text-white">
                  {CLINIC_INFO.doctorName}
                </h3>
                <p className="text-xs text-amber-300 font-medium">
                  {lang === 'bm' ? CLINIC_INFO.doctorTitleBM : CLINIC_INFO.doctorTitleEN}
                </p>
              </div>
            </div>

            {/* Bottom Quick Feature Badges */}
            <div className="relative z-10 grid grid-cols-2 gap-2 pt-4 border-t border-slate-700/80 text-xs">
              <div className="flex items-center gap-2 bg-slate-800/80 p-2 rounded-xl border border-slate-700">
                <Award className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="text-slate-200 font-medium">Pengalaman Klinikal Mampan</span>
              </div>
              <div className="flex items-center gap-2 bg-slate-800/80 p-2 rounded-xl border border-slate-700">
                <Heart className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="text-slate-200 font-medium">Servis Mesra & Lembut</span>
              </div>
            </div>

          </div>

          {/* Right Column: Doctor Biography, Philosophy & Specialties (7 cols) */}
          <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between bg-white">
            <div className="space-y-6">
              
              {/* Doctor's Quote Box */}
              <div className="p-5 rounded-2xl bg-[#FAF8F5] border border-amber-300/60 relative">
                <Quote className="w-8 h-8 text-amber-400/40 absolute top-3 right-4" />
                <p className="text-sm sm:text-base italic text-slate-800 font-serif leading-relaxed pr-6">
                  {lang === 'bm'
                    ? '"Matlamat kami di Klinik Pergigian Alan Adlan bukan sekadar merawat sakit gigi, malah memastikan setiap pesakit pulang dengan senyuman yang lebih sihat, berkeyakinan, dan perkhidmatan yang telus."'
                    : '"Our mission at Klinik Pergigian Alan Adlan is not merely treating dental issues, but ensuring every patient walks out with a healthier, more confident smile through gentle, transparent care."'}
                </p>
                <p className="text-xs font-bold text-[#8B6508] mt-3 uppercase tracking-wider">
                  — {CLINIC_INFO.doctorName}
                </p>
              </div>

              {/* Bio Detail */}
              <div className="space-y-3 text-slate-600 text-sm leading-relaxed">
                <p>
                  {lang === 'bm' ? (
                    <>
                      Sebagai pengasas dan doktor pergigian utama, <strong className="text-slate-900 font-semibold">{CLINIC_INFO.doctorName}</strong> komited dalam memimpin klinik dengan standard etika profesional tertinggi. Beliau dan pasukan doktor senantiasa mengutamakan keselesaan pesakit serta menggunakan teknik pergigian moden yang kurang rasa sakit.
                    </>
                  ) : (
                    <>
                      As founder and principal surgeon, <strong className="text-slate-900 font-semibold">{CLINIC_INFO.doctorName}</strong> is dedicated to guiding the clinic with high professional standards. He and his team prioritize patient comfort and leverage modern, minimally invasive dental procedures.
                    </>
                  )}
                </p>
              </div>

              {/* Key Clinical Focus Areas */}
              <div>
                <h4 className="text-xs uppercase font-bold text-slate-900 tracking-wider mb-3">
                  {lang === 'bm' ? 'Fokus & Kepakaran Utama Klinik:' : 'Core Clinical Specializations:'}
                </h4>
                <div className="grid sm:grid-cols-2 gap-2.5 text-xs text-slate-800">
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-amber-50/70 border border-amber-200/60 font-medium">
                    <CheckCircle className="w-4 h-4 text-amber-600 shrink-0" />
                    <span>Estetik & Pemutihan Gigi</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-amber-50/70 border border-amber-200/60 font-medium">
                    <CheckCircle className="w-4 h-4 text-amber-600 shrink-0" />
                    <span>Implan Gigi & Pembedahan Mulut</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-amber-50/70 border border-amber-200/60 font-medium">
                    <CheckCircle className="w-4 h-4 text-amber-600 shrink-0" />
                    <span>Ortodontik & Braces (Gigi Besi)</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-amber-50/70 border border-amber-200/60 font-medium">
                    <CheckCircle className="w-4 h-4 text-amber-600 shrink-0" />
                    <span>Rawatan Salur Akar & Apikoektomi</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Bottom Call to Action Button */}
            <div className="pt-6 mt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
              <div className="text-xs text-slate-500">
                <span className="font-bold text-slate-800">{CLINIC_INFO.name}</span> • Bandar Baru Bangi
              </div>
              <a
                href={`https://wa.me/${CLINIC_INFO.whatsappNumberDigits}?text=${encodeURIComponent(`Salam Dr. ${CLINIC_INFO.doctorName}, saya ingin membuat temu janji konsultasi pergigian.`)}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 gold-bg-gradient text-slate-950 font-bold text-xs px-5 py-3 rounded-xl shadow-md hover:opacity-95 transition"
              >
                <MessageCircle className="w-4 h-4" />
                <span>{lang === 'bm' ? 'Konsultasi Bersama Dr. Adlan' : 'Consult with Dr. Adlan'}</span>
              </a>
            </div>

          </div>

        </div>

        {/* Clinical Doctors Team Showcase Grid */}
        <div className="mt-16 pt-12 border-t border-slate-200">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-400/40 text-amber-900 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-2">
              <Stethoscope className="w-4 h-4 text-amber-600" />
              <span>{lang === 'bm' ? 'Pasukan Doktor Pergigian Bertauliah' : 'Our Certified Dental Team'}</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900">
              {lang === 'bm' ? (
                <>
                  Doktor Pergigian Berpengalaman di <span className="gold-gradient-text">Alan Adlan</span>
                </>
              ) : (
                <>
                  Experienced Dental Surgeons at <span className="gold-gradient-text">Alan Adlan</span>
                </>
              )}
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm mt-2">
              {lang === 'bm'
                ? 'Barisan doktor pergigian bertauliah (Berdaftar MMC) yang bersedia memberikan perawatan profesional & kurang rasa sakit.'
                : 'Our team of MMC-registered dental surgeons ready to provide gentle, highly professional dental care.'}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Doctor 1: Dr. Mohd Rusman Adlan */}
            <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm hover:shadow-md transition flex flex-col items-center text-center group">
              <div className="w-36 h-48 rounded-xl overflow-hidden border-2 border-amber-400/60 shadow-sm bg-slate-100 mb-4 relative">
                <img
                  src="dr-rusman.jpg"
                  alt="Dr. Mohd Rusman Adlan"
                  onError={(e) => { e.currentTarget.src = "founder.jpg"; }}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                />
                <span className="absolute bottom-2 left-2 right-2 bg-slate-900/80 backdrop-blur-xs text-[10px] text-amber-300 font-bold py-0.5 rounded">
                  Pengasas / Founder
                </span>
              </div>
              <h4 className="font-serif font-bold text-slate-900 text-sm sm:text-base">
                Dr. Mohd Rusman Adlan
              </h4>
              <p className="text-xs text-amber-800 font-medium mt-0.5 mb-2">
                Doktor Pergigian Utama (MMC Registered)
              </p>
              <span className="text-[11px] text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full font-medium">
                Klinikal, Implan & Estetik
              </span>
            </div>

            {/* Doctor 2: Dr. Khairuldin Majid */}
            <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm hover:shadow-md transition flex flex-col items-center text-center group">
              <div className="w-36 h-48 rounded-xl overflow-hidden border-2 border-amber-400/60 shadow-sm bg-slate-100 mb-4 relative">
                <img
                  src="dr-khairuldin.jpg"
                  alt="Dr. Khairuldin Majid"
                  onError={(e) => { e.currentTarget.src = "aakhairuldinmajid.jfif"; }}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                />
                <span className="absolute bottom-2 left-2 right-2 bg-slate-900/80 backdrop-blur-xs text-[10px] text-amber-300 font-bold py-0.5 rounded">
                  Doktor Pergigian
                </span>
              </div>
              <h4 className="font-serif font-bold text-slate-900 text-sm sm:text-base">
                Dr. Khairuldin Majid
              </h4>
              <p className="text-xs text-amber-800 font-medium mt-0.5 mb-2">
                Dental Surgeon (MMC Registered)
              </p>
              <span className="text-[11px] text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full font-medium">
                Restoratif & Braces
              </span>
            </div>

            {/* Doctor 3: Dr. Syafizah */}
            <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm hover:shadow-md transition flex flex-col items-center text-center group">
              <div className="w-36 h-48 rounded-xl overflow-hidden border-2 border-amber-400/60 shadow-sm bg-slate-100 mb-4 relative">
                <img
                  src="dr-syafizah.jpg"
                  alt="Dr. Syafizah"
                  onError={(e) => { e.currentTarget.src = "aasyafizah.jfif"; }}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                />
                <span className="absolute bottom-2 left-2 right-2 bg-slate-900/80 backdrop-blur-xs text-[10px] text-amber-300 font-bold py-0.5 rounded">
                  Doktor Pergigian
                </span>
              </div>
              <h4 className="font-serif font-bold text-slate-900 text-sm sm:text-base">
                Dr. Syafizah
              </h4>
              <p className="text-xs text-amber-800 font-medium mt-0.5 mb-2">
                Dental Surgeon (MMC Registered)
              </p>
              <span className="text-[11px] text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full font-medium">
                Pencegahan & Salur Akar
              </span>
            </div>

            {/* Doctor 4: Dr. Haidar / Dental Surgeon */}
            <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm hover:shadow-md transition flex flex-col items-center text-center group">
              <div className="w-36 h-48 rounded-xl overflow-hidden border-2 border-amber-400/60 shadow-sm bg-slate-100 mb-4 relative">
                <img
                  src="dr-haidar.jpg"
                  alt="Dr. Haidar"
                  onError={(e) => { e.currentTarget.src = "aa-drhaidar.jpg"; }}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                />
                <span className="absolute bottom-2 left-2 right-2 bg-slate-900/80 backdrop-blur-xs text-[10px] text-amber-300 font-bold py-0.5 rounded">
                  Doktor Pergigian
                </span>
              </div>
              <h4 className="font-serif font-bold text-slate-900 text-sm sm:text-base">
                Dr. Haidar
              </h4>
              <p className="text-xs text-amber-800 font-medium mt-0.5 mb-2">
                Dental Surgeon (MMC Registered)
              </p>
              <span className="text-[11px] text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full font-medium">
                Pembedahan & Gigi Palsu
              </span>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
