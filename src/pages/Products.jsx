import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const products = [
  { id: 1, name: 'Primer', price: 23.900, brand: 'Maybelline', description: 'Base perfecta para un maquillaje duradero', image: 'https://cdn.alexandar-cosmetics.com/media/cache/t760/images/products/665f00e7d2146_40239a.jpg' },
  { id: 2, name: 'Agua de rosas', price: 35.600, brand: 'LOreal Paris ', description: 'Prepara tu piel para una aplicación suave', image: 'https://images-eu.ssl-images-amazon.com/images/I/71TBusPLW7L._AC_UL600_SR600,600_.jpg' },
  { id: 3, name: 'Polvo Compacto', price: 25.700, brand: 'Maybelline', description: 'Cubre imperfecciones con un acabado natural', image: 'https://ettos.co/cdn/shop/files/120_3c0fe2c6-7791-4713-9d55-7e7f588d5502.webp?v=1723153123' },
  { id: 4, name: 'Barra de labios', price: 19.900, brand: 'ESSENCE', description: 'Di “hola” a la barra de labios en un ligero tono nude cálido!.', image: 'https://www.druni.es/media/catalog/product/4/8/4839.jpg' },
  { id: 5, name: 'Rimmel London', price: 14.900, brand: 'London', description: 'Maquillaje para cejas', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGNDP2_vCPfp-Ugum21iTOP5lDkhPq65ToKw&s' },

];

function Products() {
  const [filter, setFilter] = useState('');

  const filteredProducts = products.filter(product => 
    product.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h1>Nuestros Productos</h1>
      <input 
        type="text" 
        placeholder="Buscar productos..." 
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="product-filter"
      />
      <div className="product-list">
        {filteredProducts.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <h2>{product.name}</h2>
            <p>{product.brand}</p>
            <p>{product.description}</p>
            <p className="price">${product.price.toFixed(3)}</p>

            <Link to={`/product/${product.id}`} className="buy-button">Comprar</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;