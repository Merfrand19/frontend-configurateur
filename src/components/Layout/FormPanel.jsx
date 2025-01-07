import React, { useState, useRef, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import StepOne from '../Form/StepOne';
import StepTwo from '../Form/StepTwo';
import StepThree from '../Form/StepThree';
import StepFour from '../Form/StepFour';
import StepFive from '../Form/StepFive';
import StepSix from '../Form/StepSix';

// import StepIndicator from '../UI/stepIndicator';

// // Schémas de validation pour chaque étape
// const schemas = [
//   Yup.object().shape({
//     marque: Yup.string().required('La marque est requise'),
//     modele: Yup.string().required('Le modèle est requis'),
//     annee: Yup.number()
//       .typeError("L'année doit être un nombre valide")
//       .min(1900, "L'année doit être supérieure ou égale à 1900")
//       .max(new Date().getFullYear(), "L'année ne peut pas être supérieure à l'année actuelle")
//       .required("L'année est obligatoire"),
//   }),
//   Yup.object().shape({
//     origine: Yup.string().required("L'origine est requise"),
//     gardeBoue: Yup.string().required('La GardeBoue est requise'),
//     moteur: Yup.array()
//       .min(1, 'Vous devez choisir un moteur')
//       .max(1, 'Vous devez choisir un seul moteur'),
//   }),
//   Yup.object().shape({
//     pseudo: Yup.string().required('La pseudo est requis'),
//     numero: Yup.number().typeError("Le numéro doit être un nombre valide"),
//   }),
//   Yup.object().shape({
//     couleur: Yup.string().required('Vous devez sélectionner une couleur'),
//   }),
//   Yup.object().shape({
//     matiere: Yup.string().required('Vous devez sélectionner une matière'),
//     finition: Yup.string().required('Vous devez sélectionner une finition'),
//   }),
//   Yup.object().shape({
//     selectedProduct: Yup.number()
//       .typeError("Vous devez sélectionner un produit valide")
//       .required("Vous devez sélectionner un produit"),
//   }),
// ];

// const FormPanel = () => {
//   const [step, setStep] = useState(0);
//   const swiperRef = useRef(null);

//   const {
//     control,
//     handleSubmit,
//     formState: { errors },
//     trigger,
//     watch,
//     getValues,
//   } = useForm({
//     resolver: yupResolver(schemas[step]),
//     defaultValues: {
//       marque: '',
//       modele: '',
//       annee: '',
//       origine: '',
//       gardeBoue: '',
//       moteur: [],
//       pseudo: '',
//       numero: '',
//       couleur: '',
//       finition: '',
//       matiere: '',
//     },
//   });

//   // Fonction pour changer l'étape et recalculer la validation
//   const handleStepChange = async (newStep) => {
//     const isValid = await trigger();
//     if (isValid || newStep < step) {
//       setStep(newStep);
//       swiperRef.current.swiper.slideTo(newStep);
//     }
//   };

//   // Soumission finale
//   const onSubmit = async () => {
//     const isValid = await trigger();
//     if (isValid) {
//       if (step < schemas.length - 1) {
//         handleStepChange(step + 1);
//       } else {
//         const data = getValues();
//         console.log('Données soumises :', data);
//       }
//     } else {
//       console.log('Erreur : veuillez corriger les champs avant de continuer.');
//     }
//   };

//   // Mettre à jour la hauteur de Swiper sur changement
//   useEffect(() => {
//     if (swiperRef.current) {
//       swiperRef.current.swiper.updateAutoHeight(500); // Transition douce
//     }
//   }, [errors, step]);

//   return (
//     <div className="form-panel w-11/12 sm:w-4/5 md:w-3/4 mt-4 mb-4 sm:mt-0 sm:mb-0">
//       <Swiper
//         spaceBetween={0}
//         slidesPerView={1}
//         autoHeight={true}
//         allowTouchMove={false}
//         ref={swiperRef}
//       >
//         <SwiperSlide>
//           <StepOne control={control} errors={errors} />
//         </SwiperSlide>
//         <SwiperSlide>
//           <StepTwo control={control} errors={errors} />
//         </SwiperSlide>
//         <SwiperSlide>
//           <StepThree control={control} errors={errors} watch={watch} />
//         </SwiperSlide>
//         <SwiperSlide>
//           <StepFour control={control} errors={errors} />
//         </SwiperSlide>
//         <SwiperSlide>
//           <StepFive control={control} errors={errors} />
//         </SwiperSlide>
//         <SwiperSlide>
//           <StepSix control={control} errors={errors} />
//         </SwiperSlide>
//       </Swiper>

//       <div className="flex justify-between mt-4">
//         <button
//           type="button"
//           onClick={() => handleStepChange(step - 1)}
//           disabled={step <= 0}
//           className={`py-2 px-4 rounded ${
//             step > 0
//               ? 'bg-gray-300 text-black'
//               : 'bg-gray-200 text-gray-500 cursor-not-allowed'
//           }`}
//         >
//           Précédent
//         </button>
//         <button
//           type="button"
//           onClick={handleSubmit(onSubmit)}
//           className="py-2 px-4 rounded submit__button"
//         >
//           {step === schemas.length - 1 ? 'Terminer' : 'Suivant'}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default FormPanel;








































const schemas = [
  Yup.object().shape({
    marque: Yup.string().required('La marque est requise'),
    modele: Yup.string().required('Le modèle est requis'),
    annee: Yup.number()
      .typeError("L'année doit être un nombre valide")
      .min(1900, "L'année doit être supérieure ou égale à 1900")
      .max(new Date().getFullYear(), "L'année ne peut pas être supérieure à l'année actuelle")
      .required("L'année est obligatoire"),
  }),
  Yup.object().shape({
    origine: Yup.string().required("L'origine est requise"),
    gardeBoue: Yup.string().required('La GardeBoue est requise'),
    moteur: Yup.array()
      .min(1, 'Vous devez choisir un moteur')
      .max(1, 'Vous devez choisir un seul moteur'),
  }),
  Yup.object().shape({
    pseudo: Yup.string().required('Le pseudo est requis'),
    numero: Yup.number().typeError("Le numéro doit être un nombre valide"),
  }),
  Yup.object().shape({
    couleur: Yup.string().required('Vous devez sélectionner une couleur'),
  }),
  Yup.object().shape({
    matiere: Yup.string().required('Vous devez sélectionner une matière'),
    finition: Yup.string().required('Vous devez sélectionner une finition'),
  }),
  Yup.object().shape({
    selectedProduct: Yup.number()
      .typeError("Vous devez sélectionner un produit valide")
      .required("Vous devez sélectionner un produit"),
  }),
];

const FormPanel = () => {
  const [step, setStep] = useState(0);
  const swiperRef = useRef(null);

  const {
    control,
    handleSubmit,
    formState: { errors },
    trigger,
    watch,
    getValues,
  } = useForm({
    resolver: yupResolver(schemas[step]),
    defaultValues: {
      marque: '',
      modele: '',
      annee: '',
      origine: '',
      gardeBoue: '',
      moteur: [],
      pseudo: '',
      numero: '',
      couleur: '',
      finition: '',
      matiere: '',
    },
  });

  // Fonction pour changer d'étape
  const handleStepChange = async (newStep) => {
    const isValid = await trigger();
    if (isValid || newStep < step) {
      setStep(newStep);
      swiperRef.current.swiper.slideTo(newStep);
    }
  };

  // Soumission finale
  const onSubmit = async () => {
    const isValid = await trigger();
    if (isValid) {
      if (step < schemas.length - 1) {
        handleStepChange(step + 1);
      } else {
        const data = getValues();
        console.log('Données soumises :', data);
      }
    } else {
      console.log('Erreur : veuillez corriger les champs avant de continuer.');
    }
  };

  // Mettre à jour la hauteur de Swiper sur changement
  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.swiper.updateAutoHeight(500); // Transition douce
    }
  }, [errors, step]);

  return (
    <div className="form-panel w-11/12 sm:w-4/5 md:w-3/4 mt-4 mb-4 sm:mt-0 sm:mb-0">
      {/* Ajout du StepIndicator */}
      <div className="step-indicator-container">
        {/* <StepIndicator currentStep={step} /> */}
      </div>

      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        autoHeight={true}
        allowTouchMove={false}
        ref={swiperRef}
      >
        <SwiperSlide>
          <StepOne control={control} errors={errors} />
        </SwiperSlide>
        <SwiperSlide>
          <StepTwo control={control} errors={errors} />
        </SwiperSlide>
        <SwiperSlide>
          <StepThree control={control} errors={errors} watch={watch} />
        </SwiperSlide>
        <SwiperSlide>
          <StepFour control={control} errors={errors} />
        </SwiperSlide>
        <SwiperSlide>
          <StepFive control={control} errors={errors} />
        </SwiperSlide>
        <SwiperSlide>
          <StepSix control={control} errors={errors} />
        </SwiperSlide>
      </Swiper>

      <div className="flex justify-between mt-4">
        <button
          type="button"
          onClick={() => handleStepChange(step - 1)}
          disabled={step <= 0}
          className={`py-2 px-4 rounded ${
            step > 0
              ? 'bg-gray-300 text-black'
              : 'bg-gray-200 text-gray-500 cursor-not-allowed'
          }`}
        >
          Précédent
        </button>
        <button
          type="button"
          onClick={handleSubmit(onSubmit)}
          className="py-2 px-4 rounded submit__button"
        >
          {step === schemas.length - 1 ? 'Terminer' : 'Suivant'}
        </button>
      </div>
    </div>
  );
};

export default FormPanel;