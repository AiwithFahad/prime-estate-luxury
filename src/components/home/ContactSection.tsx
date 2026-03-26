import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Shield, Headphones, Scale, UserCheck } from "lucide-react";

const features = [
  { icon: UserCheck, title: "Trusted Agents", desc: "Verified professionals with years of experience" },
  { icon: Headphones, title: "24/7 Support", desc: "Round-the-clock assistance for all your needs" },
  { icon: Shield, title: "Secure Deals", desc: "Safe and transparent property transactions" },
  { icon: Scale, title: "Legal Assistance", desc: "Complete legal support for property deals" },
];

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <p className="text-gold font-medium text-sm tracking-widest uppercase mb-2">Get in Touch</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">Contact Us</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text" placeholder="Your Name" required maxLength={100}
                value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-secondary text-foreground text-sm border-0 focus:ring-2 focus:ring-gold outline-none"
              />
              <input
                type="email" placeholder="Your Email" required maxLength={255}
                value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-secondary text-foreground text-sm border-0 focus:ring-2 focus:ring-gold outline-none"
              />
              <textarea
                placeholder="Your Message" rows={5} required maxLength={1000}
                value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-secondary text-foreground text-sm border-0 focus:ring-2 focus:ring-gold outline-none resize-none"
              />
              <button type="submit" className="flex items-center gap-2 bg-gold text-charcoal font-semibold px-8 py-3 rounded-lg hover:bg-gold-dark transition-all duration-300 btn-glow">
                <Send className="w-4 h-4" /> Send Message
              </button>
            </form>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <p className="text-gold font-medium text-sm tracking-widest uppercase mb-2">Why Choose Us</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-8">Our Promises</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((f, i) => (
                <motion.div key={f.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  className="bg-card rounded-xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300"
                >
                  <f.icon className="w-8 h-8 text-gold mb-3" />
                  <h3 className="font-display text-lg font-semibold text-foreground mb-1">{f.title}</h3>
                  <p className="text-muted-foreground text-sm">{f.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
