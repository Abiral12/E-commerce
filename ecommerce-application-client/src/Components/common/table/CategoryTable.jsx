import { useEffect, useState } from "react";

import './table.css';
import { axiosInstance } from "../../../utils/config/apiConfig";

const CategoryTable = () => {
    const [categories, setCategories] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await axiosInstance.get('/category', {
                    headers: { 'Cache-Control': 'no-cache' },
                });
                if (response.data.success) {
                    setCategories(response.data.categories);
                } else {
                    setError('Failed to fetch categories.');
                }
            } catch (error) {
                console.error('Error fetching categories:', error);
                setError('Failed to fetch categories.');
            }
        };
    
        fetchCategories();
    }, []);

    return (
        <div>
            <h2>Category List</h2>
            {error && <p className="error">{error}</p>}
            <table id="category-table" className="w-full border-black">
                <thead>
                    <tr>
                        <th>S.N</th>
                        <th>Category Name</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {categories.length > 0 ? (
                        categories.map((category, index) => (
                            <tr key={category._id}>
                                <td>{index + 1}</td>
                                <td>{category.name}</td>
                                <td>Edit</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="3">No category available</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default CategoryTable;
