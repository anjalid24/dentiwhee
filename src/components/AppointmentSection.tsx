import { useState } from "react";
import { motion } from "framer-motion";
import { CalendarDays, User, Clock, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";

const timeSlots = ["9:00 AM", "10:00 AM", "11:30 AM", "1:00 PM", "2:30 PM", "4:00 PM", "5:30 PM"];

const AppointmentSection = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", date: "", time: "", dentist: "", reason: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.date || !form.time) {
      toast.error("Please fill in all required fields");
      return;
    }
    setSubmitted(true);
    toast.success("Appointment booked successfully!");
  };

  if (submitted) {
    return (
      <section id="appointment" className="py-24 bg-muted/50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-lg mx-auto text-center bg-card rounded-3xl p-12 shadow-card"
          >
            <CheckCircle2 size={64} className="mx-auto text-secondary mb-6" />
            <h2 className="font-heading text-2xl font-bold text-foreground mb-3">Appointment Confirmed!</h2>
            <p className="text-muted-foreground mb-2">
              <strong>{form.name}</strong>, your appointment is set for{" "}
              <strong>{form.date}</strong> at <strong>{form.time}</strong>.
            </p>
            <p className="text-muted-foreground mb-8">We'll send a confirmation to <strong>{form.email}</strong>.</p>
            <div className="flex gap-4 justify-center">
              <a
                href="#ride"
                className="px-6 py-3 rounded-2xl font-semibold text-primary-foreground shadow-button"
                style={{ backgroundImage: "var(--gradient-accent)" }}
              >
                Book a Ride →
              </a>
              <button
                onClick={() => { setSubmitted(false); setForm({ name: "", email: "", phone: "", date: "", time: "", dentist: "", reason: "" }); }}
                className="px-6 py-3 rounded-2xl font-semibold border-2 border-border text-foreground hover:bg-muted transition-all"
              >
                New Booking
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="appointment" className="py-24 bg-muted/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block bg-accent/10 text-accent px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            Book Appointment
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Schedule Your Visit
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Pick a date, choose a time, and you're all set. It's that easy.
          </p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto bg-card rounded-3xl p-8 sm:p-10 shadow-card"
        >
          <div className="grid sm:grid-cols-2 gap-5 mb-5">
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">Full Name *</label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={16} />
                <input name="name" value={form.name} onChange={handleChange} placeholder="John Doe" required
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40" />
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">Email</label>
              <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="john@email.com"
                className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40" />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">Phone</label>
              <input name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="+1 234 567 890"
                className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40" />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">Preferred Dentist</label>
              <select name="dentist" value={form.dentist} onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40">
                <option value="">Any available</option>
                <option>Dr. Sarah Mitchell</option>
                <option>Dr. James Park</option>
                <option>Dr. Amara Osei</option>
                <option>Dr. Raj Patel</option>
                <option>Dr. Emily Chen</option>
              </select>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-5 mb-5">
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 flex items-center gap-1.5">
                <CalendarDays size={14} className="text-primary" /> Date *
              </label>
              <input name="date" type="date" value={form.date} onChange={handleChange} required
                className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40" />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 flex items-center gap-1.5">
                <Clock size={14} className="text-primary" /> Time Slot *
              </label>
              <div className="flex flex-wrap gap-2">
                {timeSlots.map((t) => (
                  <button
                    type="button"
                    key={t}
                    onClick={() => setForm({ ...form, time: t })}
                    className={`px-3 py-2 rounded-xl text-xs font-semibold transition-all ${
                      form.time === t
                        ? "text-primary-foreground shadow-button"
                        : "bg-muted text-muted-foreground hover:bg-primary/10"
                    }`}
                    style={form.time === t ? { backgroundImage: "var(--gradient-primary)" } : {}}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="mb-6">
            <label className="text-sm font-medium text-foreground mb-1.5 block">Reason for Visit</label>
            <textarea name="reason" value={form.reason} onChange={handleChange} rows={3} placeholder="e.g. Regular checkup, tooth pain..."
              className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 resize-none" />
          </div>

          <button
            type="submit"
            className="w-full py-3.5 rounded-2xl font-semibold text-primary-foreground shadow-button hover:shadow-lg transition-all hover:scale-[1.02]"
            style={{ backgroundImage: "var(--gradient-primary)" }}
          >
            Confirm Appointment
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default AppointmentSection;
