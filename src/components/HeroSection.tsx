import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import heroImg from "@/assets/hero-dental.png";

const HeroSection = () => (
  <section
    id="home"
    className="min-h-screen flex items-center relative overflow-hidden"
    style={{ background: "var(--gradient-hero)" }}
  >
    {/* Decorative blobs */}
    <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-primary/10 blur-3xl" />
    <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-secondary/10 blur-3xl" />

    <div className="container mx-auto px-6 py-32 flex flex-col lg:flex-row items-center gap-12 relative z-10">
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="flex-1 text-center lg:text-left"
      >
        <span className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
          Your smile, our priority 🦷
        </span>
        <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-foreground leading-tight mb-6">
          Dental Care Made{" "}
          <span className="text-transparent bg-clip-text" style={{ backgroundImage: "var(--gradient-primary)" }}>
            Simple & Joyful
          </span>
        </h1>
        <p className="text-muted-foreground text-lg max-w-xl mb-8 leading-relaxed">
          Find available dentists near you, book your appointment in seconds, and even get a ride to the clinic — all in one place.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
          <a
            href="#dentists"
            className="px-8 py-3.5 rounded-2xl font-semibold text-primary-foreground shadow-button hover:shadow-lg transition-all hover:scale-105"
            style={{ backgroundImage: "var(--gradient-primary)" }}
          >
            Find a Dentist
          </a>
          <a
            href="#appointment"
            className="px-8 py-3.5 rounded-2xl font-semibold border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all"
          >
            Book Appointment
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex-1 flex justify-center"
      >
        <img
          src={heroImg}
          alt="DentiWhee dental care"
          width={480}
          height={480}
          className="animate-float drop-shadow-2xl max-w-sm lg:max-w-md"
        />
      </motion.div>
    </div>

    <motion.a
      href="#dentists"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.2 }}
      className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors"
    >
      <ArrowDown size={28} className="animate-bounce" />
    </motion.a>
  </section>
);

export default HeroSection;
