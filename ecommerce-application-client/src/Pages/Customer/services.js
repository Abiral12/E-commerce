import { axiosInstance } from "../../utils/config/apiConfig";

export const product = async () => {
  try {
    console.log("Token:", localStorage.getItem("token"));
    const response = await axiosInstance.get('product');
    console.log("Full Response:", response);
    return response; // Return the full response, not just response.data
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};
