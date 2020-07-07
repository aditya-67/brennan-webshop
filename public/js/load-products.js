function createProductFromTemplate(item) {
  const template = document.querySelector('#product');
  const product = template.content.cloneNode(true);

  product.querySelector('h2').innerText = item.name;
  product.querySelector('.description').innerText = item.description;
  product.querySelector('.form').action = "./payment/"
  product.querySelector('[name=sku]').value = item.sku;
  product.querySelector('.price').innerText = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: item.currency,
  }).format((item.amount / 100).toFixed(2));

  const img = product.querySelector('img');
  img.src = item.image;
  img.alt = item.name;

  return product;
}

export async function loadProducts() {
  const data = await fetch('/.netlify/functions/get-products')
    .then((res) => res.json())
    .catch((err) => console.error(err));

  const container = document.querySelector('.products');

  data.forEach((item) => {
    const product = createProductFromTemplate(item);

    container.appendChild(product);
  });

}