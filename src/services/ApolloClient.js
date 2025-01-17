import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

const client = new ApolloClient({
  link: new HttpLink({
    uri: 'https://merfrand-test.myshopify.com/api/2023-01/graphql.json',
    headers: {
      'X-Shopify-Storefront-Access-Token': 'df97e27982b96a6f6fa53ab9e9353117',
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
