import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Navigation, Car, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";

const RideSection = () => {
  const [pickup, setPickup] = useState("");
  const [clinic, setClinic] = useState("");
  const [rideType, setRideType] = useState<"standard" | "comfort" | "premium">("standard");
  const [booked, setBooked] = useState(false);

  const rideOptions = [
    { key: "standard" as const, label: "Standard", price: "$8–12", eta: "5 min" },
    { key: "comfort" as const, label: "Comfort", price: "$14–18", eta: "3 min" },
    { key: "premium" as const, label: "Premium", price: "$22–28", eta: "7 min" },
  ];

  const handleBook = () => {
    if (!pickup || !clinic) {
      toast.error("Please enter both pickup and clinic locations");
      return;
    }
    setBooked(true);
    toast.success("Ride booked! Your driver is on the way.");
  };

  if (booked) {
    return (
      <section id="ride" className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-lg mx-auto text-center bg-card rounded-3xl p-12 shadow-card"
          >
            <CheckCircle2 size={64} className="mx-auto text-secondary mb-6" />
            <h2 className="font-heading text-2xl font-bold text-foreground mb-3">Ride Confirmed!</h2>
            <p className="text-muted-foreground mb-2">
              A <strong>{rideType}</strong> ride is heading to <strong>{pickup}</strong>.
            </p>
            <p className="text-muted-foreground mb-8">Destination: <strong>{clinic}</strong></p>
            <button
              onClick={() => { setBooked(false); setPickup(""); setClinic(""); }}
              className="px-6 py-3 rounded-2xl font-semibold border-2 border-border text-foreground hover:bg-muted transition-all"
            >
              Book Another Ride
            </button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="ride" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block bg-accent/10 text-accent px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            Need a Ride?
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-4">
            We'll Get You There
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Book a comfortable ride straight to your dentist's clinic. No stress, no hassle.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto bg-card rounded-3xl p-8 sm:p-10 shadow-card"
        >
          <div className="space-y-5 mb-8">
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 flex items-center gap-1.5">
                <Navigation size={14} className="text-accent" /> Pickup Location
              </label>
              <input
                value={pickup}
                onChange={(e) => setPickup(e.target.value)}
                placeholder="Enter your address..."
                className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/40"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 flex items-center gap-1.5">
                <MapPin size={14} className="text-primary" /> Clinic Destination
              </label>
              <input
                value={clinic}
                onChange={(e) => setClinic(e.target.value)}
                placeholder="Select or type clinic name..."
                className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
              />
            </div>
          </div>

          <p className="text-sm font-medium text-foreground mb-3">Choose Ride Type</p>
          <div className="grid grid-cols-3 gap-3 mb-8">
            {rideOptions.map((opt) => (
              <button
                key={opt.key}
                onClick={() => setRideType(opt.key)}
                className={`rounded-2xl p-4 text-center transition-all border-2 ${
                  rideType === opt.key
                    ? "border-accent bg-accent/5 shadow-soft"
                    : "border-border hover:border-accent/30"
                }`}
              >
                <Car size={24} className={`mx-auto mb-2 ${rideType === opt.key ? "text-accent" : "text-muted-foreground"}`} />
                <p className="font-semibold text-sm text-foreground">{opt.label}</p>
                <p className="text-xs text-muted-foreground">{opt.price}</p>
                <p className="text-xs text-primary font-medium mt-1">ETA: {opt.eta}</p>
              </button>
            ))}
          </div>

          <button
            onClick={handleBook}
            className="w-full py-3.5 rounded-2xl font-semibold text-accent-foreground shadow-button hover:shadow-lg transition-all hover:scale-[1.02]"
            style={{ backgroundImage: "var(--gradient-accent)" }}
          >
            Book Ride Now
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default RideSection;
