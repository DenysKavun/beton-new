import './globals.css'
import { Jura } from 'next/font/google'

const jura = Jura({
  subsets: ['latin', 'cyrillic'],
  weight: ['300', '400', '500', '600', '700'],
})

export const metadata = {
  title: 'Інженер-конструктор | SCAD | КМ КЖ КЗ',
  description:
    'Проєктування будівельних конструкцій. Метал, залізобетон, SCAD розрахунки, фундаменти, реконструкції.',
  icons: {
    icon: '/favicon.ico', // Путь к файлу в папке public
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="uk">
      <body className={jura.className}>
        {children}
      </body>
    </html>
  )
}
