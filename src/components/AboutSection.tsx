import React from 'react';
import { Language } from '../types';
import { CLINIC_INFO } from '../data/clinicData';
import { ClinicStorefront } from './ClinicStorefront';
import { CheckCircle2, Award, ArrowRight, Shield, Stethoscope, Sparkles } from 'lucide-react';

interface AboutSectionProps {
  lang: Language;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ lang }) => {
  return (
    <section id="about" className="py-20 bg-[#FAF8F5] text-slate-800 relative border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left: Clinic Storefront & Building Card */}
          <div className="relative">
            <ClinicStorefront lang={lang} />
          </div>

          {/* Right: Text Content */}
          <div>
            <span className="text-[#B8860B] font-bold uppercase tracking-wider text-xs sm:text-sm block mb-2">
              {lang === 'bm' ? 'Mengenai Klinik Pergigian Alan Adlan' : 'About Klinik Pergigian Alan Adlan'}
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 mb-6 leading-tight">
              {lang === 'bm' ? (
                <>
                  Rakan Dipercayai Untuk <span className="gold-gradient-text">Penjagaan Kesihatan</span> & Estetik Gigi Anda
                </>
              ) : (
                <>
                  Your Trusted Partner for <span className="gold-gradient-text">Comprehensive & Aesthetic</span> Oral Care
                </>
              )}
            </h2>

            <p className="text-slate-600 mb-4 leading-relaxed font-normal">
              {lang === 'bm' ? (
                <>
                  Di <strong className="text-slate-900 font-semibold">Klinik Pergigian Alan Adlan</strong> yang terletak di Seksyen 1, Bandar Baru Bangi, kami percaya setiap pesakit berhak mendapat senyuman yang sihat, berkeyakinan, dan indah.
                </>
              ) : (
                <>
                  At <strong className="text-slate-900 font-semibold">Klinik Pergigian Alan Adlan</strong>, located in Seksyen 1, Bandar Baru Bangi, we believe every patient deserves a healthy, confident, and beautiful smile.
                </>
              )}
            </p>

            <p className="text-slate-600 mb-6 leading-relaxed font-normal">
              {lang === 'bm' ? (
                <>
                  Diterajui oleh <strong className="text-slate-900 font-semibold">{CLINIC_INFO.doctorName}</strong> ({CLINIC_INFO.doctorTitleBM}) beserta peralatan pergigian berteknologi terkini, kami menyediakan persekitaran rawatan yang mesra, selesa, dan telus. Daripada pemutihan gigi, implan gigi, denture, braces, hingga ke rawatan salur akar & apikoektomi, kami memberikan penjagaan tahap tertinggi yang disesuaikan untuk anda.
                </>
              ) : (
                <>
                  Led by <strong className="text-slate-900 font-semibold">{CLINIC_INFO.doctorName}</strong> ({CLINIC_INFO.doctorTitleEN}) and equipped with advanced dental technology, our clinic provides a gentle, welcoming, and transparent treatment environment. From teeth whitening, implants, dentures, braces, to root canal & apicoectomy, we ensure top-tier care tailored to your needs.
                </>
              )}
            </p>

            {/* Doctor Credentials Card */}
            <div className="mb-6 p-4 rounded-xl bg-white border border-[#B8860B]/20 shadow-xs flex items-center gap-4">
              <div className="w-12 h-12 rounded-full gold-bg-gradient flex items-center justify-center shrink-0 font-serif font-bold text-slate-950 text-lg shadow-sm">
                DR
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-sm sm:text-base">
                  {CLINIC_INFO.doctorName}
                </h4>
                <p className="text-xs text-[#8B6508] font-medium">
                  {lang === 'bm' ? CLINIC_INFO.doctorTitleBM : CLINIC_INFO.doctorTitleEN}
                </p>
              </div>
            </div>

            {/* Checklist */}
            <div className="space-y-3.5 mb-8">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#B8860B] shrink-0 mt-0.5" />
                <span className="text-slate-700 font-medium text-sm sm:text-base">
                  {lang === 'bm'
                    ? 'Persekitaran mesra & tenang sesuai untuk dewasa, kanak-kanak dan warga emas.'
                    : 'Warm, relaxed environment suitable for adults, children, and seniors.'}
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#B8860B] shrink-0 mt-0.5" />
                <span className="text-slate-700 font-medium text-sm sm:text-base">
                  {lang === 'bm'
                    ? 'Rangkaian rawatan pakar yang lengkap di bawah satu bumbung.'
                    : 'Full range of specialized treatments under one roof.'}
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#B8860B] shrink-0 mt-0.5" />
                <span className="text-slate-700 font-medium text-sm sm:text-base">
                  {lang === 'bm'
                    ? 'Waktu operasi harian fleksibel dari 9:00 pagi hingga 9:00 malam (Buka 7 Hari).'
                    : 'Convenient daily operating hours from 9:00 AM to 9:00 PM (Open 7 Days).'}
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href={`https://wa.me/${CLINIC_INFO.whatsappNumberDigits}?text=${encodeURIComponent('Salam Klinik Alan Adlan, saya ingin mengetahui lebih lanjut tentang perkhidmatan anda.')}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 gold-bg-gradient text-slate-950 font-bold px-6 py-3.5 rounded-full shadow-md hover:opacity-95 transition"
              >
                <span>{lang === 'bm' ? 'Hubungi Pasukan Klinik' : 'Contact Our Clinic Team'}</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#services"
                className="inline-flex items-center gap-2 bg-white text-slate-800 border border-slate-300 hover:border-[#B8860B] font-semibold px-6 py-3.5 rounded-full shadow-xs transition"
              >
                <span>{lang === 'bm' ? 'Lihat Senarai Rawatan' : 'View All Treatments'}</span>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
