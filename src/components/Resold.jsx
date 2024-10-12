import React from 'react'
import first from '../assets/updated/bg.png';
import buk from '../assets/updated/buk.png';
import oops from '../assets/updated/oops.png'

const Resold = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-black">
    <div className="relative w-[500px] h-[500px] bg-[#161616] shadow-lg p-2 flex flex-col items-center">
      <div
        className="relative shadow-lg  p-6 flex flex-col justify-between"
        style={{
          backgroundImage: `url(${first})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          width: '485px',
          height: '230px',
        }}
      >
        <div className='ml-[330px]'>
          <img src={buk} alt="" className='w-[70px] ml-12' />
          
        </div>

        {/* content */}
        <div className=' mt-48 items-center justify-center flex flex-col text-center'>
         <img src={oops} alt="" className='w-16 h-16 ' />
       
         <h2 className='text-white text-lg mt-5'>Oops! Booking resold. <br />
         Check our marketplace for more deals!</h2>

         

         <button className="bg-[#CA3F2A] text-white px-[80px] mt-12 py-1 rounded-md text-lg border-[#FFE3E3] border border-opacity-50   "
          >
          More Deals
          </button>

         
        </div>
       
      </div>
    </div>
  </div>
  )
}

export default Resold