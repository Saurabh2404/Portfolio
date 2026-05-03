import Link from "next/link";
import { socialLinks } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white py-8 dark:border-white/10 dark:bg-slate-950">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
        <div>
          <p className="text-sm font-semibold text-slate-950 dark:text-white">
            Saurabh Kumar Singh
          </p>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            Building full-stack web apps, APIs, and project-driven products.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {socialLinks.slice(0, 4).map(({ label, href, icon: Icon }) => (
            <Link
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              aria-label={label}
              className="grid h-10 w-10 place-items-center rounded-xl border border-slate-200 text-slate-600 transition hover:-translate-y-0.5 hover:border-orange-300 hover:text-orange-600 dark:border-white/10 dark:text-slate-300 dark:hover:border-orange-300 dark:hover:text-orange-300"
            >
              <Icon size={18} />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
