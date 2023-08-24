import './globals.css'
import { Inter } from 'next/font/google'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app'
}

export default function RootLayout ({ children }) {
    return (
        <html lang='en'>
            <body className={inter.className}>
                <div className='pt-12 antialiased bg-blue-50'>
                    <div className='px-8 mx-auto'>
                        <Nav />
                    </div>
                    <div className='mt-4'>{children}</div>
                    <div>
                        <Footer />
                    </div>
                </div>
            </body>
        </html>
    )
}
