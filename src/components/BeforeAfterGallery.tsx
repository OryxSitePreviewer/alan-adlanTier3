import React, { useState } from 'react';
import { Language } from '../types';
import { BEFORE_AFTER_GALLERY, CLINIC_INFO } from '../data/clinicData';
import { Sparkles, Clock, MessageCircle, CheckCircle2, ShieldCheck, Maximize2, X } from 'lucide-react';

interface BeforeAfterGalleryProps {
  lang: Language;
}

export const BeforeAfterGallery: React.FC<BeforeAfterGalleryProps> = ({ lang }) => {
  const [selectedImage, setSelectedImage] = useState<{ src: string; title: string } | null>(null);

  return (
    <section className="py-20 bg-white text-slate-800 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 bg-[#B8860B]/10 border border-[#B8860B]/30 px-3.5 py-1 rounded-full mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#B8860B]" />
            <span className="text-[#8B6508] font-bold text-xs uppercase tracking-wider">
              {lang === 'bm' ? 'GALERI HASIL RAWATAN' : 'SMILE TRANSFORMATIONS'}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 mb-4">
            {lang === 'bm' ? 'Hasil Senyuman Pesakit Alan Adlan' : 'Real Patient Transformations'}
          </h2>
          <p className="text-slate-600 font-normal">
            {lang === 'bm'
              ? 'Lihat perubahan senyuman indah dan susunan gigi presisi yang dicapai oleh pesakit kami melalui rawatan Braces Self-Ligating Damon dan Pemutihan Gigi Estetik.'
              : 'Discover the smile changes and precise alignment achieved by our patients using Damon Self-Ligating Braces and Teeth Whitening.'}
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {BEFORE_AFTER_GALLERY.map(item => {
            const title = lang === 'bm' ? item.titleBM : item.titleEN;
            const tag = lang === 'bm' ? item.tagBM : item.tagEN;
            const duration = lang === 'bm' ? item.durationBM : item.durationEN;
            const desc = lang === 'bm' ? item.descBM : item.descEN;
            const highlights = lang === 'bm' ? item.highlightsBM : item.highlightsEN;
            const isDamon = item.id === 'ba1';

            const beforeLabel = isDamon 
              ? (lang === 'bm' ? 'Sebelum (Gigi Bertindih)' : 'Before (Crowded)')
              : (lang === 'bm' ? 'Sebelum (Kuning/Kotoran)' : 'Before (Discolored)');

            const afterLabel = isDamon
              ? (lang === 'bm' ? 'Selepas (Damon Braces)' : 'After (Damon Braces)')
              : (lang === 'bm' ? 'Selepas (Putih Berseri)' : 'After (Bright White)');

            return (
              <div
                key={item.id}
                className="bg-[#FAF8F5] rounded-2xl p-6 border border-slate-200 shadow-sm hover:border-[#B8860B]/70 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Header Badge */}
                  <div className="flex items-center justify-between text-xs mb-4">
                    <div className="flex items-center gap-2">
                      <span className="bg-[#B8860B]/15 text-[#8B6508] font-bold px-3 py-1 rounded-full border border-[#B8860B]/30">
                        {tag}
                      </span>
                      {isDamon && (
                        <span className="bg-slate-900 text-amber-300 font-extrabold px-2.5 py-1 rounded-full text-[10px] uppercase tracking-wider flex items-center gap-1 shadow-xs">
                          <ShieldCheck className="w-3 h-3 text-amber-400" />
                          <span>Damon System</span>
                        </span>
                      )}
                    </div>
                    <span className="text-slate-500 flex items-center gap-1 font-semibold">
                      <Clock className="w-3.5 h-3.5 text-[#B8860B]" />
                      <span>{duration}</span>
                    </span>
                  </div>

                  {/* Full Uncropped Clinical Image Container */}
                  <div 
                    onClick={() => setSelectedImage({ src: item.imageCombined, title })}
                    className="relative rounded-2xl overflow-hidden border-2 border-amber-500/40 group bg-slate-950 p-1 mb-4 shadow-md cursor-pointer transition hover:border-amber-400"
                  >
                    <img
                      src={item.imageCombined}
                      alt={title}
                      loading="lazy"
                      decoding="async"
                      onError={(e) => {
                        e.currentTarget.src = isDamon ? "bracers.png" : "whitening.png";
                      }}
                      className="w-full h-auto max-h-[380px] object-contain mx-auto rounded-xl group-hover:scale-[1.02] transition-transform duration-500"
                    />

                    {/* Overlay Badges */}
                    <div className="absolute top-3 left-3 bg-slate-900/90 text-amber-300 text-[11px] font-extrabold uppercase px-3 py-1 rounded-lg border border-amber-500/40 shadow-md backdrop-blur-xs flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-rose-500 inline-block animate-pulse"></span>
                      <span>{beforeLabel}</span>
                    </div>

                    <div className="absolute bottom-3 right-3 gold-bg-gradient text-slate-950 text-[11px] font-extrabold uppercase px-3 py-1 rounded-lg shadow-lg flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-600 inline-block"></span>
                      <span>{afterLabel}</span>
                    </div>

                    <div className="absolute top-3 right-3 bg-slate-900/80 text-amber-300 px-2.5 py-1 rounded-lg text-xs font-bold opacity-80 group-hover:opacity-100 transition flex items-center gap-1 border border-amber-500/20">
                      <Maximize2 className="w-3.5 h-3.5" />
                      <span className="text-[10px] hidden sm:inline">{lang === 'bm' ? 'Zoom High-Res' : 'Zoom High-Res'}</span>
                    </div>
                  </div>

                  {/* Title & Desc */}
                  <h3 className="text-xl font-serif font-bold text-slate-900 mb-2">{title}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed mb-4">{desc}</p>

                  {/* Feature Highlights */}
                  {highlights && highlights.length > 0 && (
                    <div className="bg-white p-3.5 rounded-xl border border-slate-200/80 mb-5 space-y-1.5">
                      {highlights.map((h, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                  <a
                    href={`https://wa.me/${CLINIC_INFO.whatsappNumberDigits}?text=${encodeURIComponent(`Salam Klinik Alan Adlan, saya berminat nak buat rawatan ${title}. Boleh saya tanya pelan ansuran?`)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 bg-slate-900 text-amber-300 hover:bg-slate-800 text-xs font-bold px-4 py-2.5 rounded-xl transition shadow-xs"
                  >
                    <MessageCircle className="w-4 h-4 text-amber-300" />
                    <span>
                      {isDamon 
                        ? (lang === 'bm' ? 'Tanya Ansuran Damon Braces' : 'Inquire Damon Installments')
                        : (lang === 'bm' ? 'Tanya Slot Whitening' : 'Book Whitening Slot')}
                    </span>
                  </a>

                  <span className="text-[11px] font-bold text-slate-500">
                    {isDamon 
                      ? (lang === 'bm' ? 'Ansuran RM250/bln' : 'From RM250/mth')
                      : (lang === 'bm' ? 'Harga Promosi' : 'Promo Rates')}
                  </span>
                </div>

              </div>
            );
          })}
        </div>

      </div>

      {/* Lightbox Modal for High-Res Case Photo */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div 
            className="relative max-w-4xl w-full bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl p-2"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-4 py-3 border-b border-slate-800">
              <h3 className="text-sm font-bold text-amber-300 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>{selectedImage.title} - Foto Kes Klinikal Original</span>
              </h3>
              <button
                onClick={() => setSelectedImage(null)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-2 flex items-center justify-center max-h-[80vh] overflow-auto bg-slate-950 rounded-xl">
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="max-h-[75vh] w-auto object-contain rounded-lg"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

