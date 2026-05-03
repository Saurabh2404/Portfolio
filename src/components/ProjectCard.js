import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function ProjectCard({ title, description, link, tags = [], accent }) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-xl hover:shadow-slate-200/70 dark:border-white/10 dark:bg-white/[0.04] dark:hover:border-orange-300/60 dark:hover:shadow-black/30">
      <div
        className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${
          accent || "from-orange-500 to-amber-400"
        }`}
      />

      <div className="mb-5 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600 dark:bg-white/10 dark:text-slate-300"
          >
            {tag}
          </span>
        ))}
      </div>

      <h3 className="text-xl font-bold leading-snug text-slate-950 dark:text-white">
        {title}
      </h3>
      <p className="mt-3 flex-1 text-sm leading-6 text-slate-600 dark:text-slate-300">
        {description}
      </p>

      <Link
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-orange-600 transition group-hover:gap-3 dark:text-orange-300"
      >
        View repository <ArrowUpRight size={16} />
      </Link>
    </article>
  );
}
