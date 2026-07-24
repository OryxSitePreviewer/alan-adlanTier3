import React, { useState } from 'react';
import { Language } from './types';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { StatsBanner } from './components/StatsBanner';
import { AboutSection } from './components/AboutSection';
import { FounderSection } from './components/FounderSection';
import { ServicesSection } from './components/ServicesSection';
import { PriceCalculator } from './components/PriceCalculator';
import { BeforeAfterGallery } from './components/BeforeAfterGallery';
import { ReviewsSection } from './components/ReviewsSection';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  const [lang, setLang] = useState<Language>('bm');
  const [bookingModalOpen, setBookingModalOpen] = useState<boolean>(false);
  const [selectedTreatmentId, setSelectedTreatmentId] = useState<string | undefined>(undefined);

  const handleOpenBooking = (treatmentId?: string) => {
    setSelectedTreatmentId(treatmentId);
    setBookingModalOpen(true);
  };

  const handleCloseBooking = () => {
    setBookingModalOpen(false);
    setSelectedTreatmentId(undefined);
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-slate-800 font-sans selection:bg-[#C5A059] selection:text-white flex flex-col">
      
      {/* Sticky Navigation Header */}
      <Header
        lang={lang}
        setLang={setLang}
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero
          lang={lang}
          onOpenBooking={() => handleOpenBooking()}
        />

        {/* Highlight Stats Bar */}
        <StatsBanner lang={lang} />

        {/* About Clinic Section */}
        <AboutSection lang={lang} />

        {/* Founder & Principal Surgeon Spotlight */}
        <FounderSection lang={lang} />

        {/* Services & Treatments Catalog */}
        <ServicesSection
          lang={lang}
          onOpenBookingWithTreatment={(id) => handleOpenBooking(id)}
        />

        {/* Interactive Price Estimator & Calculator */}
        <PriceCalculator lang={lang} />

        {/* Before & After Smile Gallery */}
        <BeforeAfterGallery lang={lang} />

        {/* Patient Reviews & Google Ratings */}
        <ReviewsSection lang={lang} />

        {/* FAQ Accordion */}
        <FaqSection lang={lang} />

        {/* Contact, Hours & Map Location */}
        <ContactSection lang={lang} />
      </main>

      {/* Footer */}
      <Footer lang={lang} />

      {/* Booking Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={handleCloseBooking}
        lang={lang}
        initialTreatmentId={selectedTreatmentId}
      />

      {/* Floating WhatsApp Quick Assistant */}
      <FloatingWhatsApp
        lang={lang}
        onOpenBooking={() => handleOpenBooking()}
      />

    </div>
  );
}
