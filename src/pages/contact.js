import Link from "next/link";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";
import Navbar from "@/components/navbar";
import AnimatedSection, { StaggerGroup, StaggerItem } from "@/components/AnimatedSection";
import { profile, socialLinks } from "@/data/portfolio";
import { ArrowUpRight, Send } from "lucide-react";

export default function Contact() {
  return (
<div className="updated-portfolio min-h-screen bg-slate-50 text-slate-950 dark:bg-slate-950 dark:text-white">
      <Navbar />
      <main>
        <section className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <AnimatedSection direction="right" className="lg:sticky lg:top-28">
              <p className="section-kicker">Contact</p>
              <h1 className="mt-4 text-5xl font-black leading-tight text-slate-950 md:text-6xl dark:text-white">
                Let&apos;s talk about something worth building.
              </h1>
              <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300">
                The quickest way to reach me is email or LinkedIn. I am open
                to full-stack web apps, backend/microservices work, API
                integrations, dashboards, payment-related workflows, and
                practical product ideas.
              </p>
              <motion.div whileHover={{ y: -3 }} className="mt-8 inline-block">
                <Link
                  href={`mailto:${profile.email}`}
                  className="inline-flex items-center gap-2 rounded-xl bg-slate-950 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-slate-300/70 transition hover:bg-orange-600 dark:bg-white dark:text-slate-950 dark:shadow-black/30 dark:hover:bg-orange-300"
                >
                  <Send size={18} />
                  Send Email
                </Link>
              </motion.div>
            </AnimatedSection>

            <StaggerGroup className="grid gap-4 sm:grid-cols-2" amount={0.1}>
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <StaggerItem key={label} as="div" whileHover={{ y: -6, scale: 1.02 }}>
                  <Link
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="group block rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:border-orange-200 hover:shadow-xl hover:shadow-slate-200/70 dark:border-white/10 dark:bg-white/[0.04] dark:hover:border-orange-300/60 dark:hover:shadow-black/30"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="grid h-12 w-12 place-items-center rounded-2xl bg-orange-100 text-orange-600 dark:bg-orange-300/10 dark:text-orange-300">
                        <Icon size={22} />
                      </div>
                      <ArrowUpRight
                        size={18}
                        className="text-slate-400 transition group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-orange-500"
                      />
                    </div>
                    <h2 className="mt-6 text-xl font-black text-slate-950 dark:text-white">
                      {label}
                    </h2>
                    <p className="mt-2 break-words text-sm leading-6 text-slate-600 dark:text-slate-300">
                      {getDisplayValue(label, href)}
                    </p>
                  </Link>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

function getDisplayValue(label, href) {
  if (label === "Email") return profile.email;
  if (label === "Phone") return profile.phone;
  if (label === "WhatsApp") return `wa.me/${profile.whatsapp}`;
  if (label === "Location") return profile.location;
  return href.replace("https://", "").replace("www.", "");
}
