import { useState } from 'react'
import { Menu, X, Bot, Sparkles } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Solutions', href: '#solutions' },
    { label: 'Showcase', href: '#showcase' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/50 shadow-sm ring-1 ring-black/5">
          <div className="flex items-center justify-between px-4 py-3">
            <a href="#" className="inline-flex items-center gap-2">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-violet-600 text-white">
                <Bot size={18} />
              </span>
              <div className="text-left">
                <p className="text-sm font-bold tracking-wide text-gray-900">NeuroSpark</p>
                <p className="text-xs text-gray-500 -mt-1 flex items-center gap-1"><Sparkles className="h-3 w-3"/> AI Agency</p>
              </div>
            </a>

            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">
                  {item.label}
                </a>
              ))}
              <a href="#contact" className="inline-flex items-center rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 px-4 py-2 text-sm font-semibold text-white shadow hover:opacity-95">
                Start a project
              </a>
            </nav>

            <button onClick={() => setOpen(!open)} className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl ring-1 ring-black/5 bg-white text-gray-800">
              {open ? <X /> : <Menu />}
            </button>
          </div>

          {open && (
            <div className="md:hidden border-t border-gray-200 px-4 py-3 space-y-2">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="block rounded-lg px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
                  {item.label}
                </a>
              ))}
              <a href="#contact" className="block text-center rounded-lg bg-gradient-to-r from-blue-600 to-violet-600 px-3 py-2 text-sm font-semibold text-white">
                Start a project
              </a>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
