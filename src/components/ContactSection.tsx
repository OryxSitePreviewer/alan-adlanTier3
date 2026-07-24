import React from 'react';
import { Language } from '../types';
import { CLINIC_INFO } from '../data/clinicData';
import { ClinicLogo } from './ClinicLogo';
import { MapPin, Phone, Clock, Share2, Navigation, MessageCircle, ExternalLink } from 'lucide-react';

interface ContactSectionProps {
  lang: Language;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ lang }) => {
  return (
    <section id="contact" className="py-20 bg-[#FAF8F5] text-slate-800 relative border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-2 gap-12 items-stretch">
          
          {/* Left: Contact Info */}
          <div className="flex flex-col justify-between">
            <div>
              <span className="text-[#B8860B] font-bold uppercase tracking-wider text-xs sm:text-sm block mb-2">
                {lang === 'bm' ? 'LOKASI & HUBUNGI KAMI' : 'VISIT OUR CLINIC'}
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 mb-6">
                {lang === 'bm' ? 'Lokasi Klinik & Maklumat Perhubungan' : 'Location & Contact Details'}
              </h2>
              <p className="text-slate-600 mb-8 leading-relaxed font-normal">
                {lang === 'bm'
                  ? 'Klinik Pergigian Alan Adlan beroperasi di lokasi strategik Seksyen 1, Bandar Baru Bangi dengan kemudahan meletak kenderaan yang selesa. Walk-in amat dialu-alukan, namun temujanji digalakkan untuk keselesaan anda.'
                  : 'Conveniently located in Seksyen 1, Bandar Baru Bangi with ample parking. Walk-ins are welcomed, but appointments are recommended to reduce wait times.'}
              </p>

              <div className="space-y-6">
                
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-[#B8860B] text-xl shrink-0 shadow-xs">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">
                      {lang === 'bm' ? 'Alamat Klinik' : 'Address'}
                    </h4>
                    <p className="text-slate-600 text-sm leading-relaxed mt-1 font-normal">
                      {CLINIC_INFO.address}
                    </p>
                    <div className="flex items-center gap-3 mt-2">
                      <a
                        href={CLINIC_INFO.googleMapsUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-xs font-bold text-[#8B6508] hover:underline flex items-center gap-1"
                      >
                        <Navigation className="w-3.5 h-3.5" />
                        <span>Google Maps</span>
                      </a>
                      <span className="text-slate-400">•</span>
                      <a
                        href={CLINIC_INFO.wazeUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-xs font-bold text-[#8B6508] hover:underline flex items-center gap-1"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>Waze Nav</span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-[#B8860B] text-xl shrink-0 shadow-xs">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">
                      {lang === 'bm' ? 'Talian Telefon & WhatsApp' : 'Phone & WhatsApp Contact'}
                    </h4>
                    <p className="text-slate-600 text-sm mt-1 font-normal">
                      {lang === 'bm' ? 'Telefon Pejabat: ' : 'Landline: '}
                      <a href={`tel:${CLINIC_INFO.phoneLandline.replace(/\s+/g, '')}`} className="font-bold text-slate-900 hover:text-[#B8860B]">
                        {CLINIC_INFO.phoneLandline}
                      </a>
                    </p>
                    <p className="text-slate-600 text-sm mt-0.5 font-normal">
                      {lang === 'bm' ? 'WhatsApp Talian Hotline: ' : 'WhatsApp Hotline: '}
                      <a href={`https://wa.me/${CLINIC_INFO.whatsappNumberDigits}`} target="_blank" rel="noreferrer" className="font-bold text-emerald-700 hover:underline">
                        {CLINIC_INFO.phoneWhatsApp}
                      </a>
                    </p>
                  </div>
                </div>

                {/* Operating Hours */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-[#B8860B] text-xl shrink-0 shadow-xs">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">
                      {lang === 'bm' ? 'Waktu Operasi' : 'Operating Hours'}
                    </h4>
                    <p className="text-slate-600 text-sm mt-1 font-normal">
                      {lang === 'bm' ? 'Isnin – Ahad: ' : 'Monday – Sunday: '}
                      <strong className="text-slate-900 font-bold">9:00 AM – 9:00 PM</strong>
                    </p>
                    <span className="text-xs text-emerald-700 font-bold mt-1 block">
                      ✓ {lang === 'bm' ? 'Buka Setiap Hari Termasuk Hujung Minggu & Cuti Umum' : 'Open Daily Including Weekends & Public Holidays'}
                    </span>
                  </div>
                </div>

                {/* Socials */}
                <div className="flex items-start gap-4 pt-2 border-t border-slate-200">
                  <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-[#B8860B] text-xl shrink-0 shadow-xs">
                    <Share2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm mb-2">
                      {lang === 'bm' ? 'Ikuti Media Sosial Kami' : 'Follow Our Socials'}
                    </h4>
                    <div className="flex gap-3">
                      <a
                        href={CLINIC_INFO.socials.instagram}
                        target="_blank"
                        rel="noreferrer"
                        className="px-3 py-1.5 rounded-lg bg-white text-slate-700 border border-slate-300 text-xs font-semibold hover:bg-[#B8860B] hover:text-white transition"
                      >
                        Instagram
                      </a>
                      <a
                        href={CLINIC_INFO.socials.tiktok}
                        target="_blank"
                        rel="noreferrer"
                        className="px-3 py-1.5 rounded-lg bg-white text-slate-700 border border-slate-300 text-xs font-semibold hover:bg-[#B8860B] hover:text-white transition"
                      >
                        TikTok
                      </a>
                      <a
                        href={CLINIC_INFO.socials.facebook}
                        target="_blank"
                        rel="noreferrer"
                        className="px-3 py-1.5 rounded-lg bg-white text-slate-700 border border-slate-300 text-xs font-semibold hover:bg-[#B8860B] hover:text-white transition"
                      >
                        Facebook
                      </a>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Direct WhatsApp Callout Button */}
            <div className="mt-8 pt-6 border-t border-slate-200">
              <a
                href={`https://wa.me/${CLINIC_INFO.whatsappNumberDigits}?text=${encodeURIComponent('Salam Klinik Alan Adlan, saya hendak bertanyakan tentang lokasi & tempat letak kereta.')}`}
                target="_blank"
                rel="noreferrer"
                className="w-full gold-bg-gradient text-slate-950 font-bold py-3.5 px-6 rounded-full shadow-md hover:opacity-95 transition flex items-center justify-center gap-2 text-sm"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>{lang === 'bm' ? 'Dapatkan Lokasi via WhatsApp' : 'Get Location via WhatsApp'}</span>
              </a>
            </div>

          </div>

          {/* Right: Storefront Photo Card & Embedded Google Map Frame */}
          <div className="flex flex-col gap-6">
            
            {/* Storefront Visual Recognition Card */}
            <div className="bg-white p-4 rounded-3xl border border-slate-200 shadow-md flex items-center gap-4">
              <div className="shrink-0 p-1 bg-amber-500/10 rounded-2xl border border-amber-300">
                <ClinicLogo size="md" showTopText={false} showSideText={false} />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-sm">
                  {lang === 'bm' ? 'Panduan Kedatangan & Fasad Bangunan' : 'Arrival & Storefront Recognition'}
                </h4>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  {lang === 'bm'
                    ? 'Cari lambang gigi emas gergasi "ALAN ADLAN" di Tingkat Bawah & 1, No 3 & 3A Jalan 6/7B.'
                    : 'Look for the prominent giant golden tooth emblem "ALAN ADLAN" on Ground & 1st Floor, No 3 & 3A Jalan 6/7B.'}
                </p>
              </div>
            </div>

            <div className="h-full min-h-[380px] rounded-3xl overflow-hidden shadow-md border border-slate-200 relative flex flex-col bg-white">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.582875151528!2d101.7648!3d2.961!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cd390000000001%3A0x0!2sSeksyen+1+Bandar+Baru+Bangi!5e0!3m2!1sen!2smy!4v1680000000000!5m2!1sen!2smy"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '380px' }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Klinik Pergigian Alan Adlan Location Map"
                className="w-full h-full flex-grow"
              ></iframe>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
