"use client"
import Link from 'next/link'
import React,{useState} from 'react'
import Drawer from 'react-modern-drawer'

//import styles 👇
import 'react-modern-drawer/dist/index.css'

const MobileNavbar = ({event}) => {
    const [isOpen, setIsOpen] = useState(false)
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
    }
return (
  <header className='md:hidden block'>
    <div className="flex items-center justify-between px-4 py-8 sticky top-0 z-40">
      <div className="flex items-center justify-between w-full max-w-7xl mx-auto px-4">
        <Link href="/" className="text-black font-bold text-xl w-24">
          <img src='/trekkr.png' alt='logo' />
        
        </Link>
        <div className="block lg:hidden text-[black]">
          <button onClick={toggleDrawer} className="flex items-center px-3 py-2 rounded border-black hover:text-black text-black hover:border-red-600">
            <svg className="fill-current h-6 w-6 text-black" fill='currentColor' viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
          </button>
        </div>
      </div>
      
    </div>

    <Drawer
                open={isOpen}
                onClose={toggleDrawer}
                direction='right'
                className='!h-full !bg-[white] overflow-hidden'
  >
  <div className="z-40 p-4 h-screen fixed overflow-y-auto w-full text-white">
    <button onClick={toggleDrawer} type="button" className="text-black bg-transparent rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center hover:bg-gray-600 hover:text-white">
      <svg aria-hidden="true" className="w-15 h-5 fill-current " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
      <span className="sr-only">Close menu</span>
    </button>
    <div className="py-2 gap-10 overflow-y-auto flex-col flex justify-start items-center h-full">
      {/* <span className='drop-shadow-md text-slate-200 text-shadow font-extrabold text-4xl'>1erepage</span> */}

      <ul onClick={toggleDrawer} className="space-y-12 font-bold text-center text-xl flex flex-col justify-center">
        <li>
        <Link href="/#" className="mr-9 font-bold hover:text-[#2940D3] text-black">Home</Link>
        </li>
        <li>
        <Link href="/entreprises" className="mr-9 font-bold hover:text-[#2940D3] text-black">Entreprises</Link>
        </li>
        <li>
        <Link href="/apropos" className="mr-9 font-bold hover:text-[#2940D3] text-black">A Propos</Link>
        </li>
        <li>
        <Link href="/contact" className="mr-9 font-bold hover:text-[#2940D3] text-black">Contact</Link>
        </li>
        
      <div className='flex gap-5 items-center justify-center'>
   
    <Link href='/register' onClick={()=>{toggleDrawer()}} className="inline-flex items-center bg-[#FE4900] text-white border-black py-3 px-10 focus:outline-none hover:bg-gray-200 rounded-full text-base mt-4 md:mt-0">S’inscrire
    </Link>
    </div>
      </ul>
    </div>
      <div className='relative bottom-0'>

      <Link href="/contact" className="md:inline-flex text-md font-extrabold text-black items-center hover:bg-white border-0 py-2 px-3 focus:outline-none bg-blackBtn rounded mt-4 md:mt-0 hidden">Contact Us
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                            strokeWidth={2}
                            className="w-4 h-4 ml-1"
                            viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                    </Link>
      </div>
  </div>
  </Drawer>
  </header>
  )
}

export default MobileNavbar