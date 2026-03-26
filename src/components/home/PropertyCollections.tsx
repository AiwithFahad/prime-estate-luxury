import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import hero2 from "@/assets/hero-2.jpg";
import hero4 from "@/assets/hero-4.jpg";
import propCommercial from "@/assets/prop-commercial.jpg";
import hero1 from "@/assets/hero-1.jpg";

const collections = [
  { title: "Apartments", image: hero2, path: "/apartments" },
  { title: "Villas", image: hero4, path: "/villas" },
  { title: "Commercial", image: propCommercial, path: "/commercial" },
  { title: "Luxury Homes", image: hero1, path: "/properties?type=House" },
];

const PropertyCollections = () => (
  <section className="py-20 bg-off-white">
    <div className="container mx-auto px-4">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
        <p className="text-gold font-medium text-sm tracking-widest uppercase mb-2">Browse by Category</p>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">Property Collections</h2>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {collections.map((c, i) => (
          <motion.div key={c.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
            <Link to={c.path} className="group relative block aspect-[3/4] rounded-xl overflow-hidden">
              <img src={c.image} alt={c.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-charcoal/50 group-hover:bg-charcoal/40 transition-colors duration-300" />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="font-display text-2xl font-bold text-primary-foreground">{c.title}</h3>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default PropertyCollections;
