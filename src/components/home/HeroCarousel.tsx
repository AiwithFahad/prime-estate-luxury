import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, ChevronRight, Search } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import hero4 from "@/assets/hero-4.jpg";

const slides = [
  { image: hero1, title: "Luxury Living in DHA Lahore", subtitle: "Discover premium 1 Kanal homes" },
  { image: hero2, title: "Modern Apartments in Clifton Karachi", subtitle: "Sea-facing luxury living" },
  { image: hero3, title: "Elite Homes in Islamabad", subtitle: "F-Sector prestige residences" },
  { image: hero4, title: "Premium Villas in Bahria Town", subtitle: "Gated community excellence" },
];

const HeroCarousel = () => {
  const [current, setCurrent] = useState(0);
  const [location, setLocation] = useState("");
  const [type, setType] = useState("");
  const [priceRange, setPriceRange] = useState("");
  const navigate = useNavigate();

  const next = useCallback(() => setCurrent((c) => (c + 1) % slides.length), []);

  useEffect(() => {
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, [next]);

  const handleSearch = () => {
    const params = new URLSearchParams();
    if (location) params.set("city", location);
    if (type) params.set("type", type);
    if (priceRange) params.set("price", priceRange);
    navigate(`/properties?${params.toString()}`);
  };

  return (
    <section className="relative h-screen overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <img
            src={slides[current].image}
            alt={slides[current].title}
            className="w-full h-full object-cover"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 bg-charcoal/50" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-4">
              {slides[current].title}
            </h1>
            <p className="text-primary-foreground/70 text-lg md:text-xl font-body">
              {slides[current].subtitle}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* Search Form */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="w-full max-w-4xl bg-background/95 backdrop-blur-xl rounded-xl p-4 md:p-6 shadow-elegant"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <select
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-secondary text-foreground text-sm font-body border-0 focus:ring-2 focus:ring-gold outline-none"
            >
              <option value="">All Locations</option>
              <option value="Lahore">Lahore</option>
              <option value="Karachi">Karachi</option>
              <option value="Islamabad">Islamabad</option>
            </select>
            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-secondary text-foreground text-sm font-body border-0 focus:ring-2 focus:ring-gold outline-none"
            >
              <option value="">Property Type</option>
              <option value="House">House</option>
              <option value="Apartment">Apartment</option>
              <option value="Villa">Villa</option>
              <option value="Commercial">Commercial</option>
            </select>
            <select
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-secondary text-foreground text-sm font-body border-0 focus:ring-2 focus:ring-gold outline-none"
            >
              <option value="">Price Range (PKR)</option>
              <option value="0-30000000">Under 3 Crore</option>
              <option value="30000000-60000000">3 - 6 Crore</option>
              <option value="60000000-100000000">6 - 10 Crore</option>
              <option value="100000000+">10 Crore+</option>
            </select>
            <button
              onClick={handleSearch}
              className="flex items-center justify-center gap-2 bg-gold text-charcoal font-semibold py-3 rounded-lg hover:bg-gold-dark transition-all duration-300 btn-glow"
            >
              <Search className="w-4 h-4" />
              Search
            </button>
          </div>
        </motion.div>
      </div>

      {/* Arrows */}
      <button
        onClick={() => setCurrent((c) => (c - 1 + slides.length) % slides.length)}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-background/20 backdrop-blur-sm flex items-center justify-center text-primary-foreground hover:bg-gold/80 transition-all"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-background/20 backdrop-blur-sm flex items-center justify-center text-primary-foreground hover:bg-gold/80 transition-all"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              i === current ? "bg-gold w-8" : "bg-primary-foreground/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroCarousel;
