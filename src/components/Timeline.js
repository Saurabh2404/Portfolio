import { motion } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";
import { timeline } from "@/data/portfolio";

export default function Timeline() {
  return (
    <div className="relative">
      {/* center line */}
      <div className="absolute left-6 top-0 h-full w-px bg-gradient-to-b from-orange-400 via-slate-300 to-transparent dark:via-white/15 md:left-1/2 md:-translate-x-1/2" />

      <div className="flex flex-col gap-10">
        {timeline.map((item, index) => (
          <TimelineRow key={`${item.title}-${item.duration}`} item={item} index={index} />
        ))}
      </div>
    </div>
  );
}

function TimelineRow({ item, index }) {
  const Icon = item.icon;
  const isEven = index % 2 === 0;
  const fromSide = isEven ? -40 : 40;

  return (
    <div className="relative grid gap-4 pl-16 md:grid-cols-2 md:gap-0 md:pl-0">
      {/* dot */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="absolute left-6 top-1 z-10 grid h-9 w-9 -translate-x-1/2 place-items-center rounded-full border-4 border-slate-50 bg-orange-500 text-white shadow-lg shadow-orange-500/30 dark:border-slate-950 md:left-1/2"
      >
        <Icon size={16} />
      </motion.div>

      {/* spacer column for alternating layout on desktop */}
      <div className={isEven ? "md:order-1" : "md:order-2"} />

      <motion.div
        initial={{ opacity: 0, x: fromSide, y: 12 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        whileHover={{ y: -4 }}
        className={[
          "rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-xl hover:shadow-slate-200/70 dark:border-white/10 dark:bg-white/[0.04] dark:hover:shadow-black/30",
          isEven ? "md:order-2 md:ml-10" : "md:order-1 md:mr-10",
        ].join(" ")}
      >
        <span
          className={[
            "inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wide",
            item.type === "work"
              ? "bg-orange-100 text-orange-700 dark:bg-orange-300/10 dark:text-orange-300"
              : "bg-cyan-100 text-cyan-700 dark:bg-cyan-300/10 dark:text-cyan-300",
          ].join(" ")}
        >
          {item.type === "work" ? "Experience" : "Education"}
        </span>

        <h3 className="mt-4 text-xl font-black text-slate-950 dark:text-white">
          {item.title}
        </h3>
        <p className="mt-1 text-sm font-bold text-orange-600 dark:text-orange-300">
          {item.org}
        </p>

        <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs font-semibold text-slate-500 dark:text-slate-400">
          <span className="inline-flex items-center gap-1.5">
            <Calendar size={14} />
            {item.duration}
          </span>
          {item.location && (
            <span className="inline-flex items-center gap-1.5">
              <MapPin size={14} />
              {item.location}
            </span>
          )}
        </div>

        <ul className="mt-4 grid gap-2.5">
          {item.points.map((point) => (
            <li
              key={point}
              className="flex gap-2.5 text-sm leading-6 text-slate-600 dark:text-slate-300"
            >
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-400" />
              {point}
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
}
