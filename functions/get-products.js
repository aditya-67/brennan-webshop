/*
 * This function loads product data and returns it for use in the UI.
 */
const products = [{
    "id": 1,
    "sku": "DEMO001",
    "name": "Great Kite",
    "description": "Look at this pretty kite.",
    "image": "https://images.unsplash.com/photo-1526836049599-179b98d384d9?auto=format&fit=crop&w=600&h=600&q=80",
    "amount": 100,
    "currency": "USD"
  },
  {
    "id": 2,
    "sku": "DEMO002",
    "name": "Another good kite",
    "description": "Good kites here.",
    "image": "https://images.unsplash.com/photo-1520111453936-54e59fb3bbd4?auto=format&fit=crop&w=600&h=600&q=80",
    "amount": 150,
    "currency": "USD"
  }
]

exports.handler = async () => {
  return {
    statusCode: 200,
    body: JSON.stringify(products),
  };
};