import { ArrowUpRight, BriefcaseBusiness, GraduationCap } from 'lucide-react'
import Reveal from '../components/Reveal.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import { education, internship } from '../data/portfolio.js'

function About() {
  return (
    <section id="about" className="border-y border-white/[0.06] bg-[#0c0d12]">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <Reveal>
            <SectionHeading
              eyebrow="About me"
              title="Learning, building, and growing as a developer."
              description="I’m Anshul Gothwal, a passionate developer and MCA student interested in building responsive, user-friendly web applications."
            />
            <div className="mt-6 space-y-4 text-sm leading-7 text-slate-400 sm:text-base">
              <p>
                I work with React, JavaScript, and modern frontend technologies
                while expanding my knowledge of backend development with
                Node.js, Express.js, and MongoDB.
              </p>
              <p>
                I enjoy learning new technologies, solving development problems,
                and building practical projects that deepen my understanding of
                full-stack development. My goal is to keep growing through
                hands-on work and collaboration.
              </p>
            </div>
            <a
              href="#projects"
              className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-violet-200 transition hover:text-white"
            >
              Explore my projects <ArrowUpRight aria-hidden="true" size={16} />
            </a>
          </Reveal>

          <div className="space-y-5">
            <Reveal delay={0.08}>
              <div className="rounded-3xl border border-white/[0.08] bg-[#111218] p-6 sm:p-8">
                <div className="mb-6 flex items-center gap-3">
                  <div className="grid size-10 place-items-center rounded-xl border border-violet-300/15 bg-violet-300/10 text-violet-200">
                    <GraduationCap aria-hidden="true" size={19} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Education</h3>
                    <p className="mt-1 text-xs text-slate-500">
                      Computer applications
                    </p>
                  </div>
                </div>

                <div className="space-y-5">
                  {education.map((item) => (
                    <article
                      key={item.abbreviation}
                      className="border-l border-violet-300/20 pl-4"
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <h4 className="text-sm font-semibold text-slate-100">
                          {item.qualification} ({item.abbreviation})
                        </h4>
                        <span className="text-xs text-slate-500">
                          {item.period}
                        </span>
                      </div>
                      <p className="mt-1.5 text-sm text-slate-400">
                        {item.institution}
                      </p>
                      <p className="mt-1 text-xs text-violet-200/80">
                        {item.status ?? item.result}
                      </p>
                    </article>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.16}>
              <div className="rounded-3xl border border-white/[0.08] bg-[#111218] p-6 sm:p-8">
                <div className="mb-6 flex items-center gap-3">
                  <div className="grid size-10 place-items-center rounded-xl border border-cyan-300/15 bg-cyan-300/10 text-cyan-200">
                    <BriefcaseBusiness aria-hidden="true" size={18} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">
                      Internship experience
                    </h3>
                    <p className="mt-1 text-xs text-slate-500">
                      {internship.period}
                    </p>
                  </div>
                </div>

                <h4 className="text-sm font-semibold text-slate-100">
                  {internship.position}
                </h4>
                <p className="mt-1 text-sm text-violet-200/90">
                  {internship.organization}
                </p>
                <p className="mt-4 text-sm leading-6 text-slate-400">
                  <span className="font-medium text-slate-300">
                    {internship.project}.{' '}
                  </span>
                  {internship.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {internship.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full bg-white/[0.05] px-3 py-1.5 text-[11px] font-medium text-slate-400"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
