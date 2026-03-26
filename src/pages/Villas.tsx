import { properties } from "@/data/properties";
import PropertyCard from "@/components/PropertyCard";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";

const VillasPage = () => {
  const villas = properties.filter((p) => p.type === "Villa");
  return (
    <>
      <Navbar />
      <section className="pt-28 pb-20 min-h-screen bg-background">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-14">
            <p className="text-gold font-medium text-sm tracking-widest uppercase mb-2">Exclusive Residences</p>
            <h1 className="font-display text-4xl font-bold text-foreground">Luxury Villas</h1>
            <p className="text-muted-foreground mt-3 max-w-xl mx-auto">DHA, Bahria Town & Bahria Enclave premium villas</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {villas.map((p, i) => <PropertyCard key={p.id} property={p} index={i} />)}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default VillasPage;
