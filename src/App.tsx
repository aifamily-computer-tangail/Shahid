import React, { useState } from 'react';
import { Navbar } from './components/Navbar.tsx';
import { HeroSection } from './components/HeroSection.tsx';
import { WhyBrainchildSection } from './components/WhyBrainchildSection.tsx';
import { SpecialitySection } from './components/SpecialitySection.tsx';
import { ChooseBusinessSection } from './components/ChooseBusinessSection.tsx';
import { LabSection } from './components/LabSection.tsx';
import { PricingSection } from './components/PricingSection.tsx';
import { ClientsSection } from './components/ClientsSection.tsx';
import { TestimonialsSection } from './components/TestimonialsSection.tsx';
import { ProfilesSection } from './components/ProfilesSection.tsx';
import { ContactSection } from './components/ContactSection.tsx';
import { Footer } from './components/Footer.tsx';
import { WhatsAppFloatingButton } from './components/WhatsAppFloatingButton.tsx';

export default function App() {
  const [selectedPlan, setSelectedPlan] = useState<string>('');

  const handleSelectPlan = (planName: string) => {
    setSelectedPlan(planName);
  };

  const handleSelectTrack = (trackTitle: string) => {
    setSelectedPlan(`Track: ${trackTitle}`);
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-blue-600 selection:text-white flex flex-col font-sans">
      {/* 1. Header and Sticky Navigation */}
      <Navbar />

      <main className="flex-grow">
        {/* 2. Hero Section – Who is M Shahid Islam */}
        <HeroSection />

        {/* 3. Why Brainchild BD */}
        <WhyBrainchildSection />

        {/* 4. Speciality Section */}
        <SpecialitySection />

        {/* 5. Choose Your Business Section */}
        <ChooseBusinessSection onSelectTrack={handleSelectTrack} />

        {/* 6. Lab Section */}
        <LabSection />

        {/* 7. Investment Size / Pricing Section */}
        <PricingSection onSelectPlan={handleSelectPlan} />

        {/* 8. Our Clients Section */}
        <ClientsSection />

        {/* 9. Testimonials Section */}
        <TestimonialsSection />

        {/* 10. International Profiles Section */}
        <ProfilesSection />

        {/* 11. Contact Section */}
        <ContactSection initialPlan={selectedPlan} />
      </main>

      {/* 12. Footer */}
      <Footer />

      {/* 13. Fixed WhatsApp Contact Button */}
      <WhatsAppFloatingButton
        phoneNumber="+8801760443030"
        url="https://wa.me/8801760443030"
      />
    </div>
  );
}
