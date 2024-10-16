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
      <div className="relative lg:w-[500px] lg:h-[500px] md:w-[400px] md:h-[400px] bg-[#161616] shadow-lg p-2 flex flex-col items-center">
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
            <div className="flex items-center  mt-[140px]">
              <span className="text-white text-sm mr-2">4.0</span>
              <div className="flex ">
                <span className="text-red-600 text-lg mr-1">★</span>
                <span className="text-red-600 text-lg mr-1">★</span>
                <span className="text-red-600 text-lg mr-1">★</span>
                <span className="text-red-600 text-lg mr-1">★</span>
                <span className="text-gray-500 text-lg mr-1">★</span>
              </div>
            </div>
          </div>

          {/* content */}
          <div className='mt-5'>
            <ul className='list-disc list-inside text-[#FFC4BB] text-xs'>
              <li ><span className='ml-[-6px]'>Superior Room, Accessible (Westminster Superior Room)</span></li>
            </ul>
            <h1 className='text-white text-lg mt-1'>Park Plaza Westminster Bridge London Park Plaza Westminster Bridge London</h1>

            <div>
              {/* Adjusted line */}
              <img src={hline} alt="" className='mt-4' />
              <div className='grid grid-cols-3 mt-3'>
                <div className='flex w-[60%]'>
                  <div className='flex-col flex'>
                    <img src={icon1} alt="" className='w-8 h-8' />
                    <p className='text-[9px] text-white mt-2'>Check In Date</p>
                    <p className='text-xs text-[#FFC4BB] mt-1'>23-4-2024</p>
                  </div>

                  <img src={vline} alt="" className='w-[1.5px] h-[73px] ml-7 mt-1' />
                </div>

                <div className='flex ml-[-35px]'>
                  <div className='flex-col flex'>
                    <img src={icon2} alt="" className='w-8 h-8' />
                    <p className='text-[9px] text-white mt-2'>Check Out</p>
                    <p className='text-xs text-[#FFC4BB] mt-1'>28 April 2024</p>
                  </div>

                  <img src={vline} alt="" className='w-[1.5px] h-[73px] ml-8 mt-1' />
                </div>

                <div className='flex ml-[-50px]'>
                  <div className='flex-col flex'>
                    <img src={icon3} alt="" className='w-8 h-8' />
                    <p className='text-[9px] text-white mt-2'>Location</p>
                    <p className='text-xs text-[#FFC4BB] mt-1'>Richmond Road, Bangalore, India</p>
                  </div>
                </div>
              </div>
            </div>

            {/* button */}
            <div className='flex justify-center items-center gap-4 mt-6'>
              <button className='text-white bg-[#331D19] border border-[#7B3F26] px-9 py-1 rounded-lg '>Hotel Details</button>
              <button className='text-white bg-[#CA3F2A] border border-[#FFE3E3] px-9 py-1 rounded-lg border-opacity-50'
               onClick={onNavigate}>Buy Booking</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LaunchScreen;
