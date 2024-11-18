import { axiosInstance } from "../../utils/config/apiConfig";
import { clear } from "../../utils/config/storageConfig";

// Accept loginInfo as a parameter (email and password)
export const login = async (loginInfo) => {
  try {
    // Send loginInfo (email and password) as the request body
    const response = await axiosInstance.post('auth/login', loginInfo);
    console.log(response,"response <><><><<<>><>>>>>>><>>")
    return response; // Return the response to handle in the component
    
  } catch (error) {
    // Log the error if needed for debugging
    console.error("Login error: ", error);
    throw error; // Rethrow the error to handle it in the component
  }
};



export const register = async (formData) => {
  try {
    
    const response = await axiosInstance.post('auth/register', formData);
    return response;
  } catch (error) {
    console.error("Registration error: ", error);
    throw error;
  }
};


export const logout = () => {
  clear();
  window.location.href = '/';
};