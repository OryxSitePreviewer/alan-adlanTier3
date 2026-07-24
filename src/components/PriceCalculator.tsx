import React, { useState } from 'react';
import { Language } from '../types';
import { PRICE_CALCULATOR_ITEMS, CLINIC_INFO } from '../data/clinicData';
import { Calculator, CheckCircle, MessageCircle, HelpCircle, DollarSign, Sparkles } from 'lucide-react';

interface PriceCalculatorProps {
  lang: Language;
}

export const PriceCalculator: React.FC<PriceCalculatorProps> = ({ lang }) => {
  const [selectedItemId, setSelectedItemId] = useState<string>(PRICE_CALCULATOR_ITEMS[0].id);
  const [quantity, setQuantity] = useState<number>(1);

  const selectedItem = PRICE_CALCULATOR_ITEMS.find(item => item.id === selectedItemId) || PRICE_CALCULATOR_ITEMS[0];

  const minTotal = selectedItem.minPrice * quantity;
  const maxTotal = selectedItem.maxPrice * quantity;

  const itemName = lang === 'bm' ? selectedItem.nameBM : selectedItem.nameEN;
  const itemDesc = lang === 'bm' ? selectedItem.descriptionBM : selectedItem.descriptionEN;
  const installmentText = lang === 'bm' ? selectedItem.monthlyInstallmentBM : selectedItem.monthlyInstallmentEN;

  const whatsappMessage = encodeURIComponent(
    lang === 'bm'
      ? `Salam Klinik Alan Adlan, saya menggunakan kalkulator anggaran harga di laman web:\n- Rawatan: ${selectedItem.nameBM}\n- Kuantiti/Sesi: ${quantity}\n- Anggaran Harga: RM${minTotal} - RM${maxTotal}\n\nSaya hendak bertanyakan tentang ketersediaan slot temujanji & pelan ansuran.`
      : `Hi Klinik Alan Adlan, I calculated an estimate on your website:\n- Treatment: ${selectedItem.nameEN}\n- Quantity/Sessions: ${quantity}\n- Estimated Price: RM${minTotal} - RM${maxTotal}\n\nI would like to inquire about appointment availability and payment plans.`
  );

  return (
    <section id="calculator" className="py-20 bg-[#FAF8F5] text-slate-800 relative border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-[#B8860B]/10 text-[#8B6508] border border-[#B8860B]/30 px-3.5 py-1.5 rounded-full text-xs font-bold mb-3">
            <Calculator className="w-4 h-4 text-[#B8860B]" />
            <span>{lang === 'bm' ? 'TRANSPARANSI HARGA MESRA PESAKIT' : 'TRANSPARENT PATIENT PRICING'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 mb-4">
            {lang === 'bm' ? 'Kalkulator Anggaran Rawatan' : 'Treatment Cost Estimator'}
          </h2>
          <p className="text-slate-600 text-sm sm:text-base font-normal">
            {lang === 'bm'
              ? 'Pilih rawatan pergigian untuk melihat julat harga anggaran & pilihan ansuran fleksibel sebelum konsultasi.'
              : 'Select a treatment to view estimated price ranges & flexible installment options prior to your consultation.'}
          </p>
        </div>

        {/* Calculator Grid Layout */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Treatment Selection */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
            
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#B8860B] mb-3">
                {lang === 'bm' ? '1. Pilih Jenis Rawatan Pergigian' : '1. Select Dental Treatment Type'}
              </label>
              
              <div className="grid sm:grid-cols-2 gap-3">
                {PRICE_CALCULATOR_ITEMS.map(item => {
                  const isSelected = item.id === selectedItemId;
                  const name = lang === 'bm' ? item.nameBM : item.nameEN;

                  return (
                    <button
                      key={item.id}
                      onClick={() => setSelectedItemId(item.id)}
                      className={`text-left p-4 rounded-xl border transition-all flex flex-col justify-between ${
                        isSelected
                          ? 'bg-[#FAF8F5] border-[#B8860B] shadow-sm ring-2 ring-[#B8860B]/30'
                          : 'bg-white border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      <div>
                        <span className="text-[10px] uppercase font-bold text-[#B8860B] block mb-1">
                          {item.category}
                        </span>
                        <h4 className="font-bold text-slate-900 text-sm leading-snug">{name}</h4>
                      </div>
                      <div className="mt-3 text-xs text-slate-600 font-semibold flex items-center gap-1">
                        <DollarSign className="w-3.5 h-3.5 text-[#B8860B]" />
                        <span>RM{item.minPrice} - RM{item.maxPrice}</span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Quantity / Unit Adjuster if applicable */}
            <div className="pt-4 border-t border-slate-200">
              <label className="block text-xs font-bold uppercase tracking-wider text-[#B8860B] mb-2">
                {lang === 'bm' ? '2. Bilangan Gigi / Sesi' : '2. Number of Teeth / Sessions'}
              </label>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 rounded-lg bg-slate-100 hover:bg-slate-200 border border-slate-300 font-bold text-lg text-slate-800 flex items-center justify-center transition"
                >
                  -
                </button>
                <span className="text-xl font-bold text-slate-900 w-12 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(Math.min(10, quantity + 1))}
                  className="w-10 h-10 rounded-lg bg-slate-100 hover:bg-slate-200 border border-slate-300 font-bold text-lg text-slate-800 flex items-center justify-center transition"
                >
                  +
                </button>
                <span className="text-xs text-slate-500 font-medium">
                  {lang === 'bm' ? '(Gigi/Rahang/Sesi)' : '(Teeth/Arch/Sessions)'}
                </span>
              </div>
            </div>

          </div>

          {/* Right: Estimated Calculation Summary Card */}
          <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-md space-y-6">
            
            <div className="border-b border-slate-200 pb-4">
              <span className="text-xs font-bold uppercase text-[#B8860B] tracking-wider block mb-1">
                {lang === 'bm' ? 'RINGKASAN ANGGARAN HARGA' : 'ESTIMATE SUMMARY'}
              </span>
              <h3 className="text-xl font-serif font-bold text-slate-900">{itemName}</h3>
              <p className="text-xs text-slate-600 mt-1 font-normal">{itemDesc}</p>
            </div>

            {/* Main Price Output */}
            <div className="bg-[#FAF8F5] p-5 rounded-xl border border-slate-200 text-center">
              <span className="text-xs text-slate-600 uppercase font-semibold block mb-1">
                {lang === 'bm' ? 'Anggaran Jumlah Kasar' : 'Estimated Total Cost'}
              </span>
              <div className="text-3xl sm:text-4xl font-serif font-bold text-[#8B6508]">
                RM {minTotal.toLocaleString()} – RM {maxTotal.toLocaleString()}
              </div>
              <p className="text-[11px] text-slate-500 mt-2 font-normal">
                * Anggaran tepat tertakluk kepada pemeriksaan & diagnosis doktor pergigian semasa konsultasi.
              </p>
            </div>

            {/* Installment Info if Braces or Implants */}
            {installmentText && (
              <div className="bg-[#B8860B]/10 p-4 rounded-xl border border-[#B8860B]/30 flex items-start gap-3 text-xs sm:text-sm text-slate-800">
                <Sparkles className="w-5 h-5 text-[#B8860B] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold block text-slate-900 mb-0.5">
                    {lang === 'bm' ? 'Pilihan Ansuran Bulanan Mesra Poket' : 'Flexible Monthly Installment Available'}
                  </span>
                  <span className="text-slate-600 font-normal">{installmentText}</span>
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="space-y-3 pt-2">
              <a
                href={`https://wa.me/${CLINIC_INFO.whatsappNumberDigits}?text=${whatsappMessage}`}
                target="_blank"
                rel="noreferrer"
                className="w-full gold-bg-gradient hover:opacity-95 text-slate-950 font-bold py-3.5 px-4 rounded-xl shadow-md transition flex items-center justify-center gap-2 text-sm"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>{lang === 'bm' ? 'Hantar Anggaran Ini ke WhatsApp' : 'Send Estimate to WhatsApp'}</span>
              </a>

              <div className="text-[11px] text-center text-slate-500 font-medium flex items-center justify-center gap-1">
                <HelpCircle className="w-3.5 h-3.5 text-[#B8860B]" />
                <span>{lang === 'bm' ? 'Konsultasi percuma tersedia untuk pelan Braces' : 'Free consultation for selected Braces packages'}</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
