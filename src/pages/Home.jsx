import "../App.css";
import TopBanner from "../components/TopBanner";
import NavBar from "../components/shared/NavBar";
import HeroSection from "../components/HeroSection";
import About from "../components/About";
import Events from "../components/Events";
import Team from "../components/Team";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";
import { useState } from "react";

export default function Home() {
  const [mobile, setMobile] = useState(false);
  return (
    <>
      {/* <TopBanner /> */}
      <NavBar mobile={mobile} setMobile={setMobile} />
      <HeroSection mobile={mobile} />
      <About />
      <Events />
      <Team />
      <ContactUs />
      <Footer />
    </>
  );
}
