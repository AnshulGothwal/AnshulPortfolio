import { ArrowUpRight, Code2, ExternalLink } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'
import { useState } from 'react'

function ProjectCard({ project, index }) {
  const shouldReduceMotion = useReducedMotion()
  const [imageFailed, setImageFailed] = useState(false)
  const {
    number,
    name,
    category,
    image,
    description,
    icon: Icon,
    accent,
    visual,
    tags,
    features,
    deployments,
    demoUrl,
    sourceUrl,
    sourcePlaceholder,
    featured,
  } = project

  return (
    <motion.article
      initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
      whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={shouldReduceMotion ? undefined : { y: -5 }}
      className={`group overflow-hidden rounded-3xl border bg-[#101117] transition-colors ${
        featured
          ? 'border-amber-200/20 hover:border-amber-200/35 md:col-span-2'
          : 'border-white/[0.08] hover:border-white/[0.14]'
      }`}
    >
      <div
        className={`relative isolate flex h-48 items-center justify-center overflow-hidden border-b bg-gradient-to-br sm:h-56 ${visual}`}
      >
        {image && !imageFailed && (
          <img
            src={image}
            alt={`${name} project screenshot`}
            onError={() => setImageFailed(true)}
            className="absolute inset-0 z-0 h-full w-full object-cover"
          />
        )}
        <div
          aria-hidden="true"
          className="absolute left-1/2 top-1/2 -z-10 size-48 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.07]"
        />
        <div
          aria-hidden="true"
          className="absolute left-1/2 top-1/2 -z-10 size-36 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.08]"
        />
        {(!image || imageFailed) && (
          <div className="relative z-10 grid size-20 place-items-center rounded-3xl border border-white/10 bg-[#0b0c11]/80 shadow-2xl backdrop-blur transition duration-300 group-hover:scale-105">
            <Icon
              aria-hidden="true"
              className={accent}
              size={33}
              strokeWidth={1.4}
            />
          </div>
        )}
        <span className="absolute left-5 top-5 z-10 rounded-md bg-black/65 px-2.5 py-1.5 font-mono text-xs text-white shadow-sm backdrop-blur-sm">
          / {number}
        </span>
        <span className="absolute bottom-5 right-5 z-10 max-w-[70%] rounded-md bg-black/65 px-2.5 py-1.5 text-right text-[10px] font-semibold tracking-[0.16em] text-white shadow-sm backdrop-blur-sm">
          {category}
        </span>
      </div>

      <div className="p-5 sm:p-7">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-xl font-semibold tracking-tight text-white">
              {name}
            </h3>
            <p className="mt-3 text-sm leading-6 text-slate-400">
              {description}
            </p>
          </div>
          <span
            aria-hidden="true"
            className="grid size-9 shrink-0 place-items-center rounded-full border border-white/[0.08] text-slate-500 transition group-hover:border-violet-300/30 group-hover:text-violet-200"
          >
            <ArrowUpRight size={16} />
          </span>
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-white/[0.05] px-3 py-1.5 text-[11px] font-medium text-slate-300"
            >
              {tag}
            </span>
          ))}
        </div>

        {features?.length > 0 && (
          <ul className="mt-5 grid gap-2 border-t border-white/[0.07] pt-5 sm:grid-cols-2">
            {features.map((feature) => (
              <li
                key={feature}
                className="flex items-start gap-2 text-xs leading-5 text-slate-400"
              >
                <span
                  aria-hidden="true"
                  className="mt-2 size-1 shrink-0 rounded-full bg-violet-300/70"
                />
                {feature}
              </li>
            ))}
          </ul>
        )}

        {deployments?.length > 0 && (
          <div className="mt-5 flex flex-wrap gap-2">
            {deployments.map((deployment) => (
              <span
                key={deployment}
                className="rounded-md border border-white/[0.07] px-2.5 py-1.5 text-[10px] text-slate-500"
              >
                {deployment}
              </span>
            ))}
          </div>
        )}

        <div className="mt-6 flex flex-wrap gap-3 border-t border-white/[0.07] pt-5">
          {demoUrl && (
            <a
              href={demoUrl}
              target="_blank"
              rel="noreferrer"
              aria-label={`Open ${name} live website`}
              className="inline-flex items-center gap-2 rounded-full bg-violet-300 px-4 py-2.5 text-xs font-semibold text-[#111018] transition hover:bg-violet-200"
            >
              <ExternalLink aria-hidden="true" size={14} />
              Live website
            </a>
          )}
          {sourceUrl && (
            <a
              href={sourceUrl}
              target="_blank"
              rel="noreferrer"
              aria-label={
                sourcePlaceholder
                  ? `Open placeholder GitHub repository URL for ${name}`
                  : `Open ${name} source code`
              }
              className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2.5 text-xs font-medium text-slate-300 transition hover:border-white/20 hover:bg-white/[0.04] hover:text-white"
            >
              <Code2 aria-hidden="true" size={14} />
              {sourcePlaceholder ? 'GitHub (placeholder)' : 'Source code'}
            </a>
          )}
          {!demoUrl && !sourceUrl && (
            <p className="text-xs text-slate-600">
              Project links have not been provided.
            </p>
          )}
        </div>
      </div>
    </motion.article>
  )
}

export default ProjectCard
