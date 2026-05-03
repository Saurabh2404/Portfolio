import Footer from "@/components/Footer";
import Navbar from "@/components/navbar";
import ProjectCard from "@/components/ProjectCard";
import { focusAreas, projects } from "@/data/portfolio";

export default function Projects() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-950 dark:bg-slate-950 dark:text-white">
      <Navbar />
      <main>
        <section className="border-b border-slate-200 bg-white py-16 dark:border-white/10 dark:bg-white/[0.03]">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <p className="section-kicker">Selected Work</p>
            <div className="mt-4 grid gap-6 md:grid-cols-[0.9fr_1.1fr] md:items-end">
              <h1 className="text-5xl font-black leading-tight text-slate-950 md:text-6xl dark:text-white">
                Projects that show how I think and build.
              </h1>
              <p className="text-lg leading-8 text-slate-600 dark:text-slate-300">
                A focused collection of backend, full-stack, search, content,
                and finance-oriented projects. Each one emphasizes practical
                workflows, maintainable implementation, and clear user value.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-14 sm:px-6 lg:px-8">
          <div className="grid gap-5 md:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 pb-16 sm:px-6 lg:px-8">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm dark:border-white/10 dark:bg-white/[0.04]">
            <p className="section-kicker">Engineering Themes</p>
            <div className="mt-5 flex flex-wrap gap-3">
              {focusAreas.map((area) => (
                <span
                  key={area}
                  className="rounded-full bg-slate-100 px-4 py-2 text-sm font-bold text-slate-700 dark:bg-white/10 dark:text-slate-200"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
