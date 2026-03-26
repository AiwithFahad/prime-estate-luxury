import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Phone, Mail, User } from "lucide-react";
import { agents } from "@/data/properties";

const AgentsSection = () => (
  <section className="py-20 bg-off-white">
    <div className="container mx-auto px-4">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
        <p className="text-gold font-medium text-sm tracking-widest uppercase mb-2">Our Team</p>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">Meet Our Agents</h2>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {agents.map((agent, i) => (
          <motion.div key={agent.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }}
            className="bg-card rounded-xl p-8 text-center shadow-card hover:shadow-card-hover transition-all duration-500 hover:-translate-y-2 group"
          >
            <div className="w-24 h-24 rounded-full bg-gold/20 flex items-center justify-center mx-auto mb-6 group-hover:bg-gold/30 transition-colors">
              <User className="w-10 h-10 text-gold" />
            </div>
            <h3 className="font-display text-xl font-bold text-foreground mb-1">{agent.name}</h3>
            <p className="text-gold text-sm font-medium mb-2">{agent.role}</p>
            <p className="text-muted-foreground text-sm mb-4">{agent.experience} Experience</p>
            <div className="flex justify-center gap-3">
              <a href={`tel:${agent.phone}`} className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-gold/20 transition-colors">
                <Phone className="w-4 h-4 text-muted-foreground" />
              </a>
              <a href={`mailto:${agent.email}`} className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-gold/20 transition-colors">
                <Mail className="w-4 h-4 text-muted-foreground" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="text-center mt-10">
        <Link to="/agents" className="text-gold font-medium hover:underline">View All Agents →</Link>
      </div>
    </div>
  </section>
);

export default AgentsSection;
