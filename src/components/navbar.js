import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const router = useRouter();
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const shouldUseDark = savedTheme ? savedTheme === "dark" : prefersDark;

    document.documentElement.classList.toggle("dark", shouldUseDark);
    setDarkMode(shouldUseDark);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [router.pathname]);

  const toggleDarkMode = () => {
    const nextMode = !darkMode;
    document.documentElement.classList.toggle("dark", nextMode);
    localStorage.setItem("theme", nextMode ? "dark" : "light");
    setDarkMode(nextMode);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/85 backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/80">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="group flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-slate-950 text-sm font-black text-white shadow-sm dark:bg-white dark:text-slate-950">
            SK
          </span>
          <span>
            <span className="block text-sm font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
              Portfolio
            </span>
            <span className="block text-lg font-bold text-slate-950 dark:text-white">
              Saurabh Kumar
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-2 md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.href}
              {...item}
              active={router.pathname === item.href}
            />
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleDarkMode}
            aria-label="Toggle dark mode"
            className="grid h-10 w-10 place-items-center rounded-xl border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:border-orange-300 hover:text-orange-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:border-orange-300"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label="Open navigation menu"
            className="grid h-10 w-10 place-items-center rounded-xl border border-slate-200 bg-white text-slate-700 shadow-sm md:hidden dark:border-white/10 dark:bg-white/5 dark:text-slate-200"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="border-t border-slate-200 bg-white px-5 py-4 shadow-lg md:hidden dark:border-white/10 dark:bg-slate-950">
          <div className="mx-auto grid max-w-7xl gap-2">
            {navItems.map((item) => (
              <NavLink
                key={item.href}
                {...item}
                active={router.pathname === item.href}
                mobile
              />
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}

function NavLink({ href, label, active, mobile = false }) {
  return (
    <Link
      href={href}
      className={[
        "rounded-xl px-4 py-2 text-sm font-semibold transition",
        mobile ? "block" : "inline-flex",
        active
          ? "bg-orange-500 text-white shadow-sm shadow-orange-500/25"
          : "text-slate-600 hover:bg-slate-100 hover:text-slate-950 dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-white",
      ].join(" ")}
    >
      {label}
    </Link>
  );
}
