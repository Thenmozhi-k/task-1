import React from 'react';
import first from '../assets/updated/bg.png';
import buk from '../assets/updated/buk.png';
import step from '../assets/updated/step.png';
import step1 from '../assets/updated/step1.png';
import arrow from '../assets/updated/arrow.png';

const StepOne = ({ onNavigate, onBack }) => {
  return (
    <div className="flex justify-center items-center h-screen bg-black">
      <div className="relative w-[500px] h-[500px] bg-[#161616] shadow-lg p-2 flex flex-col items-center">
        <div
          className="relative shadow-lg p-6 flex flex-col justify-between"
          style={{
            backgroundImage: `url(${first})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            width: '485px',
            height: '230px',
          }}
        >
          <div className="ml-[330px]">
            <img src={buk} alt="buk" className="w-[70px] ml-12" />
          </div>

          {/* Content */}
          <div className="mt-48">
            <div className="flex">
              <div className="flex ml-[-15px]">
                <div className="text-white flex">
                  <img src={step} alt="step 1" className="w-7 h-7" />
                  <p className="text-xs mt-2 ml-3">Step 1</p>
                </div>
                <div className="bg-[#CA3F2A] h-[0.5px] w-[90px] mt-4 ml-3"></div>
              </div>

              {/* Progress indicators */}
              <div className="flex ml-2">
                <div className="text-white flex">
                  <img src={step1} alt="step 2" className="w-7 h-7" />
                  <p className="text-xs mt-2 ml-3 text-[#B1B1B1]">Step 2</p>
                </div>
                <div className="bg-[#CA3F2A] h-[0.5px] w-[90px] mt-4 ml-3"></div>
              </div>

              <div className="flex ml-2">
                <div className="text-white flex">
                  <img src={step1} alt="step 3" className="w-7 h-7" />
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
