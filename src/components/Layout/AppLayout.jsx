// import React from 'react';

// // AppLayout Component
// const AppLayout = ({ visualPanel, formPanel, isVisualExpanded }) => {
    
//     return (
//         <div className="flex flex-col lg:flex-row w-full min-h-full font-poppins">
//             <div className={`flex justify-center items-center transition-all duration-300 ${isVisualExpanded ? 'w-full' : 'w-full lg:w-1/2'}`}>
//                 {visualPanel}
//             </div>
            
//             <div className={`flex justify-center items-center transition-all duration-300 mb-6 mt-6 sm:mb-0 sm:mt-0 ${isVisualExpanded ? 'w-0 hidden' : 'w-full lg:w-1/2'}`}>
//                 {formPanel}
//             </div>
//         </div>
//       );     
      
// };

// export default AppLayout;


import React, { useRef } from 'react';

// AppLayout Component
const AppLayout = ({ visualPanel, formPanel, isVisualExpanded }) => {
  const formSubmitRef = useRef(null);

  // Fonction pour déclencher la soumission du formulaire
  const triggerFormSubmit = () => {
    if (formSubmitRef.current) {
      formSubmitRef.current();
    }
  };

  return (
    <div className="flex flex-col lg:flex-row w-full min-h-full font-poppins">
      {/* VisualPanel - Le côté visuel */}
      <div 
        className={`flex justify-center items-center transition-all duration-300 ${isVisualExpanded ? 'w-full' : 'w-full lg:w-1/2'}`}
      >
        {/* Passage de triggerFormSubmit au VisualPanel */}
        {React.cloneElement(visualPanel, { triggerFormSubmit })}
      </div>

      {/* FormPanel - Le côté formulaire */}
      <div 
        className={`flex justify-center items-center transition-all duration-300 mb-6 mt-6 sm:mb-0 sm:mt-0 ${isVisualExpanded ? 'w-0 hidden' : 'w-full lg:w-1/2'}`}
      >
        {/* Passage de onSubmitRef au FormPanel */}
        {React.cloneElement(formPanel, { onSubmitRef: formSubmitRef })}
      </div>
    </div>
  );
};

export default AppLayout;
