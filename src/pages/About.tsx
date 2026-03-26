import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Shield, Eye, Users } from "lucide-react";
import hero3 from "@/assets/hero-3.jpg";

const About = () => (
  <>
    <Navbar />
    <section className="pt-28 pb-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-14">
          <p className="text-gold font-medium text-sm tracking-widest uppercase mb-2">Our Story</p>
          <h1 className="font-display text-4xl font-bold text-foreground">About Prime Estate</h1>
        </motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <img src={hero3} alt="About us" loading="lazy" className="rounded-xl shadow-elegant w-full" />
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h2 className="font-display text-3xl font-bold text-foreground mb-4">Pakistan's Premier Luxury Real Estate Platform</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Founded with a vision to transform Pakistan's real estate landscape, Prime Estate has been connecting discerning buyers with the finest properties across the nation for over a decade.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our team of expert agents specializes in luxury residential and commercial properties in DHA Lahore, Bahria Town, Clifton Karachi, and Islamabad's elite F-sectors. We pride ourselves on transparency, professionalism, and delivering exceptional results.
            </p>
          </motion.div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: Eye, title: "Our Vision", desc: "To be Pakistan's most trusted luxury real estate brand, setting new standards in property services." },
            { icon: Shield, title: "Our Mission", desc: "Delivering transparent, professional real estate experiences that exceed client expectations." },
            { icon: Users, title: "Our Team", desc: "A dedicated team of 20+ professionals across Lahore, Karachi, and Islamabad." },
          ].map((item, i) => (
            <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="bg-card rounded-xl p-8 shadow-card text-center"
            >
              <item.icon className="w-10 h-10 text-gold mx-auto mb-4" />
              <h3 className="font-display text-xl font-bold text-foreground mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
    <Footer />
  </>
);

export default About;
