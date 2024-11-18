import { useState, useEffect } from "react";
import Navbar from "../../Components/Customer/Navbar";
import Sidebar from "../../Components/Customer/Sidebar";
import Card from "../../Components/Customer/Card";
import Footer from "../../Components/partials/Footer";
import { product } from "./services";

const CustomerDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [products, setProducts] = useState([]); // State for storing fetched products

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const fetchProducts = async () => {
    try {
      const response = await product();
      console.log("Response Data:", response);
      setProducts(response.data?.allProduct || []); // Use optional chaining to avoid errors
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  // Fetch products when the component mounts
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-100 to-blue-50">
      {/* Navbar */}
      <Navbar toggleSidebar={toggleSidebar} />

      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />

      <div className="p-6">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">
            Welcome to Our Store
          </h1>
          <p className="text-gray-600 mt-2">
            Explore our collection of amazing products!
          </p>
        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.length > 0 ? (
            products.map((product) => (
              <Card
                key={product._id}
                image={product.photo || "https://via.placeholder.com/150"}
                productName={product.name}
                description={product.description}
                price={`$${product.price}`}
                quantity={product.quantity}
              />
            ))
          ) : (
            <div className="col-span-full text-center">
              <p className="text-gray-500 text-lg">No products available</p>
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default CustomerDashboard;
