import React, { useState } from 'react';
import { REVIEWS_DATA, CLINIC_INFO } from '../data/clinicData';
import { Star, CheckCircle2, ExternalLink, Filter, ThumbsUp } from 'lucide-react';

const REVIEW_CATEGORIES = [
  { id: 'all', labelEN: 'All Reviews' },
  { id: 'braces', labelEN: 'Braces' },
  { id: 'surgery', labelEN: 'Surgery & Wisdom' },
  { id: 'scaling', labelEN: 'Scaling & Cleaning' },
  { id: 'implant', labelEN: 'Dental Implants' },
  { id: 'general', labelEN: 'General Care' },
];

export const ReviewsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredReviews = React.useMemo(() => {
    return selectedCategory === 'all'
      ? REVIEWS_DATA
      : REVIEWS_DATA.filter(r => r.category === selectedCategory || (selectedCategory === 'general' && (!r.category || r.category === 'general')));
  }, [selectedCategory]);

  return (
    <section id="reviews" className="py-20 bg-transparent text-slate-800 relative border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 bg-[#B8860B]/10 border border-[#B8860B]/30 px-3 py-1 rounded-full mb-3">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[#8B6508] font-bold text-xs uppercase tracking-wider">
                Official Google Reviews
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900">
              Patient Experiences & Reviews
            </h2>
            <p className="text-slate-600 text-sm mt-2 max-w-2xl">
              Genuine feedback from patients treated at Klinik Pergigian Alan Adlan Bandar Baru Bangi.
            </p>
          </div>

          {/* Google Summary Badge */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="inline-flex items-center gap-3 bg-white px-5 py-3 rounded-2xl shadow-sm border border-slate-200">
              <div className="w-9 h-9 rounded-full bg-slate-900 flex items-center justify-center text-amber-400 font-bold text-sm shadow-xs border border-amber-500/40">
                G
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="font-bold text-slate-900 text-lg leading-none">{CLINIC_INFO.googleRating}</span>
                  <span className="text-slate-400 text-xs font-medium">/ 5.0</span>
                  <div className="flex text-amber-400 gap-0.5 ml-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>
                <span className="text-slate-500 text-xs block font-medium mt-0.5">
                  ({CLINIC_INFO.googleReviewCount}+ Google Reviews)
                </span>
              </div>
            </div>

            <a
              href="https://www.google.com/maps/search/?api=1&query=Klinik+Pergigian+Alan+Adlan+Bandar+Baru+Bangi"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 border border-slate-300 text-slate-800 text-xs font-bold px-4 py-3 rounded-2xl transition shadow-xs"
            >
              <span>View on Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5 text-amber-600" />
            </a>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium mr-2 shrink-0">
            <Filter className="w-3.5 h-3.5" />
            <span>Filter Treatment:</span>
          </div>
          {REVIEW_CATEGORIES.map(cat => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition shrink-0 border ${
                  isActive
                    ? 'bg-slate-900 text-amber-300 border-slate-900 shadow-xs'
                    : 'bg-white text-slate-600 border-slate-200 hover:border-slate-300 hover:text-slate-900'
                }`}
              >
                {cat.labelEN}
              </button>
            );
          })}
        </div>

        {/* Review Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredReviews.map(review => {
            const text = review.textEN;
            const treatment = review.treatmentEN;

            return (
              <div
                key={review.id}
                className="bg-white p-6 rounded-2xl border border-slate-200 hover:border-[#B8860B]/60 hover:shadow-md transition-all duration-300 flex flex-col justify-between relative group"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex text-amber-400 gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[10px] font-bold tracking-wider text-slate-400 bg-slate-100 px-2 py-0.5 rounded-full uppercase">
                    Google Review
                  </span>
                </div>

                <div>
                  <span className="inline-block bg-[#FAF8F5] text-slate-800 text-[11px] font-bold px-2.5 py-1 rounded-md border border-slate-200 mb-3">
                    {treatment}
                  </span>

                  <p className="text-slate-600 text-sm leading-relaxed italic mb-6 font-normal">
                    "{text}"
                  </p>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-[#B8860B]/15 text-[#8B6508] font-bold flex items-center justify-center text-sm shadow-inner">
                      {review.avatarInitial}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-xs sm:text-sm">{review.name}</h4>
                      <span className="text-[11px] text-slate-500 flex items-center gap-1 font-medium">
                        <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                        Verified Google Patient
                      </span>
                    </div>
                  </div>

                  <span className="text-[10px] text-slate-400 font-medium">{review.date}</span>
                </div>

              </div>
            );
          })}
        </div>

        {/* Bottom Direct Google Actions & CTA */}
        <div className="mt-12 bg-white text-slate-900 rounded-2xl p-6 sm:p-8 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="space-y-1 text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start gap-2 text-xs font-bold text-amber-700">
              <ThumbsUp className="w-4 h-4 text-amber-600" />
              <span>Have you visited us before?</span>
            </div>
            <h3 className="text-xl font-serif font-bold text-slate-900">
              Share Your Experience on Google
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm font-normal">
              Your feedback helps other patients make confident decisions for their dental health.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <a
              href="https://www.google.com/maps/search/?api=1&query=Klinik+Pergigian+Alan+Adlan+Bandar+Baru+Bangi"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-slate-900 text-amber-300 font-bold px-5 py-3 rounded-xl hover:bg-slate-800 transition text-xs shadow-xs text-center"
            >
              <span>Write a Google Review</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <a
              href={`https://wa.me/${CLINIC_INFO.whatsappNumberDigits}?text=${encodeURIComponent('Hi Klinik Alan Adlan, I would like to book an appointment.')}`}
              target="_blank"
              rel="noreferrer"
              className="gold-bg-gradient text-slate-950 font-bold px-6 py-3 rounded-xl shadow-md hover:opacity-95 transition text-xs text-center"
            >
              Book Appointment via WhatsApp
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

