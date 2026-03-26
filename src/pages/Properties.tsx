import { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { properties } from "@/data/properties";
import PropertyCard from "@/components/PropertyCard";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";

const PropertiesPage = () => {
  const [searchParams] = useSearchParams();
  const [city, setCity] = useState(searchParams.get("city") || "");
  const [type, setType] = useState(searchParams.get("type") || "");
  const [price, setPrice] = useState(searchParams.get("price") || "");

  const filtered = useMemo(() => {
    return properties.filter((p) => {
      if (city && p.city !== city) return false;
      if (type && p.type !== type) return false;
      if (price) {
        if (price.includes("+")) {
          const min = parseInt(price);
          if (p.price < min) return false;
        } else {
          const [min, max] = price.split("-").map(Number);
          if (p.price < min || p.price > max) return false;
        }
      }
      return true;
    });
  }, [city, type, price]);

  return (
    <>
      <Navbar />
      <section className="pt-28 pb-20 min-h-screen bg-background">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-10">
            <p className="text-gold font-medium text-sm tracking-widest uppercase mb-2">Our Portfolio</p>
            <h1 className="font-display text-4xl font-bold text-foreground">All Properties</h1>
          </motion.div>
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <select value={city} onChange={(e) => setCity(e.target.value)} className="px-4 py-2.5 rounded-lg bg-secondary text-foreground text-sm border-0 focus:ring-2 focus:ring-gold outline-none">
              <option value="">All Cities</option>
              <option value="Lahore">Lahore</option>
              <option value="Karachi">Karachi</option>
              <option value="Islamabad">Islamabad</option>
            </select>
            <select value={type} onChange={(e) => setType(e.target.value)} className="px-4 py-2.5 rounded-lg bg-secondary text-foreground text-sm border-0 focus:ring-2 focus:ring-gold outline-none">
              <option value="">All Types</option>
              <option value="House">House</option>
              <option value="Apartment">Apartment</option>
              <option value="Villa">Villa</option>
              <option value="Commercial">Commercial</option>
            </select>
            <select value={price} onChange={(e) => setPrice(e.target.value)} className="px-4 py-2.5 rounded-lg bg-secondary text-foreground text-sm border-0 focus:ring-2 focus:ring-gold outline-none">
              <option value="">All Prices</option>
              <option value="0-30000000">Under 3 Crore</option>
              <option value="30000000-60000000">3 - 6 Crore</option>
              <option value="60000000-100000000">6 - 10 Crore</option>
              <option value="100000000+">10 Crore+</option>
            </select>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((p, i) => <PropertyCard key={p.id} property={p} index={i} />)}
          </div>
          {filtered.length === 0 && (
            <p className="text-center text-muted-foreground text-lg mt-10">No properties found matching your criteria.</p>
          )}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default PropertiesPage;
