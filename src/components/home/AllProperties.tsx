import { Link } from "react-router-dom";
import { properties } from "@/data/properties";
import PropertyCard from "@/components/PropertyCard";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const AllProperties = () => {
  const mixed = properties.slice(0, 4);
  return (
    <section className="py-20 bg-off-white">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
          <p className="text-gold font-medium text-sm tracking-widest uppercase mb-2">Explore Our Portfolio</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">All Properties</h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {mixed.map((p, i) => <PropertyCard key={p.id} property={p} index={i} />)}
        </div>
        <div className="text-center">
          <Link to="/properties" className="inline-flex items-center gap-2 border-2 border-gold text-gold font-semibold px-8 py-3 rounded-lg hover:bg-gold hover:text-charcoal transition-all duration-300">
            View All Properties <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AllProperties;
