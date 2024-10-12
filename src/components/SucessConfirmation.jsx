import React from 'react'
import first from '../assets/updated/bg.png';
import buk from '../assets/updated/buk.png';
import tick from '../assets/updated/tick.png'

const SucessConfirmation = () => {
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
         <img src={tick} alt="" className='w-16 h-16 ' />
       
         <h2 className='text-white text-lg'>Congratulations! <br />
         You own this booking now.</h2>

         <div className='flex flex-col text-center '>
            <p className='text-[#CA3F2A] text-xs'> Transaction id: </p>
           <p className='text-[10px] text-[#CACACA]'>0xbb9db37ae6a0b1cf4d09932b269255dbcc961228e572cc3ee526a397268aa243</p>
         </div>

         <button className="bg-[#CA3F2A] text-white px-[40px] mt-8 py-1 rounded-md text-lg border-[#FFE3E3] border border-opacity-50   "
          >
           Check my Bookings
          </button>

         
        </div>
       
      </div>
    </div>
  </div>
  )
}

export default SucessConfirmation