// import React, { useState, useEffect } from "react";
// import { Controller } from "react-hook-form";
// import { gql, useQuery } from "@apollo/client";

// // Requête GraphQL pour récupérer les metaobjects Garde Boue et Plaque Phare
// const GET_CARENAGES = gql`
//   query {
//     gardeBoue: metaobjects(type: "garde_boue", first: 20) {
//       edges {
//         node {
//           id
//           fields {
//             key
//             value
//           }
//         }
//       }
//     }
//     plaquePhare: metaobjects(type: "plaque_phare", first: 20) {
//       edges {
//         node {
//           id
//           fields {
//             key
//             value
//           }
//         }
//       }
//     }
//   }
// `;

// const StepTwo = ({ control, errors }) => {
//   const { data, loading, error } = useQuery(GET_CARENAGES);
//   const [plaquePhareOptions, setPlaquePhareOptions] = useState([]);
//   const [gardeBoueOptions, setGardeBoueOptions] = useState([]);

//   useEffect(() => {
//     if (data) {
//       // console.log("GraphQL Response:", data);
  
//       // Extraction des options pour Plaque Phare
//       const plaquePhare = data.plaquePhare.edges
//         .flatMap((edge) => edge.node.fields)
//         .filter((field) => field.key === "name")
//         .map((field) => field.value);
  
//       // Extraction des options pour Garde Boue
//       const gardeBoue = data.gardeBoue.edges
//         .flatMap((edge) => edge.node.fields)
//         .filter((field) => field.key === "name") 
//         .map((field) => field.value);
  
//       setPlaquePhareOptions(plaquePhare);
//       setGardeBoueOptions(gardeBoue);
//     }
//   }, [data]);
  
  

//   if (loading) return <p>Chargement des données...</p>;
//   if (error) return <p>Erreur : {error.message}</p>;

//   return (
//     <div className="mb-4">
//       <h2 className="form_h2">Carénages</h2>

//       {/* Champ Plaque Phare */}
//       <div className="mb-4">
//         <label htmlFor="plaquePhare" className="block text-sm font-medium mb-2 form_label">
//           Plaque Phare
//         </label>
//         <Controller
//           name="plaquePhare"
//           control={control}
//           defaultValue=""
//           render={({ field }) => (
//             <select {...field} id="plaquePhare" className="form__input p-2 w-full">
//               <option value="">Sélectionnez une plaque phare</option>
//               {plaquePhareOptions.map((option, index) => (
//                 <option key={index} value={option}>
//                   {option}
//                 </option>
//               ))}
//             </select>
//           )}
//         />
//         {errors.plaquePhare && (
//           <p className="text-red-500 text-sm mt-1">{errors.plaquePhare.message}</p>
//         )}
//       </div>

//       {/* Champ Garde Boue */}
//       <div className="mb-4">
//         <label htmlFor="gardeBoue" className="block text-sm font-medium mb-2 form_label">
//           Garde Boue
//         </label>
//         <Controller
//           name="gardeBoue"
//           control={control}
//           defaultValue=""
//           render={({ field }) => (
//             <select {...field} id="gardeBoue" className="form__input p-2 w-full">
//               <option value="">Sélectionnez un garde boue</option>
//               {gardeBoueOptions.map((option, index) => (
//                 <option key={index} value={option}>
//                   {option}
//                 </option>
//               ))}
//             </select>
//           )}
//         />
//         {errors.gardeBoue && (
//           <p className="text-red-500 text-sm mt-1">{errors.gardeBoue.message}</p>
//         )}
//       </div>

//       {/* Champ Moteur */}
//       <div className="mb-6">
//         <label className="block text-sm font-medium mb-2 form_label">Moteur</label>
//         <Controller
//           name="moteur"
//           control={control}
//           defaultValue={[]}
//           render={({ field: { value, onChange } }) => (
//             <div className="flex justify-between gap-5">
//               {["AM6", "EURO"].map((option, index) => (
//                 <label key={index} className="flex items-center space-x-2 form__input w-1/2 p-2 justify-between">
//                   <span>{option}</span>
//                   <input
//                     type="checkbox"
//                     value={option}
//                     checked={value.includes(option)}
//                     onChange={(e) => {
//                       if (e.target.checked) {
//                         onChange([...value, option]);
//                       } else {
//                         onChange(value.filter((v) => v !== option));
//                       }
//                     }}
//                     className="h-4 w-4"
//                   />
//                 </label>
//               ))}
//             </div>
//           )}
//         />
//         {errors.moteur && (
//           <p className="text-red-500 text-sm mt-1">{errors.moteur.message}</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default StepTwo;










// import React, { useState, useEffect } from "react";
// import { Controller } from "react-hook-form";
// import { gql, useQuery } from "@apollo/client";

// // Requête GraphQL pour récupérer les metaobjects Garde Boue et Plaque Phare
// const GET_CARENAGES = gql`
//   query {
//     gardeBoue: metaobjects(type: "garde_boue", first: 20) {
//       edges {
//         node {
//           id
//           fields {
//             key
//             value
//           }
//         }
//       }
//     }
//     plaquePhare: metaobjects(type: "plaque_phare", first: 20) {
//       edges {
//         node {
//           id
//           fields {
//             key
//             value
//           }
//         }
//       }
//     }
//   }
// `;

// const StepTwo = ({ control, errors }) => {
//   const { data, loading, error } = useQuery(GET_CARENAGES);
//   const [plaquePhareOptions, setPlaquePhareOptions] = useState([]);
//   const [gardeBoueOptions, setGardeBoueOptions] = useState([]);

//   useEffect(() => {
//     if (data) {
//       // Extraction des options pour Plaque Phare
//       const plaquePhare = data.plaquePhare.edges
//         .flatMap((edge) => edge.node.fields)
//         .filter((field) => field.key === "name")
//         .map((field) => field.value);

//       // Extraction des options pour Garde Boue
//       const gardeBoue = data.gardeBoue.edges
//         .flatMap((edge) => edge.node.fields)
//         .filter((field) => field.key === "name")
//         .map((field) => field.value);

//       setPlaquePhareOptions(plaquePhare);
//       setGardeBoueOptions(gardeBoue);
//     }
//   }, [data]);

//   if (loading) return <p>Chargement des données...</p>;
//   if (error) return <p>Erreur : {error.message}</p>;

//   return (
//     <div className="mb-4">
//       <h2 className="form_h2">Carénages</h2>

//       {/* Champ Plaque Phare */}
//       <div className="mb-4">
//         <label htmlFor="plaquePhare" className="block text-sm font-medium mb-2 form_label">
//           Plaque Phare
//         </label>
//         <Controller
//           name="plaquePhare"
//           control={control}
//           defaultValue=""
//           render={({ field }) => (
//             <select {...field} id="plaquePhare" className="form__input p-2 w-full">
//               <option value="">Sélectionnez une plaque phare</option>
//               {plaquePhareOptions.map((option, index) => (
//                 <option key={index} value={option}>
//                   {option}
//                 </option>
//               ))}
//             </select>
//           )}
//         />
//         {errors.plaquePhare && (
//           <p className="text-red-500 text-sm mt-1">{errors.plaquePhare.message}</p>
//         )}
//       </div>

//       {/* Champ Garde Boue */}
//       <div className="mb-4">
//         <label htmlFor="gardeBoue" className="block text-sm font-medium mb-2 form_label">
//           Garde Boue
//         </label>
//         <Controller
//           name="gardeBoue"
//           control={control}
//           defaultValue=""
//           render={({ field }) => (
//             <select {...field} id="gardeBoue" className="form__input p-2 w-full">
//               <option value="">Sélectionnez un garde boue</option>
//               {gardeBoueOptions.map((option, index) => (
//                 <option key={index} value={option}>
//                   {option}
//                 </option>
//               ))}
//             </select>
//           )}
//         />
//         {errors.gardeBoue && (
//           <p className="text-red-500 text-sm mt-1">{errors.gardeBoue.message}</p>
//         )}
//       </div>

//       {/* Champ Moteur */}
//       <div className="mb-6">
//         <label className="block text-sm font-medium mb-2 form_label">Moteur</label>
//         <Controller
//           name="moteur"
//           control={control}
//           defaultValue=""
//           render={({ field }) => (
//             <div className="flex justify-between gap-5">
//               {["AM6", "EURO"].map((option, index) => (
//                 <label key={index} className="flex items-center space-x-2 form__input w-1/2 p-2 justify-between">
//                   <span>{option}</span>
//                   <input
//                     type="radio"
//                     value={option}
//                     checked={field.value === option}
//                     onChange={(e) => field.onChange(e.target.value)}
//                     className="h-4 w-4"
//                   />
//                 </label>
//               ))}
//             </div>
//           )}
//         />
//         {errors.moteur && (
//           <p className="text-red-500 text-sm mt-1">{errors.moteur.message}</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default StepTwo;



































import React, { useState, useEffect } from "react";
import { Controller } from "react-hook-form";
import { gql, useQuery } from "@apollo/client";
import * as Icon from 'react-bootstrap-icons';

// Requête GraphQL pour récupérer les metaobjects Garde Boue et Plaque Phare
const GET_CARENAGES = gql`
  query {
    gardeBoue: metaobjects(type: "garde_boue", first: 20) {
      edges {
        node {
          id
          fields {
            key
            value
          }
        }
      }
    }
    plaquePhare: metaobjects(type: "plaque_phare", first: 20) {
      edges {
        node {
          id
          fields {
            key
            value
          }
        }
      }
    }
  }
`;

const StepTwo = ({ control, errors }) => {
  const { data, loading, error } = useQuery(GET_CARENAGES);
  const [plaquePhareOptions, setPlaquePhareOptions] = useState([]);
  const [gardeBoueOptions, setGardeBoueOptions] = useState([]);

  useEffect(() => {
    if (data) {
      // Extraction des options pour Plaque Phare
      const plaquePhare = data.plaquePhare.edges
        .flatMap((edge) => edge.node.fields)
        .filter((field) => field.key === "name")
        .map((field) => field.value);

      // Extraction des options pour Garde Boue
      const gardeBoue = data.gardeBoue.edges
        .flatMap((edge) => edge.node.fields)
        .filter((field) => field.key === "name")
        .map((field) => field.value);

      setPlaquePhareOptions(plaquePhare);
      setGardeBoueOptions(gardeBoue);
    }
  }, [data]);

  if (loading) return <p>Chargement des données...</p>;
  if (error) return <p>Erreur : {error.message}</p>;

  return (
    <div className="mb-4">
      <h2 className="form_h2">Carénages</h2>

      {/* Champ Plaque Phare */}
      <div className="mb-4 custom-select-container">
        <label htmlFor="plaquePhare" className="block text-sm font-medium mb-2 form_label">
          Plaque Phare
        </label>
        <Controller
          name="plaquePhare"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <><select {...field} id="plaquePhare" className="form__input p-2 w-full">
              <option value="">Sélectionnez une plaque phare</option>
              {plaquePhareOptions.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select><Icon.ChevronDown className="custom-icon ChevronDown-2" /></>
          )}
        />
        {errors.plaquePhare && (
          <p className="text-red-500 text-sm mt-1">{errors.plaquePhare.message}</p>
        )}
      </div>

      {/* Champ Garde Boue */}
      <div className="mb-4 custom-select-container" >
        <label htmlFor="gardeBoue" className="block text-sm font-medium mb-2 form_label">
          Garde Boue
        </label>
        <Controller
          name="gardeBoue"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <><select {...field} id="gardeBoue" className="form__input p-2 w-full">
              <option value="">Sélectionnez un garde boue</option>
              {gardeBoueOptions.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select><Icon.ChevronDown className="custom-icon ChevronDown-2" /></>
          )}
        />
        {errors.gardeBoue && (
          <p className="text-red-500 text-sm mt-1">{errors.gardeBoue.message}</p>
        )}
      </div>

      {/* Champ Moteur */}
      {/* Champ Moteur */}
<div className="mb-6 ">
  <label className="block text-sm font-medium mb-2 form_label">Moteur</label>
  <Controller
    name="moteur"
    control={control}
    defaultValue=""
    render={({ field: { value, onChange } }) => (
      <div className="flex justify-between gap-5">
        {["AM6", "EURO"].map((option, index) => (
          <label
            key={index}
            className={`flex items-center space-x-2 form__input w-1/2 p-2 justify-between border rounded ${
              value === option ? "bg-gray-200 border-blue-500" : "bg-gray-100 border-gray-300"
            }`}
          >
            <span>{option}</span>
            <input
              type="radio"
              value={option}
              checked={value === option}
              onChange={(e) => onChange(e.target.value)}
              className="hidden"
            />
            {/* Ajout de l'élément "coche" */}
            <div
              className={`w-4 h-4 rounded border flex items-center justify-center ${
                value === option ? "bg-blue-500 border-blue-500" : "border-gray-400"
              }`}
            >
              {value === option && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3 w-3 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              )}
            </div>
          </label>
        ))}
      </div>
    )}
  />
  {errors.moteur && (
    <p className="text-red-500 text-sm mt-1">{errors.moteur.message}</p>
  )}
</div>

    </div>
  );
};

export default StepTwo;
