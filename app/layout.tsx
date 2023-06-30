import './globals.css'
import Link from 'next/link'

export const metadata = {
  title: 'NyanDoggo.com',
  description: 'Worst site on the web',
}

export default function RootLayout({ children, }: { children: React.ReactNode }) {


  return (
    <html lang="en">
      <body >
        <div className="flex flex-col min-h-screen">
          <header className="w-full flex mt-4 px-2">
            <Link href="/">
              <div className='border-b-2 border-green-200 border-opacity-0 hover:border-opacity-100 transition duration-700 pr-4'>
                <h1 className="text-xl font-bold text-gray-600">
                  &gt;Nyandoggo.com
                </h1>
                <p className='text-gray-700'>
                  Todo list: ... yeah
                </p>
              </div>
            </Link>
          </header>


          <main className="mb-auto w-full flex flex-col px-2">
            {children}
          </main>


          <footer className="flex px-2 mb-4">
            <a className='text-right w-full opacity-50'
              href="mailto:uwu@nyandoggo.com">contact: uwu@nyandoggo.com</a>
          </footer>
        </div>
      </body>
    </html>
  )
}
