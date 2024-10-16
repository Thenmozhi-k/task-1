import React from 'react';
import first from '../assets/updated/bg.png';
import buk from '../assets/updated/buk.png';
import icon1 from '../assets/updated/icon1.png';
import icon2 from '../assets/updated/icon2.png';
import icon3 from '../assets/updated/icon3.png';
import hline from '../assets/updated/Line 60.png';
import vline from '../assets/updated/Line 62.png';

const LaunchScreen = ({ onNavigate }) => {
  return (
    <div className="flex justify-center items-center h-screen bg-black">
      <div className="relative sm:w-[500px] sm:h-[500px] h-[400px] w-[400px]   bg-[#161616] shadow-lg p-2 flex flex-col items-center">
        <div
          className="relative shadow-lg md:w-[485px] md:h-[230px] h-[185px] w-[385px]  p-6 flex flex-col justify-between"
          style={{
            backgroundImage: `url(${first})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            
          }}
        >
          <div className='md:ml-[330px] ml-[260px]'>
            <img src={buk} alt="" className='md:w-[70px] w-[50px] md:ml-12 ml-[35px]' />
            <div className="flex items-center  md:mt-[140px] mt-[110px]">
              <span className="text-white md:text-sm text-xs mr-2">4.0</span>
              <div className="flex ">
                <span className="text-red-600  md:text-lg text-md md:mr-1">★</span>
                <span className="text-red-600  md:text-lg text-md md:mr-1">★</span>
                <span className="text-red-600  md:text-lg text-md md:mr-1">★</span>
                <span className="text-red-600  md:text-lg text-md md:mr-1">★</span>
                <span className="text-gray-500 md:text-lg text-md md:mr-1">★</span>
              </div>
            </div>
          </div>

          {/* content */}
          <div className='mt-5'>
            <ul className='list-disc list-inside text-[#FFC4BB] md:text-xs text-[9px]'>
              <li ><span className='ml-[-6px]'>Superior Room, Accessible (Westminster Superior Room)</span></li>
            </ul>
            <h1 className='text-white md:text-lg text-sm mt-1'>Park Plaza Westminster Bridge London Park Plaza Westminster Bridge London</h1>

            <div>
              {/* Adjusted line */}
              <img src={hline} alt="" className='md:mt-4 mt-2' />
              <div className='grid grid-cols-3 mt-3'>
                <div className='flex md:w-[60%]'>
                  <div className='flex-col flex'>
                    <img src={icon1} alt="" className='md:w-8 md:h-8 w-6 h-6' />
                    <p className='md:text-[9px] text-[7px] text-white mt-2'>Check In Date</p>
                    <p className='md:text-xs text-[8px] text-[#FFC4BB] md:mt-1'>23-4-2024</p>
                  </div>

                  <img src={vline} alt="" className='w-[1.5px] md:h-[73px] h-[50px] ml-7 md:mt-1' />
                </div>

                <div className='flex md:ml-[-35px] ml-[-20px]'>
                  <div className='flex-col flex'>
                    <img src={icon2} alt="" className='md:w-8 md:h-8 w-6 h-6' />
                    <p className='md:text-[9px] text-[7px] text-white mt-2'>Check Out</p>
                    <p className='md:text-xs text-[8px] text-[#FFC4BB] md:mt-1'>28 April 2024</p>
                  </div>

                  <img src={vline} alt="" className='w-[1.5px] md:h-[73px] h-[50px] ml-7 md:mt-1' />
                </div>

                <div className='flex md:ml-[-50px] ml-[-40px]'>
                  <div className='flex-col flex'>
                    <img src={icon3} alt="" className='md:w-8 md:h-8 w-6 h-6' />
                    <p className='md:text-[9px] text-[7px] text-white mt-2'>Location</p>
                    <p className='md:text-xs text-[8px] text-[#FFC4BB] md:mt-1'>Richmond Road, Bangalore, India</p>
                  </div>
                </div>
              </div>
            </div>

            {/* button */}
            <div className='flex justify-center items-center gap-4 mt-6'>
              <button className='text-white bg-[#331D19] border border-[#7B3F26] md:px-9 md:py-2 text-xs px-4 py-1 md:text-[16px] rounded-lg '>Hotel Details</button>
              <button className='text-white bg-[#CA3F2A] border border-[#FFE3E3] md:px-9 md:py-2 text-xs px-4 py-1 md:text-[16px] rounded-lg border-opacity-50'
               onClick={onNavigate}>Buy Booking</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LaunchScreen;