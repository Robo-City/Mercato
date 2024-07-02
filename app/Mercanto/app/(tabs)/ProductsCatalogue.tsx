import React from 'react';
import './ProductCatalogue.css'; // Import your CSS file

const products = [
  { id: 1, name: 'Awesome Product 1', price: 29.99, image: 'product1.jpg' },
  { id: 2, name: 'Fantastic Product 2', price: 49.99, image: 'product2.jpg' },
  // Add more products here...
];

function ProductCard(props : any) {
  const { product } = props;
  return (
    <div className="product-card">
      <img src={require(`./assets/images/Adidas.png`)} alt="Authentic and legic shoe" />
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      {/* Add a button for details/add to cart etc. */}
    </div>
  );
}

function ProductCatalogue() {
  return (
    <div className="product-catalogue">
      <h2>Our Products</h2>
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ProductCatalogue;
