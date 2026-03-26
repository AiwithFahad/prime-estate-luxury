import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Send, MapPin, Phone, Mail } from "lucide-react";

const ContactPage = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <>
      <Navbar />
      <section className="pt-28 pb-20 min-h-screen bg-background">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-14">
            <p className="text-gold font-medium text-sm tracking-widest uppercase mb-2">Reach Out</p>
            <h1 className="font-display text-4xl font-bold text-foreground">Contact Us</h1>
          </motion.div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input type="text" placeholder="Your Name" required maxLength={100} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full px-4 py-3 rounded-lg bg-secondary text-foreground text-sm border-0 focus:ring-2 focus:ring-gold outline-none" />
                <input type="email" placeholder="Your Email" required maxLength={255} value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full px-4 py-3 rounded-lg bg-secondary text-foreground text-sm border-0 focus:ring-2 focus:ring-gold outline-none" />
                <textarea placeholder="Your Message" rows={6} required maxLength={1000} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="w-full px-4 py-3 rounded-lg bg-secondary text-foreground text-sm border-0 focus:ring-2 focus:ring-gold outline-none resize-none" />
                <button type="submit" className="flex items-center gap-2 bg-gold text-charcoal font-semibold px-8 py-3 rounded-lg hover:bg-gold-dark transition-all duration-300 btn-glow">
                  <Send className="w-4 h-4" /> Send Message
                </button>
              </form>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }}>
              <div className="bg-card rounded-xl p-8 shadow-card space-y-6">
                <h3 className="font-display text-xl font-bold text-foreground">Our Offices</h3>
                <div className="space-y-4">
                  {[
                    { city: "Lahore", address: "Gulberg III, Main Boulevard", phone: "+92 321 1234567" },
                    { city: "Karachi", address: "Clifton Block 9, Sea View", phone: "+92 333 7654321" },
                    { city: "Islamabad", address: "Blue Area, Jinnah Avenue", phone: "+92 300 9876543" },
                  ].map((office) => (
                    <div key={office.city} className="border-b border-border pb-4 last:border-0">
                      <p className="font-semibold text-foreground mb-1">{office.city}</p>
                      <p className="text-muted-foreground text-sm flex items-center gap-1"><MapPin className="w-3.5 h-3.5" />{office.address}</p>
                      <p className="text-muted-foreground text-sm flex items-center gap-1"><Phone className="w-3.5 h-3.5" />{office.phone}</p>
                    </div>
                  ))}
                </div>
                <div className="pt-2">
                  <p className="text-muted-foreground text-sm flex items-center gap-1"><Mail className="w-3.5 h-3.5" /> info@primeestate.pk</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ContactPage;
