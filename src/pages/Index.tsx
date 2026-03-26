import HeroCarousel from "@/components/home/HeroCarousel";
import FeaturedProperties from "@/components/home/FeaturedProperties";
import PropertyCollections from "@/components/home/PropertyCollections";
import DreamHome from "@/components/home/DreamHome";
import NewArrivals from "@/components/home/NewArrivals";
import HeroBanner from "@/components/home/HeroBanner";
import AllProperties from "@/components/home/AllProperties";
import DarkBanner from "@/components/home/DarkBanner";
import Testimonials from "@/components/home/Testimonials";
import AgentsSection from "@/components/home/AgentsSection";
import Stats from "@/components/home/Stats";
import ContactSection from "@/components/home/ContactSection";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const Index = () => (
  <>
    <Navbar />
    <HeroCarousel />
    <FeaturedProperties />
    <PropertyCollections />
    <DreamHome />
    <NewArrivals />
    <HeroBanner />
    <AllProperties />
    <DarkBanner />
    <Testimonials />
    <AgentsSection />
    <Stats />
    <ContactSection />
    <Footer />
  </>
);

export default Index;
