import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';


const client = new ApolloClient({
  link: new HttpLink({
    uri: import.meta.env.VITE_SHOPIFY_GRAPHQL_URI,
    headers: {
      'X-Shopify-Storefront-Access-Token': import.meta.env.VITE_SHOPIFY_STOREFRONT_ACCESS_TOKEN,
      'Content-Type': 'application/json',
    },
  }),
  cache: new InMemoryCache({
    typePolicies: {
      Metaobject: {
        fields: {
          fields: {
            read(fieldsArray) {
              return fieldsArray.reduce((acc, field) => {
                acc[field.key] = field.value;
                return acc;
              }, {});
            },
          },
        },
      },
    },
  }),
});

export default client;
