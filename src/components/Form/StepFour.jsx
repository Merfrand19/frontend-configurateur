// import React from 'react';
// import { useLayoutContext } from '../../context/appContext';
// import { Controller } from 'react-hook-form';
// import productImage from '../../assets/product.png';
// import bikeImage from '../../assets/bike.png';

// const StepFour = ({ control, errors }) => {
//   const {setBike}=useLayoutContext()
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
//       <h2 className="form_h2">Couleur</h2>

//       <Controller
//         name="couleur"
//         control={control}
//         render={({ field }) => (
//           <div className="grid grid-cols-4 gap-3">
//             {colors.map((color) => (
//               <div
//                 key={color.value}
//                 className={`flex flex-col items-center justify-center cursor-pointer transition-all border rounded-lg p-1 ${
//                   field.value === color.value ? 'border-black shadow-lg scale-105' : 'border-gray-300'
//                 }`}
//                 role="radio"
//                 aria-checked={field.value === color.value}
//                 tabIndex={0}
//                 onClick={() => field.onChange(color.value)}
//                 onKeyDown={(e) => e.key === 'Enter' && field.onChange(color.value)}
//               >
//                 <div
//                   className="w-full h-20 rounded-md relative"
//                   style={{
//                     background: color.gradient,
//                     borderRadius: '8px',
//                   }}
//                 >
//                   {field.value === color.value && (
//                     <div className="absolute top-1 right-1 bg-white shadow-md  p-1">
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         fill="currentColor"
//                         viewBox="0 0 16 16"
//                         className="w-4 h-4 text-black"
//                       >
//                         <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-4 5a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 0 1 1.06-1.06l1.94 1.94 3.64-4.293z" />
//                       </svg>
//                     </div>
//                   )}
//                 </div>
//                 <p className="text-sm text-center mt-1 font-medium">{color.label}</p>
//               </div>
//             ))}
//           </div>
//         )}
//       />
//       {errors.couleur && (
//         <p className="text-red-500 text-sm mt-1">{errors.couleur.message}</p>
//       )}
//     </div>
//   );
// };

// export default StepFour;




import React from 'react';
import { useLayoutContext } from '../../context/appContext';
import { Controller } from 'react-hook-form';
import productImage from '../../assets/product.png';
import bikeImage from '../../assets/bike.png';

const StepFour = ({ control, errors }) => {
  const { setBike } = useLayoutContext();

  const colors = [
    { label: 'Rouge', value: 'red', image: bikeImage, gradient: 'linear-gradient(to top right, #b91c1c 50%, #fecaca)' },
    { label: 'Bleu', value: 'blue', image: productImage, gradient: 'linear-gradient(to top right, #1d4ed8 50%, #93c5fd)' },
    { label: 'Violet', value: 'purple', image: productImage, gradient: 'linear-gradient(to top right, #7e22ce 50%, #d8b3e0)' },
    { label: 'Blanc', value: 'white', image: productImage, gradient: 'linear-gradient(to top right, #e5e7eb 50%, #f3f4f6)' },
    { label: 'Bleu clair', value: 'lightblue', image: productImage, gradient: 'linear-gradient(to top right, #38bdf8 50%, #bae6fd)' },
    { label: 'Turquoise', value: 'turquoise', image: productImage, gradient: 'linear-gradient(to top right, #14b8a6 50%, #99f6e4)' },
    { label: 'Jaune', value: 'yellow', image: productImage, gradient: 'linear-gradient(to top right, #f59e0b 50%, #fef08a)' },
    { label: 'Orange', value: 'orange', image: productImage, gradient: 'linear-gradient(to top right, #fb923c 50%, #fdba74)' },
    { label: 'Vert', value: 'green', image: productImage, gradient: 'linear-gradient(to top right, #10b981 50%, #6ee7b7)' },
    { label: 'Rose', value: 'pink', image: bikeImage, gradient: 'linear-gradient(to top right, #ec4899 50%, #fbcfe8)' },
  ];

  return (
    <div className="p-6">
      <h2 className="form_h2">Couleur</h2>

      <Controller
        name="couleur"
        control={control}
        render={({ field }) => (
          <div className="grid grid-cols-4 gap-3">
            {colors.map((color) => (
              <div
                key={color.value}
                className={`flex flex-col items-center justify-center cursor-pointer transition-all border rounded-lg p-1 ${
                  field.value === color.value ? 'border-black shadow-lg scale-105' : 'border-gray-300'
                }`}
                role="radio"
                aria-checked={field.value === color.value}
                tabIndex={0}
                onClick={() => {
                  field.onChange(color.value);
                  setBike(color.image); // Met à jour setBike avec l'image correspondante
                }}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    field.onChange(color.value);
                    setBike(color.image); // Met à jour setBike avec l'image correspondante
                  }
                }}
              >
                <div
                  className="w-full h-20 rounded-md relative"
                  style={{
                    background: color.gradient,
                    borderRadius: '8px',
                  }}
                >
                  {field.value === color.value && (
                    <div className="absolute top-1 right-1 bg-white shadow-md p-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                        className="w-4 h-4 text-black"
                      >
                        <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-4 5a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 0 1 1.06-1.06l1.94 1.94 3.64-4.293z" />
                      </svg>
                    </div>
                  )}
                </div>
                <p className="text-sm text-center mt-1 font-medium">{color.label}</p>
              </div>
            ))}
          </div>
        )}
      />
      {errors.couleur && (
        <p className="text-red-500 text-sm mt-1">{errors.couleur.message}</p>
      )}
    </div>
  );
};

export default StepFour;
