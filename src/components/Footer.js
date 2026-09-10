import { ArrowUpRight } from "lucide-react";
import { profile, socialLinks } from "@/data/portfolio";
export default function Footer() {
  return <footer className="editorial-footer" id="contact"><div className="content-width"><p>From a first idea to the final detail.<br />Good things begin with a conversation.</p><a className="footer-title" href={`mailto:${profile.email}`}>Let&apos;s build<br />something great <ArrowUpRight /></a><div className="footer-bottom"><span>{profile.fullName} &middot; Pune, India &copy; {new Date().getFullYear()}</span><div>{socialLinks.slice(0, 3).map(({ label, href, icon: Icon }) => <a key={label} href={href} aria-label={label} title={label} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noopener noreferrer" : undefined}><Icon size={21} /></a>)}</div></div></div></footer>;
}
