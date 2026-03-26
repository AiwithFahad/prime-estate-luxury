import { motion } from "framer-motion";
import darkBanner from "@/assets/dark-banner.jpg";

const DarkBanner = () => (
  <section className="relative h-[600px] overflow-hidden">
    <img src={darkBanner} alt="Luxury night view" loading="lazy" className="w-full h-full object-cover" width={1920} height={1080} />
    <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/70 to-transparent" />
    <div className="absolute inset-0 flex items-end justify-center z-10 pb-20">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center">
        <p className="text-gold text-sm tracking-widest uppercase mb-3">Exclusive Living</p>
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4">Where Luxury Meets Legacy</h2>
        <p className="text-primary-foreground/50 text-lg max-w-2xl mx-auto">Pakistan's most prestigious addresses, curated for the discerning few</p>
      </motion.div>
    </div>
  </section>
);

export default DarkBanner;
