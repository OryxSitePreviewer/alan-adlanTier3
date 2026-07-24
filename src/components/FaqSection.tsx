import React, { useState } from 'react';
import { Language } from '../types';
import { FAQS_DATA, CLINIC_INFO } from '../data/clinicData';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';

interface FaqSectionProps {
  lang: Language;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ lang }) => {
  const [openFaqId, setOpenFaqId] = useState<string | null>(FAQS_DATA[0].id);
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  const filteredFaqs = FAQS_DATA.filter(faq => activeCategory === 'all' || faq.category === activeCategory);

  return (
    <section id="faq" className="py-20 bg-white text-slate-800 relative border-b border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-[#B8860B]/10 text-[#8B6508] border border-[#B8860B]/30 px-3.5 py-1.5 rounded-full text-xs font-bold mb-3">
            <HelpCircle className="w-4 h-4 text-[#B8860B]" />
            <span>FAQ SOALAN LAZIM</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 mb-4">
            {lang === 'bm' ? 'Soalan Yang Sering Ditanya' : 'Frequently Asked Questions'}
          </h2>
          <p className="text-slate-600 font-normal">
            {lang === 'bm'
              ? 'Jawapan pantas untuk soalan mengenai temujanji, ansuran braces, waktu operasi, dan rawatan pergigian.'
              : 'Quick answers regarding appointments, braces installments, operating hours, and dental care.'}
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-10 text-xs sm:text-sm font-semibold">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-4 py-2 rounded-full transition ${
              activeCategory === 'all'
                ? 'gold-bg-gradient text-slate-950 shadow-md'
                : 'bg-[#FAF8F5] text-slate-700 border border-slate-200 hover:bg-slate-100'
            }`}
          >
            {lang === 'bm' ? 'Semua Soalan' : 'All FAQs'}
          </button>
          <button
            onClick={() => setActiveCategory('braces')}
            className={`px-4 py-2 rounded-full transition ${
              activeCategory === 'braces'
                ? 'gold-bg-gradient text-slate-950 shadow-md'
                : 'bg-[#FAF8F5] text-slate-700 border border-slate-200 hover:bg-slate-100'
            }`}
          >
            {lang === 'bm' ? 'Ortodontik / Braces' : 'Orthodontics & Braces'}
          </button>
          <button
            onClick={() => setActiveCategory('payment')}
            className={`px-4 py-2 rounded-full transition ${
              activeCategory === 'payment'
                ? 'gold-bg-gradient text-slate-950 shadow-md'
                : 'bg-[#FAF8F5] text-slate-700 border border-slate-200 hover:bg-slate-100'
            }`}
          >
            {lang === 'bm' ? 'Pembayaran & Ansuran' : 'Payment & Installment'}
          </button>
          <button
            onClick={() => setActiveCategory('general')}
            className={`px-4 py-2 rounded-full transition ${
              activeCategory === 'general'
                ? 'gold-bg-gradient text-slate-950 shadow-md'
                : 'bg-[#FAF8F5] text-slate-700 border border-slate-200 hover:bg-slate-100'
            }`}
          >
            {lang === 'bm' ? 'Waktu Operasi & Walk-In' : 'Hours & Walk-In'}
          </button>
        </div>

        {/* Accordion FAQ Items */}
        <div className="space-y-4">
          {filteredFaqs.map(faq => {
            const isOpen = openFaqId === faq.id;
            const question = lang === 'bm' ? faq.questionBM : faq.questionEN;
            const answer = lang === 'bm' ? faq.answerBM : faq.answerEN;

            return (
              <div
                key={faq.id}
                className="bg-[#FAF8F5] rounded-2xl border border-slate-200 shadow-xs overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 font-bold text-slate-900 text-base sm:text-lg hover:text-[#B8860B] transition"
                >
                  <span>{question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#B8860B] shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-2 text-slate-600 text-sm leading-relaxed border-t border-slate-200 font-normal">
                    <p>{answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Help Banner */}
        <div className="mt-12 text-center bg-[#FAF8F5] p-6 rounded-2xl border border-slate-200 shadow-xs">
          <p className="text-slate-700 text-sm font-semibold mb-3">
            {lang === 'bm'
              ? 'Ada soalan spesifik yang tidak tersenarai di atas?'
              : 'Have a specific question not listed above?'}
          </p>
          <a
            href={`https://wa.me/${CLINIC_INFO.whatsappNumberDigits}?text=${encodeURIComponent('Salam Klinik Alan Adlan, saya ada soalan mengenai rawatan pergigian.')}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#8B6508] hover:text-[#B8860B] bg-[#B8860B]/15 px-5 py-2.5 rounded-full border border-[#B8860B]/30 transition"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>{lang === 'bm' ? 'Tanya Pasukan Klinik di WhatsApp' : 'Ask Our Clinic Team on WhatsApp'}</span>
          </a>
        </div>

      </div>
    </section>
  );
};
