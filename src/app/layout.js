import Navbar from '@/components/navbar/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/footer/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'TechTalk Hub',
  description: 'The best TechTalk Hub blog app!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className='container'>
            <div className='wrapper'>
                <Navbar/>
                {children}
                <Footer/>
            </div>
        </main>
      </body>
    </html>
  )
}
