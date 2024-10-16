import React from 'react';
import first from '../assets/updated/bg.png';
import buk from '../assets/updated/buk.png';
import step from '../assets/updated/step.png';
import step1 from '../assets/updated/step1.png';
import arrow from '../assets/updated/arrow.png';

const StepOne = ({ onNavigate, onBack }) => {
  return (
    <div className="flex justify-center items-center h-screen bg-black">
      <div className="relative md:w-[500px] md:h-[500px] sm:h-[350px] sm:w-[350px] bg-[#161616] shadow-lg p-2 flex flex-col items-center">
        <div
          className="relative shadow-lg md:w-[485px] md:h-[230px] sm:h-[160px] sm:w-[335px] p-6 flex flex-col justify-between"
          style={{
            backgroundImage: `url(${first})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
           
          }}
        >
          <div className="md:ml-[330px] sm:ml-[200px]">
            <img src={buk} alt="buk" className="md:w-[70px] w-[50px] md:ml-12 sm:ml-[35px]" />
          </div>

          {/* Content */}
          <div className="mt-48">
            <div className="flex">
              <div className="flex ml-[-15px]">
                <div className="text-white flex">
                  <img src={step} alt="step 1" className="md:w-7 md:h-7 sm:w-5 sm:h-5" />
                  <p className="md:text-xs sm:text-[10px] mt-2 ml-3">Step 1</p>
                </div>
                <div className="bg-[#CA3F2A] h-[0.5px] md:w-[90px] sm:w-[80px] mt-4 ml-3"></div>
              </div>

              {/* Progress indicators */}
              <div className="flex ml-2">
                <div className="text-white flex">
                  <img src={step1} alt="step 2" className="md:w-7 md:h-7 sm:w-5 sm:h-5" />
                  <p className="text-xs mt-2 ml-3 text-[#B1B1B1]">Step 2</p>
                </div>
                <div className="bg-[#CA3F2A] h-[0.5px] w-[90px] mt-4 ml-3"></div>
              </div>

              <div className="flex ml-2">
                <div className="text-white flex">
                  <img src={step1} alt="step 3" className="md:w-7 md:h-7 sm:w-5 sm:h-5" />
                  <p className="text-xs mt-2 ml-3 text-[#B1B1B1]">Step 3</p>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="flex flex-col items-center mt-10">
              <input
                type="email"
                placeholder="Email address"
                className="border border-[#373737] bg-[#222222] rounded-md p-2 py-1 mb-4 w-[70%] max-w-[400px] focus:outline-none focus:ring-[0.5px] focus:ring-[#FFCACA] text-white text-center"
              />
              <input
                type="tel"
                placeholder="Mobile number"
                className="border border-[#373737] bg-[#222222] rounded-md p-2 py-1 mb-9 w-[70%] max-w-[400px] focus:outline-none focus:ring-[0.5px] focus:ring-[#FFCACA] text-white text-center"
              />
              <div className="flex w-full items-center justify-center">
                <img
                  src={arrow}
                  alt="arrow"
                  className="w-9 h-9 mr-4 cursor-pointer"
                  onClick={onBack}
                />
                <button
                  className="bg-[#CA3F2A] text-white px-[110px] py-1 rounded-md text-lg border-[#FFE3E3] border border-opacity-50"
                  onClick={onNavigate}
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepOne;
