// import React, { useState } from 'react';

// const StepFour = ({ control, errors }) => {
//   const colors = [
//     { label: 'Rouge', value: 'red', bg: 'bg-red-500' },
//     { label: 'Bleu', value: 'blue', bg: 'bg-blue-500' },
//     { label: 'Violet', value: 'purple', bg: 'bg-purple-500' },
//     { label: 'Blanc', value: 'white', bg: 'bg-gray-200' },
//     { label: 'Bleu clair', value: 'lightblue', bg: 'bg-sky-500' },
//     { label: 'Turquoise', value: 'turquoise', bg: 'bg-teal-500' },
//     { label: 'Jaune', value: 'yellow', bg: 'bg-yellow-500' },
//     { label: 'Orange', value: 'orange', bg: 'bg-orange-500' },
//     { label: 'Vert', value: 'green', bg: 'bg-green-500' },
//     { label: 'Rose', value: 'pink', bg: 'bg-pink-500' },
//   ];

//   const [selectedColor, setSelectedColor] = useState('');

//   const handleSelectColor = (color) => {
//     setSelectedColor(color);
//   };

//   return (
//     <div className="p-6">
//       <h2 className='form_h2'>Information sur votre moto</h2>
//       <div className="grid grid-cols-4 gap-4">
//         {colors.map((color) => (
//           <div
//             key={color.value}
//             className={`w-24 h-24 flex items-center justify-center rounded border cursor-pointer transition-all ${
//               color.value === selectedColor
//                 ? 'border-black shadow-lg'
//                 : 'border-gray-300'
//             } ${color.bg}`}
//             onClick={() => handleSelectColor(color.value)}
//           >
//             {color.value === selectedColor && (
//               <span className="text-white text-xl font-bold">✔</span>
//             )}
//           </div>
//         ))}
//       </div>
//       {errors.couleur && (
//         <p className="text-red-500 text-sm mt-2">{errors.couleur.message}</p>
//       )}
//     </div>
//   );
// };

// export default StepFour;

// import React from 'react';
// import { Controller } from 'react-hook-form';

// const StepFour = ({ control, errors }) => {
//   const colors = [
//     { label: 'Rouge', value: 'red', gradient: 'linear-gradient(to top right, #b91c1c 50%, #fecaca)' },
//     { label: 'Bleu', value: 'blue', gradient: 'linear-gradient(to top right, #1d4ed8 50%, #93c5fd)' },
//     { label: 'Violet', value: 'purple', gradient: 'linear-gradient(to top right, #7e22ce 50%, #d8b3e0)' },
//     { label: 'Blanc', value: 'white', gradient: 'linear-gradient(to top right, #e5e7eb 50%, #f3f4f6)' },
//     { label: 'Bleu clair', value: 'lightblue', gradient: 'linear-gradient(to top right, #38bdf8 50%, #bae6fd)' },
//     { label: 'Turquoise', value: 'turquoise', gradient: 'linear-gradient(to top right, #14b8a6 50%, #99f6e4)' },
//     { label: 'Jaune', value: 'yellow', gradient: 'linear-gradient(to top right, #f59e0b 50%, #fef08a)' },
//     { label: 'Orange', value: 'orange', gradient: 'linear-gradient(to top right, #fb923c 50%, #fdba74)' },
//     { label: 'Vert', value: 'green', gradient: 'linear-gradient(to top right, #10b981 50%, #6ee7b7)' },
//     { label: 'Rose', value: 'pink', gradient: 'linear-gradient(to top right, #ec4899 50%, #fbcfe8)' },
//   ];

//   return (
//     <div className="p-6">
//       <h2 className="text-xl font-bold mb-4 text-center">Choisissez une couleur</h2>
//       <Controller
//         name="couleur"
//         control={control}
//         render={({ field }) => (
//           <div className="grid grid-cols-4 gap-4 justify-items-center">
//             {colors.map((color) => (
//               <div
//                 key={color.value}
//                 className="flex flex-col items-center justify-center cursor-pointer transition-all"
//               >
//                 <div
//                   className={`w-24 h-24 rounded-lg flex items-center justify-center border-2
//                     ${field.value === color.value ? 'border-black shadow-lg' : 'border-gray-300'}`}
//                   style={{ background: color.gradient }} // Applique le dégradé personnalisé
//                   onClick={() => field.onChange(color.value)}
//                 >
//                   {field.value === color.value && (
//                     <span className="text-white text-2xl font-bold">✔</span>
//                   )}
//                 </div>
//                 {/* Affichage du nom sous chaque couleur */}
//                 <p className="text-sm text-center mt-1 font-medium">{color.label}</p>
//               </div>
//             ))}
//           </div>
//         )}
//       />
//       {errors.couleur && (
//         <p className="text-red-500 text-sm mt-2">{errors.couleur.message}</p>
//       )}
//     </div>
//   );
// };

// export default StepFour;

import React from 'react';
import { Controller } from 'react-hook-form';

const StepFour = ({ control, errors }) => {
  const colors = [
    { label: 'Rouge', value: 'red', gradient: 'linear-gradient(to top right, #b91c1c 50%, #fecaca)' },
    { label: 'Bleu', value: 'blue', gradient: 'linear-gradient(to top right, #1d4ed8 50%, #93c5fd)' },
    { label: 'Violet', value: 'purple', gradient: 'linear-gradient(to top right, #7e22ce 50%, #d8b3e0)' },
    { label: 'Blanc', value: 'white', gradient: 'linear-gradient(to top right, #e5e7eb 50%, #f3f4f6)' },
    { label: 'Bleu clair', value: 'lightblue', gradient: 'linear-gradient(to top right, #38bdf8 50%, #bae6fd)' },
    { label: 'Turquoise', value: 'turquoise', gradient: 'linear-gradient(to top right, #14b8a6 50%, #99f6e4)' },
    { label: 'Jaune', value: 'yellow', gradient: 'linear-gradient(to top right, #f59e0b 50%, #fef08a)' },
    { label: 'Orange', value: 'orange', gradient: 'linear-gradient(to top right, #fb923c 50%, #fdba74)' },
    { label: 'Vert', value: 'green', gradient: 'linear-gradient(to top right, #10b981 50%, #6ee7b7)' },
    { label: 'Rose', value: 'pink', gradient: 'linear-gradient(to top right, #ec4899 50%, #fbcfe8)' },
  ];

  return (
    <div className="p-6">
      <h2 className='form_h2'>Couleur</h2>
      <Controller
        name="couleur"
        control={control}
        render={({ field }) => (
          <div className="flex flex-wrap justify-start">
            {colors.map((color) => (
              <div
                key={color.value}
                className="flex flex-col items-center justify-center w-1/4 p-2 cursor-pointer transition-all"
              >
                <div
                  className={`w-full h-24 rounded-lg flex items-center justify-center border-2
                    ${field.value === color.value ? 'border-black shadow-lg' : 'border-gray-300'}`}
                  style={{ background: color.gradient }} // Applique le dégradé personnalisé
                  onClick={() => field.onChange(color.value)}
                >
                  {field.value === color.value && (
                    <span className="text-white text-2xl font-bold">✔</span>
                  )}
                </div>
                {/* Affichage du nom sous chaque couleur */}
                <p className="text-sm text-center mt-1 font-medium">{color.label}</p>
              </div>
            ))}
          </div>
        )}
      />
      {errors.couleur && (
        <p className="text-red-500 text-sm mt-2">{errors.couleur.message}</p>
      )}
    </div>
  );
};

export default StepFour;
