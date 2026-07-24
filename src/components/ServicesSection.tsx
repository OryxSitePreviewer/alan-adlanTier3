import React, { useState } from 'react';
import { Language, ServiceItem } from '../types';
import { SERVICES_DATA, CLINIC_INFO } from '../data/clinicData';
import {
  Smile,
  Wand2,
  HeartPulse,
  ShieldCheck,
  Syringe,
  Crown,
  Sparkles,
  Search,
  ArrowRight,
  MessageCircle,
  Tag
} from 'lucide-react';

interface ServicesSectionProps {
  lang: Language;
  onOpenBookingWithTreatment?: (treatmentId: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ lang, onOpenBookingWithTreatment }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const renderServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'teeth-open':
      case 'tooth':
        return <Smile className="w-7 h-7" />;
      case 'wand-magic-sparkles':
        return <Wand2 className="w-7 h-7" />;
      case 'heart-pulse':
        return <HeartPulse className="w-7 h-7" />;
      case 'shield-check':
        return <ShieldCheck className="w-7 h-7" />;
      case 'syringe':
        return <Syringe className="w-7 h-7" />;
      case 'crown':
        return <Crown className="w-7 h-7" />;
      default:
        return <Sparkles className="w-7 h-7" />;
    }
  };

  const filteredServices = SERVICES_DATA.filter(service => {
    const matchesCategory = activeCategory === 'all' || service.category === activeCategory;
    const title = lang === 'bm' ? service.titleBM : service.titleEN;
    const desc = lang === 'bm' ? service.descriptionBM : service.descriptionEN;
    const matchesSearch =
      title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      desc.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <section id="services" className="py-20 bg-white text-slate-800 relative border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-[#B8860B] font-bold uppercase tracking-wider text-xs sm:text-sm block mb-2">
            {lang === 'bm' ? 'Kepakaran Perkhidmatan Kami' : 'Our Clinical Expertise'}
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 mb-4">
            {lang === 'bm' ? 'Penyelesaian Rawatan Pergigian Lengkap' : 'Comprehensive Dental Solutions'}
          </h2>
          <p className="text-slate-600 font-normal">
            {lang === 'bm'
              ? 'Kami menawarkan pelbagai rawatan am dan pakar yang direka untuk melindungi, memulihkan, dan memperindahkan senyuman anda.'
              : 'We offer specialized and general dental treatments designed to protect, restore, and enhance your oral health.'}
          </p>
        </div>

        {/* Search & Category Filter Controls */}
        <div className="mb-12 space-y-6">
          {/* Search bar */}
          <div className="max-w-md mx-auto relative">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder={lang === 'bm' ? 'Cari rawatan (contoh: braces, pemutihan, cabut...)' : 'Search treatment (e.g., braces, whitening, scaling...)'}
              className="w-full pl-12 pr-4 py-3 bg-[#FAF8F5] border border-slate-300 rounded-full text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#B8860B] focus:ring-2 focus:ring-[#B8860B]/20 transition"
            />
          </div>

          {/* Filter Pills */}
          <div className="flex items-center justify-center flex-wrap gap-2 sm:gap-3 text-xs sm:text-sm font-semibold">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-4 py-2 rounded-full transition ${
                activeCategory === 'all'
                  ? 'gold-bg-gradient text-slate-950 shadow-md'
                  : 'bg-[#FAF8F5] text-slate-700 border border-slate-200 hover:bg-slate-100'
              }`}
            >
              {lang === 'bm' ? 'Semua Rawatan' : 'All Treatments'}
            </button>
            <button
              onClick={() => setActiveCategory('ortho')}
              className={`px-4 py-2 rounded-full transition ${
                activeCategory === 'ortho'
                  ? 'gold-bg-gradient text-slate-950 shadow-md'
                  : 'bg-[#FAF8F5] text-slate-700 border border-slate-200 hover:bg-slate-100'
              }`}
            >
              {lang === 'bm' ? 'Ortodontik (Braces)' : 'Orthodontics'}
            </button>
            <button
              onClick={() => setActiveCategory('aesthetic')}
              className={`px-4 py-2 rounded-full transition ${
                activeCategory === 'aesthetic'
                  ? 'gold-bg-gradient text-slate-950 shadow-md'
                  : 'bg-[#FAF8F5] text-slate-700 border border-slate-200 hover:bg-slate-100'
              }`}
            >
              {lang === 'bm' ? 'Estetik & Pemutihan' : 'Aesthetic & Whitening'}
            </button>
            <button
              onClick={() => setActiveCategory('restorative')}
              className={`px-4 py-2 rounded-full transition ${
                activeCategory === 'restorative'
                  ? 'gold-bg-gradient text-slate-950 shadow-md'
                  : 'bg-[#FAF8F5] text-slate-700 border border-slate-200 hover:bg-slate-100'
              }`}
            >
              {lang === 'bm' ? 'Implan & Restorasi' : 'Implants & Restorative'}
            </button>
            <button
              onClick={() => setActiveCategory('surgery')}
              className={`px-4 py-2 rounded-full transition ${
                activeCategory === 'surgery'
                  ? 'gold-bg-gradient text-slate-950 shadow-md'
                  : 'bg-[#FAF8F5] text-slate-700 border border-slate-200 hover:bg-slate-100'
              }`}
            >
              {lang === 'bm' ? 'Pembedahan Mulut' : 'Oral Surgery'}
            </button>
            <button
              onClick={() => setActiveCategory('general')}
              className={`px-4 py-2 rounded-full transition ${
                activeCategory === 'general'
                  ? 'gold-bg-gradient text-slate-950 shadow-md'
                  : 'bg-[#FAF8F5] text-slate-700 border border-slate-200 hover:bg-slate-100'
              }`}
            >
              {lang === 'bm' ? 'Cuci & Gigi Am' : 'General & Scaling'}
            </button>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map(service => {
            const title = lang === 'bm' ? service.titleBM : service.titleEN;
            const desc = lang === 'bm' ? service.descriptionBM : service.descriptionEN;
            const priceTag = lang === 'bm' ? service.estPriceBM : service.estPriceEN;

            const whatsappEnquiryUrl = `https://wa.me/${CLINIC_INFO.whatsappNumberDigits}?text=${encodeURIComponent(
              lang === 'bm'
                ? `Salam Klinik Alan Adlan, saya berminat untuk membuat pertanyaan berkenaan ${service.titleBM}.`
                : `Hi Klinik Alan Adlan, I would like to inquire about ${service.titleEN}.`
            )}`;

            return (
              <div
                key={service.id}
                className="bg-[#FAF8F5] rounded-2xl p-7 border border-slate-200 hover:border-[#B8860B]/70 hover:shadow-lg transition-all duration-300 group flex flex-col justify-between relative overflow-hidden"
              >
                {service.popular && (
                  <div className="absolute top-4 right-4 bg-[#B8860B]/15 text-[#8B6508] border border-[#B8860B]/30 text-[10px] uppercase font-bold px-2.5 py-0.5 rounded-full flex items-center gap-1">
                    <Tag className="w-3 h-3" />
                    <span>POPULAR</span>
                  </div>
                )}

                <div>
                  <div className="w-14 h-14 rounded-2xl bg-white shadow-xs border border-slate-200 flex items-center justify-center text-[#B8860B] mb-6 group-hover:bg-gradient-to-r group-hover:from-[#D4AF37] group-hover:to-[#B8860B] group-hover:text-slate-950 transition-colors duration-300">
                    {renderServiceIcon(service.iconName)}
                  </div>

                  <h3 className="text-xl font-bold font-serif text-slate-900 mb-3 group-hover:text-[#B8860B] transition-colors">
                    {title}
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed mb-4 font-normal">
                    {desc}
                  </p>

                  <div className="bg-white p-2.5 rounded-xl border border-slate-200/90 mb-6 text-xs text-slate-800 font-semibold flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#B8860B]"></span>
                    <span>{priceTag}</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                  <a
                    href={whatsappEnquiryUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#8B6508] font-bold text-xs sm:text-sm inline-flex items-center gap-1.5 hover:text-[#B8860B] transition-colors"
                  >
                    <MessageCircle className="w-4 h-4 fill-current" />
                    <span>{lang === 'bm' ? 'Tanya via WhatsApp' : 'Inquire via WhatsApp'}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </a>

                  {onOpenBookingWithTreatment && (
                    <button
                      onClick={() => onOpenBookingWithTreatment(service.id)}
                      className="text-slate-500 hover:text-slate-900 text-xs underline font-semibold"
                    >
                      {lang === 'bm' ? 'Slot Tempahan' : 'Book Slot'}
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {filteredServices.length === 0 && (
          <div className="text-center py-12 bg-[#FAF8F5] rounded-2xl border border-dashed border-slate-300">
            <p className="text-slate-600 font-medium">
              {lang === 'bm' ? 'Tiada rawatan dijumpai untuk carian anda.' : 'No treatments found matching your search.'}
            </p>
          </div>
        )}

      </div>
    </section>
  );
};
