import React, { useState, useEffect } from 'react';
import { Language } from '../types';
import { CLINIC_INFO } from '../data/clinicData';
import { ClinicLogo } from './ClinicLogo';
import { Clock, MapPin, Phone, MessageCircle, Menu, X, Globe, Calendar, CheckCircle2 } from 'lucide-react';

interface HeaderProps {
  lang: Language;
  setLang: (l: Language) => void;
  onOpenBooking: () => void;
}

export const Header: React.FC<HeaderProps> = ({ lang, setLang, onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isOpenNow, setIsOpenNow] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);

    // Check clinic open hours (9:00 to 21:00)
    const now = new Date();
    const hour = now.getHours();
    setIsOpenNow(hour >= 9 && hour < 21);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => {
    setLang(lang === 'bm' ? 'en' : 'bm');
  };

  const bookingWhatsappUrl = `https://wa.me/${CLINIC_INFO.whatsappNumberDigits}?text=${encodeURIComponent(
    lang === 'bm'
      ? "Salam Klinik Pergigian Alan Adlan, saya ingin membuat temujanji rawatan pergigian."
      : "Hi Klinik Pergigian Alan Adlan, I would like to book a dental appointment."
  )}`;

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* TOP ANNOUNCEMENT & CONTACT BAR */}
      <div className="bg-[#FAF8F5] text-slate-700 text-xs py-2 px-4 border-b border-slate-200">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
          
          <div className="flex items-center flex-wrap justify-center md:justify-start gap-4 font-medium">
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#B8860B]" />
              <span>{lang === 'bm' ? CLINIC_INFO.hoursBM : CLINIC_INFO.hoursEN}</span>
            </span>
            <span className="hidden sm:inline-block border-l border-slate-300 h-3"></span>
            <span className="hidden sm:flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#B8860B]" />
              <span>Seksyen 1, Bandar Baru Bangi</span>
            </span>
            
            {/* Live Status Badge */}
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800 border border-emerald-300 ml-2">
              <span className={`w-1.5 h-1.5 rounded-full ${isOpenNow ? 'bg-emerald-600 animate-pulse' : 'bg-amber-500'}`}></span>
              {isOpenNow ? (lang === 'bm' ? 'BUKA SEKARANG' : 'OPEN NOW') : (lang === 'bm' ? 'BUKA 9 AM' : 'OPENS 9 AM')}
            </span>
          </div>

          <div className="flex items-center gap-5 font-semibold text-slate-800">
            <a href={`tel:${CLINIC_INFO.phoneLandline.split('/')[0].replace(/\s+/g, '')}`} className="hover:text-[#B8860B] transition flex items-center gap-1">
              <Phone className="w-3.5 h-3.5 text-[#B8860B]" />
              <span>03-8970 1591</span>
            </a>
            <a href={`https://wa.me/${CLINIC_INFO.whatsappNumberDigits}`} target="_blank" rel="noreferrer" className="hover:text-[#B8860B] transition flex items-center gap-1">
              <MessageCircle className="w-3.5 h-3.5 text-[#B8860B]" />
              <span>019-425 1609</span>
            </a>

            {/* Language Switcher */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1 text-[#8B6508] hover:text-[#B8860B] bg-white px-2.5 py-1 rounded-md text-[11px] font-bold border border-slate-300 shadow-xs transition"
              title="Switch Language"
            >
              <Globe className="w-3 h-3 text-[#B8860B]" />
              <span>{lang === 'bm' ? 'BM' : 'EN'}</span>
              <span className="text-slate-300">|</span>
              <span className="text-slate-500">{lang === 'bm' ? 'EN' : 'BM'}</span>
            </button>
          </div>

        </div>
      </div>

      {/* MAIN NAVIGATION BAR */}
      <div className={`bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs transition-all duration-300 ${isScrolled ? 'py-3' : 'py-4'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          
          {/* Official Clinic Logo */}
          <a href="#home" className="flex items-center gap-2 group py-1">
            <ClinicLogo size="sm" showTopText={false} showSideText={true} />
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-7 font-semibold text-slate-700 text-sm">
            <a href="#home" className="hover:text-[#B8860B] transition py-1 border-b-2 border-transparent hover:border-[#B8860B]">
              {lang === 'bm' ? 'Utama' : 'Home'}
            </a>
            <a href="#about" className="hover:text-[#B8860B] transition py-1 border-b-2 border-transparent hover:border-[#B8860B]">
              {lang === 'bm' ? 'Mengenai Kami' : 'About Us'}
            </a>
            <a href="#services" className="hover:text-[#B8860B] transition py-1 border-b-2 border-transparent hover:border-[#B8860B]">
              {lang === 'bm' ? 'Perkhidmatan' : 'Services'}
            </a>
            <a href="#calculator" className="hover:text-[#B8860B] transition py-1 border-b-2 border-transparent hover:border-[#B8860B]">
              {lang === 'bm' ? 'Anggaran Harga' : 'Price Estimator'}
            </a>
            <a href="#reviews" className="hover:text-[#B8860B] transition py-1 border-b-2 border-transparent hover:border-[#B8860B]">
              {lang === 'bm' ? 'Ulasan' : 'Reviews'}
            </a>
            <a href="#faq" className="hover:text-[#B8860B] transition py-1 border-b-2 border-transparent hover:border-[#B8860B]">
              FAQ
            </a>
            <a href="#contact" className="hover:text-[#B8860B] transition py-1 border-b-2 border-transparent hover:border-[#B8860B]">
              {lang === 'bm' ? 'Hubungi' : 'Contact'}
            </a>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenBooking}
              className="bg-[#FAF8F5] hover:bg-slate-100 text-slate-800 font-bold text-xs px-4 py-2.5 rounded-full border border-slate-300 hover:border-[#B8860B] transition shadow-xs flex items-center gap-1.5"
            >
              <Calendar className="w-3.5 h-3.5 text-[#B8860B]" />
              <span>{lang === 'bm' ? 'Tempah Slot' : 'Book Appointment'}</span>
            </button>

            <a
              href={bookingWhatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="gold-bg-gradient hover:opacity-95 text-slate-950 font-bold text-xs px-4 py-2.5 rounded-full shadow-md hover:shadow-lg transition duration-300 transform hover:-translate-y-0.5 flex items-center gap-1.5"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-slate-950 text-slate-950" />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-700 hover:text-slate-900 focus:outline-none"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-5 pt-3 pb-6 space-y-3 shadow-xl">
          <a
            href="#home"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-slate-800 hover:text-[#B8860B] font-medium border-b border-slate-100"
          >
            {lang === 'bm' ? 'Utama' : 'Home'}
          </a>
          <a
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-slate-800 hover:text-[#B8860B] font-medium border-b border-slate-100"
          >
            {lang === 'bm' ? 'Mengenai Kami' : 'About Us'}
          </a>
          <a
            href="#services"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-slate-800 hover:text-[#B8860B] font-medium border-b border-slate-100"
          >
            {lang === 'bm' ? 'Perkhidmatan & Rawatan' : 'Services & Treatments'}
          </a>
          <a
            href="#calculator"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-slate-800 hover:text-[#B8860B] font-medium border-b border-slate-100"
          >
            {lang === 'bm' ? 'Kalkulator Anggaran Harga' : 'Price Calculator'}
          </a>
          <a
            href="#reviews"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-slate-800 hover:text-[#B8860B] font-medium border-b border-slate-100"
          >
            {lang === 'bm' ? 'Ulasan Pesakit Google (4.8★)' : 'Google Reviews (4.8★)'}
          </a>
          <a
            href="#faq"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-slate-800 hover:text-[#B8860B] font-medium border-b border-slate-100"
          >
            FAQ Soalan Lazim
          </a>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-slate-800 hover:text-[#B8860B] font-medium border-b border-slate-100"
          >
            {lang === 'bm' ? 'Lokasi & Waktu Operasi' : 'Location & Hours'}
          </a>

          <div className="pt-2 grid grid-cols-1 gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full text-center bg-slate-900 text-white font-semibold py-3 rounded-xl flex items-center justify-center gap-2 text-sm"
            >
              <Calendar className="w-4 h-4 text-[#D4AF37]" />
              <span>{lang === 'bm' ? 'Borang Tempahan Temujanji' : 'Book Appointment Form'}</span>
            </button>

            <a
              href={bookingWhatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="w-full text-center gold-bg-gradient text-slate-950 font-bold py-3 rounded-xl shadow-md flex items-center justify-center gap-2 text-sm"
            >
              <MessageCircle className="w-4 h-4 fill-slate-950 text-slate-950" />
              <span>{lang === 'bm' ? 'Hubungi Terus WhatsApp' : 'Direct WhatsApp Chat'}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
