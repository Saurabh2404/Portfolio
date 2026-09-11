import Link from "next/link";
import { ArrowUpRight, Mail, MapPin } from "lucide-react";
import { profile, socialLinks } from "@/data/portfolio";
export default function Footer() {
  return (
    <footer className="editorial-footer" id="contact">
      <div className="footer-shell">
        <div className="footer-main">
          <div>
            <span className="footer-kicker">Available for meaningful engineering work</span>
            <h2>Let&apos;s build something precise, useful, and reliable.</h2>
            <p>
              Full-stack systems, backend services, APIs, dashboards, and product
              workflows that need clean execution.
            </p>
          </div>
          <div className="footer-actions">
            <a className="footer-email" href={`mailto:${profile.email}`}>
              <Mail size={18} />
              Email me
              <ArrowUpRight size={16} />
            </a>
            <div className="footer-socials">
              {socialLinks.slice(0, 3).map(({ label, href, icon: Icon }) => (
                <Link
                  key={label}
                  href={href}
                  aria-label={label}
                  title={label}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                >
                  <Icon size={18} />
                  <span>{label}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>{profile.fullName} &copy; {new Date().getFullYear()}</span>
          <span><MapPin size={15} /> Pune, India</span>
        </div>
      </div>
    </footer>
  );
}
