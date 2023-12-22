import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'E.V.C.I',
  description: 'Evangelical Victory Church International started in the Year 1987 and was incorporated in 2004. It gained the title International from the many branches that have and are being formed from it for the spread of the Gospel to all nations[Luke 9: 1-5 | Mark 6: 7-12] ',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
