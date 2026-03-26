import { Link } from "react-router-dom";
import { Bed, Bath, Maximize, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import type { Property } from "@/data/properties";

const PropertyCard = ({ property, index = 0 }: { property: Property; index?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
  >
    <Link to={`/property/${property.id}`} className="group block">
      <div className="bg-card rounded-lg overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-500 hover:-translate-y-2">
        <div className="relative overflow-hidden aspect-[4/3]">
          <img
            src={property.image}
            alt={property.title}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute top-3 left-3 flex gap-2">
            {property.featured && (
              <span className="bg-gold text-charcoal text-xs font-semibold px-3 py-1 rounded-full">Featured</span>
            )}
            {property.isNew && (
              <span className="bg-charcoal text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">New</span>
            )}
          </div>
          <div className="absolute bottom-3 right-3 bg-charcoal/80 backdrop-blur-sm text-primary-foreground text-xs font-medium px-3 py-1 rounded-full">
            {property.type}
          </div>
        </div>
        <div className="p-5">
          <p className="text-gold font-display text-xl font-bold mb-1">{property.priceFormatted}</p>
          <h3 className="font-display text-lg font-semibold text-foreground mb-2 line-clamp-1">{property.title}</h3>
          <div className="flex items-center gap-1 text-muted-foreground text-sm mb-3">
            <MapPin className="w-3.5 h-3.5" />
            {property.location}
          </div>
          <div className="flex items-center gap-4 text-sm text-muted-foreground border-t border-border pt-3">
            {property.beds > 0 && (
              <div className="flex items-center gap-1"><Bed className="w-4 h-4" /> {property.beds}</div>
            )}
            <div className="flex items-center gap-1"><Bath className="w-4 h-4" /> {property.baths}</div>
            <div className="flex items-center gap-1"><Maximize className="w-4 h-4" /> {property.area}</div>
          </div>
        </div>
      </div>
    </Link>
  </motion.div>
);

export default PropertyCard;
