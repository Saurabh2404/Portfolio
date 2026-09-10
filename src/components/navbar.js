import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { MapPin, Mail, Menu, Moon, Sun, X } from "lucide-react";
export default function Navbar() {
  const router = useRouter();
  const [dark, setDark] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => { const value = localStorage.getItem("theme") === "dark"; setDark(value); document.documentElement.classList.toggle("dark", value); }, []);
  useEffect(() => { setOpen(false); }, [router.asPath]);
  useEffect(() => { const close = event => { if (event.key === "Escape") setOpen(false); }; window.addEventListener("keydown", close); return () => window.removeEventListener("keydown", close); }, []);
  const toggle = () => { const value = !dark; setDark(value); document.documentElement.classList.toggle("dark", value); localStorage.setItem("theme", value ? "dark" : "light"); };
  return <header className={`site-nav ${router.pathname === "/" ? "over-sky" : ""}`}><span className="nav-location"><MapPin size={20} /> PUNE, INDIA</span><nav className="nav-pill" aria-label="Main navigation"><Link href="/" aria-label="Saurabh Kumar home"><Image src="/saurabh.jpg" width={38} height={38} alt="Saurabh Kumar" className="nav-avatar" /></Link><div className="desktop-links"><Link href="/#work">Work</Link><Link href="/about" aria-current={router.pathname === "/about" ? "page" : undefined}>About</Link><Link href="/projects" aria-current={router.pathname === "/projects" ? "page" : undefined}>Projects</Link><Link className="nav-contact" href="/contact"><Mail size={18} />Let&apos;s connect</Link></div></nav><div className="nav-actions"><button onClick={toggle} aria-label={dark ? "Switch to light mode" : "Switch to dark mode"} title={dark ? "Light mode" : "Dark mode"}>{dark ? <Moon size={20} /> : <Sun size={20} />}</button><button className="menu-toggle" aria-label="Toggle navigation" aria-expanded={open} aria-controls="mobile-nav" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button></div>{open && <nav id="mobile-nav" className="mobile-nav" aria-label="Mobile navigation">{[["/#work", "Work"], ["/about", "About"], ["/projects", "Projects"], ["/contact", "Let's connect"]].map(([href, label], index) => <Link onClick={() => setOpen(false)} key={href} href={href}><small>0{index + 1}</small>{label}</Link>)}</nav>}</header>;
}
