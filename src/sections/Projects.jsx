import { ArrowRight } from 'lucide-react'
import ProjectCard from '../components/ProjectCard.jsx'
import Reveal from '../components/Reveal.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import { projects } from '../data/portfolio.js'

function Projects() {
  return (
    <section id="projects" className="border-y border-white/[0.06] bg-[#0c0d12]">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
        <Reveal>
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading
              eyebrow="Selected work"
              title="Projects built through practice."
              description="A mix of full-stack work, API-driven interfaces, and JavaScript learning projects."
            />
            <a
              href="#contact"
              className="mb-1 inline-flex shrink-0 items-center gap-2 text-sm font-medium text-slate-300 transition hover:text-violet-200"
            >
              Have a project in mind? <ArrowRight aria-hidden="true" size={15} />
            </a>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:mt-16">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.name}
              project={project}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
