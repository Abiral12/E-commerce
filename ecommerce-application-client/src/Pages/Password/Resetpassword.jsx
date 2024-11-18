import { useState } from "react";
import { useParams } from "react-router-dom"; // Assuming you're using React Router
import { axiosInstance } from "../../utils/config/apiConfig";

const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);

  const { token } = useParams(); // Retrieve the token from the URL

  const handleResetPassword = async (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    try {
      const response = await axiosInstance.post("/auth/reset-password", {
        token,
        password: newPassword,
      });
      if (response.data.success) {
        setMessage("Password reset successfully! You can now log in.");
        setError(null);
      } else {
        setMessage(null);
        setError("Failed to reset password.");
      }
    } catch (err) {
      setMessage(null);
      setError(err.response?.data?.message || "An error occurred.");
    }
  };

  return (
    <div className="reset-password-container">
      <h1>Reset Password</h1>
      <form onSubmit={handleResetPassword}>
        <div>
          <label htmlFor="newPassword">New Password:</label>
          <input
            type="password"
            id="newPassword"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Reset Password</button>
      </form>
      {message && <p className="success">{message}</p>}
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default ResetPassword;
