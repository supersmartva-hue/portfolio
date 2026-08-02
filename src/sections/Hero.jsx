import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowDown, ArrowUpRight, Sparkles } from "lucide-react";
import { profile } from "../data/content";
import { useLenis } from "../components/SmoothScroll";
import Magnetic from "../components/Magnetic";

const nameLetters = profile.name.split("");

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.045, delayChildren: 2.15 },
  },
};

const letter = {
  hidden: { y: "110%", opacity: 0, rotate: 6 },
  show: {
    y: "0%",
    opacity: 1,
    rotate: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function Hero() {
  const lenis = useLenis();
  const sectionRef = useRef(null);
  const [ready, setReady] = useState(false);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 60, damping: 20 });
  const sy = useSpring(my, { stiffness: 60, damping: 20 });

  const rotateX = useTransform(sy, [-0.5, 0.5], [6, -6]);
  const rotateY = useTransform(sx, [-0.5, 0.5], [-6, 6]);
  const shiftX = useTransform(sx, [-0.5, 0.5], [-18, 18]);
  const shiftY = useTransform(sy, [-0.5, 0.5], [-18, 18]);

  useEffect(() => {
    setReady(true);
    const handle = (e) => {
      const rect = sectionRef.current.getBoundingClientRect();
      mx.set((e.clientX - rect.left) / rect.width - 0.5);
      my.set((e.clientY - rect.top) / rect.height - 0.5);
    };
    window.addEventListener("mousemove", handle);
    return () => window.removeEventListener("mousemove", handle);
  }, [mx, my]);

  const scrollToProjects = () => {
    const el = document.getElementById("projects");
    if (lenis) lenis.scrollTo(el, { offset: -40 });
    else el?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (lenis) lenis.scrollTo(el, { offset: -40 });
    else el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6"
    >
      {/* Floating badges, parallax on mouse */}
      <motion.div
        style={{ x: shiftX, y: shiftY }}
        className="pointer-events-none absolute inset-0 hidden md:block"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={ready ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 2.6, duration: 0.8 }}
          className="glass animate-float absolute top-[22%] left-[12%] rounded-2xl px-4 py-3"
        >
          <span className="font-mono text-xs text-cyan-300">{"<React />"}</span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={ready ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 2.8, duration: 0.8 }}
          className="glass animate-float-slow absolute top-[30%] right-[10%] rounded-2xl px-4 py-3"
          style={{ animationDelay: "1s" }}
        >
          <span className="font-mono text-xs text-violet-300">UI / UX</span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={ready ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 3.0, duration: 0.8 }}
          className="glass animate-float absolute bottom-[26%] left-[16%] rounded-2xl px-4 py-3"
          style={{ animationDelay: "2s" }}
        >
          <span className="font-mono text-xs text-blue-300">Motion Design</span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={ready ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 3.2, duration: 0.8 }}
          className="glass animate-float-slow absolute right-[16%] bottom-[20%] rounded-2xl px-4 py-3"
          style={{ animationDelay: "0.5s" }}
        >
          <span className="font-mono text-xs text-white/70">{"{ AI + Code }"}</span>
        </motion.div>
      </motion.div>

      <motion.div
        style={{ rotateX, rotateY, transformPerspective: 1000 }}
        className="relative z-10 flex flex-col items-center text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={ready ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.7, duration: 0.7 }}
          className="glass mb-6 flex items-center gap-2 rounded-full px-4 py-1.5"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          <span className="text-xs font-medium text-white/70">
            {profile.availability}
          </span>
        </motion.div>

        <p className="section-label mb-3 flex items-center gap-2">
          <Sparkles size={14} className="text-cyan-300" />
          {profile.role}
        </p>

        <h1 className="font-display text-[13vw] leading-[0.95] font-semibold text-white sm:text-[9vw] md:text-[7vw] lg:text-[6.2rem]">
          <motion.span
            variants={container}
            initial="hidden"
            animate={ready ? "show" : "hidden"}
            className="flex flex-wrap justify-center overflow-hidden"
          >
            {nameLetters.map((char, i) => (
              <span key={i} className="overflow-hidden py-1">
                <motion.span variants={letter} className="inline-block">
                  {char === " " ? " " : char}
                </motion.span>
              </span>
            ))}
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={ready ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 3.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 max-w-lg text-balance text-base text-white/55 md:text-lg"
        >
          {profile.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={ready ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 3.35, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <Magnetic strength={0.35}>
            <button
              onClick={scrollToProjects}
              data-cursor="hover"
              className="group relative overflow-hidden rounded-full bg-gradient-to-r from-violet-500 via-blue-500 to-cyan-400 px-7 py-3 text-sm font-semibold text-white shadow-[0_0_30px_rgba(124,58,237,0.45)] transition-transform"
            >
              <span className="relative z-10 flex items-center gap-2">
                View My Work <ArrowUpRight size={16} />
              </span>
            </button>
          </Magnetic>
          <Magnetic strength={0.35}>
            <button
              onClick={scrollToContact}
              data-cursor="hover"
              className="glass rounded-full px-7 py-3 text-sm font-semibold text-white/80 transition-colors hover:text-white"
            >
              Get in Touch
            </button>
          </Magnetic>
        </motion.div>
      </motion.div>

      <motion.button
        onClick={() => {
          const el = document.getElementById("about");
          if (lenis) lenis.scrollTo(el, { offset: -40 });
          else el?.scrollIntoView({ behavior: "smooth" });
        }}
        initial={{ opacity: 0 }}
        animate={ready ? { opacity: 1 } : {}}
        transition={{ delay: 3.6, duration: 1 }}
        data-cursor="hover"
        className="absolute bottom-10 flex flex-col items-center gap-2 text-white/40 transition-colors hover:text-white/80"
      >
        <span className="font-mono text-[10px] tracking-[0.3em] uppercase">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          className="flex h-9 w-6 items-start justify-center rounded-full border border-white/20 p-1.5"
        >
          <ArrowDown size={12} />
        </motion.div>
      </motion.button>
    </section>
  );
}
