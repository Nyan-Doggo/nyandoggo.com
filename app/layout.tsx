import BurgerMenu from '@/components/burgerMenu'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'NyanDoggo.com',
  description: 'Worst site on the web',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <div className="flex flex-col h-screen justify-between p-4 md:p-12">
      <header className="w-full flex">

        <h1 className="text-center w-full text-shadow-white">
          Nyandoggo.com
        </h1>

        <BurgerMenu />

      </header>


      <main className="mb-auto w-full flex flex-col">
      {children}
      </main>


      <footer className="flex">
        <img src="/agbg.png" className="object-contain absolute bottom-0 max-w-[50vw] max-h-[40vh] filter blur-sm opacity-25 -z-10" />

        <div className="w-full">
          <p className="text-mine-shaft-600 text-right">
            <a href="mailto:uwu@nyandoggo.com">uwu@nyandoggo.com</a>
          </p>
        </div>
      </footer>

    </div>

        
      </body>
    </html>
  )
}