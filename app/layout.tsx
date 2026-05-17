import './globals.css'
import { Jura } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import Script from 'next/script' // Імпортуємо оптимізований компонент для скриптів

const jura = Jura({
  subsets: ['latin', 'cyrillic'],
  weight: ['300', '400', '500', '600', '700'],
})

export const metadata = {
  title: 'Beton Monster | Інженер-конструктор | SCAD | КМ КЖ КЗ',
  description:
    'Проєктування будівельних </style>конструкцій. Метал, залізобетон, SCAD розрахунки, фундаменти, реконструкції. 18+ років досвіду.',
  icons: {
    // Используем v=2, чтобы окончательно пробить кэш старого фавикона
    icon: [
      { url: '/favicon.ico?v=2' }, 
      { url: '/favicon.ico?v=2', sizes: '32x32', type: 'image/x-icon' }
    ],
    shortcut: '/favicon.ico?v=2',
    apple: '/favicon.ico?v=2',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="uk">
      <head>
        {/* Перша частина коду Google тегу: підключення зовнішньої бібліотеки */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-QPY2QPZYC5"
          strategy="afterInteractive"
        />
        {/* Друга частина коду: ініціалізація відстеження */}
        <Script id="google-ads-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-QPY2QPZYC5');
          `}
        </Script>
      </head>
      <body className={`${jura.className} bg-white text-zinc-900 antialiased`}>
        <div className="flex flex-col items-center min-h-screen w-full">
          {children}
        </div>
        
        {/* Аналитика будет собирать данные о посетителях */}
        <Analytics />
      </body>
    </html>
  )
}
