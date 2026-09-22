import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { experience } from "../data/content";

function TimelineItem({ item, index }) {
  const isLeft = index % 2 === 0;

  return (
    <div className="relative flex items-start gap-6 md:gap-0">
      {/* Marker */}
      <div className="absolute left-[11px] top-1.5 z-10 md:left-1/2 md:-translate-x-1/2">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.5, ease: "backOut" }}
          className="relative flex h-6 w-6 items-center justify-center"
        >
          <span className="absolute h-6 w-6 animate-ping rounded-full bg-violet-500/30" />
          <span className="glow-ring h-3 w-3 rounded-full bg-gradient-to-br from-violet-400 to-cyan-300" />
        </motion.div>
      </div>

      <div className="w-full pl-10 md:grid md:grid-cols-2 md:gap-16 md:pl-0">
        <motion.div
          initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{ y: -4 }}
          className={`glass rounded-2xl p-6 ${
            isLeft ? "md:col-start-1 md:text-right" : "md:col-start-2"
          }`}
        >
          <span className="font-mono text-xs tracking-widest text-cyan-300">
            {item.period}
          </span>
          <h3 className="font-display mt-2 text-xl font-semibold text-white">
            {item.role}
          </h3>
          <p className="mt-1 text-sm font-medium text-white/50">{item.company}</p>
          <p className="mt-3 text-sm leading-relaxed text-white/55">
            {item.description}
          </p>
        </motion.div>
        <div className="hidden md:block" />
      </div>
    </div>
  );
}

export default function Experience() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.8", "end 0.6"],
  });
  const progress = useSpring(scrollYProgress, { stiffness: 80, damping: 24 });

  return (
    <section id="experience" className="relative px-6 py-32">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mb-20 text-center"
        >
          <p className="section-label mb-3">The journey</p>
          <h2 className="font-display text-4xl font-semibold text-white md:text-5xl">
            Where I've <span className="text-gradient">grown</span>
          </h2>
        </motion.div>

        <div ref={containerRef} className="relative">
          {/* Track */}
          <div className="absolute top-0 bottom-0 left-3 w-px bg-white/10 md:left-1/2 md:-translate-x-1/2" />
          <motion.div
            style={{ scaleY: progress }}
            className="absolute top-0 bottom-0 left-3 w-px origin-top bg-gradient-to-b from-violet-400 via-blue-400 to-cyan-300 md:left-1/2 md:-translate-x-1/2"
          />

          <div className="flex flex-col gap-16">
            {experience.map((item, i) => (
              <TimelineItem key={item.role + item.period} item={item} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
