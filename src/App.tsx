import React, { useState, lazy, Suspense } from 'react';
import { Language } from './types';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { StatsBanner } from './components/StatsBanner';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { Reveal } from './components/Reveal';

// Dynamic lazy imports for heavy below-the-fold sections
const FounderSection = lazy(() => import('./components/FounderSection').then(m => ({ default: m.FounderSection })));
const PriceCalculator = lazy(() => import('./components/PriceCalculator').then(m => ({ default: m.PriceCalculator })));
const BeforeAfterGallery = lazy(() => import('./components/BeforeAfterGallery').then(m => ({ default: m.BeforeAfterGallery })));
const ReviewsSection = lazy(() => import('./components/ReviewsSection').then(m => ({ default: m.ReviewsSection })));
const FaqSection = lazy(() => import('./components/FaqSection').then(m => ({ default: m.FaqSection })));
const ContactSection = lazy(() => import('./components/ContactSection').then(m => ({ default: m.ContactSection })));
const BookingModal = lazy(() => import('./components/BookingModal').then(m => ({ default: m.BookingModal })));

const SectionLoader = () => (
  <div className="py-12 flex items-center justify-center">
    <div className="w-8 h-8 border-4 border-[#C5A059] border-t-transparent rounded-full animate-spin"></div>
  </div>
);

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
    <div className="min-h-screen text-slate-800 font-sans selection:bg-[#C5A059] selection:text-white flex flex-col">

      {/* Fixed, faint brand emblem watermark behind all content.
          Relative BASE_URL path so it resolves on both the Vercel root and
          the GitHub Pages /alan-adlanTier3/ subpath. */}
      <div
        aria-hidden="true"
        className="fixed inset-0 -z-10 pointer-events-none bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${import.meta.env.BASE_URL}alanadlanborderlogo.png)`,
          backgroundSize: 'min(90vmin, 720px)',
          opacity: 0.14,
        }}
      />

      {/* Sticky Navigation Header */}
      <Header
        lang={lang}
        setLang={setLang}
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* Hero Section — opacity-only fade to avoid a layout jump on the LCP section */}
        <Reveal y={0}>
          <Hero
            lang={lang}
            onOpenBooking={() => handleOpenBooking()}
          />
        </Reveal>

        {/* Highlight Stats Bar */}
        <Reveal>
          <StatsBanner lang={lang} />
        </Reveal>

        {/* About Clinic Section */}
        <Reveal>
          <AboutSection lang={lang} />
        </Reveal>

        {/* Services & Treatments Catalog */}
        <Reveal>
          <ServicesSection
            lang={lang}
            onOpenBookingWithTreatment={(id) => handleOpenBooking(id)}
          />
        </Reveal>

        {/* Lazy Loaded Sections */}
        <Suspense fallback={<SectionLoader />}>
          {/* Founder & Principal Surgeon Spotlight */}
          <Reveal>
            <FounderSection lang={lang} />
          </Reveal>

          {/* Interactive Price Estimator & Calculator */}
          <Reveal>
            <PriceCalculator lang={lang} />
          </Reveal>

          {/* Before & After Smile Gallery */}
          <Reveal>
            <BeforeAfterGallery lang={lang} />
          </Reveal>

          {/* Patient Reviews & Google Ratings */}
          <Reveal>
            <ReviewsSection lang={lang} />
          </Reveal>

          {/* FAQ Accordion */}
          <Reveal>
            <FaqSection lang={lang} />
          </Reveal>

          {/* Contact, Hours & Map Location */}
          <Reveal>
            <ContactSection lang={lang} />
          </Reveal>
        </Suspense>
      </main>

      {/* Footer */}
      <Reveal>
        <Footer lang={lang} />
      </Reveal>

      {/* Lazy Loaded Booking Modal */}
      <Suspense fallback={null}>
        {bookingModalOpen && (
          <BookingModal
            isOpen={bookingModalOpen}
            onClose={handleCloseBooking}
            lang={lang}
            initialTreatmentId={selectedTreatmentId}
          />
        )}
      </Suspense>

      {/* Floating WhatsApp Quick Assistant */}
      <FloatingWhatsApp
        lang={lang}
        onOpenBooking={() => handleOpenBooking()}
      />

    </div>
  );
}
