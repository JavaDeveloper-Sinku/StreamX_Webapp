import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Footer from "@/components/Footer"; 
import Image from "next/image";
import Pricing from "@/components/Pricing";
import HowItWorks from "@/components/HowItWorks";
import StatsSection from "@/components/StatsSection";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <StatsSection/>
      <Features/>
      <HowItWorks/>
      <Pricing />
      <Footer />
    </main>
  );
}
