"use client"
import Footer from '@/app/Components/Footer'
import Navbar from '@/app/Components/Navbar'
import React, { useState } from 'react'
import Page1 from '@/app/Components/po_pages/Page1'
import Page2 from '@/app/Components/po_pages/Page2'
import Page3 from '@/app/Components/po_pages/Page3'

const Page = () => {
    const [page,setPage] = useState(1)

    const HandleChange = (num)=>{
            setPage(num)
    }
  return (
    <>
    <Navbar />
    <div className="container px-6 md:pt-14 mx-auto flex md:justify-center">
    <div className="-mx-2 md:items-center md:flex mt-4 w-full justify-center">
        <div className="flex flex-col gap-2 px-2 md:mt-4 w-[60%]">
          <div className='flex md:flex-row flex-col w-full justify-around md:items-center gap-2'>

          <div className='flex justify-center items-center gap-1 w-full cursor-pointer' onClick={()=>HandleChange(1)}>
          <input type="radio" value="confidentialite" id='conf' name='subject' className="block px-0 py-2 text-gray-700 placeholder-gray-400 bg-white border-b border-gray-200 focus:border-[#FE4900] focus:ring-[#FE4900] focus:outline-none focus:ring focus:ring-opacity-40" />
          <label htmlFor='conf' className="block w-full text-sm text-gray-600 ">Politique de confidentialité</label>
          </div>
          <div className='flex justify-center items-center gap-2 w-full' onClick={()=>HandleChange(2)}>
          <input type="radio" value="service" id='service' name='subject' className="block px-0 py-2 text-gray-700 placeholder-gray-400 bg-white border-b border-gray-200 focus:border-[#FE4900] focus:ring-[#FE4900] focus:outline-none focus:ring focus:ring-opacity-40" />
          <label htmlFor='service' className="block w-full text-sm text-gray-600 ">Conditions de service</label>
          </div>
          <div className='flex justify-center items-center gap-1 w-full cursor-pointer' onClick={()=>HandleChange(3)}>
          <input type="radio" value="cookies" id='cookies' name='subject' className="block px-0 py-2 text-gray-700 placeholder-gray-400 bg-white border-b border-gray-200 focus:border-[#FE4900] focus:ring-[#FE4900] focus:outline-none focus:ring focus:ring-opacity-40" />
          <label htmlFor='cookies' className="block w-full text-sm text-gray-600 ">Politique en matière de cookies </label>
          </div>
          </div>

        </div>
        
        
      </div>
    </div>
    <div>
        {page==1 ?<Page1/>:page==2?<Page2/>:<Page3/>}
    </div>
    <Footer/>
    </>
  )
}

export default Page