import React from 'react';
import { Controller } from 'react-hook-form';
import basiqueImage from '../../assets/basique.png';
import chromeImage from '../../assets/chrome.png';
import holographiqueImage from '../../assets/holographique.png';
import brillanteImage from '../../assets/brillante.png';
import matteImage from '../../assets/matte.png';
import pailleteeImage from '../../assets/pailletee.png';

const StepFive = ({ control, errors }) => {
  const materials = [
    { label: 'Basique', value: 'basique', image: basiqueImage },
    { label: 'Chrome', value: 'chrome', image: chromeImage },
    { label: 'Holographique', value: 'holographique', image: holographiqueImage },
  ];

  const finishes = [
    { label: 'Brillante', value: 'brillante', image: brillanteImage },
    { label: 'Matte', value: 'matte', image: matteImage },
    { label: 'Pailletée', value: 'pailletee', image: pailleteeImage },
  ];

  return (
    <div className="p-6">
      <h2 className="form_h2">Matière</h2>

      {/* Sélection de la matière */}
      <Controller
        name="matiere"
        control={control}
        render={({ field }) => (
          <div className="flex flex-nowrap justify-start gap-4 mb-6">
            {materials.map((material) => (
              <div
                key={material.value}
                className={`flex flex-col items-center justify-center w-1/3 p-2 cursor-pointer transition-all border rounded-lg ${
                  field.value === material.value ? 'border-black shadow-lg scale-105' : 'border-gray-300'
                }`}
                role="radio"
                aria-checked={field.value === material.value}
                tabIndex={0}
                onClick={() => field.onChange(material.value)}
                onKeyDown={(e) => e.key === 'Enter' && field.onChange(material.value)}
              >
                <div
                  className="w-full h-24 relative"
                  style={{
                    backgroundImage: `url(${material.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                >
                  {field.value === material.value && (
                    <div className="absolute top-2 right-2 bg-white shadow-md">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                        className="w-5 h-5 text-black"
                      >
                        <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-4 5a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 0 1 1.06-1.06l1.94 1.94 3.64-4.293z" />
                      </svg>
                    </div>
                  )}
                </div>
                <p className="text-sm text-center mt-1 font-medium">{material.label}</p>
              </div>
            ))}
          </div>
        )}
      />
      {errors.matiere && (
        <p className="text-red-500 text-sm mt-1">{errors.matiere.message}</p>
      )}

      {/* Sélection de la finition */}
      <h2 className="form_h2 mt-4">Finition</h2>
      <Controller
        name="finition"
        control={control}
        render={({ field }) => (
          <div className="flex flex-nowrap justify-start gap-4">
            {finishes.map((finish) => (
              <div
                key={finish.value}
                className={`flex flex-col items-center justify-center w-1/3 p-2 cursor-pointer transition-all border rounded-lg ${
                  field.value === finish.value ? 'border-black shadow-lg scale-105' : 'border-gray-300'
                }`}
                role="radio"
                aria-checked={field.value === finish.value}
                tabIndex={0}
                onClick={() => field.onChange(finish.value)}
                onKeyDown={(e) => e.key === 'Enter' && field.onChange(finish.value)}
              >
                <div
                  className="w-full h-24 relative"
                  style={{
                    backgroundImage: `url(${finish.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                >
                  {field.value === finish.value && (
                    <div className="absolute top-2 right-2 bg-white shadow-md">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                        className="w-5 h-5 text-black"
                      >
                        <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-4 5a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 0 1 1.06-1.06l1.94 1.94 3.64-4.293z" />
                      </svg>
                    </div>
                  )}
                </div>
                <p className="text-sm text-center mt-1 font-medium">{finish.label}</p>
              </div>
            ))}
          </div>
        )}
      />
      {errors.finition && (
        <p className="text-red-500 text-sm mt-1">{errors.finition.message}</p>
      )}
    </div>
  );
};

export default StepFive;
