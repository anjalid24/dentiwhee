import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesStrip from "@/components/FeaturesStrip";
import DentistsSection from "@/components/DentistsSection";
import AppointmentSection from "@/components/AppointmentSection";
import RideSection from "@/components/RideSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen">
    <Navbar />
    <HeroSection />
    <FeaturesStrip />
    <DentistsSection />
    <AppointmentSection />
    <RideSection />
    <Footer />
  </div>
);

export default Index;
