import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// Replace the placeholder with the actual Unsplash URL for the technology background image
const backgroundImageUrl = "https://source.unsplash.com/1920x1080/?technology";

function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://ohunkohun.000webhostapp.com/csc407_project/api/login/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: new URLSearchParams({ email, password }).toString(),
        }
      );

      if (response.ok) {
        console.log("Login successful!");
        // Redirect to dashboard
        navigate("/dashboard");
      } else {
        const errorData = await response.json();
        setError(errorData.message || "Login failed");
        console.error("Login failed:", errorData);
      }
    } catch (error) {
      setError("An error occurred during login");
      console.error("An error occurred during login:", error);
    }
  };

  return (
    <div
      className="container-fluid d-flex align-items-center justify-content-center"
      style={{
        minHeight: "100vh",
        backgroundImage: `url(${backgroundImageUrl})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        className="card p-4"
        style={{
          width: "300px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          backgroundColor: "rgba(255, 255, 255, 0.8)", // Set a transparent white background for better readability
        }}
      >
        <h2 className="text-center mb-4">Login</h2>
        {error && <p className="text-danger text-center mb-3">{error}</p>}
        <form onSubmit={handleSubmit}>
          <label className="mb-3">
            Email:
            <input
              className="form-control"
              type="email"
              value={email}
              onChange={handleEmailChange}
              required
            />
          </label>
          <label className="mb-3">
            Password:
            <input
              className="form-control"
              type="password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
          </label>
          <button className="btn btn-primary w-100" type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
