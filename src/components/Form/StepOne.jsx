import React from 'react';
import { Controller } from 'react-hook-form';
import { useLayoutContext } from '../../context/appContext';


const StepOne = ({ control, errors }) => {
  const {setBrand}=useLayoutContext()
  return (
    <div className="mb-4">
      <h2 className='form_h2'>Information sur votre moto</h2>
      <div className="mb-4">
              <label htmlFor="marque" className="block text-sm font-medium mb-2 form_label">Marque</label>
              <Controller
                name="marque"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <select
                    {...field}
                    id="marque"
                    className="form__input p-2 w-full "
                    onBlur={(e) => {
                      field.onBlur(); 
                      setBrand(e.target.value);
                    }}
                  >
                    <option value="">Marque</option>
                    <option value="Aprilia">Aprilia</option>
                    <option value="Beta">Beta</option>
                    <option value="CPI">CPI</option>
                    <option value="Derbi">Derbi</option>
                    <option value="Fantic">Fantic</option>
                    <option value="Generic">Generic</option>
                    <option value="Honda">Honda</option>
                    <option value="MBK">MBK</option>
                  </select>
                )}
              />
              {errors.marque && <p className="text-red-500 text-sm mt-1">{errors.marque.message}</p>}
    </div>
    <div className="mb-4">
      <label htmlFor="modele" className="block text-sm font-medium form_label">Modèle</label>
      <Controller
        name="modele"
        control={control}
        render={({ field }) => (
          <input {...field} id="modele" className="p-2 w-full form__input" />
        )}
      />
      {errors.modele && <p className="text-red-500">{errors.modele.message}</p>}
    </div>

    <div className="mb-4">
      <label htmlFor="annee" className="block text-sm font-medium form_label">Année</label>
      <Controller
        name="annee"
        control={control}
        render={({ field }) => (
          <input {...field} id="annee" className="p-2 w-full form__input" />
        )}
      />
      {errors.annee && <p className="text-red-500">{errors.annee.message}</p>}
    </div>
  </div>
  );
};

export default StepOne;
