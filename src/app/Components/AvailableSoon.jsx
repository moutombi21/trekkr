import React from 'react'

const AvailableSoon = ({open,ChangeModal}) => {
  return (
    <>
{open && 
    <div className="relative flex justify-center">
  
  <div className="fixed inset-0 z-10 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
    <div className="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
      <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">​</span>
      <div className="relative inline-block p-4 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl sm:max-w-sm rounded-xl sm:my-8 sm:w-full sm:p-6">
        <div className="flex items-center justify-center mx-auto">
          <img className="h-full rounded-lg" src="/main_mobile.png" alt />
        </div>
        <div className="mt-5 text-center">
          <h3 className="text-2xl font-medium text-gray-800 " id="modal-title">
           Application Available Soon
          </h3>
          <p className="mt-2 text-gray-500 ">
            We are in Under Construction 🏗️
          </p>
        </div>
        {/* <div className="flex items-center justify-between w-full mt-5 gap-x-2">
          <input type="text" defaultValue="https://merakiui.com/project" className="flex-1 block h-10 px-4 text-sm text-gray-700 bg-white border border-gray-200 rounded-md bg-gray-900 text-gray-300 border-gray-700 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
          <button className="rounded-md hidden sm:block p-1.5 text-gray-700 bg-white border border-gray-200 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring transition-colors duration-300 hover:text-blue-500 dark:hover:text-blue-500">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
          </button>
        </div> */}
        <div className="mt-4 sm:flex sm:items-center sm:justify-between sm:mt-6 sm:-mx-2">
          
          <button className="px-4 sm:mx-2 w-full py-2.5 mt-3 sm:mt-0 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#FE4900] rounded-md hover:bg-[#FE4900] focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40" onClick={()=>ChangeModal(false)}>
            Check Back Later
          </button>
        </div>
      </div>
    </div>
  </div>
</div>
}
    </>



  )
}

export default AvailableSoon