import React, { useState, lazy, Suspense } from 'react';
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

      {/* Fixed, semi-transparent reception counter watermark behind all content.
          Relative BASE_URL path so it resolves on both Vercel root and GitHub Pages subpath. */}
      <div
        aria-hidden="true"
        className="fixed inset-0 -z-10 pointer-events-none bg-center bg-no-repeat bg-cover"
        style={{
          backgroundImage: `url(${import.meta.env.BASE_URL}alanadlancounter.png)`,
          opacity: 0.20,
        }}
      />

      {/* Sticky Navigation Header */}
      <Header
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Reveal y={0}>
          <Hero
            onOpenBooking={() => handleOpenBooking()}
          />
        </Reveal>

        {/* Highlight Stats Bar */}
        <Reveal>
          <StatsBanner />
        </Reveal>

        {/* About Clinic Section */}
        <Reveal>
          <AboutSection />
        </Reveal>

        {/* Services & Treatments Catalog */}
        <Reveal>
          <ServicesSection
            onOpenBookingWithTreatment={(id) => handleOpenBooking(id)}
          />
        </Reveal>

        {/* Lazy Loaded Sections */}
        <Suspense fallback={<SectionLoader />}>
          {/* Founder & Principal Surgeon Spotlight */}
          <Reveal>
            <FounderSection />
          </Reveal>

          {/* Interactive Price Estimator & Calculator */}
          <Reveal>
            <PriceCalculator />
          </Reveal>

          {/* Before & After Smile Gallery */}
          <Reveal>
            <BeforeAfterGallery />
          </Reveal>

          {/* Patient Reviews & Google Ratings */}
          <Reveal>
            <ReviewsSection />
          </Reveal>

          {/* FAQ Accordion */}
          <Reveal>
            <FaqSection />
          </Reveal>

          {/* Contact, Hours & Map Location */}
          <Reveal>
            <ContactSection />
          </Reveal>
        </Suspense>
      </main>

      {/* Footer */}
      <Reveal>
        <Footer />
      </Reveal>

      {/* Lazy Loaded Booking Modal */}
      <Suspense fallback={null}>
        {bookingModalOpen && (
          <BookingModal
            isOpen={bookingModalOpen}
            onClose={handleCloseBooking}
            initialTreatmentId={selectedTreatmentId}
          />
        )}
      </Suspense>

      {/* Floating WhatsApp Quick Assistant */}
      <FloatingWhatsApp
        onOpenBooking={() => handleOpenBooking()}
      />

    </div>
  );
}
