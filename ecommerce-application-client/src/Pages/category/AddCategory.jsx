import { useState } from "react";
import CategoryTable from "../../Components/common/table/CategoryTable";
import { axiosInstance } from "../../utils/config/apiConfig";
import Sidebar from "../../Components/partials/SideBar";
import Navbar from "../../Components/partials/Navbar";
import Footer from "../../Components/partials/Footer";

const AddCategory = () => {
    const [newCategoryName, setNewCategoryName] = useState('');
    const [error, setError] = useState(null);
    const [isSidebarVisible, setIsSidebarVisible] = useState(true);

    const toggleSidebar = () => {
        setIsSidebarVisible(!isSidebarVisible);
    };

    const addCategory = async () => {
        try {
            const response = await axiosInstance.post('/category/create', { name: newCategoryName });
            if (response.data.success) {
                setNewCategoryName(''); // Clear input field after successful add
                setError(null);
                // Optionally, refresh the table by triggering a re-fetch in CategoryTable component
            } else {
                setError('Failed to add category1.');
            }
        } catch (error) {
            console.error('Error adding category:', error);
            setError('Failed to add category2.');
        }
    };

    return (
        <>
            <div className="dashboard-layout">
      {isSidebarVisible && <Sidebar />}
      <div className="main-content">
        <Navbar toggleSidebar={toggleSidebar} />
        <div className="content">
                    <div className="m-4 flex flex-col gap-2">
                        <label><h1>Add Category</h1></label>
                        <input 
                            type="text" 
                            id="default-input" 
                            value={newCategoryName}
                            onChange={(e) => setNewCategoryName(e.target.value)}
                            className="bg-gray-50 border border-gray-300 text-gray-900 w-[250px] h-8 text-sm rounded-lg"
                        />
                        <button onClick={addCategory} className="btn btn-primary w-[250px]">Add Category</button>
                        {error && <p className="error">{error}</p>}
                    </div>
                    <CategoryTable />
                </div>
                <Footer/>
                </div>
            </div>
        </>
    );
};

export default AddCategory;
