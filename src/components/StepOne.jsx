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
          <div className="md:mt-48 sm:mt-32">
            <div className="flex">
              <div className="flex ml-[-15px]">
                <div className="text-white flex">
                  <img src={step} alt="step 1" className="md:w-7 md:h-7 sm:w-5 sm:h-5" />
                  <p className="md:text-xs sm:text-[10px] md:mt-2 sm:mt-1 ml-3">Step 1</p>
                </div>
                <div className="bg-[#CA3F2A] h-[0.5px] md:w-[90px] sm:w-[50px] md:mt-4 sm:mt-2 md:ml-3"></div>
              </div>

              {/* Progress indicators */}
              <div className="flex ml-2">
                <div className="text-white flex">
                  <img src={step1} alt="step 2" className="md:w-7 md:h-7 sm:w-5 sm:h-5" />
                  <p className="md:text-xs sm:text-[10px] md:mt-2 sm:mt-1 ml-3 text-[#B1B1B1]">Step 2</p>
                </div>
                <div className="bg-[#CA3F2A] h-[0.5px] md:w-[90px] sm:w-[50px] md:mt-4 sm:mt-2 md:ml-3"></div>
              </div>

              <div className="flex ml-2">
                <div className="text-white flex">
                  <img src={step1} alt="step 3" className="md:w-7 md:h-7 sm:w-5 sm:h-5" />
                  <p className="md:text-xs sm:text-[10px] md:mt-2 sm:mt-1 ml-3 text-[#B1B1B1]">Step 3</p>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="flex flex-col items-center md:mt-10 sm:mt-6">
              <input
                type="email"
                placeholder="Email address"
                className="border border-[#373737] bg-[#222222] sm:text-xs md:text-md rounded-md md:p-2 md:py-2 sm:py-1 mb-4 w-[70%] max-w-[400px] focus:outline-none focus:ring-[0.5px] focus:ring-[#FFCACA] text-white text-center"
              />
              <input
                type="tel"
                placeholder="Mobile number"
                className="border border-[#373737] bg-[#222222] sm:text-xs md:text-md rounded-md md:p-2 md:py-2 sm:py-1 mb-9 w-[70%] max-w-[400px] focus:outline-none focus:ring-[0.5px] focus:ring-[#FFCACA] text-white text-center"
              />
              <div className="flex w-full sm:mt-[-17px] items-center justify-center">
                <img
                  src={arrow}
                  alt="arrow"
                  className="md:w-9 md:h-9 sm:w-6 sm:h-6 mr-4 cursor-pointer"
                  onClick={onBack}
                />
                <button
                  className="bg-[#CA3F2A] sm:text-xs  text-white md:px-[110px] sm:px-[70px] md:py-1 sm:py-1 rounded-md md:text-lg border-[#FFE3E3] border border-opacity-50"
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
