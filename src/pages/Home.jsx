import "../App.css";
import NavBar from "../components/shared/NavBar";
import HeroSection from "../components/HeroSection";
import About from "../components/About";
import Events from "../components/Events";
import Team from "../components/Team";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";
import { useState } from "react";

export default function Home() {
  const [mobileSize, setMobileSize] = useState(false);
  return (
    <>
      <NavBar mobileSize={mobileSize} setMobileSize={setMobileSize} />
      <HeroSection mobileSize={mobileSize} />
      <About />
      <Events />
      <Team />
      <ContactUs />
      <Footer />
    </>
  );
}
