// // import React from 'react';
// // import BikeIcon from '../../assets/bike.svg';
// // import ToothIcon from '../../assets/tooth.svg';
// // import UserIcon from '../../assets/user.svg';
// // import DiamondIcon from '../../assets/diamond.svg';
// // import GridIcon from '../../assets/grid.svg';
// // import SlidersIcon from '../../assets/sliders.svg';

// // const StepIndicator = ({ currentStep }) => {
// //   const steps = [
// //     { icon: BikeIcon, id: 0 },
// //     { icon: ToothIcon, id: 1 },
// //     { icon: UserIcon, id: 2 },
// //     { icon: DiamondIcon, id: 3 },
// //     { icon: GridIcon, id: 4 },
// //     { icon: SlidersIcon, id: 5 },
// //   ];

// //   return (
// //     <div className="step-indicator flex flex-col items-center space-y-4">
// //       {steps.map((step) => (
// //         <img
// //           key={step.id}
// //           src={step.icon}
// //           alt={`Step ${step.id + 1}`}
// //           className={`w-8 h-8 transition-all duration-300 ${
// //             currentStep >= step.id ? 'text-black' : 'text-gray-400'
// //           }`}
// //           style={{
// //             filter:
// //               currentStep >= step.id
// //                 ? 'none'
// //                 : 'grayscale(100%) brightness(0.7) opacity(0.5)',
// //           }}
// //         />
// //       ))}
// //     </div>
// //   );
// // };

// // export default StepIndicator;


// // import React from 'react';
// // import BikeIcon from '../../assets/bike.svg';
// // import ToothIcon from '../../assets/tooth.svg';
// // import UserIcon from '../../assets/user.svg';
// // import DiamondIcon from '../../assets/diamond.svg';
// // import GridIcon from '../../assets/grid.svg';
// // import SlidersIcon from '../../assets/sliders.svg';

// // const StepIndicator = ({ currentStep }) => {
// //   const steps = [
// //     { icon: BikeIcon, id: 0 },
// //     { icon: ToothIcon, id: 1 },
// //     { icon: UserIcon, id: 2 },
// //     { icon: DiamondIcon, id: 3 },
// //     { icon: GridIcon, id: 4 },
// //     { icon: SlidersIcon, id: 5 },
// //   ];

// //   return (
// //     <div className="step-indicator flex flex-col items-center space-y-4">
// //       {steps.map((step) => (
// //         <div key={step.id} className="w-8 h-8">
// //           <img
// //             src={step.icon}
// //             alt={`Step ${step.id + 1}`}
// //             style={{
// //               fill: currentStep >= step.id ? 'black' : '#B3B3B3',
// //             }}
// //             className={`w-full h-full transition-all duration-300`}
// //           />
// //         </div>
// //       ))}
// //     </div>
// //   );
// // };

// // export default StepIndicator;










// import React from 'react';
// import { ReactComponent as BikeIcon } from '../../assets/bike.svg';
// import { ReactComponent as ToothIcon } from '../../assets/tooth.svg';
// import { ReactComponent as UserIcon } from '../../assets/user.svg';
// import { ReactComponent as DiamondIcon } from '../../assets/diamond.svg';
// import { ReactComponent as GridIcon } from '../../assets/grid.svg';
// import { ReactComponent as SlidersIcon } from '../../assets/sliders.svg';

// const StepIndicator = ({ currentStep }) => {
//   const steps = [
//     { icon: BikeIcon, id: 0 },
//     { icon: ToothIcon, id: 1 },
//     { icon: UserIcon, id: 2 },
//     { icon: DiamondIcon, id: 3 },
//     { icon: GridIcon, id: 4 },
//     { icon: SlidersIcon, id: 5 },
//   ];

//   return (
//     <div className="step-indicator flex flex-col items-center space-y-4">
//       {steps.map((step) => {
//         const IconComponent = step.icon;
//         return (
//           <div key={step.id} className="w-8 h-8">
//             <IconComponent
//               className={`w-full h-full transition-colors duration-300 ${
//                 currentStep >= step.id ? 'fill-black' : 'fill-gray-400'
//               }`}
//             />
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default StepIndicator;












// import React from 'react';
// import { FaCircle } from 'react-icons/fa';
// import { Truck } from 'react-bootstrap-icons';



// const StepIndicator = ({ isActive }) => {
//   return (
    
//     <div className={`flex justify-center items-center ${isActive ? 'text-black' : 'text-gray-400'}`}>
//         <Truck color="white" size={40} />
//       <svg
//         width="40"
//         height="40"
//         viewBox="0 0 40 40"
//         fill="none"
//         xmlns="http://www.w3.org/2000/svg"
//         className={`transition-colors duration-300 ${isActive ? 'text-black' : 'text-gray-500'}`}
//       >
//         <path
//           d="M8 34C3.58172 34 0 30.4183 0 26C0 21.5817 3.58172 18 8 18C12.4183 18 16 21.5817 16 26C16 30.4183 12.4183 34 8 34ZM8 30C10.2091 30 12 28.2091 12 26C12 23.7909 10.2091 22 8 22C5.79086 22 4 23.7909 4 26C4 28.2091 5.79086 30 8 30ZM8 28C6.89543 28 6 27.1046 6 26C6 24.8954 6.89543 24 8 24C9.10457 24 10 24.8954 10 26C10 27.1046 9.10457 28 8 28Z"
//           fill="currentColor"
//         />
//         <path
//           d="M32 34C27.5817 34 24 30.4183 24 26C24 21.5817 27.5817 18 32 18C36.4183 18 40 21.5817 40 26C40 30.4183 36.4183 34 32 34ZM32 30C34.2091 30 36 28.2091 36 26C36 23.7909 34.2091 22 32 22C29.7909 22 28 23.7909 28 26C28 28.2091 29.7909 30 32 30ZM32 28C30.8954 28 30 27.1046 30 26C30 24.8954 30.8954 24 32 24C33.1046 24 34 24.8954 34 26C34 27.1046 33.1046 28 32 28Z"
//           fill="currentColor"
//         />
//         <path
//           d="M32 13C34.1434 13 35.6731 13.2185 37.4472 14.1056C37.9412 14.3526 38.1414 14.9532 37.8944 15.4472C37.6474 15.9412 37.0468 16.1414 36.5528 15.8944C35.1269 15.1815 33.8566 15 32 15C25.8335 15 21 19.8088 21 26C21 26.5523 20.5523 27 20 27H18C17.4477 27 17 26.5523 17 26C17 20.9016 12.8197 17 8 17C7.84475 17 7.69164 16.9639 7.55279 16.8944C4.80643 15.5212 4.21125 15.2343 3.37991 14.8978C3.2267 14.8358 3.07161 14.7754 2.90814 14.7141C2.41644 14.5297 2.00387 14.3887 0.683772 13.9487C0.27543 13.8126 0 13.4304 0 13V11C0 10.4477 0.447715 10 1 10C5.76938 10 11.1711 11.3378 17.2114 14H18.5959C21.1359 11.6257 25.0563 9.8972 28.7764 9.8972C29.2282 9.8972 29.6239 10.2002 29.7418 10.6363C29.8482 11.03 30.0319 11.8479 30.2973 13.1061C30.8537 13.0361 31.422 13 32 13Z"
//           fill="currentColor"
//         />
//         <path
//           d="M25 8C24.4477 8 24 7.55228 24 7C24 6.44772 24.4477 6 25 6H28C28.4729 6 28.8811 6.33125 28.9785 6.79399L32.9785 25.794C33.0923 26.3344 32.7464 26.8648 32.206 26.9785C31.6656 27.0923 31.1352 26.7464 31.0215 26.206L27.1886 8H25Z"
//           fill="currentColor"
//         />
//         <path
//           d="M8.40614 26.9138C7.90145 27.1381 7.31049 26.9108 7.08619 26.4061C6.86188 25.9015 7.08918 25.3105 7.59386 25.0862L16.5939 21.0862C17.0985 20.8619 17.6895 21.0892 17.9138 21.5939C18.1381 22.0986 17.9108 22.6895 17.4061 22.9138L8.40614 26.9138Z"
//           fill="currentColor"
//         />
//       </svg>
//     </div>
//   );
// };

// export default StepIndicator;
