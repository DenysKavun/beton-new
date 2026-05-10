'use client'

import Logo from './Logo'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-200/50 bg-white/80 backdrop-blur-xl">
      
      <div className="max-w-5xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* LOGO */}
        <a href="/" className="no-underline">
          <Logo />
        </a>

        {/* LINKS */}
        <div className="flex items-center gap-3">

          <a
            href="https://t.me/D_nssssss"
            target="_blank"
            className="px-4 py-2 rounded-xl border border-zinc-300 text-sm text-zinc-700 hover:bg-zinc-100 transition no-underline"
          >
            Telegram
          </a>

          <a
            href="https://wa.me/380676059990"
            target="_blank"
            className="px-4 py-2 rounded-xl bg-black text-white text-sm hover:bg-zinc-800 transition no-underline"
          >
            WhatsApp
          </a>

        </div>

      </div>

    </header>
  )
}
