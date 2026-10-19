import {
  ArrowDownRight,
  ArrowUpRight,
  BriefcaseBusiness,
  GitBranch,
  Mail,
} from 'lucide-react'
import Reveal from '../components/Reveal.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import { contact } from '../data/portfolio.js'

const contactLinks = [
  {
    label: 'GitHub Profile',
    href: contact.github,
    icon: GitBranch,
  },
  {
    label: 'LinkedIn Profile',
    href: contact.linkedin,
    icon: BriefcaseBusiness,
  },
]

function Contact() {
  return (
    <section
      id="contact"
      className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28"
    >
      <Reveal>
        <div className="relative isolate overflow-hidden rounded-[2rem] border border-white/[0.08] bg-[#111218] px-6 py-10 sm:px-10 sm:py-14 lg:px-16 lg:py-16">
          <div
            aria-hidden="true"
            className="absolute -right-20 -top-40 -z-10 size-[420px] rounded-full bg-violet-400/[0.09] blur-[100px]"
          />
          <div className="grid items-end gap-12 lg:grid-cols-[1fr_auto]">
            <div>
              <SectionHeading
                eyebrow="Contact"
                title="Let’s connect."
                description="For opportunities, project conversations, or professional connections, feel free to reach out."
              />
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href={`mailto:${contact.email}?subject=Hello%20Anshul`}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-violet-300 px-6 py-3.5 text-sm font-semibold text-[#111018] transition hover:bg-violet-200"
                >
                  <Mail aria-hidden="true" size={16} />
                  Email Me
                  <ArrowUpRight aria-hidden="true" size={15} />
                </a>
                {contactLinks.map(({ label, href, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 px-5 py-3.5 text-sm font-medium text-slate-200 transition hover:border-violet-300/30 hover:bg-violet-300/[0.06] hover:text-white"
                  >
                    <Icon aria-hidden="true" size={16} />
                    {label}
                    <ArrowUpRight aria-hidden="true" size={14} />
                  </a>
                ))}
              </div>
            </div>

            <div className="min-w-56 border-t border-white/[0.08] pt-6 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-slate-500">
                Email address
              </p>
              <a
                href={`mailto:${contact.email}`}
                className="mt-3 inline-flex items-center gap-2 break-all text-sm text-slate-200 transition hover:text-violet-200"
              >
                {contact.email}
                <ArrowDownRight
                  aria-hidden="true"
                  className="shrink-0"
                  size={14}
                />
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  )
}

export default Contact
