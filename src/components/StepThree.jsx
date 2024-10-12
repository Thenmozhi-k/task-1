import React from 'react'
import first from '../assets/updated/bg.png';
import buk from '../assets/updated/buk.png';
import step from '../assets/updated/step.png'
import arrow from '../assets/updated/arrow.png'
import step2 from '../assets/updated/step2.png'

const StepThree = ({ onNavigate, onBack }) => {
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
        <div className=' mt-48'>
          <div className='flex'>
          <div className='flex ml-[-15px]'>
              <div className='text-white flex '>
                 <img src={step2} alt="" className='w-7 h-7'/>
                 <p className='text-xs mt-2 ml-3'>Step 1</p>      
              </div>

              <div className=' bg-[#CA3F2A] h-[0.5px] w-[90px] mt-4 ml-3'></div>
          </div>

          <div className='flex ml-2'>
              <div className='text-white flex '>
                 <img src={step2} alt="" className='w-7 h-7'/>
                 <p className='text-xs mt-2 ml-3'>Step 2</p>      
              </div>

              <div className=' bg-[#CA3F2A] h-[0.5px] w-[90px] mt-4 ml-3'></div>
          </div>

          <div className='flex ml-2'>
              <div className='text-white flex '>
                 <img src={step} alt="" className='w-7 h-7'/>
                 <p className='text-xs mt-2 ml-3 '>Step 3</p>      
              </div>

              {/* <div className=' bg-[#CA3F2A] h-[0.5px] w-[80px] mt-4 ml-2'></div> */}
          </div>
          </div>

          {/* form */}
          <div className="flex flex-col items-center  mt-10 "> 
         <p className='text-center text-white text-sm font-light mb-5'>You’re purchasing Superior room at the  Park Plaza <br /> Westminster Bridge London  Park Plaza Westminster <br /> Bridge London  from 24-06-2024 to 24-06-2024 <br /> for USDC 447.90 for 2 guests.</p>
          <div className='flex w-full items-center justify-center mt-7 '>
              <img src={arrow} alt="" className='w-9 h-9 mr-4 cursor-pointer' onClick={onBack}/>
          <button className="bg-[#CA3F2A] text-white px-[110px] py-1 rounded-md text-lg border-[#FFE3E3] border border-opacity-50   "
           onClick={onNavigate}>
            Next
          </button>
          </div>
          
        </div>
        </div>
       
      </div>
    </div>
  </div>
  )
}

export default StepThree