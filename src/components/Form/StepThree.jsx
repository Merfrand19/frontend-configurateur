import React, { useEffect } from 'react';
import { Controller } from 'react-hook-form';
import { useLayoutContext } from '../../context/appContext';

const StepThree = ({ control, errors, watch }) => {
  const { setIdentity } = useLayoutContext();

//   Surveillez les valeurs des champs
  const pseudo = watch('pseudo', '');
  const numero = watch('numero', '');

  useEffect(() => {
    if (numero) {
      setIdentity(`${pseudo} - ${numero}`);
    } else {
      setIdentity(pseudo); 
    }
  }, [pseudo, numero, setIdentity]);  

  return (
    <div className="mb-4">
      <h2 className="form_h2">Identité</h2>

      {/* Champ Pseudo */}
      <div className="mb-4">
        <label htmlFor="pseudo" className="block text-sm font-medium form_label">
          Pseudo Pilote
        </label>
        <Controller
          name="pseudo"
          control={control}
          render={({ field }) => (
            <input {...field} id="pseudo" className="p-2 w-full form__input" />
          )}
        />
        {errors.pseudo && (
          <p className="text-red-500 text-sm mt-1">{errors.pseudo.message}</p>
        )}
      </div>

      {/* Champ Numéro */}
      <div className="mb-4 pb-4">
        <label htmlFor="numero" className="block text-sm font-medium form_label">
          Numéro Pilote
        </label>
        <Controller
          name="numero"
          control={control}
          render={({ field }) => (
            <input {...field} id="numero" className="p-2 w-full form__input" />
          )}
        />
        {errors.numero && (
          <p className="text-red-500 text-sm mt-1">{errors.numero.message}</p>
        )}
      </div>
    </div>
  );
};

export default StepThree;
