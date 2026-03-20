import Hero from "@/components/sections/Hero";
import SportsGrid from "@/components/sections/SportsGrid";
import StatsBanner from "@/components/sections/StatsBanner";
import Testimonials from "@/components/sections/Testimonials";
import CTABanner from "@/components/sections/CTABanner";

export default function Home() {
  return (
    <>
      <Hero />
      <SportsGrid />
      <StatsBanner />
      <Testimonials />
      <CTABanner />
    </>
  );
}
