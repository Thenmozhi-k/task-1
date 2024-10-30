import React from 'react'
import first from '../assets/updated/bg.png';
import buk from '../assets/updated/buk.png';
import step from '../assets/updated/step.png'
import arrow from '../assets/updated/arrow.png'
import step2 from '../assets/updated/step2.png'
import { buyRoom } from '../ContractIntegration';


const StepThree = ({ onNavigate, onBack, totalPrice, tokenID }) => {

  const _tokenId = tokenID;

  const handleBuyRoom = async () => {
    if (_tokenId) {
      try {
        await buyRoom(_tokenId);
      } catch (error) {
        console.error("Error executing buyRoom:", error);
      }
    } else {
      console.error("Token ID is not set");
    }
  };

  console.log('====================================');
  console.log(_tokenId);
  console.log('====================================');

  return (
    <div className="flex justify-center items-center h-screen bg-black">
    <div className="relative md:w-[500px] md:h-[500px] sm:h-[350px] sm:w-[350px] bg-[#161616] shadow-lg p-2 flex flex-col items-center">
      <div
        className="relative shadow-lg md:w-[485px] md:h-[230px] sm:h-[160px] sm:w-[335px]  p-6 flex flex-col justify-between"
        style={{
          backgroundImage: `url(${first})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          
        }}
      >
        <div className='md:ml-[330px] sm:ml-[200px]'>
          <img src={buk} alt="" className='md:w-[70px] w-[50px] md:ml-12 sm:ml-[35px]' />
          
        </div>

        {/* content */}
        <div className=' md:mt-48 sm:mt-32'>
          <div className='flex'>
          <div className='flex ml-[-15px]'>
              <div className='text-white flex '>
                 <img src={step2} alt="" className='md:w-7 md:h-7 sm:w-5 sm:h-5'/>
                 <p className='md:text-xs sm:text-[10px] md:mt-2 sm:mt-1 md:ml-3 sm:ml-2'>Step 1</p>      
              </div>

              <div className=' bg-[#CA3F2A] h-[0.5px] md:w-[90px] sm:w-[50px] md:mt-4 sm:mt-3 md:ml-3 sm:ml-2'></div>
          </div>

          <div className='flex ml-2'>
              <div className='text-white flex '>
                 <img src={step2} alt="" className='md:w-7 md:h-7 sm:w-5 sm:h-5'/>
                 <p className='md:text-xs sm:text-[10px] md:mt-2 sm:mt-1 md:ml-3 sm:ml-2'>Step 2</p>      
              </div>

              <div className=' bg-[#CA3F2A] h-[0.5px] md:w-[90px] sm:w-[50px] md:mt-4 sm:mt-3 md:ml-3 sm:ml-2'></div>
          </div>

          <div className='flex ml-2'>
              <div className='text-white flex '>
                 <img src={step} alt="" className='md:w-7 md:h-7 sm:w-5 sm:h-5'/>
                 <p className='md:text-xs sm:text-[10px] md:mt-2 sm:mt-1 md:ml-3 sm:ml-2'>Step 3</p>      
              </div>

              {/* <div className=' bg-[#CA3F2A] h-[0.5px] w-[80px] mt-4 ml-2'></div> */}
          </div>
          </div>

          {/* form */}
          <div className="flex flex-col items-center  md:mt-9 sm:mt-5 "> 
         <p className='text-center text-white md:text-sm sm:text-xs font-light md:mb-5 sm:mb-1'>You’re purchasing Superior room at the  Park Plaza <br /> Westminster Bridge London  Park Plaza Westminster <br /> Bridge London  from 24-06-2024 to 24-06-2024 <br /> for USDC {totalPrice} for 2 guests.</p>
          <div className='flex w-full items-center justify-center md:mt-7 sm:mt-5 '>
              <img src={arrow} alt="" className='md:w-9 md:h-9 sm:w-6 sm:h-6 mr-4 cursor-pointer' onClick={onBack}/>
          <button className="bg-[#CA3F2A] sm:text-xs  text-white md:px-[110px] sm:px-[68px] md:py-1 sm:py-1 rounded-md md:text-lg border-[#FFE3E3] border border-opacity-50   "
           onClick={handleBuyRoom}>
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