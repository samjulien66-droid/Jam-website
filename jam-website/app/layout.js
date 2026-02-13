import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'JAM | Sam Julien',
  description: 'Music, Mission, Movement. Investigating the systems behind addiction and homelessness.',
  keywords: ['music', 'research', 'addiction', 'homelessness', 'investigative', 'Sam Julien'],
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-sky-bg">
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
