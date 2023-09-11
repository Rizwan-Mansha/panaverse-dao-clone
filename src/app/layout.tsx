import Header from '@/layout/Header'
import Footer from '@/layout/Footer'

import './globals.css'




export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {/* Header */}
        <Header />
        {children}
        <Footer/>
        </body>
    </html>
  )
}
