import React from 'react'

function Delivery() {
  return (
    <>

    <div className='w-full '>
        <h3 className=' text-[#fbc531] font-bold text-2xl text-center '>Quick Delivery App</h3>
        <div className=' grid grid-cols-2 w-[70%] mx-auto my-10 gap-4  '>
            <img src="https://img.freepik.com/free-vector/way-concept-illustration_114360-1191.jpg?t=st=1710375397~exp=1710378997~hmac=5fdff1ef482dee5a54d97e622ce37bb4d0ea614d6973fcb7dd66ca0b64013382&w=1060" alt="" className='w-[550px]' />
            <div className='flex flex-col justify-center '>
                <p className='font-bold text-[green] text-2xl'>Get the App</p>
                <h2 className=' md:text-2xl lg:text-3xl py-2 font-bold'>Fastest Food Delivey in Pakistan</h2>
                <button className=' bg-black  md:w-[100px] lg:w-[150px] text-white rounded-md my-6 py-[15px] text-[20px] hover:text-[#fbc531]'>Get Started</button>
            </div>
        </div>
    </div>
       
    </>
  )
}

export default Delivery