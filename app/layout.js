import { Roboto_Mono, Comfortaa, Inter } from 'next/font/google'
import './globals.css'

const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-mono',
})

const party = Comfortaa({
  subsets: ['latin'],
  weight: '700',
  display: 'swap',
  variable: '--font-party',
})

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata = {
  description: "Hi, I'm Shahbaz. I build web applications in React and Go.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${roboto_mono.variable} ${party.variable} ${inter.variable}`}>
      <title>Shahbaz Siddiqui</title>
      <body>{children}</body>
    </html>
  )
}
