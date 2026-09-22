import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, Moon, Sun, X } from "lucide-react";
import { nav, profile } from "../data/content";
import { useLenis } from "./SmoothScroll";
import useActiveSection from "../hooks/useActiveSection";
import { useTheme } from "./ThemeProvider";

const ids = nav.map((n) => n.id);

export default function Navbar() {
  const lenis = useLenis();
  const active = useActiveSection(ids);
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const lightMode = theme === "light";

  const scrollTo = (id) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (!el) return;
    if (lenis) lenis.scrollTo(el, { offset: -40, duration: 1.3 });
    else el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, delay: 2.0, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-4 left-1/2 z-50 w-[94%] max-w-4xl -translate-x-1/2 md:top-6"
      >
        <div className="glass-strong flex items-center justify-between rounded-full px-5 py-2.5 shadow-[0_8px_32px_rgba(0,0,0,0.35)]">
          <button
            onClick={() => scrollTo("hero")}
            data-cursor="hover"
            className="font-display text-sm font-semibold tracking-wide text-white"
          >
            {profile.firstName}
           {/*<span className="text-gradient">.</span>*/} {/* Commented out the dot */}
          </button>

          <nav className="hidden items-center gap-1 md:flex">
            {nav.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                data-cursor="hover"
                className={`relative rounded-full px-4 py-1.5 text-sm font-medium transition-colors duration-300 ${
                  active === item.id
                    ? "text-white"
                    : "text-white/50 hover:text-white/90"
                }`}
              >
                {active === item.id && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-0 rounded-full bg-white/10 ring-1 ring-white/15"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </button>
            ))}
          </nav>

          <div className="hidden items-center gap-2 md:flex">
            <button
              onClick={toggleTheme}
              data-cursor="hover"
              aria-label={lightMode ? "Switch to dark mode" : "Switch to light mode"}
              title={lightMode ? "Switch to dark mode" : "Switch to light mode"}
              className="flex h-9 w-9 items-center justify-center rounded-full text-white/70 transition-colors hover:bg-white/10 hover:text-white"
            >
              {lightMode ? <Moon size={17} /> : <Sun size={17} />}
            </button>
            <button
              onClick={() => scrollTo("contact")}
              data-cursor="hover"
              className="rounded-full bg-gradient-to-r from-violet-500 to-blue-500 px-4 py-1.5 text-sm font-medium text-white shadow-[0_0_20px_rgba(124,58,237,0.4)] transition-transform hover:scale-105"
            >
              Let's talk
            </button>
          </div>

          <button
            onClick={toggleTheme}
            data-cursor="hover"
            aria-label={lightMode ? "Switch to dark mode" : "Switch to light mode"}
            title={lightMode ? "Switch to dark mode" : "Switch to light mode"}
            className="mr-2 flex h-9 w-9 items-center justify-center rounded-full text-white/70 transition-colors hover:bg-white/10 hover:text-white md:hidden"
          >
            {lightMode ? <Moon size={17} /> : <Sun size={17} />}
          </button>

          <button
            onClick={() => setOpen((o) => !o)}
            className="text-white md:hidden"
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="glass-strong fixed top-20 left-1/2 z-50 w-[90%] max-w-sm -translate-x-1/2 rounded-3xl p-3 md:hidden"
          >
            {nav.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`block w-full rounded-2xl px-4 py-3 text-left text-base font-medium ${
                  active === item.id ? "bg-white/10 text-white" : "text-white/60"
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => scrollTo("contact")}
              className="mt-1 block w-full rounded-2xl bg-gradient-to-r from-violet-500 to-blue-500 px-4 py-3 text-left text-base font-medium text-white"
            >
              Let's talk
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
