// src/components/StepFour.jsx

import React, { useEffect, useState } from "react";
import { useLayoutContext } from "../../context/appContext";
import { Controller } from "react-hook-form";
import { gql, useQuery, useApolloClient } from "@apollo/client";

// Requête GraphQL pour récupérer un métaobjet spécifique (par exemple, de type "bike")
const GET_BIKE_METAOBJECT = gql`
  query {
    metaobjects(type: "bike", first: 11) {
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

// Requête GraphQL pour récupérer l'image à partir de son ID
const GET_IMAGE_SRC = gql`
  query GetImageSrc($id: ID!) {
    node(id: $id) {
      ... on MediaImage {
        image {
          src
        }
      }
    }
  }
`;

const StepFour = ({ control, errors }) => {
  const { setBike } = useLayoutContext();
  const client = useApolloClient();  // Récupère le client Apollo
  const { data, loading, error } = useQuery(GET_BIKE_METAOBJECT);
  const [colors, setColors] = useState([]);
  const [imageSources, setImageSources] = useState({});  // Pour stocker les URLs des images

  // Fonction pour récupérer l'URL de l'image à partir de son ID
  const fetchImageSrc = async (imageId) => {
    try {
      const { data } = await client.query({
        query: GET_IMAGE_SRC,
        variables: { id: imageId },
      });
      return data.node.image.src;
    } catch (error) {
      console.log(`Error fetching image with ID ${imageId}:`, error);
      throw error;  // On relance l'erreur pour pouvoir la capturer plus tard
    }
  };

  useEffect(() => {
    if (data) {
      // Récupérer les métaobjets et les transformer en un tableau de couleurs dynamiques
      console.log(data);
      const bikeColors = data.metaobjects.edges.map(({ node }) => {
        const color1 = node.fields.find((field) => field.key === "color_1")?.value || "#000000";
        const color2 = node.fields.find((field) => field.key === "color_2")?.value || "#FFFFFF";
        const label = node.fields.find((field) => field.key === "label")?.value || "Inconnu";
        const value = node.fields.find((field) => field.key === "value")?.value || "unknown";
        const imageId = node.fields.find((field) => field.key === "image")?.value || null;
        
        // Extraire l'ID du produit à partir du champ 'product'
        const productField = node.fields.find((field) => field.key === "product");
        const idProduct = productField ? productField.value.split("/").pop() : null;

        return {
          label,
          value,
          imageId,
          gradient: `linear-gradient(to top right, ${color1} 50%, ${color2})`,
          idProduct,  // Ajouter l'idProduct
        };
      });

      console.log("Bike Colors: ", bikeColors);  // Affichage du tableau bikeColors dans la console
      setColors(bikeColors);
    }
  }, [data]);

  useEffect(() => {
    // Récupérer les URLs des images une fois que les IDs sont disponibles
    colors.forEach(async (color) => {
      if (color.imageId && !imageSources[color.imageId]) {
        try {
          const src = await fetchImageSrc(color.imageId);
          //console.log(`Image URL for ${color.label}: ${src}`);  // Affiche l'URL de l'image dans la console
          setImageSources((prev) => ({
            ...prev,
            [color.imageId]: src,
          }));
        } catch (error) {
          console.log(`Error fetching image for ${color.label}:`, error);
        }
      }
    });
  }, [colors, imageSources]);

  if (loading) return <p>Chargement des informations de la moto...</p>;
  if (error) return <p>Erreur lors de la récupération de la moto : {error.message}</p>;

  return (
    <div className="p-2">
      <h2 className="form_h2">Couleur</h2>

      <Controller
        name="couleur"
        control={control}
        render={({ field }) => (
          <div className="grid grid-cols-4 gap-3">
            {colors.map((color) => (
              <div
                key={color.idProduct}
                className={`flex flex-col items-center justify-center cursor-pointer transition-all border rounded-lg p-1 ${
                  field.value === color.idProduct ? "border-black shadow-lg scale-105" : "border-gray-300"
                }`}
                role="radio"
                aria-checked={field.value === color.idProduct}
                tabIndex={0}
                onClick={() => {
                  field.onChange(color.idProduct);
                  setBike(imageSources[color.imageId]);
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    field.onChange(color.idProduct);
                    setBike(imageSources[color.imageId]);
                  }
                }}
              >
                <div
                  className="w-full h-20 rounded-md relative"
                  style={{
                    background: color.gradient,
                    borderRadius: "8px",
                  }}
                >
                  {field.value === color.idProduct && (
                    <div className="absolute top-1 right-1 bg-white shadow-md p-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                        className="w-4 h-4 text-black"
                      >
                        <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-4 5a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 0 1 1.06-1.06l1.94 1.94 3.64-4.293z" />
                      </svg>
                    </div>
                  )}
                </div>
                <p className="text-sm text-center mt-1 font-medium">{color.label}</p>
              </div>
            ))}
          </div>
        )}
      />
      {errors.couleur && (
        <p className="text-red-500 text-sm mt-1">{errors.couleur.message}</p>
      )}
    </div>
  );
};

export default StepFour;
