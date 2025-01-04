import React from 'react';
import logo from '../../assets/logo.png';
import bgGarage from '../../assets/bg-garage.png';
import bikeImage from '../../assets/bike.png';
import { useLayoutContext } from '../../context/appContext';
import ButtonExpand from '../UI/buttonExpand';
import SubmitButton from '../UI/submitButton';


const VisualPanel = ({ setIsVisualExpanded, isVisualExpanded }) => {
    const {brand} =useLayoutContext()
  return (
    <div
      className="bg-cover bg-center h-full w-full"
      style={{ backgroundImage: `url(${bgGarage})` }}
    >   
        <div className='flex flex-col items-center text-center h-full w-full relative'>
            <div className="w-1/2 z-10 pt-16 pb-16 flex justify-center">
                <img src={logo} alt="Logo" className='w-1/2'/>
            </div>
            <div className='flex flex-col items-center w-full bottom-0'>
                <div className='flex flex-col items-center relative'>
                    <p className="text-bl-doe absolute top-6 text-xl font-medium md:text-3xl">John Doe - 12</p>
                    <h1 className=" text-black text-gradient absolute top-10" >{brand}</h1>
                    <div className="flex justify-center z-10">
                        <img src={bikeImage} alt="Bike" className="bike md:w-[100%] lg:w-[80%]" />
                    </div>
                   <div className='flex justify-space-beetween '>
                      <ButtonExpand setIsVisualExpanded={setIsVisualExpanded} isVisualExpanded={isVisualExpanded} />
                      {isVisualExpanded && <SubmitButton />}
                   </div>
                </div>
            </div>
        </div>    
    </div>
  );
};

export default VisualPanel;