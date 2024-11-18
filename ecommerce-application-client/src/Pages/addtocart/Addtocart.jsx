import  { useState } from 'react';

const App = () => {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);

      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      }

      return [...prevCart, { ...product, qty: 1 }];
    });
  };

  const handleBuyNow = (product) => {
    alert(`You have chosen to buy: ${product.name} for $${product.price}`);
    // Optionally, remove the product from the cart
    setCart((prevCart) => prevCart.filter((item) => item.id !== product.id));
  };

  return (
    <div>
      <ProductList onAddToCart={handleAddToCart} />
      <Cart cart={cart} onBuyNow={handleBuyNow} />
    </div>
  );
};

const ProductList = ({ onAddToCart }) => {
  const products = [
    { id: 1, name: 'Football', price: 5500, qty: 5 },
    { id: 2, name: 'Updated Product', price: 450000, qty: 300 },
    { id: 3, name: 'Test Product', price: 5500, qty: 50 },
  ];

  return (
    <div>
      <h1>Products</h1>
      <div style={{ display: 'flex', gap: '1rem' }}>
        {products.map((product) => (
          <div key={product.id} style={{ border: '1px solid #ccc', padding: '1rem', width: '200px' }}>
            <h3>{product.name}</h3>
            <p>Price: ${product.price}</p>
            <p>Qty: {product.qty}</p>
            <button onClick={() => onAddToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

const Cart = ({ cart, onBuyNow }) => {
  return (
    <div>
      <h2>Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cart.map((item, index) => (
            <li key={index} style={{ marginBottom: '1rem' }}>
              <h4>{item.name}</h4>
              <p>Price: ${item.price}</p>
              <p>Qty: {item.qty}</p>
              <button onClick={() => onBuyNow(item)}>Buy Now</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default App;
