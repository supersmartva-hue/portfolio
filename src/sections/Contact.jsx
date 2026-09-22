import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, Loader2, Mail, MapPin, Send } from "lucide-react";
import { FaDribbble, FaGithub, FaLinkedin, FaWhatsapp, FaXTwitter } from "react-icons/fa6";
import { profile, socials } from "../data/content";
import Magnetic from "../components/Magnetic";

const iconMap = {
  github: FaGithub,
  linkedin: FaLinkedin,
  twitter: FaXTwitter,
  dribbble: FaDribbble,
  whatsapp: FaWhatsapp,
};

const fields = [
  { name: "name", label: "Your name", type: "text" },
  { name: "email", label: "Email address", type: "email" },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [focused, setFocused] = useState(null);
  const [status, setStatus] = useState("idle"); // idle | loading | sent | error
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (status === "loading") return;

    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        throw new Error(data.error || "Failed to send message");
      }

      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 3200);
    } catch (err) {
      setStatus("error");
      setErrorMsg(err.message || "Something went wrong. Please try again.");
    }
  };

  return (
    <section id="contact" className="relative px-6 py-32">
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden opacity-20">
        <Mail size={340} className="animate-float-slow text-violet-500" />
      </div>

      <div className="relative mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mb-14 text-center"
        >
          <p className="section-label mb-3">Get in touch</p>
          <h2 className="font-display text-4xl font-semibold text-white md:text-5xl">
            Let's build something <span className="text-gradient">remarkable</span>
          </h2>
          <p className="mx-auto mt-4 max-w-md text-sm text-white/50">
            Have a project in mind or just want to say hi? My inbox is always open.
          </p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="glass-strong relative overflow-hidden rounded-3xl p-6 md:p-10"
        >
          <div className="grid gap-6 sm:grid-cols-2">
            {fields.map((field) => (
              <div key={field.name} className="relative">
                <label
                  className={`absolute left-0 font-mono text-xs uppercase tracking-widest transition-all duration-300 ${
                    focused === field.name || form[field.name]
                      ? "-top-4 text-cyan-300"
                      : "top-3 text-white/40"
                  }`}
                >
                  {field.label}
                </label>
                <input
                  type={field.type}
                  required
                  value={form[field.name]}
                  onChange={(e) => setForm({ ...form, [field.name]: e.target.value })}
                  onFocus={() => setFocused(field.name)}
                  onBlur={() => setFocused(null)}
                  className="w-full border-b border-white/15 bg-transparent pt-3 pb-2 text-white outline-none transition-colors focus:border-cyan-300"
                />
              </div>
            ))}
          </div>

          <div className="relative mt-8">
            <label
              className={`absolute left-0 font-mono text-xs uppercase tracking-widest transition-all duration-300 ${
                focused === "message" || form.message
                  ? "-top-4 text-cyan-300"
                  : "top-3 text-white/40"
              }`}
            >
              Message
            </label>
            <textarea
              required
              rows={3}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              onFocus={() => setFocused("message")}
              onBlur={() => setFocused(null)}
              className="w-full resize-none border-b border-white/15 bg-transparent pt-3 pb-2 text-white outline-none shadow-[0_6px_20px_rgba(0,0,0,0.22)] transition-colors focus:border-cyan-300"
            />
          </div>

          {status === "error" && (
            <p className="mt-4 text-sm text-rose-300">{errorMsg}</p>
          )}

          <div className="mt-10 flex flex-col-reverse items-center justify-between gap-6 sm:flex-row">
            <div className="flex items-center gap-3">
              {socials.map((social) => {
                const Icon = iconMap[social.icon];
                return (
                  <Magnetic key={social.name} strength={0.5}>
                    <a
                      href={social.url}
                      target="_blank"
                      rel="noreferrer"
                      data-cursor="hover"
                      aria-label={social.name}
                      className="glass flex h-11 w-11 items-center justify-center rounded-full text-white/60 transition-colors hover:text-white"
                    >
                      <Icon size={17} />
                    </a>
                  </Magnetic>
                );
              })}
            </div>

            <Magnetic strength={0.35}>
              <button
                type="submit"
                disabled={status === "loading"}
                data-cursor="hover"
                className="relative flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-violet-500 via-blue-500 to-cyan-400 px-7 py-3 text-sm font-semibold text-white shadow-[0_0_30px_rgba(124,58,237,0.4)] disabled:opacity-70"
              >
                <AnimatePresence mode="wait" initial={false}>
                  {status === "sent" ? (
                    <motion.span
                      key="sent"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      className="flex items-center gap-2"
                    >
                      <Check size={16} /> Message sent
                    </motion.span>
                  ) : status === "loading" ? (
                    <motion.span
                      key="loading"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      className="flex items-center gap-2"
                    >
                      <Loader2 size={16} className="animate-spin" /> Sending…
                    </motion.span>
                  ) : (
                    <motion.span
                      key="send"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      className="flex items-center gap-2"
                    >
                      Send message <Send size={15} />
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>
            </Magnetic>
          </div>
        </motion.form>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-white/40"
        >
          <span className="flex items-center gap-2">
            <Mail size={14} /> {profile.email}
          </span>
          <a
            href="https://wa.me/923246626424"
            target="_blank"
            rel="noreferrer"
            data-cursor="hover"
            className="flex items-center gap-2 transition-colors hover:text-white/80"
          >
            <FaWhatsapp size={14} /> {profile.whatsapp}
          </a>
          <span className="flex items-center gap-2">
            <MapPin size={14} /> {profile.location}
          </span>
        </motion.div>
      </div>
    </section>
  );
}
