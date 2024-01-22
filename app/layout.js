import { Roboto_Mono } from 'next/font/google'
import { Comfortaa } from 'next/font/google'
import './globals.css'

const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-mono',
})

const party = Comfortaa({
  subsets: ['latin'],
  weight: '700',
  display: 'swap',
  variable: '--font-party',
})

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${roboto_mono.variable} ${party.variable}`}>
      <title>Shahbaz Siddiqui</title>
      <body>{children}</body>
    </html>
  )
}
