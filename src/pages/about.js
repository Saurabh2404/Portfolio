import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";
import Navbar from "@/components/navbar";
import Timeline from "@/components/Timeline";
import AnimatedSection, {
  StaggerGroup,
  StaggerItem,
} from "@/components/AnimatedSection";
import {
  achievements,
  capabilities,
  codingProfiles,
  currentWork,
  focusAreas,
  profile,
  quickStats,
  skills,
} from "@/data/portfolio";
import { ArrowUpRight, CheckCircle2, Code2, Database, Layers3, Server } from "lucide-react";

export default function About() {
  return (
<div className="updated-portfolio min-h-screen bg-slate-50 text-slate-950 dark:bg-slate-950 dark:text-white">
      <Navbar />
      <main>
        <section className="relative overflow-hidden border-b border-slate-200 bg-[radial-gradient(circle_at_top_left,_rgba(249,115,22,0.14),_transparent_32%),linear-gradient(135deg,_#ffffff_0%,_#f8fafc_48%,_#eef6ff_100%)] dark:border-white/10 dark:bg-[radial-gradient(circle_at_top_left,_rgba(249,115,22,0.16),_transparent_32%),linear-gradient(135deg,_#020617_0%,_#0f172a_56%,_#111827_100%)]">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.05)_1px,transparent_1px)] bg-[size:46px_46px] dark:bg-[linear-gradient(rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.08)_1px,transparent_1px)]" />
          <div className="relative mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-6 md:grid-cols-[0.85fr_1.15fr] md:items-center lg:px-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="relative mx-auto w-full max-w-sm"
          >
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-orange-200 via-cyan-100 to-emerald-100 blur-2xl dark:from-orange-500/20 dark:via-cyan-500/10 dark:to-emerald-500/10" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white bg-white p-3 shadow-2xl shadow-slate-300/60 dark:border-white/10 dark:bg-white/10 dark:shadow-black/40">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-slate-200">
                <Image
                  src="/saurabh.jpg"
                  alt="Saurabh Kumar Singh"
                  fill
                  sizes="(max-width: 768px) 90vw, 360px"
                  className="object-cover"
                  priority
                />
              </div>
              <div className="mt-3 grid grid-cols-2 gap-3">
                <div className="rounded-2xl bg-slate-950 p-4 text-white dark:bg-white dark:text-slate-950">
                  <Layers3 className="text-orange-300 dark:text-orange-600" size={22} />
                  <p className="mt-3 text-sm font-black">Backend</p>
                  <p className="text-xs text-slate-400 dark:text-slate-500">Java + Spring Boot</p>
                </div>
                <div className="rounded-2xl bg-slate-950 p-4 text-white dark:bg-white dark:text-slate-950">
                  <Server className="text-cyan-300 dark:text-cyan-600" size={22} />
                  <p className="mt-3 text-sm font-black">APIs</p>
                  <p className="text-xs text-slate-400 dark:text-slate-500">REST + SOAP</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <p className="section-kicker">About Me</p>
            <h1 className="mt-4 text-5xl font-black leading-tight text-slate-950 md:text-6xl dark:text-white">
              I build backend systems and full-stack products that solve real problems.
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300">
              Hello, I am{" "}
              <span className="font-bold text-orange-600 dark:text-orange-300">
                {profile.fullName}
              </span>
              , a {profile.role} focused on scalable backend systems, clean
              API design, full-stack delivery, and problem-solving.{" "}
              {profile.summary}
            </p>
            <p className="mt-4 text-lg leading-8 text-slate-600 dark:text-slate-300">
              I completed my {profile.education}
            </p>

            <StaggerGroup className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4" delayChildren={0.3}>
              {quickStats.map((stat) => (
                <StaggerItem
                  key={stat.label}
                  as="div"
                  whileHover={{ y: -4 }}
                  className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm dark:border-white/10 dark:bg-white/[0.04]"
                >
                  <p className="text-2xl font-black text-slate-950 dark:text-white">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-[0.14em] text-slate-500 dark:text-slate-400">
                    {stat.label}
                  </p>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </motion.div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
          <AnimatedSection className="mb-10">
            <p className="section-kicker">Experience & Education</p>
            <h2 className="section-title">Where I&apos;ve built and learned.</h2>
          </AnimatedSection>
          <Timeline />
        </section>

        <section className="border-y border-slate-200 bg-white py-16 dark:border-white/10 dark:bg-white/[0.03]">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <AnimatedSection className="mb-8 grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
              <div>
                <p className="section-kicker">Background</p>
                <h2 className="section-title">How I approach engineering.</h2>
              </div>
              <p className="leading-7 text-slate-600 dark:text-slate-300">
                I think like a builder: understand the problem, design the
                data flow, ship the first useful version, test the APIs,
                harden it for scale, and keep the system maintainable enough
                to grow.
              </p>
            </AnimatedSection>
            <StaggerGroup className="grid gap-5 md:grid-cols-2 xl:grid-cols-3" amount={0.1}>
              {capabilities.map(({ title, text, icon: Icon }) => (
                <StaggerItem
                  key={title}
                  as="article"
                  whileHover={{ y: -6, scale: 1.02 }}
                  className="group rounded-2xl border border-slate-200 bg-slate-50 p-6 hover:border-orange-200 hover:bg-white hover:shadow-xl hover:shadow-slate-200/70 dark:border-white/10 dark:bg-white/[0.04] dark:hover:border-orange-300/50 dark:hover:bg-white/[0.07]"
                >
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-orange-100 text-orange-600 dark:bg-orange-300/10 dark:text-orange-300">
                    <Icon size={22} />
                  </div>
                  <h3 className="mt-5 text-xl font-black text-slate-950 dark:text-white">
                    {title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
                    {text}
                  </p>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
            <AnimatedSection direction="right">
              <p className="section-kicker">Capabilities</p>
              <h2 className="section-title">What I can build.</h2>
              <p className="mt-4 leading-7 text-slate-600 dark:text-slate-300">
                From backend services to frontend screens, I can work across
                the full product flow: APIs, database, authentication,
                distributed systems, integrations, testing, and deployment
                preparation.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-3">
                <motion.div
                  whileHover={{ y: -4 }}
                  className="rounded-2xl bg-slate-950 p-5 text-white dark:bg-white dark:text-slate-950"
                >
                  <Code2 className="text-orange-300 dark:text-orange-600" size={24} />
                  <p className="mt-3 text-2xl font-black">React</p>
                  <p className="text-xs uppercase tracking-[0.14em] text-slate-400">
                    Frontend
                  </p>
                </motion.div>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="rounded-2xl bg-slate-950 p-5 text-white dark:bg-white dark:text-slate-950"
                >
                  <Database className="text-emerald-300 dark:text-emerald-600" size={24} />
                  <p className="mt-3 text-2xl font-black">Oracle DB</p>
                  <p className="text-xs uppercase tracking-[0.14em] text-slate-400">
                    Database
                  </p>
                </motion.div>
              </div>
            </AnimatedSection>
            <StaggerGroup className="grid gap-4 md:grid-cols-2" amount={0.1}>
              {currentWork.map(({ title, description, icon: Icon }) => (
                <StaggerItem
                  key={title}
                  as="article"
                  whileHover={{ y: -6 }}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/[0.04]"
                >
                  <Icon className="text-orange-500 dark:text-orange-300" size={24} />
                  <h3 className="mt-4 text-lg font-black text-slate-950 dark:text-white">
                    {title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
                    {description}
                  </p>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>
        </section>

        <section className="border-y border-slate-200 bg-white py-16 dark:border-white/10 dark:bg-white/[0.03]">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <AnimatedSection className="mb-8">
            <p className="section-kicker">Skills</p>
            <h2 className="section-title">Backend depth, full-stack breadth.</h2>
          </AnimatedSection>
          <StaggerGroup
            className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-7"
            amount={0.05}
            stagger={0.04}
          >
            {skills.map(({ name, icon: Icon, color }) => (
              <StaggerItem
                key={name}
                as="div"
                direction="scale"
                whileHover={{ y: -6, scale: 1.05 }}
                className="flex min-h-32 flex-col justify-between rounded-2xl border border-slate-200 bg-white p-4 shadow-sm hover:border-orange-200 dark:border-white/10 dark:bg-white/[0.04]"
              >
                <Icon size={28} className={color} />
                <span className="text-sm font-bold text-slate-700 dark:text-slate-200">
                  {name}
                </span>
              </StaggerItem>
            ))}
          </StaggerGroup>
          <StaggerGroup className="mt-8 flex flex-wrap gap-3" amount={0.05} stagger={0.03}>
            {focusAreas.slice(0, 16).map((area) => (
              <StaggerItem
                key={area}
                as="span"
                whileHover={{ y: -3 }}
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-bold text-slate-700 dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-200"
              >
                <CheckCircle2 size={16} className="text-orange-500" />
                {area}
              </StaggerItem>
            ))}
          </StaggerGroup>
          </div>
        </section>

        <AnimatedSection className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm dark:border-white/10 dark:bg-white/[0.04]">
            <div className="mb-6">
              <p className="section-kicker">Achievements</p>
              <h2 className="section-title">Problem-solving signals.</h2>
            </div>
            <StaggerGroup className="grid gap-3 md:grid-cols-2" amount={0.1}>
              {achievements.map((achievement) => (
                <StaggerItem
                  key={achievement}
                  as="div"
                  whileHover={{ x: 4 }}
                  className="flex gap-3 rounded-2xl bg-slate-50 p-4 dark:bg-white/[0.05]"
                >
                  <CheckCircle2 className="mt-0.5 shrink-0 text-emerald-500" size={18} />
                  <p className="text-sm font-semibold leading-6 text-slate-700 dark:text-slate-200">
                    {achievement}
                  </p>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>
        </AnimatedSection>

        <AnimatedSection direction="scale" className="mx-auto max-w-7xl px-5 pb-16 sm:px-6 lg:px-8">
          <div className="rounded-[2rem] bg-slate-950 p-8 text-white dark:bg-white dark:text-slate-950">
            <div className="mb-6">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-orange-300 dark:text-orange-600">
                Coding Profiles
              </p>
              <h2 className="mt-3 text-3xl font-black">Practice and proof.</h2>
            </div>
            <StaggerGroup className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4" amount={0.1}>
              {codingProfiles.map(({ name, link, icon: Icon, color }) => (
                <StaggerItem key={name} as="div" whileHover={{ y: -4 }}>
                  <Link
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between rounded-2xl bg-white/10 p-4 transition hover:bg-white/15 dark:bg-slate-100 dark:hover:bg-orange-100"
                  >
                    <span className="flex items-center gap-3 font-bold">
                      <Icon size={24} className={color} />
                      {name}
                    </span>
                    <ArrowUpRight size={17} />
                  </Link>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>
        </AnimatedSection>
      </main>
      <Footer />
    </div>
  );
}
