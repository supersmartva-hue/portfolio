import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, ExternalLink, X } from "lucide-react";
import { certificates } from "../data/content";
import TiltCard from "../components/TiltCard";

function CertImage({ cert, className, contain = true }) {
  return (
    <div className={`relative w-full overflow-hidden bg-white ${className}`}>
      <img
        src={cert.image}
        alt={cert.title}
        decoding="async"
        className={`absolute inset-0 h-full w-full ${
          contain ? "object-contain object-center" : "object-cover object-top"
        }`}
      />
      <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/10" />
      <div className={`absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r ${cert.color}`} />
    </div>
  );
}

export default function Certificates() {
  const [active, setActive] = useState(null);

  return (
    <section id="certificates" className="relative px-6 py-32">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mb-20 text-center"
        >
          <p className="section-label mb-3">Recognition</p>
          <h2 className="font-display text-4xl font-semibold text-white md:text-5xl">
            Certificates &amp; <span className="text-gradient">credentials</span>
          </h2>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {certificates.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="animate-float"
              style={{ animationDelay: `${i * 0.4}s`, animationDuration: `${7 + i}s` }}
            >
              <TiltCard maxTilt={8}>
                <motion.button
                  layoutId={`cert-${cert.title}`}
                  onClick={() => setActive(cert)}
                  data-cursor="hover"
                  className="glass sheen group relative flex h-full w-full flex-col overflow-hidden rounded-2xl text-left"
                >
                  <CertImage cert={cert} className="aspect-[792/612]" />
                  <div className="flex flex-1 flex-col gap-1 p-5">
                    <h3 className="font-display text-base leading-snug font-semibold text-white">
                      {cert.title}
                    </h3>
                    {cert.issuer && (
                      <p className="text-xs text-white/50">{cert.issuer}</p>
                    )}
                    <div className="mt-auto flex items-center justify-between pt-4">
                      <span className="font-mono text-[11px] text-white/35">
                        {cert.date}
                      </span>
                      <span className="flex items-center gap-1 text-[11px] font-medium text-cyan-300 opacity-0 transition-opacity group-hover:opacity-100">
                        View <ArrowUpRight size={12} />
                      </span>
                    </div>
                  </div>
                </motion.button>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-[80] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm md:p-8"
          >
            <motion.div
              layoutId={`cert-${active.title}`}
              onClick={(e) => e.stopPropagation()}
              className="glass-strong relative w-full max-w-4xl overflow-hidden rounded-3xl"
            >
              <button
                onClick={() => setActive(null)}
                className="absolute top-4 right-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-black/40 text-white/70 backdrop-blur-sm hover:text-white"
                aria-label="Close"
              >
                <X size={18} />
              </button>

              <CertImage cert={active} className="aspect-[792/612] max-h-[70vh]" />

              <div className="p-6 md:p-8">
                <h3 className="font-display text-2xl font-semibold text-white">
                  {active.title}
                </h3>
                {(active.issuer || active.date) && (
                  <p className="mt-2 text-sm text-white/60">
                    {active.issuer && `Issued by ${active.issuer}`}
                    {active.issuer && active.date && " · "}
                    {active.date}
                  </p>
                )}
                {active.link && (
                  <a
                    href={active.link}
                    target="_blank"
                    rel="noreferrer"
                    data-cursor="hover"
                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-cyan-300 hover:text-cyan-200"
                  >
                    Verify credential <ExternalLink size={14} />
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
