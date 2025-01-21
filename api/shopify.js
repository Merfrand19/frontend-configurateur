export async function handler(req, res) {
    const API_URL = import.meta.env.VITE_SHOPIFY_GRAPHQL_URI;
    const ACCESS_TOKEN = import.meta.env.VITE_SHOPIFY_STOREFRONT_ACCESS_TOKEN;
    console.log(API_URL, ACCESS_TOKEN);
  
    if (req.method !== 'POST') {
      return res.status(405).json({ error: 'Method Not Allowed' });
    }
  
    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Shopify-Storefront-Access-Token': ACCESS_TOKEN,
        },
        body: JSON.stringify(req.body),
      });
  
      const data = await response.json();
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ error: 'Something went wrong' });
    }
  }
  