import { Link } from "react-router-dom";
import Footer from "../partials/Footer";

const LoginForm = ({ loginInfo, setLoginInfo, handleSubmit }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginInfo({ ...loginInfo, [name]: value });
  };

  return (
    <>
      <div className="flex h-screen justify-center items-center bg-gray-100">
        <form 
          id="form" 
          onSubmit={handleSubmit} 
          className="w-full max-w-md bg-white p-6 rounded shadow-md"
        >
          <h2 className="text-2xl font-bold text-center mb-4">Login</h2>

          {/* Email input */}
          <div className="mb-4">
            <label htmlFor="exampleInputEmail1" className="block font-medium mb-2">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={loginInfo.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              required
            />
          </div>

          {/* Password input */}
          <div className="mb-4">
            <label htmlFor="exampleInputPassword1" className="block font-medium mb-2">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={loginInfo.password}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              id="exampleInputPassword1"
              required
            />
          </div>

          {/* Links for Forgot Password and Sign Up */}
          <div className="flex justify-between text-sm mb-4">
            <Link to="/forgot-password" className="text-blue-500 hover:underline">
              Forgot Password?
            </Link>
            <Link to="/signup" className="text-blue-500 hover:underline">
              Sign Up
            </Link>
          </div>

          {/* Sign In button */}
          <button
            type="submit"
            className="w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Sign In
          </button>
        </form>
      </div>

      <Footer />
    </>
  );
};

export default LoginForm;
