import { useState } from "react";
import { properties } from "@/data/properties";
import PropertyCard from "@/components/PropertyCard";
import { motion } from "framer-motion";

const tabs = ["All", "Apartments", "Villas", "Commercial"];

const NewArrivals = () => {
  const [activeTab, setActiveTab] = useState("All");
  const newProps = properties.filter((p) => p.isNew);
  const filtered = activeTab === "All" ? newProps : newProps.filter((p) => p.type === (activeTab === "Apartments" ? "Apartment" : activeTab === "Villas" ? "Villa" : activeTab));

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10">
          <p className="text-gold font-medium text-sm tracking-widest uppercase mb-2">Latest Additions</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">New Arrivals</h2>
        </motion.div>
        <div className="flex justify-center gap-4 mb-10">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === tab ? "bg-gold text-charcoal" : "bg-secondary text-muted-foreground hover:bg-gold/20"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filtered.slice(0, 4).map((p, i) => (
            <PropertyCard key={p.id} property={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;
