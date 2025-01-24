// src/components/StepOne.jsx

import React, { useState, useEffect } from "react";
import { Controller } from "react-hook-form";
import { useLayoutContext } from "../../context/appContext";
import { gql, useQuery } from "@apollo/client";

const GET_BRANDS = gql`
  query {
    metaobjects(type: "brands", first: 16) {
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
const StepOne = ({ control, errors }) => {
  const { setBrand } = useLayoutContext();
  const { data, loading, error } = useQuery(GET_BRANDS);
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    if (data) {
      // Filtrer les noms des marques depuis la réponse GraphQL
      const fetchedBrands = data.metaobjects.edges.map((edge) => {
        const nameField = edge.node.fields.find((field) => field.key === "name");
        return nameField ? nameField.value : null;
      }).filter(Boolean); // Éliminer les valeurs null
      setBrands(fetchedBrands);
    }
  }, [data]);

  // if (loading) return <p>Chargement des marques...</p>;
  // if (error) return <p>Erreur lors de la récupération des marques: {error.message}</p>;

  return (
    <div className="mb-4">
      <h2 className="form_h2">Information sur votre moto</h2>
      <div className="mb-4">
        <label
          htmlFor="marque"
          className="block text-sm font-medium mb-2 form_label"
        >
          Marque
        </label>
        <Controller
          name="marque"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <select
              {...field}
              id="marque"
              className="form__input p-2 w-full"
              onChange={(e) => {
                field.onChange(e); 
                setBrand(e.target.value);
              }}
            >
              <option value="">Sélectionnez une marque</option>
              {brands.map((brand, index) => (
                <option key={index} value={brand}>
                  {brand}
                </option>
              ))}
            </select>
          )}
        />
        {errors.marque && (
          <p className="text-red-500 text-sm mt-1">{errors.marque.message}</p>
        )}
      </div>
      <div className="mb-4">
        <label
          htmlFor="modele"
          className="block text-sm mb-2 font-medium form_label"
        >
          Modèle
        </label>
        <Controller
          name="modele"
          control={control}
          render={({ field }) => (
            <input {...field} id="modele" className="p-2 w-full form__input" />
          )}
        />
        {errors.modele && (
          <p className="text-red-500 text-sm mt-1">{errors.modele.message}</p>
        )}
      </div>

      <div className="mb-4">
        <label htmlFor="annee" className="block text-sm mb-2 font-medium form_label">
          Année
        </label>
        <Controller
          name="annee"
          control={control}
          render={({ field }) => (
            <input {...field} id="annee" className="p-2 w-full form__input" />
          )}
        />
        {errors.annee && (
          <p className="text-red-500 text-sm mt-1">{errors.annee.message}</p>
        )}
      </div>
    </div>
  );
};

export default StepOne;