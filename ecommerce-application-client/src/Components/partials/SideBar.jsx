
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Admin Panel</h2>
      <ul >
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/addcategory">Add Category</Link></li>
        <li><Link to="/addproduct">Add Product</Link></li>
        <li><Link to="/addorder">Orders</Link></li>
        
      </ul>
    </div>
  );
};

export default Sidebar;
