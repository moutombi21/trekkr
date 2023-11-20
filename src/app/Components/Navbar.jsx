import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <header className="text-white bg-white body-font hidden md:block">
  <div className="container px-20 mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <Link href='/' className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <img src='/trekkr.png' />
    </Link>
    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <Link href="/" className="mr-5 text-gray-900">Home</Link>
      <Link href="/entreprises" className="mr-5 text-gray-900">Entreprises</Link>
      <Link href="/apropos" className="mr-5 text-gray-900">Á propos</Link>
      <Link href="/contact" className="mr-5 text-gray-900">Contact</Link>
    </nav>
    <Link href='/register' className="inline-flex text-white items-center bg-[#FE4900] border-0 py-2 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">S’inscrire
      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7" />
      </svg>
    </Link>
  </div>
</header>

  )
}

export default Navbar