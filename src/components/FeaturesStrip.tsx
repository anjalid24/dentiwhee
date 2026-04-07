import { motion } from "framer-motion";
import { Search, CalendarCheck, CarFront, ShieldCheck } from "lucide-react";

const features = [
  { icon: Search, title: "Find Dentists", desc: "Browse real-time availability of certified professionals near you." },
  { icon: CalendarCheck, title: "Instant Booking", desc: "Pick your slot, confirm in seconds — no phone calls needed." },
  { icon: CarFront, title: "Ride to Clinic", desc: "Book a ride straight from your door to the dentist's office." },
  { icon: ShieldCheck, title: "Trusted Care", desc: "All dentists are verified and reviewed by real patients." },
];

const FeaturesStrip = () => (
  <section className="py-20 bg-card">
    <div className="container mx-auto px-6">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="text-center group"
          >
            <div className="w-14 h-14 rounded-2xl mx-auto mb-4 flex items-center justify-center text-primary-foreground group-hover:scale-110 transition-transform"
              style={{ backgroundImage: "var(--gradient-primary)" }}>
              <f.icon size={24} />
            </div>
            <h3 className="font-heading font-bold text-foreground mb-2">{f.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesStrip;
