import React, { useState } from 'react';
import LaunchScreen from '../components/LaunchScreen';
import StepOne from '../components/StepOne';
import StepTwo from '../components/StepTwo';
import StepThree from '../components/StepThree';
import SucessConfirmation from '../components/SucessConfirmation';
import Resold from '../components/Resold';
import Cancelled from '../components/Cancelled';
import Backup from '../components/Backup';
import TokenId from '../components/TokenId';

const UpdatedCard = () => {
  const [currentPage, setCurrentPage] = useState('tokenid'); 
  const [nftData, setNftData] = useState(null);

  // Handles navigation between pages
 const handleNavigation = (nextPage, data = null) => {
   if (data) {
     setNftData(data);
   }
   setCurrentPage(nextPage);
 };

  return (
    <div>
      {/* Conditional rendering for each page */}
      {currentPage === "tokenid" && (
        <TokenId
          onNavigate={(nextPage, data) => handleNavigation(nextPage, data)}
        />
      )}
      {currentPage === "launch" && (
        <LaunchScreen
          onNavigate={() => handleNavigation("stepone")}
          nftData={nftData} // Pass the nftData here
        />
      )}
      {currentPage === "stepone" && (
        <StepOne
          onNavigate={() => handleNavigation("steptwo")}
          onBack={() => handleNavigation("launch")}
        />
      )}
      {currentPage === "steptwo" && (
        <StepTwo
          onNavigate={() => handleNavigation("stepthree")}
          onBack={() => handleNavigation("stepone")}
        />
      )}
      {currentPage === "stepthree" && (
        <StepThree
          onNavigate={() => handleNavigation("success")}
          onBack={() => handleNavigation("steptwo")}
        />
      )}
      {currentPage === "success" && (
        <SucessConfirmation onNavigate={() => handleNavigation("launch")} />
      )}
    </div>
  );
};

export default UpdatedCard;
