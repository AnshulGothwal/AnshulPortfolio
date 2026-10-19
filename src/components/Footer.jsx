import { ArrowUpRight } from 'lucide-react'

const currentYear = new Date().getFullYear()

function Footer() {
  return (
    <footer className="border-t border-white/[0.06]">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-7 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12">
        <p>
          © {currentYear} Anshul Gothwal. Built with React.
        </p>
        <a
          href="#home"
          className="inline-flex items-center gap-1.5 transition hover:text-slate-200"
        >
          Back to top <ArrowUpRight aria-hidden="true" size={13} />
        </a>
      </div>
    </footer>
  )
}

export default Footer
