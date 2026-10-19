import { useEffect, useState } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { navigation } from '../data/portfolio.js'
import reactLogo from '../assets/react.svg'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  function closeMenu() {
    setMenuOpen(false)
  }

  useEffect(() => {
    let frameId

    function updateActiveSection() {
      cancelAnimationFrame(frameId)
      frameId = requestAnimationFrame(() => {
        const marker = window.scrollY + 120
        const sectionIds = ['home', ...navigation.map((item) => item.href.slice(1))]
        const currentSection = sectionIds.reduce((activeId, sectionId) => {
          const section = document.getElementById(sectionId)
          const sectionTop = section
            ? section.getBoundingClientRect().top + window.scrollY
            : Infinity
          return sectionTop <= marker ? sectionId : activeId
        }, 'home')

        setActiveSection(currentSection)
      })
    }

    updateActiveSection()
    window.addEventListener('scroll', updateActiveSection, { passive: true })
    window.addEventListener('resize', updateActiveSection)

    return () => {
      cancelAnimationFrame(frameId)
      window.removeEventListener('scroll', updateActiveSection)
      window.removeEventListener('resize', updateActiveSection)
    }
  }, [])

  function getLinkClass(sectionId) {
    return `border-b py-3.5 text-sm transition md:border-0 md:py-2 ${
      activeSection === sectionId
        ? 'border-violet-300/40 font-medium text-violet-200 md:text-violet-200'
        : 'border-white/[0.05] text-slate-400 hover:text-white'
    }`
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.06] bg-[#08090d]/85 backdrop-blur-xl">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12"
      >
        <a
          href="#home"
          onClick={closeMenu}
          aria-current={activeSection === 'home' ? 'page' : undefined}
          className={`group flex items-center gap-2.5 text-sm font-semibold tracking-wide transition ${
            activeSection === 'home' ? 'text-violet-100' : 'text-white'
          }`}
        >
          <span className="grid size-8 shrink-0 place-items-center rounded-lg border border-violet-300/20 bg-violet-300/10 transition group-hover:bg-violet-300/20">
            <img
              src={reactLogo}
              alt="React"
              className="size-5 object-contain"
            />
          </span>
          <span>Anshul Gothwal<span className="text-violet-300"></span></span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              aria-current={
                activeSection === item.href.slice(1) ? 'location' : undefined
              }
              className={`relative text-sm transition ${
                activeSection === item.href.slice(1)
                  ? 'font-medium text-violet-200 after:absolute after:-bottom-2 after:left-0 after:h-px after:w-full after:bg-violet-300'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="hidden items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm font-medium text-slate-200 transition hover:border-violet-300/40 hover:bg-violet-300/10 md:inline-flex"
        >
          Let&apos;s talk <ArrowUpRight aria-hidden="true" size={15} />
        </a>

        <button
          type="button"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
          className="grid size-10 place-items-center rounded-lg border border-white/10 text-slate-200 transition hover:bg-white/5 md:hidden"
        >
          {menuOpen ? <X size={19} /> : <Menu size={19} />}
        </button>
      </nav>

      {menuOpen && (
        <div
          id="mobile-navigation"
          className="border-t border-white/[0.06] bg-[#0b0c11] px-5 py-4 md:hidden"
        >
          <div className="mx-auto flex max-w-7xl flex-col">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                aria-current={
                  activeSection === item.href.slice(1) ? 'location' : undefined
                }
                className={getLinkClass(item.href.slice(1))}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
