import { motion } from "framer-motion";
import { aboutCards, aboutHeadline, aboutStats, profile } from "../data/content";
import Counter from "../components/Counter";

function Headline() {
  const { text, highlight } = aboutHeadline;
  const idx = highlight ? text.indexOf(highlight) : -1;
  if (idx === -1) return <>{text}</>;
  return (
    <>
      {text.slice(0, idx)}
      <span className="text-gradient">{highlight}</span>
      {text.slice(idx + highlight.length)}
    </>
  );
}

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function About() {
  return (
    <section id="about" className="relative px-6 py-32">
      <div className="mx-auto grid max-w-6xl gap-16 md:grid-cols-[0.8fr_1.2fr] md:gap-12">
        {/* Image reveal frame */}
        <div className="relative mx-auto w-full max-w-sm">
          <motion.div
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            whileInView={{ clipPath: "inset(0 0 0% 0)" }}
            viewport={{ once: true }}
            transition={{ duration: 1.1, ease: [0.76, 0, 0.24, 1] }}
            className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-violet-600/40 via-blue-600/30 to-cyan-500/30" />
            <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
              {profile.avatar ? (
                <img
                  src={profile.avatar}
                  alt={profile.name}
                  className="h-full w-full object-cover object-top"
                />
              ) : (
                <span className="font-display text-8xl font-bold text-white/20">
                  {profile.firstName[0]}
                  {profile.lastName[0]}
                </span>
              )}
            </div>
            <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/55 to-transparent p-5 pt-16">
              <p className="font-display text-lg font-semibold text-white">
                {profile.name}
              </p>
            </div>
            <div className="glow-ring pointer-events-none absolute inset-0 rounded-3xl" />
          </motion.div>
          <motion.div
            className="absolute -bottom-5 -right-5 rounded-2xl"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <div className="glass-strong rounded-2xl px-5 py-3 text-center">
              <p className="font-display text-2xl font-bold text-gradient">
                <Counter value={aboutStats[0].value} suffix={aboutStats[0].suffix} />
              </p>
              <p className="text-[11px] text-white/50">{aboutStats[0].label}</p>
            </div>
          </motion.div>
        </div>

        {/* Text content */}
        <div>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.6 }}
            className="section-label mb-3"
          >
            About me
          </motion.p>
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.6 }}
            custom={1}
            className="font-display mb-8 text-3xl font-semibold text-white md:text-4xl"
          >
            <Headline />
          </motion.h2>

          <div className="grid gap-4 sm:grid-cols-2">
            {aboutCards.map((card, i) => (
              <motion.div
                key={card.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.4 }}
                custom={i + 1}
                whileHover={{ y: -6 }}
                className={`glass rounded-2xl p-5 transition-shadow hover:shadow-[0_10px_40px_rgba(124,58,237,0.15)] ${
                  i === 2 ? "sm:col-span-2" : ""
                }`}
              >
                <h3 className="font-display mb-2 text-lg font-semibold text-white">
                  {card.title}
                </h3>
                <p className="text-sm leading-relaxed text-white/55">{card.body}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 grid grid-cols-3 gap-6 border-t border-white/10 pt-8">
            {aboutStats.slice(1).map((stat, i) => (
              <motion.div
                key={stat.label}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.6 }}
                custom={i}
              >
                <p className="font-display text-2xl font-bold text-white md:text-3xl">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="mt-1 text-xs text-white/45">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
