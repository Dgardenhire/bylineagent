import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { SampleOutput } from "@/components/SampleOutput";
import { Compare } from "@/components/Compare";
import { Pricing } from "@/components/Pricing";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <HowItWorks />
      <SampleOutput />
      <Compare />
      <Pricing />
      <FAQ />
      <Footer />
    </>
  );
}
