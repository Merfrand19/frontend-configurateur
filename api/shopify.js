import 'dotenv/config'; // Ajoutez ceci tout en haut du fichier

export default async function handler(req, res) {
  const API_URL = process.env.VITE_SHOPIFY_GRAPHQL_URI;
  const ACCESS_TOKEN = process.env.VITE_SHOPIFY_STOREFRONT_ACCESS_TOKEN;

  if (!API_URL || !ACCESS_TOKEN) {
    return res.status(500).json({ error: 'Missing API URL or access token' });
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
