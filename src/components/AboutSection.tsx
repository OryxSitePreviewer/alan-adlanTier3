import React from 'react';
import { CLINIC_INFO } from '../data/clinicData';
import { ClinicStorefront } from './ClinicStorefront';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-transparent text-slate-800 relative border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left: Clinic Storefront & Building Card */}
          <div className="relative">
            <ClinicStorefront />
          </div>

          {/* Right: Text Content */}
          <div>
            <span className="text-[#B8860B] font-bold uppercase tracking-wider text-xs sm:text-sm block mb-2">
              About Klinik Pergigian Alan Adlan
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 mb-6 leading-tight">
              Your Trusted Partner for <span className="gold-gradient-text">Comprehensive & Aesthetic</span> Oral Care
            </h2>

            <p className="text-slate-600 mb-4 leading-relaxed font-normal">
              At <strong className="text-slate-900 font-semibold">Klinik Pergigian Alan Adlan</strong>, located in Seksyen 1, Bandar Baru Bangi, we believe every patient deserves a healthy, confident, and beautiful smile.
            </p>

            <p className="text-slate-600 mb-6 leading-relaxed font-normal">
              Led by <strong className="text-slate-900 font-semibold">{CLINIC_INFO.doctorName}</strong> ({CLINIC_INFO.doctorTitleEN}) and equipped with advanced dental technology, our clinic provides a gentle, welcoming, and transparent treatment environment. From teeth whitening, implants, dentures, braces, to root canal & apicoectomy, we ensure top-tier care tailored to your needs.
            </p>

            {/* Doctor Credentials Card */}
            <div className="mb-6 p-4 rounded-xl bg-white border border-[#B8860B]/20 shadow-xs flex items-center gap-4">
              <div className="w-12 h-12 rounded-full gold-bg-gradient flex items-center justify-center shrink-0 font-serif font-bold text-slate-950 text-lg shadow-sm">
                DR
              </div>
              <div>
                <h4 className="font-bold text-[#1E293B] text-sm sm:text-base">
                  {CLINIC_INFO.doctorName}
                </h4>
                <p className="text-xs text-[#8B6508] font-medium">
                  {CLINIC_INFO.doctorTitleEN}
                </p>
              </div>
            </div>

            {/* Checklist */}
            <div className="space-y-3.5 mb-8">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#B8860B] shrink-0 mt-0.5" />
                <span className="text-slate-700 font-medium text-sm sm:text-base">
                  Warm, relaxed environment suitable for adults, children, and seniors.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#B8860B] shrink-0 mt-0.5" />
                <span className="text-slate-700 font-medium text-sm sm:text-base">
                  Full range of specialized treatments under one roof.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#B8860B] shrink-0 mt-0.5" />
                <span className="text-slate-700 font-medium text-sm sm:text-base">
                  Convenient daily operating hours from 9:00 AM to 9:00 PM (Open 7 Days).
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href={`https://wa.me/${CLINIC_INFO.whatsappNumberDigits}?text=${encodeURIComponent('Hi Klinik Alan Adlan, I would like to learn more about your services.')}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 gold-bg-gradient text-slate-950 font-bold px-6 py-3.5 rounded-full shadow-md hover:opacity-95 transition"
              >
                <span>Contact Our Clinic Team</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#services"
                className="inline-flex items-center gap-2 bg-white text-slate-800 border border-slate-300 hover:border-[#B8860B] font-semibold px-6 py-3.5 rounded-full shadow-xs transition"
              >
                <span>View All Treatments</span>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
