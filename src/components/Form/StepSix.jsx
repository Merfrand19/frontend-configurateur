import React from 'react';
import { Controller } from 'react-hook-form';
import productImage from '../../assets/product.png';

const StepSix = ({ control, errors }) => {
  // Liste des produits simulés
  const products = [
    { id: '1', name: 'Kit déco bâton fourche', price: '100€', image: productImage },
    { id: '2', name: 'Kit déco bâton fourche', price: '100€', image: productImage },
    { id: '3', name: 'Kit déco bâton fourche', price: '100€', image: productImage },
    { id: '4', name: 'Kit déco bâton fourche', price: '100€', image: productImage },
    { id: '5', name: 'Kit déco bâton fourche', price: '100€', image: productImage },
  ];

  return (
    <div className="p-6">
      <h2 className="form_h2 mb-4">Ajouter des options</h2>

      {/* Sélection des produits */}
      <Controller
        name="selectedProduct"
        control={control}
        render={({ field }) => (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
            {products.map((product) => (
              <div
                key={product.id}
                className={`flex flex-col items-center justify-center cursor-pointer transition-all border rounded-lg ${
                  field.value === product.id ? 'border-black shadow-lg scale-105' : 'border-gray-300'
                }`}
                role="radio"
                aria-checked={field.value === product.id}
                tabIndex={0}
                onClick={() => field.onChange(product.id)}
                onKeyDown={(e) => e.key === 'Enter' && field.onChange(product.id)}
              >
                <div
                  className="w-full h-24 relative"
                  style={{
                    backgroundImage: `url(${product.image})`,
                    backgroundSize: 'contain',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                  }}
                >
                  {field.value === product.id && (
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
                <p className="text-sm text-center mt-2 font-medium">{product.name}</p>
                <p className="text-sm text-center text-gray-500">{product.price}</p>
              </div>
            ))}
          </div>
        )}
      />
      {errors.selectedProduct && (
        <p className="text-red-500 text-sm mt-2">{errors.selectedProduct.message}</p>
      )}
    </div>
  );
};

export default StepSix;
