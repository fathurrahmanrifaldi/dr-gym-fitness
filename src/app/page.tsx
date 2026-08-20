import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Facilities from "@/components/sections/Facilities";
import Trainers from "@/components/sections/Trainers";
import Membership from "@/components/sections/Membership";
import PersonalTrainer from "@/components/sections/PersonalTrainer";
import Schedule from "@/components/sections/Schedule";
import Testimonials from "@/components/sections/Testimonials";
import CTA from "@/components/sections/CTA";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Facilities />
        <Trainers />
        <Membership />
        <PersonalTrainer />
        <Schedule />
        <Testimonials />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
