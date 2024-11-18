import { useState } from "react";
import Navbar from "../../Components/partials/Navbar";
import ProductTable from "../../Components/common/table/Tables";
import Footer from "../../Components/partials/Footer";
import Sidebar from "../../Components/partials/SideBar";
import { axiosInstance } from "../../utils/config/apiConfig";

const Products = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productQuantity, setProductQuantity] = useState("");
  const [categoryName, setCategoryName] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  const addProduct = async (e) => {
    e.preventDefault(); // Prevent form submission reload
    try {
      const response = await axiosInstance.post("/product/create", {
        name: productName,
        description: productDescription,
        price: productPrice,
        quantity: productQuantity,
        category: categoryName,
      });
      console.log("Response:", response.data);
      if (response.data.success) {
        setSuccess("Product added successfully!");
        setError(null);
        // Clear form fields
        setProductName("");
        setProductDescription("");
        setProductPrice("");
        setProductQuantity("");
        setCategoryName("");
      } else {
        setError("Failed to add product.");
        setSuccess(null);
      }
    } catch (error) {
      console.error("Error adding product:", error);
      setError("Failed to add product.");
      setSuccess(null);
    }
  };

  return (
    <>
      <div className="dashboard-layout">
        {isSidebarVisible && <Sidebar />}
        <div className="main-content">
          <Navbar toggleSidebar={toggleSidebar} />
          <div className="content">
            <h1 className="items-center justify-center">Add Product</h1>
            <div className="flex items-center justify-center h-screen">
              <form  className="w-full max-w-lg bg-slate-300 mb-[80px] rounded p-4">
                <div className="form-row gap-4">
                  <div className="flex flex-col form-group gap-4">
                    <label htmlFor="categoryName">Category Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="categoryName"
                      value={categoryName}
                      onChange={(e) => setCategoryName(e.target.value)}
                      placeholder="Category Name"
                      required
                    />
                    <label htmlFor="productName">Product Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="productName"
                      value={productName}
                      onChange={(e) => setProductName(e.target.value)}
                      placeholder="Product Name"
                      required
                    />
                    <label htmlFor="productDescription">Product Description</label>
                    <input
                      type="text"
                      className="form-control"
                      id="productDescription"
                      value={productDescription}
                      onChange={(e) => setProductDescription(e.target.value)}
                      placeholder="Product Description"
                      required
                    />
                    <label htmlFor="productPrice">Product Price</label>
                    <input
                      type="number"
                      className="form-control"
                      id="productPrice"
                      value={productPrice}
                      onChange={(e) => setProductPrice(e.target.value)}
                      placeholder="Product Price"
                      required
                    />
                    <label htmlFor="productQuantity">Product Quantity</label>
                    <input
                      type="number"
                      className="form-control"
                      id="productQuantity"
                      value={productQuantity}
                      onChange={(e) => setProductQuantity(e.target.value)}
                      placeholder="Product Quantity"
                      required
                    />
                  </div>
                </div>
                <button type="submit" className="btn btn-primary m-3" onClick={addProduct}>
                  Add Product
                </button>
                {error && <p className="error text-red-500">{error}</p>}
                {success && <p className="success text-green-500">{success}</p>}
              </form>
            </div>
            <ProductTable />
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Products;
