import Reveal from '../components/Reveal.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import { skillGroups } from '../data/portfolio.js'

function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
      <Reveal>
        <SectionHeading
          eyebrow="Technical skills"
          title="The tools I work and learn with."
          description="Grouped by area, without proficiency scores—just the technologies I’ve worked with or am currently learning."
        />
      </Reveal>

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
        {skillGroups.map(({ title, description, icon: Icon, skills }, index) => (
          <Reveal key={title} delay={index * 0.07}>
            <article className="group h-full rounded-2xl border border-white/[0.07] bg-[#101117] p-5 transition duration-300 hover:-translate-y-1 hover:border-violet-300/20 hover:bg-[#13141c] sm:p-6">
              <div className="grid size-11 place-items-center rounded-xl border border-violet-300/15 bg-violet-300/[0.07] text-violet-200 transition group-hover:bg-violet-300/[0.12]">
                <Icon aria-hidden="true" size={20} strokeWidth={1.7} />
              </div>
              <h3 className="mt-5 font-semibold text-white">{title}</h3>
              <p className="mt-2 min-h-10 text-sm leading-5 text-slate-500">
                {description}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-white/[0.07] bg-white/[0.025] px-2.5 py-1.5 text-xs text-slate-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

export default Skills
