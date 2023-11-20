import React from 'react'

const Brands = () => {
      
  return (
   <section className="bg-[#F3F5F6]">
  <div className="container flex items-center justify-center px-6 py-10 mx-auto">
    <div className="grid grid-cols-2 gap-12 md:grid-cols-4 lg:grid-cols-4">
      <div className="flex items-center justify-center col-span-1 md:col-span-2 lg:col-span-1">
        <img src='/nike.png' alt />
      </div>
      <div className="flex items-center justify-center col-span-1 md:col-span-2 lg:col-span-1">
      <img src='/adidas.png' alt />

      </div>
      <div className="flex items-center justify-center col-span-1 md:col-span-2 lg:col-span-1">
      <img src='/asics.png' alt />

      </div>
      <div className="flex items-center justify-center col-span-1 md:col-span-3 lg:col-span-1">
      <img src='/garmin.png' alt />

      </div>
      
    </div>
  </div>
</section>

  )
}

export default Brands