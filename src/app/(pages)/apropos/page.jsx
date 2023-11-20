import Footer from '@/app/Components/Footer'
import MobileNavbar from '@/app/Components/MobileNavbar'
import Navbar from '@/app/Components/Navbar'
import React from 'react'

const Page = () => {
  return (
    <>
    <MobileNavbar/>
    <Navbar/>
    <section className="bg-white" style={{backgroundImage:"url('/bg.png')"}}>
  <div className="h-auto" >
    <div className="container px-6 pt-14 mx-auto" >
      <h1 className="text-lg font-semibold text-center text-[#FE4900] capitalize lg:text-3xl ">~   Á Propos   ~</h1>
      <div className="flex justify-center mx-auto mt-6">
        
      </div>
      <h2 className="max-w-3xl text-5xl font-extralight mx-auto mt-6 text-center text-[#1C1817]">
      L&lsquo;Équipe Qui Fait de Vos Rêves d&lsquo;Aventure une Réalité
      </h2>
      <p className="max-w-2xl font-extralight text-lg mx-auto mt-6 text-center text-[#1C1817] ">
      Nous aimons ce que nous faisons et nous le faisons avec passion. 
      </p>
    </div>
  </div>
  <div className="container px-6 py-1 mx-auto">
    <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-3">
      <div className="flex flex-col items-center p-4 sm:p-6 rounded-2xl">
        <img className="object-cover w-full rounded-xl aspect-square" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt />
        <div className='bg-[#FEE8AC] max-w-lg w-[80%] border-[#FE4900] rounded shadow-lg -mt-10 border-t-8 flex flex-col items-center p-4'>
        <h1 className="mt-4 leading-tight text-sm font-bold text-gray-700 capitalize">Charles Assigui</h1>

        <p className=" text-sm text-gray-500 capitalize">Founding Partner</p>
        
        </div>
      </div>
      <div className="flex flex-col items-center p-4 sm:p-6 rounded-2xl">
        <img className="object-cover w-full rounded-xl aspect-square" src="https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" alt />
        <div className='bg-[#FEE8AC] max-w-lg w-[80%] border-[#FE4900] rounded shadow-lg -mt-10 border-t-8 flex flex-col items-center p-4'>
        <h1 className="mt-4 leading-tight text-sm font-bold text-gray-700 capitalize">Loïc Moutombi</h1>

        <p className=" text-sm text-gray-500 capitalize">Founding Partner</p>
        
        </div>
      </div>
      <div className="flex flex-col items-center p-4 sm:p-6 rounded-2xl">
        <img className="object-cover w-full rounded-xl aspect-square" src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt />
        <div className='bg-[#FEE8AC] max-w-lg w-[80%] border-[#FE4900] rounded shadow-lg -mt-10 border-t-8 flex flex-col items-center p-4'>

        <h1 className="mt-4 leading-tight text-sm font-bold text-gray-700 capitalize">Kévin Royer</h1>
        <p className=" text-sm text-gray-500 capitalize">Chief Design Officer</p>
        
        </div>
      </div>
    </div>
  </div>
</section>

    <Footer/>
    </>
  )
}

export default Page