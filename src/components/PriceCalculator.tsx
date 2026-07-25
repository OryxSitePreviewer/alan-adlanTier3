import React, { useState, useMemo } from 'react';
import { PRICE_CALCULATOR_ITEMS, CLINIC_INFO } from '../data/clinicData';
import { Calculator, CheckCircle, MessageCircle, DollarSign, Sparkles } from 'lucide-react';

export const PriceCalculator: React.FC = () => {
  const [selectedItemId, setSelectedItemId] = useState<string>(PRICE_CALCULATOR_ITEMS[0].id);
  const [quantity, setQuantity] = useState<number>(1);

  const selectedItem = useMemo(() => {
    return PRICE_CALCULATOR_ITEMS.find(item => item.id === selectedItemId) || PRICE_CALCULATOR_ITEMS[0];
  }, [selectedItemId]);

  const { minTotal, maxTotal, itemName, itemDesc, installmentText, whatsappMessage } = useMemo(() => {
    const min = selectedItem.minPrice * quantity;
    const max = selectedItem.maxPrice * quantity;
    const name = selectedItem.nameEN;
    const desc = selectedItem.descriptionEN;
    const inst = selectedItem.monthlyInstallmentEN;

    const waMsg = encodeURIComponent(
      `Hi Klinik Alan Adlan, I calculated an estimate on your website:\n- Treatment: ${selectedItem.nameEN}\n- Quantity/Sessions: ${quantity}\n- Estimated Price: RM${min} - RM${max}\n\nI would like to inquire about appointment availability and payment plans.`
    );

    return {
      minTotal: min,
      maxTotal: max,
      itemName: name,
      itemDesc: desc,
      installmentText: inst,
      whatsappMessage: waMsg,
    };
  }, [selectedItem, quantity]);

  return (
    <section id="calculator" className="py-20 bg-transparent text-slate-800 relative border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-[#B8860B]/10 text-[#8B6508] border border-[#B8860B]/30 px-3.5 py-1.5 rounded-full text-xs font-bold mb-3">
            <Calculator className="w-4 h-4 text-[#B8860B]" />
            <span>TRANSPARENT PATIENT PRICING</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 mb-4">
            Treatment Cost Estimator
          </h2>
          <p className="text-slate-600 text-sm sm:text-base font-normal">
            Select a treatment to view estimated price ranges & flexible installment options prior to your consultation.
          </p>
        </div>

        {/* Calculator Grid Layout */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Treatment Selection */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
            
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#B8860B] mb-3">
                1. Select Dental Treatment Type
              </label>
              
              <div className="grid sm:grid-cols-2 gap-3">
                {PRICE_CALCULATOR_ITEMS.map(item => {
                  const isSelected = item.id === selectedItemId;
                  const name = item.nameEN;

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

            {/* Quantity Selector */}
            <div className="pt-4 border-t border-slate-200">
              <label className="block text-xs font-bold uppercase tracking-wider text-[#B8860B] mb-3">
                2. Quantity / Teeth / Sessions Count
              </label>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 rounded-lg bg-slate-100 hover:bg-slate-200 border border-slate-300 font-bold text-lg text-slate-800 flex items-center justify-center transition"
                >
                  -
                </button>
                <span className="text-xl font-bold text-slate-900 w-12 text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 rounded-lg bg-slate-100 hover:bg-slate-200 border border-slate-300 font-bold text-lg text-slate-800 flex items-center justify-center transition"
                >
                  +
                </button>
              </div>
            </div>

          </div>

          {/* Right: Calculated Price Summary Box */}
          <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-md space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#B8860B] block mb-1">
                Estimated Price Breakdown
              </span>
              <h3 className="text-xl font-serif font-bold text-slate-900">{itemName}</h3>
              <p className="text-xs text-slate-600 mt-1">{itemDesc}</p>
            </div>

            {/* Price Output Banner */}
            <div className="bg-[#FAF8F5] p-5 rounded-xl border border-slate-200 text-center">
              <span className="text-xs text-slate-500 font-semibold block mb-1">
                Total Estimated Cost ({quantity}x)
              </span>
              <div className="text-3xl sm:text-4xl font-serif font-bold text-[#8B6508]">
                RM{minTotal} – RM{maxTotal}
              </div>
              {installmentText && (
                <span className="inline-block mt-2 text-xs font-bold bg-[#B8860B]/15 text-[#8B6508] px-3 py-1 rounded-full border border-[#B8860B]/30">
                  ⚡ {installmentText}
                </span>
              )}
            </div>

            <div className="space-y-2.5 text-xs text-slate-600">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Price includes registration & initial consultation assessment.</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Flexible payment terms & monthly installment packages available.</span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={`https://wa.me/${CLINIC_INFO.whatsappNumberDigits}?text=${whatsappMessage}`}
                target="_blank"
                rel="noreferrer"
                className="w-full gold-bg-gradient hover:opacity-95 text-slate-950 font-bold py-3.5 px-4 rounded-xl shadow-md transition flex items-center justify-center gap-2 text-sm"
              >
                <MessageCircle className="w-4 h-4 fill-slate-950 text-slate-950" />
                <span>Inquire Slot with This Estimate</span>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
