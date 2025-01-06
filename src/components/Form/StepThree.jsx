import React from 'react';
import { Controller } from 'react-hook-form';

const StepThree = ({ control, errors }) => {
  return (
    <div className="mb-4">
      <h2 className='form_h2'>Identité</h2>

      {/* Champ Préférences (Checkboxes) */}
      <div className="mb-4">
            <label htmlFor="pseudo" className="block text-sm font-medium form_label">Pseudo Pilote</label>
            <Controller
              name="pseudo"
              control={control}
              render={({ field }) => (
                <input {...field} id="pseudo" className="p-2 w-full form__input" />
              )}
            />
            {errors.pseudo && <p className="text-red-500">{errors.pseudo.message}</p>}
        </div>
      

      {/* Champ Pays (Select) */}
    <div className="mb-4">
            <label htmlFor="numero" className="block text-sm font-medium form_label">Numéro Pilote</label>
            <Controller
              name="numero"
              control={control}
              render={({ field }) => (
                <input {...field} id="numero" className="p-2 w-full form__input" />
              )}
            />
            {errors.numero && <p className="text-red-500">{errors.numero.message}</p>}
    </div>

    </div>
  );
};

export default StepThree;
