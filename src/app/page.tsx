import Hero from "@/components/sections/Hero";
import SportsGrid from "@/components/sections/SportsGrid";
import EventsTeaser from "@/components/sections/EventsTeaser";
import Testimonials from "@/components/sections/Testimonials";
import BottomSection from "@/components/sections/BottomSection";

export default function Home() {
  return (
    <>
      <Hero />
      <SportsGrid />
      <EventsTeaser />
      <Testimonials />
      <BottomSection />
    </>
  );
}
