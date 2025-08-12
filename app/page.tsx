import Header from '@/components/Header';
import Hero from '@/components/Hero';
import VisionSlider from '@/components/VisionSlider';
import TrustedBy from '@/components/TrustedBy';
import Pillars from '@/components/Pillars';
import TechOverview from '@/components/TechOverview';
import ServicesTabs from '@/components/ServicesTabs';
import UseCases from '@/components/UseCases';
import Testimonials from '@/components/Testimonials';
import VisionBlurb from '@/components/VisionBlurb';
import Pricing from '@/components/Pricing';
import ResearchEthics from '@/components/ResearchEthics';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';

export default function Page(){
  return (
    <>
      <Header />
      <main>
        <Hero />
        <VisionSlider />
        <TrustedBy />
        <Pillars />
        <TechOverview />
        <ServicesTabs />
        <UseCases />
        <Testimonials />
        <VisionBlurb />
        <Pricing />
        <ResearchEthics />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
