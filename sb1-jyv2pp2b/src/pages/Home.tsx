import { DonationSection } from '../components/DonationSection';
import { FacilitiesSection } from '../components/FacilitiesSection';
import { Footer } from '../components/Footer';
import { Hero } from '../components/Hero';
import { Navbar } from '../components/Navbar';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { VisitInfoSection } from '../components/VisitInfoSection';

export function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <FacilitiesSection />
        <VisitInfoSection />
        <TestimonialsSection />
        <DonationSection />
      </main>
      <Footer />
    </div>
  );
}