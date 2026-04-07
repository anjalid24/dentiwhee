import { useState } from "react";
import { motion } from "framer-motion";
import { Star, Clock, MapPin, Search } from "lucide-react";

const dentists = [
  { id: 1, name: "Dr. Sarah Mitchell", specialty: "General Dentistry", rating: 4.9, reviews: 128, available: true, location: "Downtown Clinic", nextSlot: "Today, 2:00 PM", avatar: "SM" },
  { id: 2, name: "Dr. James Park", specialty: "Orthodontics", rating: 4.8, reviews: 95, available: true, location: "Greenview Medical", nextSlot: "Today, 4:30 PM", avatar: "JP" },
  { id: 3, name: "Dr. Amara Osei", specialty: "Cosmetic Dentistry", rating: 5.0, reviews: 210, available: false, location: "Smile Studio", nextSlot: "Tomorrow, 10:00 AM", avatar: "AO" },
  { id: 4, name: "Dr. Raj Patel", specialty: "Pediatric Dentistry", rating: 4.7, reviews: 156, available: true, location: "KidSmiles Center", nextSlot: "Today, 3:15 PM", avatar: "RP" },
  { id: 5, name: "Dr. Emily Chen", specialty: "Periodontics", rating: 4.9, reviews: 88, available: true, location: "Pearly Whites Hub", nextSlot: "Today, 5:00 PM", avatar: "EC" },
  { id: 6, name: "Dr. Michael Torres", specialty: "Endodontics", rating: 4.6, reviews: 72, available: false, location: "Root Care Dental", nextSlot: "Wed, 9:00 AM", avatar: "MT" },
];

const DentistsSection = () => {
  const [search, setSearch] = useState("");
  const [showAvailableOnly, setShowAvailableOnly] = useState(false);

  const filtered = dentists.filter((d) => {
    const matchSearch = d.name.toLowerCase().includes(search.toLowerCase()) || d.specialty.toLowerCase().includes(search.toLowerCase());
    const matchAvail = showAvailableOnly ? d.available : true;
    return matchSearch && matchAvail;
  });

  return (
    <section id="dentists" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block bg-secondary/10 text-secondary px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            Available Dentists
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Find Your Perfect Dentist
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Browse our network of certified dental professionals and check real-time availability.
          </p>
        </motion.div>

        {/* Search & Filter */}
        <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto mb-10">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
            <input
              type="text"
              placeholder="Search by name or specialty..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-2xl border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all"
            />
          </div>
          <button
            onClick={() => setShowAvailableOnly(!showAvailableOnly)}
            className={`px-6 py-3 rounded-2xl font-semibold text-sm transition-all ${
              showAvailableOnly
                ? "bg-secondary text-secondary-foreground shadow-button"
                : "bg-muted text-muted-foreground hover:bg-secondary/20"
            }`}
          >
            Available Now
          </button>
        </div>

        {/* Dentist Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((doc, i) => (
            <motion.div
              key={doc.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card rounded-2xl p-6 shadow-card hover:shadow-soft transition-all group"
            >
              <div className="flex items-start gap-4 mb-4">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-primary-foreground font-bold text-lg shrink-0"
                  style={{ backgroundImage: "var(--gradient-primary)" }}
                >
                  {doc.avatar}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-heading font-bold text-foreground truncate">{doc.name}</h3>
                  <p className="text-muted-foreground text-sm">{doc.specialty}</p>
                </div>
                <span
                  className={`shrink-0 w-3 h-3 rounded-full mt-1.5 ${
                    doc.available ? "bg-secondary" : "bg-muted-foreground/30"
                  }`}
                />
              </div>

              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                <span className="flex items-center gap-1">
                  <Star size={14} className="text-amber-400 fill-amber-400" />
                  {doc.rating} ({doc.reviews})
                </span>
                <span className="flex items-center gap-1">
                  <MapPin size={14} />
                  {doc.location}
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="flex items-center gap-1.5 text-sm">
                  <Clock size={14} className="text-primary" />
                  <span className="text-foreground font-medium">{doc.nextSlot}</span>
                </span>
                <a
                  href="#appointment"
                  className="px-4 py-2 rounded-xl text-sm font-semibold text-primary-foreground shadow-button hover:scale-105 transition-all"
                  style={{ backgroundImage: "var(--gradient-primary)" }}
                >
                  Book
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-muted-foreground mt-8">No dentists found matching your search.</p>
        )}
      </div>
    </section>
  );
};

export default DentistsSection;
