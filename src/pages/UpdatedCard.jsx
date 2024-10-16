import React, { useState } from 'react';
import LaunchScreen from '../components/LaunchScreen';
import StepOne from '../components/StepOne';
import StepTwo from '../components/StepTwo';
import StepThree from '../components/StepThree';
import SucessConfirmation from '../components/SucessConfirmation';
import Resold from '../components/Resold';
import Cancelled from '../components/Cancelled';
import Backup from '../components/Backup';

const UpdatedCard = () => {
  const [currentPage, setCurrentPage] = useState('launch'); 

  // Handles navigation between pages
  const handleNavigation = (nextPage) => {
    setCurrentPage(nextPage);
  };

  return (
    <div>
      {/* Conditional rendering for each page */}
      {currentPage === 'launch' && (
        <LaunchScreen onNavigate={() => handleNavigation('stepone')} />
      )}
      {currentPage === 'stepone' && (
        <StepOne 
          onNavigate={() => handleNavigation('steptwo')}
          onBack={() => handleNavigation('launch')}
        />
      )}
      {currentPage === 'steptwo' && (
        <StepTwo 
          onNavigate={() => handleNavigation('stepthree')} 
          onBack={() => handleNavigation('stepone')} 
        />
      )}
      {currentPage === 'stepthree' && (
        <StepThree 
          onNavigate={() => handleNavigation('success')} 
          onBack={() => handleNavigation('steptwo')} 
        />
      )}
      {currentPage === 'success' && (
        <SucessConfirmation onNavigate={() => handleNavigation('launch')} />
      )}
    </div>
  );
};

export default UpdatedCard;
