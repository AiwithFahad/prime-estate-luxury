import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { agents } from "@/data/properties";
import { motion } from "framer-motion";
import { Phone, Mail, User, Home, Clock } from "lucide-react";

const AgentsPage = () => (
  <>
    <Navbar />
    <section className="pt-28 pb-20 min-h-screen bg-background">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-14">
          <p className="text-gold font-medium text-sm tracking-widest uppercase mb-2">Our Experts</p>
          <h1 className="font-display text-4xl font-bold text-foreground">Our Agents</h1>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {agents.map((agent, i) => (
            <motion.div key={agent.id} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.15 }}
              className="bg-card rounded-xl p-8 text-center shadow-card hover:shadow-card-hover transition-all duration-500 hover:-translate-y-2"
            >
              <div className="w-28 h-28 rounded-full bg-gold/20 flex items-center justify-center mx-auto mb-6">
                <User className="w-12 h-12 text-gold" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-1">{agent.name}</h3>
              <p className="text-gold text-sm font-medium mb-3">{agent.role}</p>
              <p className="text-muted-foreground text-sm mb-4">{agent.description}</p>
              <div className="flex justify-center gap-4 text-sm text-muted-foreground mb-4">
                <span className="flex items-center gap-1"><Home className="w-4 h-4" />{agent.properties} Properties</span>
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" />{agent.experience}</span>
              </div>
              <div className="flex justify-center gap-3">
                <a href={`tel:${agent.phone}`} className="flex items-center gap-2 bg-gold text-charcoal px-4 py-2 rounded-lg text-sm font-medium hover:bg-gold-dark transition-colors">
                  <Phone className="w-4 h-4" /> Call
                </a>
                <a href={`mailto:${agent.email}`} className="flex items-center gap-2 border border-gold text-gold px-4 py-2 rounded-lg text-sm font-medium hover:bg-gold hover:text-charcoal transition-colors">
                  <Mail className="w-4 h-4" /> Email
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
    <Footer />
  </>
);

export default AgentsPage;
