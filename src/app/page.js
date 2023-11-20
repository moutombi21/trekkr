"use client"
import { useState } from 'react'
import AvailableSoon from './Components/AvailableSoon'
import Brands from './Components/Brands'
import Faqs from './Components/Faqs'
import Footer from './Components/Footer'
import MobileNavbar from './Components/MobileNavbar'
import Navbar from './Components/Navbar'

export default function Home() {
  const [open,setOpen] = useState(false)
  return (
    <div>
      <AvailableSoon open={open} ChangeModal={setOpen}/>
      <MobileNavbar/>
    <div className=' bg-cover bg-no-repeat md:bg-right bg-center' style={{backgroundImage: 'url("/trekker_main.png")'}}>
    
    <Navbar/>
    <header className="bg-tranparent">
  <div className="container md:px-20 px-8 py-16 mx-auto">
    <div className="items-center lg:flex">
      <div className="w-full lg:w-1/2">
        <div className="lg:max-w-xl">
          <h1 className="md:text-3xl text-4xl md:leading-normal leading-tight text-center md:text-left uppercase font-semibold text-white lg:text-6xl">Osez l&lsquo;Aventure, Sans Limites</h1>
          <p className="mt-3 text-gray-100 text-center md:text-left">L&lsquo;aventure sans limites vous attend avec Trekkr. Osez sortir des sentiers battus, atteignez des sommets insoupçonnés, et explorez des horizons sans fin. Notre application vous offre bien plus qu&lsquo;un simple guide, elle est votre compagnon pour chaque aventure en plein air.</p>
         <div className=" py-3 items-center md:space-y-0 gap-1 md:gap-0 flex sm:space-y-0 md:space-x-4">
  <div onClick={()=>setOpen(true)} href="#" className="w-full cursor-pointer sm:w-auto flex bg-black hover:bg-gray-700 focus:ring-4 text-white text-xs md:text-base rounded-lg items-center justify-center px-4 py-2.5 focus:ring-gray-700">
    <svg className="mr-3 md:w-7 w-4 md:h-7 h-6" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="apple" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
      <path fill="currentColor" d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z">
      </path>
    </svg>
    <div className="text-left">
      <div className="mb-1 text-xs">Download on the</div>
      <div className="-mt-1 font-sans text-sm font-semibold">Mac App Store</div>
    </div>
  </div>
  <div onClick={()=>setOpen(true)} className="w-full cursor-pointer sm:w-auto flex bg-black hover:bg-gray-700 focus:ring-4 text-white rounded-lg items-center justify-center px-4 py-2.5 focus:ring-gray-700">
    <svg className="mr-3 md:w-7 w-4 md:h-7 h-6" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google-play" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path fill="currentColor" d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z">
      </path>
    </svg>
    <div className="text-left">
      <div className="mb-1 text-xs">Get in on</div>
      <div className="-mt-1 font-sans text-sm font-semibold">Google Play</div>
    </div>
  </div>
</div>

        </div>
      </div>
      <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
        <img className="w-full h-full lg:max-w-3xl" src="/main_mobile.png" alt="Catalogue-pana.svg" />
      </div>
    </div>
  </div>
</header>
</div>
<Brands />
<div className='w-full h-full' style={{backgroundImage:"url('./bg2.png')"}}>

<section className="bg-transparent">
  <div className="container md:px-20 px-8 py-16 mx-auto">
    <div className="items-center lg:flex">
    <div className="flex items-center md:justify-start justify-center w-full mt-6 lg:mt-0 lg:w-1/3">
        <img className="w-2/3 lg:max-w-full" src="/t1.png" alt="Catalogue-pana.svg" />
      </div>
      <div className="w-full md:py-0 py-8 lg:w-2/3 flex justify-center">
        <div className="lg:max-w-full w-full md:block flex flex-col justify-center items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 pb-4 md:mb-0">
      <img src='/trekkr.png' />
    </a>
          <h1 className="md:text-3xl text-xl font-semibold text-gray-800 lg:text-3xl md:text-left text-center">Guidage Précis en Temps Réel : Votre Aventure, Votre Contrôle</h1>
          <p className="mt-3 text-gray-400 pl-2">Avec Trekkr, votre sécurité est notre priorité absolue. Notre technologie de guidage en temps réel vous assure une tranquillité d&apos;esprit totale à chaque étape de votre aventure en plein air. Téléchargez Trekkr dès maintenant pour explorer en toute confiance.</p>
          <div>

          <button className="w-full px-5 py-2 mt-6 text-sm tracking-wider text-white uppercase transition-colors duration-300 transform bg-[#FE4900] rounded-lg lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500">C’est partie</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<section className="bg-transparent">
  <div className="container md:px-20 px-8 md:py-16 py-2 mx-auto">
    <div className="items-center flex md:flex-row flex-col-reverse">
    <div className="w-full md:py-0 py-8 lg:w-2/3 flex justify-center">
        <div className="lg:max-w-full w-full md:block flex flex-col justify-center items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 pb-4 md:mb-0">
      <img src='/trekkr.png' />
    </a>
          <h1 className="md:text-3xl text-xl font-semibold text-gray-800 lg:text-3xl md:text-left text-center">Alertes Instantanées : Restez Informé des Conditions Changeantes</h1>
          <p className="mt-3 text-gray-400 pl-2">Ne laissez jamais les conditions météorologiques vous surprendre. Les alertes instantanées de Trekkr vous tiennent informé des changements en temps réel, vous permettant ainsi de planifier et de prévoir en conséquence. Téléchargez Trekkr pour rester toujours un pas en avant.</p>
         <div>
          <button className="w-full px-5 py-2 mt-6 text-sm tracking-wider text-white uppercase transition-colors duration-300 transform bg-[#FE4900] rounded-lg lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500">C’est partie</button>
         </div>
        </div>
      </div>
    <div className="flex items-center md:justify-start justify-center w-full mt-6 lg:mt-0 lg:w-1/3">
        <img className="w-2/3 lg:max-w-2xl" src="/t2.png" alt="Catalogue-pana.svg" />
      </div>
      
    </div>
  </div>
</section>
<section className="bg-transparent">
  <div className="container md:px-20 px-8 py-16 mx-auto">
    <div className="items-center lg:flex">
    <div className="flex items-center md:justify-start justify-center w-full mt-6 lg:mt-0 lg:w-1/3">
        <img className="w-2/3 lg:max-w-2xl" src="t3.png" alt="Catalogue-pana.svg" />
      </div>
      <div className="w-full md:py-0 py-8 lg:w-2/3 flex justify-center">
        <div className="lg:max-w-full w-full md:block flex flex-col justify-center items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 pb-4 md:mb-0">
      <img src='/trekkr.png' />
    </a>
          <h1 className="md:text-3xl text-xl font-semibold text-gray-800 lg:text-3xl md:text-left text-center">Partagez Votre Passion : Connectez-vous avec des Esprits Similaires</h1>
          <p className="mt-3 text-gray-400 pl-2">Téléchargez Trekkr et rejoignez une communauté mondiale d&lsquo;aventuriers passionnés comme vous. Partagez vos récits, découvrez de nouveaux itinéraires passionnants, et trouvez des amis qui partagent votre amour de l&lsquo;exploration en plein air. Rejoignez-nous dès maintenant et créez des souvenirs ensemble.</p>
         <div>
          <button className="w-full px-5 py-2 mt-6 text-sm tracking-wider text-white uppercase transition-colors duration-300 transform bg-[#FE4900] rounded-lg lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500">C&lsquo;est partie</button>
         </div>
        </div>
      </div>
    </div>
  </div>
</section>
</div>

<section className="bg-[#FEE8AC]">
  <div className="container md:px-20 px-6 pt-16 mx-auto">
    <div className="items-center lg:flex">
      <div className="w-full lg:w-2/3">
        <div className="lg:max-w-full w-full md:block flex flex-col justify-center items-center">
          <h1 className="md:text-3xl text-5xl font-semibold text-black lg:text-4xl">Téléchargez Trekkr Aujourd&apos;hui et Transformez Vos Aventures !</h1>
          <p className="mt-3 text-black">Explorez le monde en toute confiance avec Trekkr, votre compagnon d&apos;aventure ultime. Recevez des alertes en temps réel, partagez vos exploits, et connectez-vous à une communauté passionnée de plein air. Transformez chaque sortie en une aventure mémorable. Téléchargez Trekkr dès maintenant et libérez l&apos;aventurier qui sommeille en vous.</p>
          <div>

          <button className="w-full px-5 py-2 mt-6 text-sm tracking-wider text-white uppercase transition-colors duration-300 transform rounded-lg lg:w-auto bg-[#FE4900] focus:outline-none focus:bg-blue-500">Télécharger Trekkr</button>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/3">
        <img className="w-full h-full lg:max-w-2xl" src="/t4.png" alt="Catalogue-pana.svg" />
      </div>
    </div>
  </div>
</section>
<Faqs/>
<Footer ChangeModal={setOpen}/>
    </div>
  )
}