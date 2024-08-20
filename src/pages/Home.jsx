import "../App.css";
import NavBar from "../components/shared/NavBar";
import HeroSection from "../components/HeroSection";
import About from "../components/About";
import Vision from "../components/Vision";
import Events from "../components/Events";
import Team from "../components/Team";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";
import { useState } from "react";

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);
  return (
    <>
      <NavBar isMobile={isMobile} setIsMobile={setIsMobile} />
      <HeroSection isMobile={isMobile} />
      <About />
      <Vision />
      <Events />
      <Team />
      <ContactUs />
      <Footer />
    </>
  );
}
