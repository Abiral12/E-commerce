import  { useEffect, useState } from 'react';
import './table.css';
import { axiosInstance } from '../../../utils/config/apiConfig';

const ProductTable = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axiosInstance.get('/product', {
          headers: {
            'Cache-Control': 'no-cache', 
          },
        });
        
        // Check the response structure and set products from allProduct
        console.log('Response data:', response.data);
        if (response.data.success) {
          setProducts(response.data.allProduct);
        } else {
          setError('Failed to fetch products.');
        }
      } catch (error) {
        console.error('Error fetching products:', error);
        setError('Failed to fetch products.');
      }
    };

    fetchProducts();
  }, []);

  console.log('Products in state:', products); // Debugging line

  return (
    <div className="product-table-container">
      <h2>Product List</h2>
      {error && <p className="error">{error}</p>}
      <table className="product-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            {/* If you have a quantity field, you can add it here */}
          </tr>
        </thead>
        <tbody>
          {products.length > 0 ? (
            products.map((product) => (
              <tr key={product._id}> {/* Use the unique _id for key */}
                <td>{product.name}</td>
                <td>${product.price}</td>
                {/* If you have a quantity field, you can display it here */}
                <td>{product.quantity}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="2">No products available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
