import { properties } from "@/data/properties";
import PropertyCard from "@/components/PropertyCard";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";

const ApartmentsPage = () => {
  const apartments = properties.filter((p) => p.type === "Apartment");
  return (
    <>
      <Navbar />
      <section className="pt-28 pb-20 min-h-screen bg-background">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-14">
            <p className="text-gold font-medium text-sm tracking-widest uppercase mb-2">Urban Living</p>
            <h1 className="font-display text-4xl font-bold text-foreground">Luxury Apartments</h1>
            <p className="text-muted-foreground mt-3 max-w-xl mx-auto">Premium flats in Clifton Karachi, Gulberg Lahore, and Islamabad's finest sectors</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {apartments.map((p, i) => <PropertyCard key={p.id} property={p} index={i} />)}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ApartmentsPage;
