import { ArrowUp } from "lucide-react";
import { profile } from "../data/content";
import { useLenis } from "./SmoothScroll";

export default function Footer() {
  const lenis = useLenis();

  const toTop = () => {
    const el = document.getElementById("hero");
    if (lenis) lenis.scrollTo(el, { duration: 1.4 });
    else el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-white/10 px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="font-mono text-xs text-white/35">
          © {new Date().getFullYear()} {profile.name}. Crafted with care.
        </p>
        <button
          onClick={toTop}
          data-cursor="hover"
          className="glass flex items-center gap-2 rounded-full px-4 py-2 text-xs text-white/60 transition-colors hover:text-white"
        >
          Back to top <ArrowUp size={13} />
        </button>
      </div>
    </footer>
  );
}
