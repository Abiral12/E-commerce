// components/Navbar.jsx


import { MdOutlineShoppingCart } from "react-icons/md";
import { logout } from "../../Pages/Authentication/services";
import Button from "../common/Button";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";


const Navbar = ({ toggleSidebar }) => {
  return (

    <nav className="bg-blue-600 p-4 text-white flex justify-between">
      <button onClick={toggleSidebar} className="text-2xl">
        ☰
      </button>

      <Link className="navbar-brand" to="/customer-dashboard">
       </Link>
  <form className="bg-slate-100 p-3 rounded-lg flex items-center">
        <input type='text' placeholder='Search...' 
        className="bg-transparent focus:outline-none w-24 sm:w-64 text-slate-600" 
       />
       <FaSearch className='text-slate-600'/>
      </form>
      <div className="flex justify-center">
      <Link to="/customer-dashboard" className="nav-link" >Home</Link>
      

      </div>
     <div className="mt-3 flex ">
     <Button className="w-9 h-9" onClick={()=>{"/cart"}}><MdOutlineShoppingCart className='mr-2 w-7 h-7' /></Button>
      
      <Button onClick={logout} className="btn d-inline ms-auto bg-slate-50 btn-outline-success ml-2 mb-2" >Logout</Button>

     </div>
          

    </nav>
  );
};

export default Navbar;
