import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { ArrowUpRight, BarChart3, CheckCircle2, DatabaseZap, Flame, Medal, RefreshCw, ShieldCheck, Trophy, Zap } from "lucide-react";
import AnimatedSection, { StaggerGroup, StaggerItem } from "@/components/AnimatedSection";
import Footer from "@/components/Footer";
import Navbar from "@/components/navbar";
import { codingProfiles, proofOfWork } from "@/data/portfolio";

function StatCard({ stat }) {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      className="group relative overflow-hidden rounded-[1.6rem] border border-slate-200 bg-white p-5 shadow-sm transition dark:border-white/10 dark:bg-white/[0.04]"
    >
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-orange-500 via-cyan-500 to-emerald-500" />
      <p className="text-xs font-black uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">{stat.label}</p>
      <p className="mt-4 text-4xl font-black text-slate-950 transition group-hover:text-orange-500 dark:text-white">{stat.value}</p>
      <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{stat.note}</p>
    </motion.article>
  );
}

function ActivityHeatmap() {
  const cells = Array.from({ length: 84 }, (_, index) => {
    const level = [0, 1, 2, 3, 0, 2, 1, 0, 3, 2, 0, 1][index % 12];
    return level;
  });

  return (
    <div className="grid grid-cols-12 gap-1">
      {cells.map((level, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, scale: 0.6 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.006, duration: 0.25 }}
          className={[
            "aspect-square rounded-[4px]",
            level === 0 && "bg-white/10",
            level === 1 && "bg-emerald-300/35",
            level === 2 && "bg-emerald-300/65",
            level === 3 && "bg-emerald-300",
          ].filter(Boolean).join(" ")}
        />
      ))}
    </div>
  );
}

function DistributionCard({ distribution }) {
  const total = distribution.items.reduce((sum, item) => sum + item.value, 0);

  return (
    <StaggerItem as="article" className="rounded-[1.6rem] border border-slate-200 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-white/[0.04]">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-black text-slate-950 dark:text-white">{distribution.title}</p>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">Question distribution</p>
        </div>
        <div className="grid h-16 w-16 place-items-center rounded-full border-8 border-slate-100 bg-slate-50 text-lg font-black text-slate-950 dark:border-white/10 dark:bg-white/[0.04] dark:text-white">
          {distribution.total}
        </div>
      </div>
      <div className="mt-5 space-y-4">
        {distribution.items.map((item) => (
          <div key={item.label}>
            <div className="mb-2 flex justify-between text-sm">
              <span className="font-bold text-slate-700 dark:text-slate-200">{item.label}</span>
              <span className="text-slate-500 dark:text-slate-400">{item.value}</span>
            </div>
            <div className="h-2.5 overflow-hidden rounded-full bg-slate-100 dark:bg-white/10">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${Math.max((item.value / total) * 100, 6)}%` }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                className={`h-full rounded-full ${distribution.color}`}
              />
            </div>
          </div>
        ))}
      </div>
    </StaggerItem>
  );
}

export default function ProofOfWork() {
  const [work, setWork] = useState(proofOfWork);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    let active = true;

    fetch("/api/proof-of-work")
      .then((response) => (response.ok ? response.json() : proofOfWork))
      .then((data) => {
        if (active) setWork(data);
      })
      .catch(() => {
        if (active) setWork(proofOfWork);
      })
      .finally(() => {
        if (active) setLoading(false);
      });

    return () => {
      active = false;
    };
  }, []);

  const refreshCodolioData = async () => {
    setRefreshing(true);

    try {
      const response = await fetch(`/api/proof-of-work?refresh=1&t=${Date.now()}`);
      const data = response.ok ? await response.json() : proofOfWork;
      setWork(data);
    } catch {
      setWork(proofOfWork);
    } finally {
      setRefreshing(false);
    }
  };

  const maxTopicValue = useMemo(
    () => Math.max(...work.topicAnalysis.map((topic) => topic.value), 1),
    [work.topicAnalysis]
  );
  const sourceText = work.source === "live" ? "Live from Codolio" : "Fetch Codolio data";
  const isFetching = loading || refreshing;

  return (
    <div className="updated-portfolio min-h-screen bg-slate-50 text-slate-950 dark:bg-slate-950 dark:text-white">
      <Navbar />
      <main>
        <section className="relative overflow-hidden border-b border-slate-200 bg-[radial-gradient(circle_at_15%_15%,rgba(249,115,22,0.16),transparent_30%),linear-gradient(135deg,#ffffff_0%,#f8fafc_45%,#eef6ff_100%)] py-16 dark:border-white/10 dark:bg-[radial-gradient(circle_at_15%_15%,rgba(249,115,22,0.14),transparent_30%),linear-gradient(135deg,#020617_0%,#0f172a_54%,#111827_100%)]">
          <div className="absolute inset-0 tech-grid opacity-70" />
          <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-orange-300/20 blur-3xl dark:bg-orange-500/10" />
          <div className="relative mx-auto grid max-w-7xl gap-10 px-5 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-8">
            <AnimatedSection>
              <p className="section-kicker">Proof of Work</p>
              <h1 className="mt-4 max-w-3xl text-5xl font-black leading-tight text-slate-950 md:text-6xl dark:text-white">
                Live coding dashboard for practice, contests, and progress.
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
                {work.headline} The page renders the proof here and refreshes through the website data layer.
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
                <button
                  type="button"
                  onClick={refreshCodolioData}
                  disabled={isFetching}
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-orange-500 px-5 py-3 text-sm font-black text-white shadow-lg shadow-orange-500/20 transition hover:-translate-y-1 hover:bg-orange-400 disabled:cursor-wait disabled:opacity-80"
                >
                  <RefreshCw size={18} className={isFetching ? "animate-spin" : ""} />
                  {sourceText}
                </button>
                <a
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-5 py-3 text-sm font-black text-slate-950 transition hover:-translate-y-1 hover:border-orange-300 dark:border-white/10 dark:bg-white/[0.06] dark:text-white"
                  href="#platforms"
                >
                  Connected Platforms <DatabaseZap size={18} />
                </a>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="left" className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-950 p-4 text-white shadow-2xl shadow-slate-300/40 dark:border-white/10 dark:shadow-black/30 sm:p-5">
              <div className="absolute -right-20 -top-20 h-52 w-52 rounded-full bg-orange-400/20 blur-3xl" />
              <div className="absolute -bottom-20 left-10 h-52 w-52 rounded-full bg-cyan-400/10 blur-3xl" />
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-400" />
                  <span className="h-3 w-3 rounded-full bg-yellow-300" />
                  <span className="h-3 w-3 rounded-full bg-emerald-400" />
                </div>
                <span className="font-mono text-xs text-slate-400">codolio-proof.json</span>
              </div>
              <div className="relative mt-5 grid gap-3 sm:grid-cols-2">
                {work.stats.map((stat) => (
                  <motion.div
                    key={stat.label}
                    whileHover={{ y: -4, scale: 1.02 }}
                    className="rounded-2xl border border-white/10 bg-white/[0.07] p-4 backdrop-blur"
                  >
                    <p className="text-xs font-bold uppercase tracking-[0.14em] text-slate-400">{stat.label}</p>
                    <p className="mt-3 text-3xl font-black">{stat.value}</p>
                  </motion.div>
                ))}
              </div>
              <div className="relative mt-4 grid gap-4 rounded-2xl border border-emerald-300/20 bg-emerald-300/10 p-4 md:grid-cols-[0.75fr_1.25fr] md:items-center">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="shrink-0 text-emerald-300" size={22} />
                  <div>
                    <p className="text-sm font-bold text-emerald-100">On-site sync layer</p>
                    <p className="mt-1 text-xs text-emerald-100/70">Built to update from Codolio automatically.</p>
                  </div>
                </div>
                <ActivityHeatmap />
              </div>
            </AnimatedSection>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-14 sm:px-6 lg:px-8">
          <StaggerGroup className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4" amount={0.1}>
            {work.stats.map((stat) => (
              <StaggerItem key={stat.label} as="div">
                <StatCard stat={stat} />
              </StaggerItem>
            ))}
          </StaggerGroup>
        </section>

        <section className="mx-auto grid max-w-7xl gap-6 px-5 pb-14 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
          <AnimatedSection className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/[0.04]">
            <div className="flex items-center gap-3">
              <BarChart3 className="text-orange-500" size={24} />
              <div>
                <p className="section-kicker">Topic Analysis</p>
                <h2 className="mt-1 text-3xl font-black">Practice depth by topic.</h2>
              </div>
            </div>
            <div className="mt-7 space-y-4">
              {work.topicAnalysis.map((topic) => (
                <div key={topic.label} className="grid gap-2 sm:grid-cols-[170px_1fr_52px] sm:items-center">
                  <span className="text-sm font-bold text-slate-700 dark:text-slate-200">{topic.label}</span>
                  <div className="h-3 overflow-hidden rounded-full bg-slate-100 dark:bg-white/10">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${(topic.value / maxTopicValue) * 100}%` }}
                      viewport={{ once: true, amount: 0.6 }}
                      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                      className="h-full rounded-full bg-blue-500"
                    />
                  </div>
                  <span className="text-sm font-black text-slate-950 dark:text-white">{topic.value}</span>
                </div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection direction="left" className="rounded-[2rem] border border-slate-200 bg-slate-950 p-6 text-white shadow-sm dark:border-white/10">
            <div className="flex items-center gap-3">
              <Trophy className="text-orange-300" size={25} />
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-orange-300">Contest Rankings</p>
                <h2 className="mt-1 text-3xl font-black">Competitive profile.</h2>
              </div>
            </div>
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {work.rankings.map((ranking) => (
                <motion.div key={ranking.platform} whileHover={{ y: -4 }} className="rounded-2xl border border-white/10 bg-white/[0.06] p-4">
                  <p className="text-sm font-bold text-slate-300">{ranking.platform}</p>
                  <p className="mt-2 text-3xl font-black">{ranking.value}</p>
                  <p className="mt-1 text-xs text-slate-400">{ranking.note}</p>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </section>

        <section className="mx-auto max-w-7xl px-5 pb-14 sm:px-6 lg:px-8">
          <StaggerGroup className="grid gap-5 md:grid-cols-3" amount={0.12}>
            {work.distributions.map((distribution) => (
              <DistributionCard key={distribution.title} distribution={distribution} />
            ))}
          </StaggerGroup>
        </section>

        <AnimatedSection id="platforms" className="mx-auto max-w-7xl px-5 pb-16 sm:px-6 lg:px-8">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/[0.04] sm:p-8">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="section-kicker">Verified Profiles</p>
                <h2 className="mt-2 text-3xl font-black">Connected platforms powering the dashboard.</h2>
              </div>
              <button
                type="button"
                onClick={refreshCodolioData}
                disabled={isFetching}
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-slate-950 px-5 py-3 text-sm font-black text-white transition hover:-translate-y-1 hover:bg-orange-500 disabled:cursor-wait disabled:opacity-80 dark:bg-white dark:text-slate-950"
              >
                <RefreshCw size={18} className={isFetching ? "animate-spin" : ""} />
                {sourceText}
              </button>
            </div>
            <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {codingProfiles.map(({ name, platform, icon: Icon, link, color }) => {
                const platformKey = platform || name.toLowerCase();
                const livePlatform = work.platformBreakdown?.find(
                  (item) => item.platform?.toLowerCase() === platformKey.toLowerCase()
                );

                return (
                <motion.a
                  key={name}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5 }}
                  className="group flex min-h-32 flex-col justify-between rounded-2xl border border-slate-200 bg-slate-50 p-4 transition hover:border-orange-300 hover:bg-white hover:shadow-lg hover:shadow-slate-200/70 dark:border-white/10 dark:bg-white/[0.04] dark:hover:bg-white/[0.08] dark:hover:shadow-black/20"
                >
                  <div className="flex items-center justify-between">
                    <Icon className={color} size={24} />
                    {name === "LeetCode" ? <Flame className="text-orange-500" size={18} /> : name === "CodeChef" ? <Medal className="text-purple-500" size={18} /> : name === "Codeforces" ? <Zap className="text-blue-500" size={18} /> : <ArrowUpRight className="text-slate-400 transition group-hover:text-orange-500" size={18} />}
                  </div>
                  <div>
                    <span className="inline-flex items-center gap-2 text-sm font-black text-slate-800 transition group-hover:text-orange-500 dark:text-slate-100">
                      <CheckCircle2 size={16} className="text-emerald-500" />
                      {name}
                    </span>
                    <p className="mt-2 text-2xl font-black text-slate-950 dark:text-white">
                      {name === "Codolio" ? work.codolioHandle : livePlatform?.solved ?? "--"}
                    </p>
                    <p className="text-xs font-bold uppercase tracking-[0.13em] text-slate-500 dark:text-slate-400">
                      {name === "Codolio" ? "Live profile" : "Problems solved"}
                    </p>
                  </div>
                </motion.a>
                );
              })}
            </div>
          </div>
        </AnimatedSection>
      </main>
      <Footer />
    </div>
  );
}
