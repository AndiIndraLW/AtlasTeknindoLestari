import HeroSection from '@/components/HeroSection';
import FleetSection from '@/components/FleetSection';
import WhyChooseUsSection from '@/components/WhyChooseUsSection';
import RentalEstimatorSection from '@/components/RentalEstimatorSection';
import QuoteFormSection from '@/components/QuoteFormSection';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 flex flex-col">
      {/* 1. Header & Hero Section */}
      <HeroSection />

      {/* 2. Our Fleet (Grid Layout) */}
      <FleetSection />

      {/* 3. Why Choose Us (3-Column Layout) */}
      <WhyChooseUsSection />

      {/* 4. Interactive Equipment Estimator */}
      <RentalEstimatorSection />

      {/* 5. Lead Generation Section (Quote Form) */}
      <QuoteFormSection />
    </div>
  );
}
