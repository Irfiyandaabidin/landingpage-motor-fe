import Provider from './Provider'
import './css/style.css'

import { Inter } from 'next/font/google'
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
})

export const metadata = {
  title: 'Metro Motor',
  description: 'E commerce motorcycle',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-inter antialiased bg-white text-gray-900 tracking-tight`}>
        <Provider>
          <div className="flex flex-col min-h-screen overflow-hidden supports-[overflow:clip]:overflow-clip">
            {children}
          </div>
        </Provider>
      </body>
    </html>
  )
}
