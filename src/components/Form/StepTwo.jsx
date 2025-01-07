import React from 'react';
import { Controller } from 'react-hook-form';


const StepTwo = ({ control, errors }) => {
  return (
    <div className="mb-4">
      <h2 className='form_h2'>Carénages</h2>
      {/* Champ Origine */}
      <div className="mb-4">
                    <label htmlFor="origine" className="block text-sm font-medium mb-2 form_label">Origine</label>
                    <Controller
                      name="origine"
                      control={control}
                      defaultValue=""
                      render={({ field }) => (
                        <select
                          {...field}
                          id="origine"
                          className="form__input p-2 w-full "
                        >
                          <option value="">origine</option>
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
                    {errors.origine && <p className="text-red-500 text-sm mt-1">{errors.origine.message}</p>}
          </div>

      {/* Champ Numéro de téléphone */}
      <div className="mb-4">
              <label htmlFor="gardeBoue" className="block text-sm font-medium mb-2 form_label">Garde Boue</label>
              <Controller
                name="gardeBoue"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <select
                    {...field}
                    id="gardeBoue"
                    className="form__input p-2 w-full "
                  >
                    <option value="">Garde Boue</option>
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
              {errors.gardeBoue && <p className="text-red-500 text-sm mt-1">{errors.gardeBoue.message}</p>}
    </div>


                <div className="mb-6">
                        <label className="block text-sm font-medium mb-2 form_label">Moteur</label>
                        <Controller
                          name="moteur"
                          control={control}
                          defaultValue={[]}
                          render={({ field: { value, onChange } }) => (
                            <div className="flex justify-between">
                              {['AM6', 'EURO'].map((option, index) => (
                                <label key={index} className="flex items-center space-x-2 form__input w-2/5 p-2 justify-between">
                                  <span>{option}</span>
                                  <input
                                    type="checkbox"
                                    value={option}
                                    
                                    checked={value.includes(option)}
                                    onChange={(e) => {
                                      if (e.target.checked) {
                                        onChange([...value, option]); 
                                      } else {
                                        onChange(value.filter((v) => v !== option)); // Retire l'option si décochée
                                      }
                                    }}
                                    className="h-4 w-4"
                                  />
                                </label>
                              ))}
                            </div>
                          )}
                        />
                        {errors.moteur && <p className="text-red-500 text-sm mt-1">{errors.moteur.message}</p>}
                      </div>


    </div>
  );
};

export default StepTwo;