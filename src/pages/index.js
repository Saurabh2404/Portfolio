import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import Navbar from "@/components/navbar";
import ProjectCard from "@/components/ProjectCard";
import {
  achievements,
  cta,
  currentWork,
  focusAreas,
  highlights,
  profile,
  projects,
  quickStats,
  skills,
  socialLinks,
} from "@/data/portfolio";
import {
  Activity,
  ArrowUpRight,
  CheckCircle2,
  Cpu,
  Database,
  GitBranch,
  Network,
  Server,
  ShieldCheck,
  Terminal,
} from "lucide-react";

const serviceFlow = [
  { label: "React UI", icon: Terminal },
  { label: "REST API", icon: Network },
  { label: "Node + Express", icon: Server },
  { label: "MongoDB", icon: Database },
];

const terminalLines = [
  "profile: full-stack-developer",
  "frontend: react + responsive-ui",
  "backend: node.js + express + spring-boot",
  "database: mongodb + sql",
  "domain: development + payments + upi",
  "tools: postman + jfrog + netbeans",
];

const typedRole = "Full Stack Developer";

export default function Home() {
  const PrimaryIcon = cta.primary.icon;
  const SecondaryIcon = cta.secondary.icon;
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setTypedText((current) => {
        if (current.length === typedRole.length) return "";
        return typedRole.slice(0, current.length + 1);
      });
    }, typedText.length === typedRole.length ? 1500 : 90);

    return () => clearTimeout(timeout);
  }, [typedText]);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-950 dark:bg-slate-950 dark:text-white">
      <Navbar />

      <main>
        <section className="relative overflow-hidden border-b border-slate-200 bg-slate-950 text-white dark:border-white/10">
          <div className="tech-grid absolute inset-0" />
          <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-cyan-300/10 to-transparent" />
          <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-orange-500/20 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />

          <div className="relative mx-auto grid max-w-[96rem] gap-10 px-4 py-10 sm:px-6 sm:py-14 lg:grid-cols-[minmax(0,1fr)_minmax(440px,0.86fr)] lg:items-start lg:gap-16 lg:px-8 lg:py-16 xl:grid-cols-[minmax(760px,820px)_minmax(500px,560px)] xl:gap-24 2xl:max-w-[100rem]">
            <div className="min-w-0">
              <div className="inline-flex max-w-full flex-wrap items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-2 text-xs font-semibold text-emerald-200 shadow-[0_0_28px_rgba(16,185,129,0.14)] sm:px-4 sm:text-sm">
                <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_18px_rgba(52,211,153,0.9)]" />
                MERN Stack | Payments | Real-Life Project Delivery
              </div>

              <h1 className="mt-6 max-w-[820px] text-[2.85rem] font-black leading-[1.02] sm:text-6xl lg:mt-7 lg:text-[3.35rem] xl:text-[4rem] 2xl:text-[4.25rem]">
                <span className="block min-h-[1.05em] break-words text-orange-300 sm:whitespace-nowrap">
                  {typedText}
                  <span className="ml-1 inline-block h-[0.82em] w-1 translate-y-1 bg-orange-300" />
                </span>
                building real-world products.
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
                Hi, I am{" "}
                <span className="font-bold text-orange-300">
                  {profile.fullName}
                </span>
                , a Software Engineer and full stack developer working with
                MongoDB, Express, React, Node.js, Java, Spring Boot, Python,
                machine learning, microservices, SOAP APIs, UPI, transactions,
                and payment workflows.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Link
                  href={cta.primary.href}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-orange-500 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-orange-500/25 transition hover:-translate-y-0.5 hover:bg-orange-400"
                >
                  <PrimaryIcon size={18} />
                  {cta.primary.label}
                </Link>
                <Link
                  href={cta.secondary.href}
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/10 px-5 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:border-orange-300 hover:bg-white/15"
                >
                  <SecondaryIcon size={18} />
                  {cta.secondary.label}
                </Link>
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-3 lg:mt-10">
                {highlights.map(({ label, value, icon: Icon }) => (
                  <div
                    key={label}
                    className="rounded-2xl border border-white/10 bg-white/[0.06] p-3 backdrop-blur transition hover:-translate-y-1 hover:border-orange-300/40 sm:p-4"
                  >
                    <Icon className="text-orange-300" size={21} />
                    <p className="mt-3 text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                      {label}
                    </p>
                    <p className="mt-1 text-sm font-bold text-white">{value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid w-full min-w-0 gap-4 justify-self-end lg:max-w-[560px] xl:translate-x-10 2xl:translate-x-14">
              <div className="glow-border scanline rounded-[1.5rem] border border-white/10 bg-white/[0.06] p-3 shadow-2xl shadow-black/40 backdrop-blur sm:rounded-[1.75rem] sm:p-4">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-red-400" />
                    <span className="h-3 w-3 rounded-full bg-yellow-300" />
                    <span className="h-3 w-3 rounded-full bg-emerald-400" />
                  </div>
                  <span className="font-mono text-xs text-slate-400">
                    fullstack-runtime.yml
                  </span>
                </div>

                <div className="mt-5 grid gap-2 sm:gap-3">
                  {terminalLines.map((line) => (
                    <div
                      key={line}
                      className="flex items-center gap-3 rounded-xl border border-white/10 bg-slate-950/70 px-3 py-3 font-mono text-xs text-slate-200 sm:px-4 sm:text-sm"
                    >
                      <span className="text-emerald-300">&gt;</span>
                      {line}
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[1.5rem] border border-white/10 bg-slate-900/80 p-4 shadow-2xl shadow-black/30 sm:rounded-[1.75rem] sm:p-5">
                <div className="mb-5 flex items-center justify-between">
                  <div>
                    <p className="text-sm font-bold text-white">Service Flow</p>
                    <p className="mt-1 text-xs text-slate-400">
                      UI to API to database delivery path
                    </p>
                  </div>
                  <Activity className="text-emerald-300" size={22} />
                </div>

                <div className="grid gap-3">
                  {serviceFlow.map(({ label, icon: Icon }, index) => (
                    <div key={label} className="flex items-center gap-3">
                      <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white/10 text-orange-300 sm:h-11 sm:w-11">
                        <Icon size={19} />
                      </div>
                      <div className="flex-1 rounded-xl border border-white/10 bg-white/[0.05] px-3 py-3 sm:px-4">
                        <p className="text-sm font-bold text-white">{label}</p>
                      </div>
                      {index < serviceFlow.length - 1 && (
                        <GitBranch className="hidden text-slate-500 sm:block" size={18} />
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-4">
                  <Cpu className="text-cyan-300" size={22} />
                  <p className="mt-3 text-2xl font-black">UPI</p>
                  <p className="text-xs uppercase tracking-[0.16em] text-slate-400">
                    Payment logic
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-4">
                  <ShieldCheck className="text-emerald-300" size={22} />
                  <p className="mt-3 text-2xl font-black">API</p>
                  <p className="text-xs uppercase tracking-[0.16em] text-slate-400">
                    Validation focus
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
            <div>
              <p className="section-kicker">Current Work</p>
              <h2 className="section-title">
                Full stack development for practical business problems.
              </h2>
              <p className="mt-4 max-w-2xl leading-7 text-slate-600 dark:text-slate-300">
                I build usable products end to end: responsive React screens,
                secure API layers, database-backed workflows, admin panels,
                integrations, and reliable payment or transaction logic when a
                project needs it.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {currentWork.map(({ title, description, icon: Icon }) => (
                <article
                  key={title}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-orange-200 dark:border-white/10 dark:bg-white/[0.04]"
                >
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-orange-100 text-orange-600 dark:bg-orange-300/10 dark:text-orange-300">
                    <Icon size={22} />
                  </div>
                  <h3 className="mt-5 text-lg font-black text-slate-950 dark:text-white">
                    {title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
                    {description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-slate-200 bg-white py-16 dark:border-white/10 dark:bg-white/[0.03]">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr]">
              <div>
                <p className="section-kicker">Technical Focus</p>
                <h2 className="section-title">
                  The stack clients should notice quickly.
                </h2>
                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {focusAreas.map((area) => (
                    <div
                      key={area}
                      className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-white/10 dark:bg-white/[0.04]"
                    >
                      <CheckCircle2
                        className="shrink-0 text-orange-500"
                        size={19}
                      />
                      <span className="font-semibold text-slate-700 dark:text-slate-200">
                        {area}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="self-start rounded-[1.5rem] bg-slate-950 p-5 text-white shadow-2xl shadow-slate-300/60 dark:bg-white dark:text-slate-950 dark:shadow-black/30">
                <div className="flex items-center gap-4">
                  <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-2xl bg-slate-800">
                    <Image
                      src="/saurabh.jpg"
                      alt="Saurabh Kumar"
                      fill
                      sizes="80px"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-black">{profile.fullName}</p>
                    <p className="mt-1 text-sm text-slate-300 dark:text-slate-600">
                      {profile.headline}
                    </p>
                  </div>
                </div>
                <div className="mt-5 grid grid-cols-2 gap-3">
                  {quickStats.map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-xl bg-white/10 px-4 py-3 dark:bg-slate-100"
                    >
                      <p className="text-xl font-black">{stat.value}</p>
                      <p className="mt-1 text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-slate-400 dark:text-slate-500">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
          <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="section-kicker">Featured Work</p>
              <h2 className="section-title">Projects backed by problem solving.</h2>
            </div>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-sm font-bold text-orange-600 dark:text-orange-300"
            >
              See all projects <ArrowUpRight size={16} />
            </Link>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {projects.slice(0, 4).map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </section>

        <section className="border-y border-slate-200 bg-white py-16 dark:border-white/10 dark:bg-white/[0.03]">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
              <div>
                <p className="section-kicker">Achievements</p>
                <h2 className="section-title">Competitive programming proof.</h2>
                <p className="mt-4 leading-7 text-slate-600 dark:text-slate-300">
                  The portfolio should communicate more than tools. These
                  signals show consistency with data structures, algorithms,
                  ranking pressure, and contest-style problem solving.
                </p>
              </div>
              <div className="grid gap-3">
                {achievements.map((achievement) => (
                  <div
                    key={achievement}
                    className="flex gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-white/10 dark:bg-white/[0.04]"
                  >
                    <CheckCircle2 className="mt-0.5 shrink-0 text-emerald-500" size={19} />
                    <p className="font-semibold leading-6 text-slate-700 dark:text-slate-200">
                      {achievement}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
          <div className="mb-8">
            <p className="section-kicker">Toolkit</p>
            <h2 className="section-title">Technologies I use in real work.</h2>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-7">
            {skills.map(({ name, icon: Icon, color }) => (
              <div
                key={name}
                className="flex min-h-32 flex-col justify-between rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:border-orange-200 dark:border-white/10 dark:bg-white/[0.04]"
              >
                <Icon size={28} className={color} />
                <span className="text-sm font-bold text-slate-700 dark:text-slate-200">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 pb-16 sm:px-6 lg:px-8">
          <div className="rounded-[2rem] bg-slate-950 p-8 text-white shadow-2xl shadow-slate-300/60 md:p-10 dark:bg-white dark:text-slate-950 dark:shadow-black/30">
            <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-orange-300 dark:text-orange-600">
                  Let&apos;s Connect
                </p>
                <h2 className="mt-3 text-3xl font-black md:text-4xl">
                  Freelance project, technical collaboration, or product idea?
                </h2>
                <p className="mt-3 max-w-2xl text-slate-300 dark:text-slate-600">
                  I am open to meaningful engineering conversations around Java
                  full-stack apps, APIs, microservices, payments, dashboards,
                  and practical product development.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                {socialLinks.slice(0, 3).map(({ label, href, icon: Icon }) => (
                  <Link
                    key={label}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="inline-flex items-center gap-2 rounded-xl bg-white px-4 py-3 text-sm font-bold text-slate-950 transition hover:-translate-y-0.5 hover:bg-orange-200 dark:bg-slate-950 dark:text-white"
                  >
                    <Icon size={17} />
                    {label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
