import Footer from '@/app/Components/Footer'
import MobileNavbar from '@/app/Components/MobileNavbar'
import Navbar from '@/app/Components/Navbar'
import React from 'react'

const page = () => {
  return (
    <>
    <MobileNavbar/>
    <Navbar/>
    <section className="bg-white pb-20" style={{backgroundImage:"url('/bg.png')"}}>
  <div className="h-auto" >
    <div className="container px-6 pt-14 mx-auto" >
      
      <h2 className="max-w-3xl text-5xl mx-auto mt-6 text-center text-[#1C1817]">
      Un. Deux. Trois. Trekkr.
      </h2>
      <p className="max-w-2xl font-extralight text-lg mx-auto mt-6 text-center text-[#1C1817] ">
      Votre expérience sur notre site est une priorité et nous avons à cœur d’être transparent avec vous concernant l’usage que nous faisons de vos données personnelles. 
      </p>
    </div>
  </div>
<div className="relative py-1">  
  <div className="relative container m-auto px-6 text-gray-500 md:px-12 xl:px-40">
    <div className="m-auto md:w-8/12 lg:w-6/12 xl:w-6/12">
      <div className="">
        <div className="p-6">
          
          <div className="mt-16 grid space-y-4">
            <button className="group h-12 px-6 border-2 border-gray-300 rounded-md bg-[#F9F8F5] transition duration-300 
 hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100">
              <div className="relative flex items-center space-x-4 justify-center">
                <img src="https://tailus.io/sources/blocks/social/preview/images/google.svg" className="absolute left-0 w-5" alt="google logo" />
                <span className="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">S’inscrire avec Google</span>
              </div>
            </button>
            <button className="group h-12 px-6 border-2 border-gray-300 rounded-md bg-[#F9F8F5] transition duration-300 
 hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100">
              <div className="relative flex items-center space-x-4 justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="absolute left-0 w-5 text-gray-700" viewBox="0 0 16 16">
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                </svg>
                <span className="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">Continue with Github</span>
              </div>
            </button>
            <button className="group h-12 px-6 border-2 border-gray-300 rounded-md bg-[#F9F8F5] transition duration-300 
                               hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100">
              <div className="relative flex items-center space-x-4 justify-center">
                <img src="https://upload.wikimedia.org/wikipedia/en/0/04/Facebook_f_logo_%282021%29.svg" className="absolute left-0 w-5" alt="Facebook logo" />
                <span className="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">S’inscrire avec Facebook</span>
              </div>
            </button>
          </div>
          <div className='pt-10'>
          <hr className="border border-solid border-gray-300" />
            <div className='text-center mx-auto -mt-3.5'>
            <span className=' bg-white'>ou s’inscrire avec une adresse email</span>
            </div>
          
          </div>
         <div className="flex justify-center self-center">
  <div className="py-6 mx-auto w-full ">
    
    <div className="space-y-6">
      <div className>
      <label for="email" class="block font-semibold text-gray-700">Email</label>
        <input className=" w-full text-sm  px-4 py-3 border  border-gray-200 rounded-lg focus:outline-none focus:border-black" type="email" placeholder="Entrer Email" />
      </div>
      <div className="relative">
      <label for="email" class="block font-semibold text-gray-600">Mot de passe</label>
        <input type='password' placeholder="Créer un mot de passe" className="text-sm text-gray-700 px-4 py-3 rounded-lg w-full border border-gray-200 focus:outline-none focus:border-black" />
        <div className="flex items-center justify-center absolute inset-y-0 right-0 top-6 mr-3  text-sm leading-5">
          <svg className="h-4 text-black" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
            <path fill="currentColor" d="M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z">
            </path>
          </svg>
          <svg className="h-4 hidden text-black" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
            <path fill="currentColor" d="M320 400c-75.85 0-137.25-58.71-142.9-133.11L72.2 185.82c-13.79 17.3-26.48 35.59-36.72 55.59a32.35 32.35 0 0 0 0 29.19C89.71 376.41 197.07 448 320 448c26.91 0 52.87-4 77.89-10.46L346 397.39a144.13 144.13 0 0 1-26 2.61zm313.82 58.1l-110.55-85.44a331.25 331.25 0 0 0 81.25-102.07 32.35 32.35 0 0 0 0-29.19C550.29 135.59 442.93 64 320 64a308.15 308.15 0 0 0-147.32 37.7L45.46 3.37A16 16 0 0 0 23 6.18L3.37 31.45A16 16 0 0 0 6.18 53.9l588.36 454.73a16 16 0 0 0 22.46-2.81l19.64-25.27a16 16 0 0 0-2.82-22.45zm-183.72-142l-39.3-30.38A94.75 94.75 0 0 0 416 256a94.76 94.76 0 0 0-121.31-92.21A47.65 47.65 0 0 1 304 192a46.64 46.64 0 0 1-1.54 10l-73.61-56.89A142.31 142.31 0 0 1 320 112a143.92 143.92 0 0 1 144 144c0 21.63-5.29 41.79-13.9 60.11z">
            </path>
          </svg>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="text-sm ml-auto">
          <a href="#" className="text-black hover:text-purple-600">
            Forgot your password?
          </a>
        </div>
      </div>
      <div>
        <button type="submit" className="w-full flex justify-center bg-[#FE4900]  hover:bg-black text-gray-100 p-3  rounded-lg tracking-wide font-semibold  cursor-pointer transition ease-in duration-500">
        S’incrire
        </button>
      </div>
    </div>
   
    </div>
    </div>
    


          <div className="mt-3 space-y-4 text-gray-600 text-center sm:-mb-8">
            <p className="text-xs">En vous inscrivant pour Trekkr, vous êtes d’accord avec les  <a href="/politique" className="underline">conditions de services</a>  et la <a href="/politique" className="underline">politique de confidentialité.</a>.</p>
           
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  </section>
<Footer/>
    </>

  )
}

export default page