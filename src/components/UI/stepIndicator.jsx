import React from 'react';
import BikeIcon from '../../assets/bike.svg';
import BikeOldIcon from '../../assets/bike_old.svg';
import ToothIcon from '../../assets/tooth.svg';
import ToothOldIcon from '../../assets/tooth_old.svg';
import UserIcon from '../../assets/user.svg';
import UserOldIcon from '../../assets/user_old.svg';
import DiamondIcon from '../../assets/diamond.svg';
import DiamondOldIcon from '../../assets/diamond_old.svg';
import GridIcon from '../../assets/grid.svg';
import GridOldIcon from '../../assets/grid_old.svg';
import SlidersIcon from '../../assets/sliders.svg';
import SlidersOldIcon from '../../assets/sliders_old.svg';

const StepIndicator = ({ currentStep, setCurrentStep, direction = 'vertical', containerClasses = '' }) => {
  const steps = [
    { icon: BikeIcon, iconOld: BikeOldIcon, id: 0 },
    { icon: ToothIcon, iconOld: ToothOldIcon, id: 1 },
    { icon: UserIcon, iconOld: UserOldIcon, id: 2 },
    { icon: DiamondIcon, iconOld: DiamondOldIcon, id: 3 },
    { icon: GridIcon, iconOld: GridOldIcon, id: 4 },
    { icon: SlidersIcon, iconOld: SlidersOldIcon, id: 5 },
  ];

  return (
    <div
      className={`step-indicator flex ${
        direction === 'horizontal' ? 'flex-row justify-between' : 'flex-col items-center space-y-4'
      } ${containerClasses}`}
    >
      {steps.map((step) => (
        <img
          key={step.id}
          src={currentStep >= step.id ? step.iconOld : step.icon}
          alt={`Step ${step.id + 1}`}
          // className={`w-8 h-8 transition-all duration-300 lg:w-6 lg:h-6`}
          className="w-5 h-5 transition-all duration-300 lg:w-6 lg:h-6"
          style={{
            cursor: currentStep >= step.id ? 'pointer' : 'not-allowed',
            filter:
              currentStep >= step.id
                ? 'none'
                : 'grayscale(100%) brightness(0.7) opacity(0.5)',
            }}
          onClick={() => setCurrentStep(step.id)} 
        />
      ))}
    </div>
  );
};

export default StepIndicator;
