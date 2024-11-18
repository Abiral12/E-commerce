import { useState } from "react";
import { register } from "../Authentication/services";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    address: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const signupresponse = await register(formData);
      if (signupresponse.status === 201) {
        navigate("/");
      } else {
        toast.error("Error Notification!" + e, { position: "bottom-left" });
      }
    } catch (error) {
      toast.error("Error Notification!" + error, { position: "bottom-left" });
    }
  };

  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-gray-100 to-gray-200">
        <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-8 border border-gray-200">
          <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Signup</h2>

          <form onSubmit={handleSubmit}>
            {/* Name Input */}
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 text-base p-2"
                required
              />
            </div>

            {/* Email Input */}
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 text-base p-2"
                required
              />
            </div>

            {/* Phone Number Input */}
            <div className="mb-4">
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 text-base p-2"
                required
              />
            </div>

            {/* Password Input */}
            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 text-base p-2"
                required
              />
            </div>

            {/* Address Input */}
            <div className="mb-4">
              <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                Address
              </label>
              <textarea
                id="address"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 text-base p-2"
                rows="3"
                required
              ></textarea>
            </div>

            {/* Button Section */}
            <div className="flex justify-between mt-6">
              {/* Go Back Button */}
              <button
                type="button"
                onClick={() => navigate(-1)} // Navigate back to the previous page
                className="bg-gray-500 text-white py-2 px-4 rounded-md text-base font-semibold hover:bg-gray-600 transition duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
              >
                Login
              </button>

              {/* Submit Button */}
              <button
                type="submit"
                className="bg-teal-600 text-white py-2 px-4 rounded-md text-base font-semibold hover:bg-teal-700 transition duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>

      
    </>
  );
};

export default Signup;
