import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Language } from '../types';
import { CLINIC_INFO, getClinicOpenStatus } from '../data/clinicData';
import { MessageCircle, X, Calendar, MapPin, DollarSign, Clock } from 'lucide-react';

interface FloatingWhatsAppProps {
  lang: Language;
  onOpenBooking: () => void;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({ lang, onOpenBooking }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [clinicStatus, setClinicStatus] = useState(() => getClinicOpenStatus());

  useEffect(() => {
    const updateStatus = () => {
      setClinicStatus(getClinicOpenStatus());
    };
    updateStatus();
    const interval = setInterval(updateStatus, 30000); // refresh every 30s
    return () => clearInterval(interval);
  }, []);

  const mainWhatsappUrl = `https://wa.me/${CLINIC_INFO.whatsappNumberDigits}?text=${encodeURIComponent(
    lang === 'bm'
      ? "Salam Klinik Pergigian Alan Adlan, saya hendak bertanyakan tentang rawatan pergigian."
      : "Hi Klinik Pergigian Alan Adlan, I would like to ask about dental treatments."
  )}`;

  const playPopSound = () => {
    try {
      const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof window.AudioContext }).webkitAudioContext;
      if (!AudioContextClass) return;
      const ctx = new AudioContextClass();
      if (ctx.state === 'suspended') {
        ctx.resume();
      }
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(500, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(160, ctx.currentTime + 0.08);

      gain.gain.setValueAtTime(0.2, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.08);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 0.08);
    } catch {
      // Audio fallback handling
    }
  };

  const handleToggleMenu = () => {
    playPopSound();
    setMenuOpen((prev) => !prev);
  };

  return (
    <motion.div
      drag
      dragMomentum={false}
      dragSnapToOrigin={false}
      dragConstraints={{
        left: typeof window !== 'undefined' ? -window.innerWidth + 100 : -300,
        right: 20,
        top: typeof window !== 'undefined' ? -window.innerHeight + 100 : -600,
        bottom: 20,
      }}
      whileDrag={{ scale: 1.05, cursor: 'grabbing' }}
      initial={{ opacity: 0, y: 24, x: 16, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, x: 0, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.3, ease: [0.215, 0.61, 0.355, 1] }}
      className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 cursor-grab touch-none"
    >
      
      {/* Quick Menu Popover */}
      {menuOpen && (
        <div className="bg-white rounded-2xl p-4 shadow-2xl border border-slate-200 text-slate-800 w-72 space-y-2.5 animate-in fade-in slide-in-from-bottom-4 duration-200">
          <div className="border-b border-slate-200 pb-2.5 space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="relative">
                  <div className="w-8 h-8 rounded-full bg-emerald-600 flex items-center justify-center text-white shadow-xs shrink-0">
                    <MessageCircle className="w-4 h-4 fill-white text-white" />
                  </div>
                  <span
                    className={`absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full border-2 border-white ${
                      clinicStatus.isOpen ? 'bg-emerald-500' : 'bg-rose-500'
                    }`}
                  />
                </div>
                <div>
                  <h4 className="font-bold text-xs text-slate-900 leading-tight">
                    {lang === 'bm' ? 'Bantuan Pantas WhatsApp' : 'WhatsApp Quick Support'}
                  </h4>
                  <div className="flex items-center gap-1 mt-0.5">
                    <span
                      className={`inline-flex items-center gap-1 text-[10px] font-extrabold px-1.5 py-0.5 rounded-full ${
                        clinicStatus.isOpen
                          ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                          : 'bg-rose-50 text-rose-700 border border-rose-200'
                      }`}
                    >
                      <span
                        className={`w-1.5 h-1.5 rounded-full ${
                          clinicStatus.isOpen ? 'bg-emerald-500 animate-ping' : 'bg-rose-500'
                        }`}
                      />
                      {clinicStatus.isOpen
                        ? (lang === 'bm' ? 'BUKA SEKARANG' : 'OPEN NOW')
                        : (lang === 'bm' ? 'TUTUP SEKARANG' : 'CLOSED NOW')}
                    </span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setMenuOpen(false)}
                className="text-slate-400 hover:text-slate-700 p-1 rounded-md hover:bg-slate-100 transition"
                aria-label="Close menu"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Operating Hours Status Strip */}
            <div className="flex items-center gap-1.5 text-[11px] text-slate-600 bg-slate-50 px-2.5 py-1.5 rounded-lg border border-slate-150">
              <Clock className="w-3.5 h-3.5 text-[#B8860B] shrink-0" />
              <span className="truncate">
                {clinicStatus.isOpen
                  ? (lang === 'bm' ? clinicStatus.hoursTextBM : clinicStatus.hoursTextEN)
                  : (lang === 'bm'
                      ? `Buka semula: ${clinicStatus.nextOpeningBM}`
                      : `Opens next: ${clinicStatus.nextOpeningEN}`)}
              </span>
            </div>
          </div>

          <div className="space-y-1.5 text-xs">
            <button
              onClick={() => {
                setMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full text-left p-2.5 rounded-xl bg-[#FAF8F5] hover:bg-slate-100 font-semibold text-slate-800 border border-slate-200 flex items-center gap-2.5 transition"
            >
              <Calendar className="w-4 h-4 text-[#B8860B]" />
              <span>{lang === 'bm' ? 'Borang Tempahan Online' : 'Online Booking Form'}</span>
            </button>

            <a
              href={`https://wa.me/${CLINIC_INFO.whatsappNumberDigits}?text=${encodeURIComponent('Hi, saya ingin bertanya tentang Pakej Braces.')}`}
              target="_blank"
              rel="noreferrer"
              className="w-full text-left p-2.5 rounded-xl bg-[#FAF8F5] hover:bg-slate-100 font-semibold text-slate-800 border border-slate-200 flex items-center gap-2.5 transition"
            >
              <DollarSign className="w-4 h-4 text-[#B8860B]" />
              <span>{lang === 'bm' ? 'Pertanyaan Pakej Braces' : 'Inquire Braces Package'}</span>
            </a>

            <a
              href={CLINIC_INFO.googleMapsUrl}
              target="_blank"
              rel="noreferrer"
              className="w-full text-left p-2.5 rounded-xl bg-[#FAF8F5] hover:bg-slate-100 font-semibold text-slate-800 border border-slate-200 flex items-center gap-2.5 transition"
            >
              <MapPin className="w-4 h-4 text-[#B8860B]" />
              <span>{lang === 'bm' ? 'Lokasi & Navigation' : 'Location & Navigation'}</span>
            </a>
          </div>

          <a
            href={mainWhatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="w-full gold-bg-gradient text-slate-950 font-bold py-2.5 rounded-xl shadow-xs hover:opacity-95 transition text-center text-xs flex items-center justify-center gap-1.5 mt-1"
          >
            <MessageCircle className="w-4 h-4 fill-slate-950 text-slate-950" />
            <span>{lang === 'bm' ? 'Mula Sembang WhatsApp' : 'Start WhatsApp Chat'}</span>
          </a>
        </div>
      )}

      {/* Main Floating Trigger Circle */}
      <button
        onClick={handleToggleMenu}
        aria-label="Chat on WhatsApp"
        className="bg-[#10B981] hover:bg-[#059669] text-white w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 hover:shadow-[0_0_22px_rgba(212,175,55,0.7)] relative group"
      >
        <MessageCircle className="w-7 h-7 fill-white" />
        
        {/* Notification badge showing '1' */}
        {!menuOpen && (
          <span className="absolute -top-1 -right-1 min-w-[20px] h-[20px] px-1 bg-red-500 text-white text-[11px] font-extrabold flex items-center justify-center rounded-full border-2 border-white shadow-md animate-pulse">
            1
          </span>
        )}
      </button>

    </motion.div>
  );
};
