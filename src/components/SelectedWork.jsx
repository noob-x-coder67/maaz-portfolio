import { Link } from "react-router-dom";
import { projects } from "../data/projects";

const selectedWork = [
  { id: 17, discipline: "Branding" },
  { id: 16, discipline: "Print" },
  { id: 19, discipline: "Digital" },
].map(({ id, discipline }) => ({
  ...projects.find((project) => project.id === id),
  discipline,
}));

export default function SelectedWork() {
  return (
    <section
      id="selected-work"
      aria-labelledby="selected-work-title"
      className="scroll-mt-16 bg-white px-4 py-12 sm:px-8 md:py-16 dark:bg-dark"
    >
      <div className="mx-auto max-w-[76rem]">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-x-6 gap-y-4">
          <h2
            id="selected-work-title"
            className="font-heading text-3xl font-bold tracking-tight text-gray-900 md:text-4xl dark:text-white"
          >
            Selected Work
          </h2>
          <a
            href="#portfolio"
            className="rounded-md px-1 py-2 text-base font-semibold text-indigo-700 underline decoration-indigo-300 underline-offset-4 hover:decoration-current focus-visible:outline-2 focus-visible:outline-offset-4 dark:text-indigo-300"
          >
            View Full Portfolio
          </a>
        </div>
        <div className="grid gap-5 sm:grid-cols-3">
          {selectedWork.map((project) => (
            <Link
              key={project.id}
              to={`/project/${project.id}`}
              className="group overflow-hidden rounded-2xl border border-indigo-100 bg-white transition-colors hover:border-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-indigo-500 dark:border-slate-700 dark:bg-dark-card dark:hover:border-indigo-300 dark:focus-visible:outline-indigo-300"
            >
              <div className="aspect-[4/3] bg-indigo-50/70 p-3 dark:bg-slate-900/60">
                <img
                  src={project.image}
                  alt=""
                  className="h-full w-full object-contain"
                  loading="lazy"
                />
              </div>
              <div className="px-4 py-4 sm:px-5">
                <p className="text-sm font-semibold text-indigo-700 dark:text-indigo-300">
                  {project.discipline}
                </p>
                <h3 className="mt-1 text-lg font-semibold leading-snug text-gray-900 group-hover:underline dark:text-white">
                  {project.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
