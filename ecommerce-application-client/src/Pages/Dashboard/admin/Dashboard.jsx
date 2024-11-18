import { useState } from "react";
import Sidebar from "../../../Components/partials/SideBar";
import Navbar from "../../../Components/partials/Navbar";
import { Link } from "react-router-dom";
import Footer from "../../../Components/partials/Footer";
import ProductTable from "../../../Components/common/table/Tables";

const Dashboard = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {isSidebarVisible && <Sidebar />}
      <div className="flex-grow flex flex-col">
        <Navbar toggleSidebar={toggleSidebar} />
        <div className="flex-grow p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {/* Product Card */}
            <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Link to={"/addproduct"} className="block p-4 text-center">
                <h3 className="text-xl font-semibold text-gray-800">Product</h3>
                <p className="hidden sm:block text-blue-600">
                  Manage your products.
                </p>
              </Link>
            </div>

            {/* User Card */}
            <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Link to={"/adduser"} className="block p-4 text-center">
                <h3 className="text-xl font-semibold text-gray-800">User</h3>
                <p className="hidden sm:block text-blue-600">
                  Manage users and their roles.
                </p>
              </Link>
            </div>

            {/* Order Card */}
            <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Link to={"/addorder"} className="block p-4 text-center">
                <h3 className="text-xl font-semibold text-gray-800">Order</h3>
                <p className="hidden sm:block text-blue-400">
                  Track orders and payments.
                </p>
              </Link>
            </div>
          </div>
          {/* User Information Table */}
          <h3 className="block sm:hidden text-lg font-semibold text-amber-400 mb-4">
            Users Information
          </h3>
          <ProductTable />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Dashboard;
