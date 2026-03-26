import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import prop5 from "@/assets/prop-5.jpg";

const DreamHome = () => (
  <section className="py-20 bg-background">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative">
          <img src={prop5} alt="Dream home" loading="lazy" className="rounded-xl w-full shadow-elegant" width={1200} height={800} />
          <div className="absolute -bottom-4 -right-4 w-32 h-32 border-2 border-gold rounded-xl hidden lg:block" />
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <p className="text-gold font-medium text-sm tracking-widest uppercase mb-3">Your Journey Starts Here</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight">
            Find Your Dream Home in Pakistan's Prime Locations
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            From the elegant avenues of DHA Lahore to the sea-facing towers of Clifton Karachi and the prestigious F-sectors of Islamabad, Prime Estate connects you with the finest properties across Pakistan. Our curated collection represents the pinnacle of luxury living.
          </p>
          <Link
            to="/properties"
            className="inline-flex items-center gap-2 bg-gold text-charcoal font-semibold px-8 py-3 rounded-lg hover:bg-gold-dark transition-all duration-300 btn-glow"
          >
            Explore Properties <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </div>
  </section>
);

export default DreamHome;
