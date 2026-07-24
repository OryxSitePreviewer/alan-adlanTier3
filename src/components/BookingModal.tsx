import React, { useState } from 'react';
import { Language, BookingFormData } from '../types';
import { SERVICES_DATA, CLINIC_INFO } from '../data/clinicData';
import { X, Calendar, Clock, User, Phone, Mail, FileText, CheckCircle2, MessageCircle } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
  initialTreatmentId?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  lang,
  initialTreatmentId
}) => {
  const [formData, setFormData] = useState<BookingFormData>({
    fullName: '',
    phone: '',
    email: '',
    date: new Date().toISOString().split('T')[0],
    timeSlot: '10:00 AM',
    treatmentId: initialTreatmentId || SERVICES_DATA[0].id,
    branch: 'Seksyen 1, Bandar Baru Bangi',
    notes: '',
    patientType: 'new'
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const selectedService = SERVICES_DATA.find(s => s.id === formData.treatmentId) || SERVICES_DATA[0];
  const treatmentTitle = lang === 'bm' ? selectedService.titleBM : selectedService.titleEN;

  const whatsappMessage = encodeURIComponent(
    lang === 'bm'
      ? `Salam Klinik Pergigian Alan Adlan, saya hendak membuat TEMPAHAN TEMUJANJI:\n\n` +
        `• Nama Pesakit: ${formData.fullName}\n` +
        `• No. Telefon: ${formData.phone}\n` +
        `• Jenis Pesakit: ${formData.patientType === 'new' ? 'Pesakit Baharu' : 'Pesakit Sedia Ada'}\n` +
        `• Rawatan: ${treatmentTitle}\n` +
        `• Tarikh Cadangan: ${formData.date}\n` +
        `• Masa Cadangan: ${formData.timeSlot}\n` +
        `• Nota / Catatan: ${formData.notes || 'Tiada'}\n\n` +
        `Mohon pihak klinik mengesahkan slot ini. Terima kasih!`
      : `Hi Klinik Pergigian Alan Adlan, I would like to BOOK AN APPOINTMENT:\n\n` +
        `• Patient Name: ${formData.fullName}\n` +
        `• Phone Number: ${formData.phone}\n` +
        `• Patient Type: ${formData.patientType === 'new' ? 'New Patient' : 'Existing Patient'}\n` +
        `• Treatment: ${treatmentTitle}\n` +
        `• Proposed Date: ${formData.date}\n` +
        `• Proposed Time: ${formData.timeSlot}\n` +
        `• Notes: ${formData.notes || 'None'}\n\n` +
        `Please confirm this slot for me. Thank you!`
  );

  const directWhatsappUrl = `https://wa.me/${CLINIC_INFO.whatsappNumberDigits}?text=${whatsappMessage}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-8 text-slate-800">
        
        {/* Header */}
        <div className="bg-[#FAF8F5] text-slate-900 p-6 sm:p-7 relative border-b border-slate-200">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 text-slate-600 hover:text-slate-900 rounded-full bg-slate-100 border border-slate-200 transition"
          >
            <X className="w-5 h-5" />
          </button>

          <span className="text-[11px] font-bold uppercase tracking-wider text-[#8B6508] block mb-1">
            KLINIK PERGIGIAN ALAN ADLAN
          </span>
          <h3 className="text-xl sm:text-2xl font-serif font-bold text-slate-900">
            {lang === 'bm' ? 'Borang Tempahan Temujanji' : 'Appointment Booking Form'}
          </h3>
          <p className="text-xs text-slate-600 mt-1 font-normal">
            {lang === 'bm' ? 'Isi maklumat untuk mengesahkan slot pilihan anda via WhatsApp.' : 'Fill in details to confirm your preferred slot via WhatsApp.'}
          </p>
        </div>

        {/* Content */}
        {!submitted ? (
          <form onSubmit={handleSubmit} className="p-6 sm:p-7 space-y-4">
            
            {/* Patient Type toggle */}
            <div>
              <label className="block text-xs font-bold text-[#8B6508] uppercase mb-2">
                {lang === 'bm' ? 'Jenis Pesakit' : 'Patient Category'}
              </label>
              <div className="grid grid-cols-2 gap-2 text-xs font-semibold">
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, patientType: 'new' })}
                  className={`py-2.5 px-3 rounded-xl border text-center transition ${
                    formData.patientType === 'new'
                      ? 'gold-bg-gradient text-slate-950 font-bold border-transparent shadow-xs'
                      : 'bg-[#FAF8F5] text-slate-700 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  {lang === 'bm' ? 'Pesakit Baharu' : 'New Patient'}
                </button>
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, patientType: 'existing' })}
                  className={`py-2.5 px-3 rounded-xl border text-center transition ${
                    formData.patientType === 'existing'
                      ? 'gold-bg-gradient text-slate-950 font-bold border-transparent shadow-xs'
                      : 'bg-[#FAF8F5] text-slate-700 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  {lang === 'bm' ? 'Pesakit Sedia Ada' : 'Existing Patient'}
                </button>
              </div>
            </div>

            {/* Name */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                {lang === 'bm' ? 'Nama Penuh Pesakit *' : 'Full Patient Name *'}
              </label>
              <div className="relative">
                <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  placeholder={lang === 'bm' ? 'Contoh: Ahmad Razak' : 'e.g. John Smith'}
                  className="w-full pl-10 pr-4 py-2.5 text-sm bg-[#FAF8F5] border border-slate-300 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#B8860B]"
                />
              </div>
            </div>

            {/* Phone */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                {lang === 'bm' ? 'Nombor Telefon (WhatsApp) *' : 'Phone Number (WhatsApp) *'}
              </label>
              <div className="relative">
                <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="012-345 6789"
                  className="w-full pl-10 pr-4 py-2.5 text-sm bg-[#FAF8F5] border border-slate-300 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#B8860B]"
                />
              </div>
            </div>

            {/* Treatment Selector */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                {lang === 'bm' ? 'Pilih Jenis Rawatan *' : 'Select Treatment *'}
              </label>
              <select
                value={formData.treatmentId}
                onChange={(e) => setFormData({ ...formData, treatmentId: e.target.value })}
                className="w-full px-4 py-2.5 text-sm bg-[#FAF8F5] border border-slate-300 rounded-xl text-slate-900 focus:outline-none focus:border-[#B8860B]"
              >
                {SERVICES_DATA.map(s => (
                  <option key={s.id} value={s.id} className="bg-white text-slate-900">
                    {lang === 'bm' ? s.titleBM : s.titleEN}
                  </option>
                ))}
              </select>
            </div>

            {/* Date & Time Slot Grid */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                  {lang === 'bm' ? 'Tarikh Cadangan *' : 'Preferred Date *'}
                </label>
                <input
                  type="date"
                  required
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="w-full px-3 py-2.5 text-sm bg-[#FAF8F5] border border-slate-300 rounded-xl text-slate-900 focus:outline-none focus:border-[#B8860B]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                  {lang === 'bm' ? 'Masa Slot *' : 'Time Slot *'}
                </label>
                <select
                  value={formData.timeSlot}
                  onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                  className="w-full px-3 py-2.5 text-sm bg-[#FAF8F5] border border-slate-300 rounded-xl text-slate-900 focus:outline-none focus:border-[#B8860B]"
                >
                  <option value="09:30 AM" className="bg-white">09:30 AM (Sesi Pagi)</option>
                  <option value="11:00 AM" className="bg-white">11:00 AM (Sesi Pagi)</option>
                  <option value="02:30 PM" className="bg-white">02:30 PM (Sesi Petang)</option>
                  <option value="04:30 PM" className="bg-white">04:30 PM (Sesi Petang)</option>
                  <option value="07:00 PM" className="bg-white">07:00 PM (Sesi Malam)</option>
                  <option value="08:00 PM" className="bg-white">08:00 PM (Sesi Malam)</option>
                </select>
              </div>
            </div>

            {/* Notes */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                {lang === 'bm' ? 'Nota / Gejala (Pilihan)' : 'Notes / Symptoms (Optional)'}
              </label>
              <textarea
                rows={2}
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                placeholder={lang === 'bm' ? 'Contoh: Gigi bongsu sakit bahagian bawah kanan...' : 'e.g. Toothache on lower right side...'}
                className="w-full px-4 py-2.5 text-sm bg-[#FAF8F5] border border-slate-300 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#B8860B]"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full gold-bg-gradient text-slate-950 font-bold py-3.5 px-4 rounded-xl shadow-md hover:opacity-95 transition flex items-center justify-center gap-2 text-sm"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>{lang === 'bm' ? 'Teruskan Hantar Tempahan via WhatsApp' : 'Proceed to Send Booking via WhatsApp'}</span>
              </button>
            </div>

          </form>
        ) : (
          /* Confirmation Success Screen */
          <div className="p-8 text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-[#B8860B]/20 text-[#8B6508] flex items-center justify-center mx-auto shadow-xs border border-[#B8860B]/30">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div>
              <h4 className="text-2xl font-serif font-bold text-slate-900">
                {lang === 'bm' ? 'Tempahan Sedia Dihantar!' : 'Booking Ready to Send!'}
              </h4>
              <p className="text-sm text-slate-600 mt-2 font-normal">
                {lang === 'bm'
                  ? 'Klik butang di bawah untuk membuka aplikasi WhatsApp anda dan menghantar butiran temujanji terus kepada kaunter Klinik Pergigian Alan Adlan.'
                  : 'Click the button below to open WhatsApp and send your appointment details directly to the clinic desk.'}
              </p>
            </div>

            {/* Summary Box */}
            <div className="bg-[#FAF8F5] p-4 rounded-xl text-left border border-slate-200 text-xs space-y-1.5 text-slate-700 font-medium">
              <p><strong className="text-slate-900 font-bold">Nama:</strong> {formData.fullName}</p>
              <p><strong className="text-slate-900 font-bold">Telefon:</strong> {formData.phone}</p>
              <p><strong className="text-slate-900 font-bold">Rawatan:</strong> {treatmentTitle}</p>
              <p><strong className="text-slate-900 font-bold">Tarikh & Masa:</strong> {formData.date} @ {formData.timeSlot}</p>
            </div>

            <div className="space-y-3">
              <a
                href={directWhatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full gold-bg-gradient text-slate-950 font-bold py-3.5 px-4 rounded-xl shadow-md hover:opacity-95 transition flex items-center justify-center gap-2 text-sm"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>{lang === 'bm' ? 'Buka WhatsApp Sekarang' : 'Open WhatsApp Now'}</span>
              </a>

              <button
                onClick={onClose}
                className="w-full text-slate-500 hover:text-slate-800 text-xs font-semibold py-2"
              >
                {lang === 'bm' ? 'Tutup Window Ini' : 'Close Window'}
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
