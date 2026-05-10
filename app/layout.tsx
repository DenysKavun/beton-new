import './globals.css'
import { Jura } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'

const jura = Jura({
  subsets: ['latin', 'cyrillic'],
  weight: ['300', '400', '500', '600', '700'],
})

export const metadata = {
  title: 'Beton Monster | Інженер-конструктор | SCAD | КМ КЖ КЗ',
  description:
    'Проєктування будівельних конструкцій. Метал, залізобетон, SCAD розрахунки, фундаменти, реконструкції. 18+ років досвіду.',
  icons: {
    // Путь /favicon.ico автоматически ищет файл в папке public
    icon: [
      { url: '/favicon.ico?v=1' }, 
      { url: '/favicon.ico?v=1', sizes: '32x32', type: 'image/x-icon' }
    ],
    shortcut: '/favicon.ico?v=1',
    apple: '/favicon.ico?v=1', // Для иконок на рабочих столах iPhone
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="uk">
      <body className={`${jura.className} bg-white text-zinc-900 antialiased`}>
  <div className="flex flex-col items-center min-h-screen w-full">
    {children}
  </div>

  <Analytics />
</body>
    </html>
  )
}
