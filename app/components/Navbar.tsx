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

        {/* LINKS & MESSENGERS */}
        <div className="flex items-center gap-3">

          {/* Посилання на нову сторінку (ховається на зовсім маленьких екранах, щоб не перевантажувати шапку) */}
          <a
            href="/proektuyu-zaraz"
            className="hidden sm:inline-flex px-4 py-2 rounded-xl text-sm font-medium text-zinc-600 hover:text-black hover:bg-zinc-100 transition no-underline"
          >
            Проєктую зараз
          </a>

          <a
            href="https://t.me/D_nssssss"
            target="_blank"
            rel="noreferrer noopener"
            className="px-4 py-2 rounded-xl border border-zinc-300 text-sm text-zinc-700 hover:bg-zinc-100 transition no-underline"
          >
            Telegram
          </a>

          <a
            href="https://wa.me/380676059990"
            target="_blank"
            rel="noreferrer noopener"
            className="px-4 py-2 rounded-xl bg-black text-white text-sm hover:bg-zinc-800 transition no-underline"
          >
            WhatsApp
          </a>

        </div>

      </div>

    </header>
  )
}
