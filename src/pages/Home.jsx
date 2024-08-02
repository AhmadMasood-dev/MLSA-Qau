import "../App.css";
import TopBanner from "../components/TopBanner";
import NavBar from "../components/shared/NavBar";
import HeroSection from "../components/HeroSection";
import About from "../components/About";
import Events from "../components/Events";
import Team from "../components/Team";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <TopBanner />
      <NavBar />
      <HeroSection />
      <About />
      <Events />
      <Team />
      <ContactUs />
      <Footer />
    </>
  );
}
