import React, { useEffect, useState } from "react";
import { Controller } from "react-hook-form";
import { gql, useQuery, useApolloClient } from "@apollo/client";

const GET_OPTION_PRODUCTS_METAOBJECT = gql`
  query {
    metaobjects(type: "produit_en_option", first: 10) {
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

const GET_PRODUCT_DETAILS = gql`
  query GetProductDetails($id: ID!) {
    product(id: $id) {
      id
      title
      priceRange {
        minVariantPrice {
          amount
          currencyCode
        }
      }
      featuredImage {
        url
      }
      variants(first: 1) {
        edges {
          node {
            id
          }
        }
      }
    }
  }
`;

const StepSix = ({ control, errors }) => {
  const client = useApolloClient();
  const { data, loading, error } = useQuery(GET_OPTION_PRODUCTS_METAOBJECT);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const extractIdFromGid = (gid) => {
      const match = gid.match(/\/([^/]+)$/);
      return match ? match[1] : gid; // Retourne l'ID extrait ou le GID si pas de correspondance
    };

    const fetchProductDetails = async (productId) => {
      try {
        const { data } = await client.query({
          query: GET_PRODUCT_DETAILS,
          variables: { id: productId },
        });

        const variantIdGid =
          data.product.variants.edges[0]?.node.id || null; // ID de la première variante
        const variantId = extractIdFromGid(variantIdGid); // Extraction de l'ID

        return {
          id: variantId, // Utilisation de l'ID de la variante
          name: data.product.title,
          price: `${data.product.priceRange.minVariantPrice.amount} ${data.product.priceRange.minVariantPrice.currencyCode}`,
          image: data.product.featuredImage?.url || "https://via.placeholder.com/150",
        };
      } catch (error) {
        console.error(`Erreur lors de la récupération des détails du produit ${productId}:`, error);
        return null;
      }
    };

    const loadProducts = async () => {
      if (data) {
        const productsPromises = data.metaobjects.edges.map(async ({ node }) => {
          const productIdField = node.fields.find((field) => field.key === "product");
          if (productIdField) {
            return fetchProductDetails(productIdField.value);
          }
          return null;
        });

        const resolvedProducts = await Promise.all(productsPromises);
        setProducts(resolvedProducts.filter((product) => product !== null));
      }
    };

    loadProducts();
  }, [data, client]);

  if (loading) return <p>Chargement des options...</p>;
  if (error) return <p>Erreur : {error.message}</p>;

  return (
    <div className="p-2">
      <h2 className="form_h2 mb-4">Ajouter des options</h2>

      <Controller
        name="selectedProducts"
        control={control}
        render={({ field }) => (
          <div className="p-2 grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
            {products.map((product) => {
              const isSelected = field.value?.includes(product.id);

              return (
                <div
                  key={product.id}
                  className={`p-1 relative flex flex-col items-center justify-center cursor-pointer transition-all border rounded-lg ${
                    isSelected ? "border-black shadow-lg scale-105" : "border-gray-300"
                  }`}
                  role="checkbox"
                  aria-checked={isSelected}
                  tabIndex={0}
                  onClick={() => {
                    const updatedValue = isSelected
                      ? field.value.filter((id) => id !== product.id)
                      : [...(field.value || []), product.id];
                    field.onChange(updatedValue);
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      const updatedValue = isSelected
                        ? field.value.filter((id) => id !== product.id)
                        : [...(field.value || []), product.id];
                      field.onChange(updatedValue);
                    }
                  }}
                >
                  <div
                    className="w-full h-36 relative overflow-hidden"
                    style={{
                      backgroundImage: `url(${product.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      borderRadius: "3px",
                    }}
                  >
                    {isSelected && (
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

                  <p className="mt-2 text-sm text-[13px] md:text-[15px] xl:text-[18px] text-left w-full font-medium text-label-text">{product.name}</p>
                  <p className="text-sm text-[13px] md:text-[15px] xl:text-[18px] text-left w-full text-label-text">{product.price}</p>
                </div>
              );
            })}
          </div>
        )}
      />
      {errors.selectedProducts && (
        <p className="text-red-500 text-sm mt-1">{errors.selectedProducts.message}</p>
      )}
    </div>
  );
};

export default StepSix;
