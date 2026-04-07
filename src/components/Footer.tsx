import { Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => (
  <footer id="contact" className="bg-foreground text-primary-foreground py-16">
    <div className="container mx-auto px-6">
      <div className="grid md:grid-cols-4 gap-10 mb-12">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <img src={logo} alt="DentiWhee" className="h-8 w-8 brightness-200" />
            <span className="font-heading text-lg font-bold">DentiWhee</span>
          </div>
          <p className="text-primary-foreground/60 text-sm leading-relaxed">
            Making dental care accessible, comfortable, and joyful for everyone.
          </p>
        </div>

        <div>
          <h4 className="font-heading font-bold mb-4">Quick Links</h4>
          <div className="flex flex-col gap-2">
            {[
              { label: "Home",        href: "#home" },
              { label: "Dentists",    href: "#dentists" },
              { label: "Appointment", href: "#appointment" },
              { label: "Book a Ride", href: "#ride" },
            ].map((l) => (
              <a key={l.label} href={l.href} className="text-primary-foreground/60 hover:text-primary-foreground text-sm transition-colors">
                {l.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-heading font-bold mb-4">Services</h4>
          <div className="flex flex-col gap-2 text-sm text-primary-foreground/60">
            <span>General Dentistry</span>
            <span>Orthodontics</span>
            <span>Cosmetic Dentistry</span>
            <span>Pediatric Care</span>
          </div>
        </div>

        <div>
          <h4 className="font-heading font-bold mb-4">Get in Touch</h4>
          <div className="flex flex-col gap-3 text-sm text-primary-foreground/60">
            <a href="mailto:hello@dentiwhee.com" className="flex items-center gap-2 hover:text-primary-foreground transition-colors">
              <Mail size={14} /> hello@dentiwhee.com
            </a>
            <a href="tel:+18001234567" className="flex items-center gap-2 hover:text-primary-foreground transition-colors">
              <Phone size={14} /> +1 (800) 123-4567
            </a>
            <span className="flex items-center gap-2">
              <MapPin size={14} /> 123 Smile Avenue, NY
            </span>
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10 pt-6 text-center text-sm text-primary-foreground/40">
        © {new Date().getFullYear()} DentiWhee. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
