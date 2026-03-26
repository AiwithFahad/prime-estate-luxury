import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import hero3 from "@/assets/hero-3.jpg";

const HeroBanner = () => (
  <section className="relative h-[500px] overflow-hidden">
    <img src={hero3} alt="Premium living" loading="lazy" className="w-full h-full object-cover" width={1920} height={1080} />
    <div className="absolute inset-0 bg-charcoal/60" />
    <div className="absolute inset-0 flex items-center justify-center z-10">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-4">Discover Premium Living</h2>
        <p className="text-primary-foreground/70 text-lg mb-8 max-w-xl mx-auto">Experience the finest luxury residences across Pakistan's most prestigious addresses</p>
        <Link to="/featured" className="inline-flex items-center gap-2 bg-gold text-charcoal font-semibold px-8 py-3 rounded-lg hover:bg-gold-dark transition-all duration-300 btn-glow">
          View Featured Listings <ArrowRight className="w-4 h-4" />
        </Link>
      </motion.div>
    </div>
  </section>
);

export default HeroBanner;
