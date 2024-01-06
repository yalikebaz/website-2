import { Roboto_Mono } from 'next/font/google'
import './globals.css'
 
const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-mono',
})
 
export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${roboto_mono.variable} font-mono`}>
      <body>{children}</body>
    </html>
  )
}
