import Cta from "@/components/Cta";
import Customers from "@/components/Customers";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Logofolio from "@/components/Logofolio";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <Logofolio />
      <Features />
      <Customers />
      <Pricing />
      <Testimonials />
      <Cta />
    </>
  );
}
