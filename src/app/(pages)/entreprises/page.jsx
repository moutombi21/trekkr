import Footer from '@/app/Components/Footer'
import MobileNavbar from '@/app/Components/MobileNavbar'
import Navbar from '@/app/Components/Navbar'
import React from 'react'

const Page = () => {
  return (
    <>
    <MobileNavbar/>
    <Navbar/>
    <header className="bg-white">
  <div className="container md:px-20 px-8 py-16 mx-auto">
    <div className="items-center lg:flex">
      <div className="w-full lg:w-1/2">
        <div className="lg:max-w-xl">
          <h1 className="text-3xl uppercase font-semibold text-black lg:text-6xl">Rejoindnez la plus grande communauté active avec trekkr</h1>
          

        </div>
         <div className=" pt-10 items-center space-y-4 sm:flex sm:space-y-0 px-3">
  <a href="#" className="w-full sm:w-auto flex bg-[#FE4900] hover:bg-gray-700 focus:ring-4 text-white rounded-lg items-center justify-center px-4 py-2.5 focus:ring-gray-700 ">
    
    <div className="text-left">
      <div className="mb-1 text-xs">Commencez</div>
    </div>
  </a>
  
</div>
      </div>
      <div className="md:flex hidden items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
        <img className="w-full h-full lg:max-w-3xl" src="/main_mobile.png" alt="Catalogue-pana.svg" />
      </div>
    </div>
  </div>
</header>
    <section className="bg-white">
  <div className="container md:px-20 px-8 md:py-16 py-8 mx-auto">
    <div className="items-center lg:flex">
    <div className="flex items-center px-6 md:px-0 justify-start w-full mt-6 lg:mt-0 lg:w-1/2">
        <img className="md:w-2/3 lg:max-w-full" src="/iPhone16.png" alt="Catalogue-pana.svg" />
      </div>
      <div className="w-full lg:w-2/3">
        <div className="lg:max-w-full">
          <h1 className="text-2xl font-semibold text-[#FE4900] lg:text-3xl">Construirez une communauté de  sportif</h1>
          <p className="mt-3 text-black">Etablissez des liens solides avec vos fans privilégié et suscitez la curiosité des nouveaux adeptes. La création d’un club offre une opportunité exceptionnelles pour élargir votre visibilité et engager une conversation vibrante sur TREKKR. Explorez comment cette démarche peut enrichir votre expérience sur la plateforme, en vous ouvrant les portes à une multitude de possibilités passionnantes à découvrir.</p>
          <button className="w-full px-1 py-2 mt-6 text-sm tracking-wider underline uppercase transition-colors duration-300 transform text-[#FE4900] rounded-lg lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500">En savoir plus</button>
        </div>
      </div>
    </div>
  </div>
</section>
<section className="bg-white">
  <div className="container md:px-20 px-8 py-16 mx-auto">
    <div className="items-center flex md:flex-row flex-col-reverse">
    <div className="w-full lg:w-2/3">
        <div className="lg:max-w-full">
          <h1 className="text-2xl font-semibold text-[#FE4900] lg:text-3xl">Sponsor d’inspiration active</h1>
          <p className="mt-3 text-black">Les publicités traditionnelles ne suffisent plus à inspirer les athlètes à vivre leur passion. Stimulez de la motivation et des actions qui renforce votre marque.</p>
          <button className="w-full px-1 py-2 mt-6 text-sm tracking-wider underline uppercase transition-colors duration-300 transform text-[#FE4900] rounded-lg lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500">En savoir plus</button>
        </div>
      </div>
    <div className="flex items-center px-6 md:px-0 justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
        <img className="md:w-2/3 lg:max-w-full" src="/iPhone16.png" alt="Catalogue-pana.svg" />
      </div>
      
    </div>
  </div>
</section>
    <Footer/>
    </>
  )
}

export default Page