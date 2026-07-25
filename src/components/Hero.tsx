import React from 'react';
import { Language } from '../types';
import { CLINIC_INFO } from '../data/clinicData';
import { ClinicLogo } from './ClinicLogo';
import { Star, MessageCircle, Calendar, ShieldCheck, Clock, Smile, ChevronRight } from 'lucide-react';

interface HeroProps {
  lang: Language;
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ lang, onOpenBooking }) => {
  const whatsappUrl = `https://wa.me/${CLINIC_INFO.whatsappNumberDigits}?text=${encodeURIComponent(
    lang === 'bm'
      ? "Salam Klinik Pergigian Alan Adlan, saya hendak bertanyakan tentang slot temujanji & rawatan pergigian."
      : "Hi Klinik Pergigian Alan Adlan, I would like to inquire about dental appointments and treatments."
  )}`;

  return (
    <section id="home" className="relative bg-transparent text-slate-800 min-h-[85vh] flex items-center overflow-hidden border-b border-slate-200">
      {/* Background Image with Light Soft Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=2000&q=80"
          alt="Klinik Pergigian Alan Adlan Modern Clinic"
          className="w-full h-full object-cover object-center scale-105 opacity-15"
        />
        <div className="absolute inset-0 hero-overlay"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Hero Text */}
          <div className="lg:col-span-7">
            
            {/* Google Rating Trust Badge */}
            <div className="inline-flex items-center gap-2.5 bg-white/90 backdrop-blur-md border border-[#B8860B]/40 px-4 py-2 rounded-full text-xs sm:text-sm font-medium mb-6 text-slate-900 shadow-sm">
              <div className="flex text-amber-500 gap-0.5 text-xs">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="border-l border-slate-200 pl-2 text-slate-800 font-bold">
                {lang === 'bm'
                  ? `Dinilai 4.8/5.0 daripada 330+ Ulasan Google`
                  : `Rated 4.8/5.0 from 330+ Google Reviews`}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold tracking-tight text-slate-900 leading-tight mb-6">
              {lang === 'bm' ? (
                <>
                  Kepakaran Pergigian Untuk <span className="gold-gradient-text italic">Senyuman Sempurna</span> Anda
                </>
              ) : (
                <>
                  Expert Dental Care for Your <span className="gold-gradient-text italic">Perfect Smile</span>
                </>
              )}
            </h1>

            {/* Sub-headline / Paragraph */}
            <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed mb-8 max-w-2xl">
              {lang === 'bm' ? (
                <>
                  Selamat datang ke <strong className="text-slate-900 font-semibold">Klinik Pergigian Alan Adlan</strong> di Seksyen 1, Bandar Baru Bangi. Kami menggabungkan teknologi pergigian moden, rawatan lembut minima kesakitan, dan sentuhan estetik berketepatan tinggi.
                </>
              ) : (
                <>
                  Welcome to <strong className="text-slate-900 font-semibold">Klinik Pergigian Alan Adlan</strong> in Seksyen 1, Bandar Baru Bangi. We combine advanced dental technology, gentle care, and aesthetic precision tailored for you.
                </>
              )}
            </p>

            {/* Call To Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="gold-bg-gradient text-slate-950 text-center font-bold px-7 py-4 rounded-full shadow-md hover:opacity-95 transition transform hover:-translate-y-0.5 flex items-center justify-center gap-2.5 text-sm sm:text-base"
              >
                <MessageCircle className="w-5 h-5 fill-slate-950 text-slate-950" />
                <span>{lang === 'bm' ? 'Tempah Temujanji WhatsApp' : 'Book WhatsApp Appointment'}</span>
              </a>

              <button
                onClick={onOpenBooking}
                className="bg-white hover:bg-slate-50 text-slate-900 border border-slate-300 hover:border-[#B8860B] text-center font-bold px-7 py-4 rounded-full shadow-xs backdrop-blur-md transition flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                <Calendar className="w-5 h-5 text-[#B8860B]" />
                <span>{lang === 'bm' ? 'Borang Tempahan Online' : 'Online Booking Form'}</span>
              </button>
            </div>

            {/* Key Highlights Badges */}
            <div className="grid grid-cols-3 gap-4 mt-12 pt-8 border-t border-slate-200 text-slate-700 text-xs sm:text-sm font-semibold">
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-5 h-5 text-[#B8860B] shrink-0" />
                <span>{lang === 'bm' ? 'Doktor Pakar Bertauliah' : 'Certified Specialists'}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-5 h-5 text-[#B8860B] shrink-0" />
                <span>{lang === 'bm' ? 'Buka 7 Hari (9AM-9PM)' : 'Open 7 Days (9AM-9PM)'}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Smile className="w-5 h-5 text-[#B8860B] shrink-0" />
                <span>{lang === 'bm' ? 'Mesra & Minima Sakit' : 'Gentle & Painless'}</span>
              </div>
            </div>

          </div>

          {/* Right Hero Card / Quick Feature Box */}
          <div className="lg:col-span-5">
            <div className="bg-white/95 backdrop-blur-md p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xl space-y-6">
              
              {/* Clinic Facade Location Highlight Badge */}
              <div className="p-3 bg-gradient-to-r from-amber-500/10 via-amber-400/5 to-transparent border border-amber-300/60 rounded-xl flex items-center gap-3">
                <div className="shrink-0">
                  <ClinicLogo size="xs" showTopText={false} showSideText={false} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-xs">
                    {lang === 'bm' ? 'Premis Utama Bandar Baru Bangi' : 'Bandar Baru Bangi Main Storefront'}
                  </h4>
                  <p className="text-[11px] text-slate-600">
                    Ground & 1st Floor, No 3 & 3A, Jalan 6/7B
                  </p>
                </div>
              </div>

              <div className="border-b border-slate-200 pb-4">
                <span className="text-xs uppercase font-bold tracking-wider text-[#B8860B]">
                  {lang === 'bm' ? 'TEMPAHAN RAWATAN POPULAR' : 'POPULAR TREATMENTS'}
                </span>
                <h3 className="text-xl font-serif font-bold text-slate-900 mt-1">
                  {lang === 'bm' ? 'Rancang Senyuman Anda Hari Ini' : 'Plan Your Smile Journey Today'}
                </h3>
              </div>

              <div className="space-y-3">
                <div className="p-3.5 rounded-xl bg-[#FAF8F5] border border-slate-200 flex items-center justify-between hover:border-[#B8860B]/70 transition group">
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">Ortodontik (Braces)</h4>
                    <p className="text-xs text-slate-600 font-normal">
                      {lang === 'bm' ? 'Deposit rendah & ansuran bulanan' : 'Low deposit & monthly installments'}
                    </p>
                  </div>
                  <a
                    href={`https://wa.me/${CLINIC_INFO.whatsappNumberDigits}?text=${encodeURIComponent('Hi, saya ingin bertanya tentang pakej Braces/Pendakap Gigi.')}`}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-lg bg-white border border-slate-300 text-[#B8860B] group-hover:bg-[#B8860B] group-hover:text-white transition shadow-xs"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </a>
                </div>

                <div className="p-3.5 rounded-xl bg-[#FAF8F5] border border-slate-200 flex items-center justify-between hover:border-[#B8860B]/70 transition group">
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">Pemutihan Gigi (Teeth Whitening)</h4>
                    <p className="text-xs text-slate-600 font-normal">
                      {lang === 'bm' ? 'Sesi klinikal 45-60 minit' : 'In-office 45-60 mins session'}
                    </p>
                  </div>
                  <a
                    href={`https://wa.me/${CLINIC_INFO.whatsappNumberDigits}?text=${encodeURIComponent('Hi, saya ingin pertanyaan pakej Pemutihan Gigi.')}`}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-lg bg-white border border-slate-300 text-[#B8860B] group-hover:bg-[#B8860B] group-hover:text-white transition shadow-xs"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </a>
                </div>

                <div className="p-3.5 rounded-xl bg-[#FAF8F5] border border-slate-200 flex items-center justify-between hover:border-[#B8860B]/70 transition group">
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">Scaling & Polishing (Cuci Gigi)</h4>
                    <p className="text-xs text-slate-600 font-normal">
                      {lang === 'bm' ? 'Pembersihan plak & karang gigi' : 'Deep plaque & tartar removal'}
                    </p>
                  </div>
                  <a
                    href={`https://wa.me/${CLINIC_INFO.whatsappNumberDigits}?text=${encodeURIComponent('Hi, saya nak booking slot Scaling & Polishing.')}`}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-lg bg-white border border-slate-300 text-[#B8860B] group-hover:bg-[#B8860B] group-hover:text-white transition shadow-xs"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Quick WhatsApp Callout inside card */}
              <div className="pt-2">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full text-center gold-bg-gradient text-slate-950 hover:opacity-95 font-bold py-3 px-4 rounded-xl shadow-md transition flex items-center justify-center gap-2 text-sm"
                >
                  <MessageCircle className="w-4 h-4 fill-slate-950 text-slate-950" />
                  <span>{lang === 'bm' ? 'Tanya Soalan via WhatsApp' : 'Ask Question via WhatsApp'}</span>
                </a>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
