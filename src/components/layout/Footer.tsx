import { Link } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";

const Footer = () => (
  <footer className="bg-charcoal text-primary-foreground">
    <div className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <h3 className="font-display text-2xl font-bold mb-4">
            <span className="text-gold">Prime</span> Estate
          </h3>
          <p className="text-primary-foreground/60 text-sm leading-relaxed">
            Pakistan's premier luxury real estate platform. Connecting you with the finest homes in Lahore, Karachi, and Islamabad.
          </p>
        </div>
        <div>
          <h4 className="font-display text-lg font-semibold mb-4 text-gold">Quick Links</h4>
          <div className="flex flex-col gap-2">
            {["Properties", "Apartments", "Villas", "Commercial", "Featured", "Agents"].map((l) => (
              <Link key={l} to={`/${l.toLowerCase()}`} className="text-sm text-primary-foreground/60 hover:text-gold transition-colors">
                {l}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-display text-lg font-semibold mb-4 text-gold">Locations</h4>
          <div className="flex flex-col gap-2 text-sm text-primary-foreground/60">
            <span>DHA Lahore</span>
            <span>Bahria Town Karachi</span>
            <span>F-6/F-7 Islamabad</span>
            <span>Gulberg Lahore</span>
            <span>Clifton Karachi</span>
          </div>
        </div>
        <div>
          <h4 className="font-display text-lg font-semibold mb-4 text-gold">Contact</h4>
          <div className="flex flex-col gap-3 text-sm text-primary-foreground/60">
            <div className="flex items-center gap-2"><MapPin className="w-4 h-4 text-gold" /> Gulberg III, Lahore</div>
            <div className="flex items-center gap-2"><Phone className="w-4 h-4 text-gold" /> +92 321 1234567</div>
            <div className="flex items-center gap-2"><Mail className="w-4 h-4 text-gold" /> info@primeestate.pk</div>
          </div>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10 mt-12 pt-8 text-center text-sm text-primary-foreground/40">
        © 2026 Prime Estate. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
