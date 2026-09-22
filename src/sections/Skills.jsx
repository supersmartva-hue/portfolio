import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { skills } from "../data/content";

const RING_CONFIG = [
  { radius: 80, duration: 20, reverse: false },
  { radius: 138, duration: 26, reverse: true },
  { radius: 196, duration: 34, reverse: false },
  { radius: 254, duration: 44, reverse: true },
];

function useRings() {
  return useMemo(() => {
    const grouped = RING_CONFIG.map((cfg, ringIndex) => {
      const items = skills.filter((s) => s.ring === ringIndex);
      return items.map((skill, i) => ({
        ...skill,
        angle: (360 / items.length) * i,
        ...cfg,
      }));
    });
    return grouped;
  }, []);
}

function OrbitRing({ items, radius, duration, reverse }) {
  const [hovered, setHovered] = useState(null);

  return (
    <div
      className="absolute inset-0 rounded-full border border-white/[0.06]"
      style={{
        animation: `${reverse ? "spin-reverse" : "spin"} ${duration}s linear infinite`,
      }}
    >
      {items.map((item) => {
        const rad = (item.angle * Math.PI) / 180;
        const x = radius * Math.cos(rad);
        const y = radius * Math.sin(rad);
        return (
        <div
          key={item.name}
          className="absolute top-1/2 left-1/2 h-0 w-0"
          style={{ transform: `translate(${x}px, ${y}px)` }}
        >
          <div
            className="h-0 w-0"
            style={{
              animation: `${reverse ? "spin" : "spin-reverse"} ${duration}s linear infinite`,
            }}
          >
            <motion.div
              onMouseEnter={() => setHovered(item.name)}
              onMouseLeave={() => setHovered(null)}
              whileHover={{ scale: 1.18 }}
              data-cursor="hover"
              className="glass sheen group relative flex w-max items-center justify-center rounded-2xl px-3 py-2 whitespace-nowrap shadow-[0_4px_20px_rgba(0,0,0,0.3)]"
              style={{
                x: "-50%",
                y: "-50%",
                boxShadow: hovered === item.name ? `0 0 24px ${item.color}66` : undefined,
              }}
            >
              <span
                className="h-1.5 w-1.5 shrink-0 rounded-full"
                style={{ background: item.color, boxShadow: `0 0 8px ${item.color}` }}
              />
              <span className="ml-2 font-mono text-xs text-white/85">
                {item.name}
              </span>
            </motion.div>
          </div>
        </div>
        );
      })}
    </div>
  );
}

export default function Skills() {
  const rings = useRings();

  return (
    <section
      id="skills"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 py-32"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
        className="mb-16 text-center"
      >
        <p className="section-label mb-3">What I work with</p>
        <h2 className="font-display text-4xl font-semibold text-white md:text-5xl">
          A constellation of <span className="text-gradient">craft</span>
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="relative flex h-[500px] w-[500px] scale-[0.62] items-center justify-center sm:scale-[0.8] md:scale-100"
      >
        {/* Core */}
        <div className="relative z-10 flex h-28 w-28 items-center justify-center rounded-full">
          <div className="absolute inset-0 animate-pulse-glow rounded-full bg-gradient-to-br from-violet-500 via-blue-500 to-cyan-400 opacity-70 blur-2xl" />
          <div className="glass-strong glow-ring relative flex h-24 w-24 items-center justify-center rounded-full">
            <span className="font-display text-sm font-semibold text-white">
              Skills
            </span>
          </div>
        </div>

        {rings.map((items, i) => (
          <OrbitRing key={i} items={items} {...RING_CONFIG[i]} />
        ))}
      </motion.div>
    </section>
  );
}
