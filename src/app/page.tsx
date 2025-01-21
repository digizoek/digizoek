import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero/index";
import Testimonials from "@/components/Testimonials";
import { Metadata } from "next";
import StackingCard from "@/components/Process/StackingCard";
import TabsComponent from "@/components/Services/Services"; //services tabs

export const metadata: Metadata = {
  title: "Digizoek - Innovative Software & Digital Solutions",
  description: "Digizoek specializes in software and website development, digital marketing, graphic design, SMMA and more to elevate your business in the digital landscape.",
  
};


export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      < TabsComponent />
      < StackingCard />
      <Testimonials />
      <AboutSectionOne />
      <AboutSectionTwo />
      <Contact />
    </>
  );
}
