import { useParams, Link } from "react-router-dom";
import { properties, agents } from "@/data/properties";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PropertyCard from "@/components/PropertyCard";
import { motion } from "framer-motion";
import { MapPin, Bed, Bath, Maximize, Phone, Mail, User, ArrowLeft, CheckCircle } from "lucide-react";
import { useState } from "react";

const PropertyDetail = () => {
  const { id } = useParams();
  const property = properties.find((p) => p.id === id);
  const [activeImg, setActiveImg] = useState(0);

  if (!property) {
    return (
      <>
        <Navbar />
        <div className="pt-28 pb-20 text-center min-h-screen bg-background">
          <h1 className="font-display text-3xl font-bold text-foreground mb-4">Property Not Found</h1>
          <Link to="/properties" className="text-gold hover:underline">← Back to Properties</Link>
        </div>
        <Footer />
      </>
    );
  }

  const agent = agents.find((a) => a.id === property.agentId);
  const related = properties.filter((p) => p.id !== property.id && p.city === property.city).slice(0, 4);

  return (
    <>
      <Navbar />
      <section className="pt-24 pb-20 bg-background">
        <div className="container mx-auto px-4">
          <Link to="/properties" className="inline-flex items-center gap-2 text-muted-foreground hover:text-gold transition-colors mb-6">
            <ArrowLeft className="w-4 h-4" /> Back to Properties
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Images */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="lg:col-span-2">
              <div className="rounded-xl overflow-hidden mb-4">
                <img src={property.images[activeImg]} alt={property.title} className="w-full aspect-[16/10] object-cover" />
              </div>
              <div className="flex gap-3">
                {property.images.map((img, i) => (
                  <button key={i} onClick={() => setActiveImg(i)} className={`rounded-lg overflow-hidden border-2 transition-all ${i === activeImg ? "border-gold" : "border-transparent opacity-60"}`}>
                    <img src={img} alt="" className="w-24 h-16 object-cover" />
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Details */}
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
              <div className="bg-card rounded-xl p-6 shadow-card mb-6">
                <p className="text-gold font-display text-3xl font-bold mb-2">{property.priceFormatted}</p>
                <h1 className="font-display text-2xl font-bold text-foreground mb-3">{property.title}</h1>
                <div className="flex items-center gap-1 text-muted-foreground text-sm mb-4">
                  <MapPin className="w-4 h-4" /> {property.location}
                </div>
                <div className="flex gap-6 mb-6 text-sm text-muted-foreground">
                  {property.beds > 0 && <div className="flex items-center gap-1"><Bed className="w-4 h-4" /> {property.beds} Beds</div>}
                  <div className="flex items-center gap-1"><Bath className="w-4 h-4" /> {property.baths} Baths</div>
                  <div className="flex items-center gap-1"><Maximize className="w-4 h-4" /> {property.area}</div>
                </div>
                <p className="text-foreground/80 text-sm leading-relaxed mb-6">{property.description}</p>
                <h3 className="font-display text-lg font-semibold text-foreground mb-3">Amenities</h3>
                <div className="grid grid-cols-2 gap-2">
                  {property.amenities.map((a) => (
                    <div key={a} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-gold" /> {a}
                    </div>
                  ))}
                </div>
              </div>

              {/* Agent */}
              {agent && (
                <div className="bg-card rounded-xl p-6 shadow-card">
                  <h3 className="font-display text-lg font-semibold text-foreground mb-4">Contact Agent</h3>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 rounded-full bg-gold/20 flex items-center justify-center">
                      <User className="w-6 h-6 text-gold" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{agent.name}</p>
                      <p className="text-gold text-sm">{agent.role}</p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <a href={`tel:${agent.phone}`} className="flex items-center justify-center gap-2 bg-gold text-charcoal font-semibold py-3 rounded-lg hover:bg-gold-dark transition-all btn-glow">
                      <Phone className="w-4 h-4" /> Call Now
                    </a>
                    <a href={`mailto:${agent.email}`} className="flex items-center justify-center gap-2 border border-gold text-gold font-semibold py-3 rounded-lg hover:bg-gold hover:text-charcoal transition-all">
                      <Mail className="w-4 h-4" /> Send Email
                    </a>
                  </div>
                </div>
              )}
            </motion.div>
          </div>

          {/* Related */}
          {related.length > 0 && (
            <div className="mt-16">
              <h2 className="font-display text-2xl font-bold text-foreground mb-8">Related Properties</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {related.map((p, i) => <PropertyCard key={p.id} property={p} index={i} />)}
              </div>
            </div>
          )}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default PropertyDetail;
