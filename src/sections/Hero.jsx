import { motion, useReducedMotion } from 'framer-motion'
import {
  ArrowDown,
  ArrowDownRight,
  ArrowRight,
  BriefcaseBusiness,
  Code2,
  Download,
  GitBranch,
  Sparkles,
} from 'lucide-react'
import Reveal from '../components/Reveal.jsx'
import { contact } from '../data/portfolio.js'

const socialLinks = [
  { label: 'GitHub', href: contact.github, icon: GitBranch },
  {
    label: 'LinkedIn',
    href: contact.linkedin,
    icon: BriefcaseBusiness,
  },
]

function Hero() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section
      id="home"
      className="relative isolate mx-auto flex min-h-[760px] max-w-7xl items-center px-5 pb-24 pt-32 sm:px-8 lg:min-h-[850px] lg:px-12"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-52 top-24 -z-10 size-[620px] rounded-full bg-violet-500/[0.08] blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-64 bottom-0 -z-10 size-[420px] rounded-full bg-blue-500/[0.06] blur-[110px]"
      />

      <div className="grid w-full items-center gap-16 lg:grid-cols-[1.08fr_0.92fr] lg:gap-14">
        <div className="max-w-3xl">
          <Reveal>
            <div className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-emerald-300/15 bg-emerald-300/[0.06] px-3.5 py-2 text-xs font-medium text-emerald-200">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-300 opacity-50" />
                <span className="relative inline-flex size-2 rounded-full bg-emerald-300" />
              </span>
              MCA Student · FullStack Developer
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <p className="mb-3 text-lg font-medium text-slate-400 sm:text-xl">
              Hello, I&apos;m <span className="text-white">Anshul Gothwal</span>
            </p>
            <h1 className="max-w-3xl text-5xl font-semibold leading-[1.05] tracking-[-0.055em] text-white sm:text-6xl lg:text-[76px]">
              FullStack Developer
              <span className="block bg-gradient-to-r from-violet-300 via-fuchsia-200 to-sky-200 bg-clip-text pb-2 text-transparent">
                 MERN Stack
              </span>
            </h1>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="mt-6 max-w-xl text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">
              I&apos;m a passionate developer and MCA student interested in
              building responsive, user-friendly web applications. I work with
              React, JavaScript, and modern frontend technologies while
              expanding my knowledge of Node.js, Express.js, and MongoDB.
            </p>
          </Reveal>

          <Reveal delay={0.24}>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href="#projects"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-violet-300 px-6 py-3.5 text-sm font-semibold text-[#111018] transition hover:bg-violet-200"
              >
                View Projects
                <ArrowRight
                  aria-hidden="true"
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 px-6 py-3.5 text-sm font-medium text-slate-200 transition hover:border-white/20 hover:bg-white/[0.04]"
              >
                Contact Me <ArrowDownRight aria-hidden="true" size={16} />
              </a>
              <a
                href="/resume.pdf"
                download="Anshul-Gothwal-Resume.pdf"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 px-6 py-3.5 text-sm font-medium text-slate-300 transition hover:border-violet-300/30 hover:bg-violet-300/[0.06] hover:text-white"
              >
                <Download aria-hidden="true" size={15} />
                Download Resume
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.32}>
            <div className="mt-12 flex items-center gap-4">
              <span className="text-xs font-medium uppercase tracking-[0.16em] text-slate-500">
                Find me on
              </span>
              <span className="h-px w-8 bg-white/10" />
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Open Anshul's ${label} profile`}
                  className="grid size-9 place-items-center rounded-full border border-white/[0.08] text-slate-400 transition hover:border-violet-300/30 hover:text-violet-200"
                >
                  <Icon aria-hidden="true" size={16} />
                </a>
              ))}
            </div>
          </Reveal>
        </div>

        {/* try */}

        <Reveal className="relative mx-auto w-full max-w-[460px]" delay={0.18}>
  <motion.div
    animate={shouldReduceMotion ? undefined : { y: [0, -8, 0] }}
    transition={
      shouldReduceMotion
        ? { duration: 0 }
        : { duration: 6, repeat: Infinity, ease: 'easeInOut' }
    }
    className="relative"
  >
    {/* Soft glow behind the card */}
    <div
      aria-hidden="true"
      className="absolute -inset-5 rounded-[2.5rem] bg-gradient-to-br from-violet-400/10 via-transparent to-sky-400/10 blur-2xl"
    />

    {/* Main card */}
    <div className="relative isolate overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#101117] shadow-2xl shadow-black/40">

      {/* Background photo */}
      <img
        src="/images/profile.jpg"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 z-0 h-full w-full object-cover object-center brightness-200"
      />

      {/* Dark overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-0 bg-gradient-to-t from-[#08090d]/90 via-[#08090d]/45 to-[#08090d]/35"
      />

      {/* Card content */}
      <div className="relative z-10">

        {/* Top bar */}
        <div className="flex items-center justify-between border-b border-white/15 bg-black/20 px-5 py-4 backdrop-blur-sm">
          <div className="flex items-center gap-2">
            <span className="size-2.5 rounded-full bg-rose-400/80" />
            <span className="size-2.5 rounded-full bg-amber-300/80" />
            <span className="size-2.5 rounded-full bg-emerald-300/80" />
          </div>

          <span className="block bg-gradient-to-r from-violet-300 via-fuchsia-200 to-sky-200 bg-clip-text text-transparent">
            Junior Developer
          </span>

          <Code2
            aria-hidden="true"
            size={16}
            className="text-white"
          />
        </div>

        {/* Middle content with enough height for the background */}
        <div className="relative flex min-h-[380px] flex-col justify-end px-6 py-8 sm:min-h-[440px] sm:px-8 sm:py-10">

          <div className="relative mt-auto text-center">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-slate-200">
              Open to work
            </p>

          <span className="bg-gradient-to-r from-violet-300 via-fuchsia-200 to-sky-200 bg-clip-text text-transparent mt-2 text-xl font-semibold tracking-tight sm:text-2xl">
              FullStack Developer
           </span>

            <div className="mt-5 flex flex-wrap justify-center gap-2">
              {['React', 'Node.js','Express', 'MongoDB'].map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-white/20 bg-black/40 px-3 py-1.5 text-xs text-white backdrop-blur-md"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex items-center justify-between border-t border-white/15 bg-black/25 px-5 py-4 text-xs text-slate-200 backdrop-blur-sm">
          <span className="flex items-center gap-2">
            <span className="size-1.5 rounded-full bg-emerald-300" />
            Learning by building
          </span>

          <a
            href="#about"
            className="inline-flex items-center gap-1.5 transition hover:text-white"
          >
            More about me
            <ArrowDown aria-hidden="true" size={13} />
          </a>
        </div>

      </div>
    </div>
  </motion.div>
</Reveal>
        
      </div>
    </section>
  )
}

export default Hero
