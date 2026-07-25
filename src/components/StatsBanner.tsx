import React from 'react';
import { Language } from '../types';
import { CLINIC_INFO } from '../data/clinicData';
import { Star, CalendarDays, Heart, Sparkles } from 'lucide-react';

interface StatsBannerProps {
  lang: Language;
}

export const StatsBanner: React.FC<StatsBannerProps> = ({ lang }) => {
  return (
    <section className="bg-transparent text-slate-800 py-10 border-t border-b border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          
          <div className="p-4 border-r border-slate-200 last:border-0 md:last:border-r">
            <div className="flex items-center justify-center gap-1.5 text-2xl lg:text-3xl font-serif font-bold text-[#8B6508] mb-1">
              <Star className="w-6 h-6 fill-amber-400 text-amber-400" />
              <span>{CLINIC_INFO.googleRating} / 5.0</span>
            </div>
            <div className="text-slate-600 text-xs sm:text-sm font-semibold">
              {lang === 'bm' ? `${CLINIC_INFO.googleReviewCount}+ Ulasan Google Sah` : `${CLINIC_INFO.googleReviewCount}+ Verified Google Reviews`}
            </div>
          </div>

          <div className="p-4 border-r border-slate-200 last:border-0 md:last:border-r">
            <div className="flex items-center justify-center gap-1.5 text-2xl lg:text-3xl font-serif font-bold text-[#8B6508] mb-1">
              <CalendarDays className="w-6 h-6 text-[#B8860B]" />
              <span>7 {lang === 'bm' ? 'Hari' : 'Days'}</span>
            </div>
            <div className="text-slate-600 text-xs sm:text-sm font-semibold">
              {lang === 'bm' ? 'Beroperasi Isnin - Ahad (9AM-9PM)' : 'Operating Monday - Sunday (9AM-9PM)'}
            </div>
          </div>

          <div className="p-4 border-r border-slate-200 last:border-0 md:last:border-r">
            <div className="flex items-center justify-center gap-1.5 text-2xl lg:text-3xl font-serif font-bold text-[#8B6508] mb-1">
              <Heart className="w-6 h-6 text-[#B8860B]" />
              <span>100%</span>
            </div>
            <div className="text-slate-600 text-xs sm:text-sm font-semibold">
              {lang === 'bm' ? 'Rawatan Mesra & Prihatin Pesakit' : 'Gentle & Patient-Centric Care'}
            </div>
          </div>

          <div className="p-4">
            <div className="flex items-center justify-center gap-1.5 text-2xl lg:text-3xl font-serif font-bold text-[#8B6508] mb-1">
              <Sparkles className="w-6 h-6 text-[#B8860B]" />
              <span>10+</span>
            </div>
            <div className="text-slate-600 text-xs sm:text-sm font-semibold">
              {lang === 'bm' ? 'Perkhidmatan Rawatan Lengkap' : 'Comprehensive Treatment Services'}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
