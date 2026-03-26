import { properties } from "@/data/properties";
import PropertyCard from "@/components/PropertyCard";
import { motion } from "framer-motion";

const FeaturedProperties = () => {
  const featured = properties.filter((p) => p.featured).slice(0, 8);

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-gold font-medium text-sm tracking-widest uppercase mb-2">Handpicked for You</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">Featured Properties</h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((p, i) => (
            <PropertyCard key={p.id} property={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;
