import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// Import your logo image
import logo from "../logo.jpeg";

function OnboardingForm() {
  const initialFormData = {
    name: "",
    email: "",
    password: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [successMessage, setSuccessMessage] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Replace 'YOUR_API_ENDPOINT' with the actual endpoint
    fetch("https://ohunkohun.000webhostapp.com/csc407_project/api/register/", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams(formData).toString(),
    })
      .then((response) => {
        if (response.ok) {
          console.log(response);
          console.log("Data successfully sent to the API!");
          setSuccessMessage("Registration successful!");

          // Use navigate to go to the login page
          navigate("/loginpage");
        } else {
          console.log(response);
          console.error("Failed to send data to the API.");
        }
      })
      .catch((error) => {
        console.error(
          "An error occurred while sending data to the API:",
          error
        );
      });
  };

  return (
    <div
      className="container-fluid d-flex align-items-center justify-content-center"
      style={{
        minHeight: "100vh",
        backgroundImage: `url(https://source.unsplash.com/featured/?technology,code,programming)`,
        backgroundSize: "cover",
      }}
    >
      <div className="card p-4" style={{ width: "300px" }}>
        {/* Logo and Title */}
        <div className="text-center mb-4">
          <img
            src={logo}
            alt="Logo"
            style={{ width: "50px", height: "50px" }}
          />
          <h2 className="mt-2">Register Here</h2>
        </div>

        {successMessage && (
          <div>
            <p>{successMessage}</p>
            <button
              className="btn btn-link"
              onClick={() => navigate("/loginpage")}
            >
              Click here to login
            </button>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit}>
          <label className="mb-3">
            Name:
            <input
              className="form-control"
              type="text"
              name="name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
          </label>
          <label className="mb-3">
            Email:
            <input
              className="form-control"
              type="email"
              name="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </label>
          <label className="mb-3">
            Password:
            <input
              className="form-control"
              type="password"
              name="password"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
            />
          </label>
          <button className="btn btn-primary w-100" type="submit">
            Submit
          </button>
          <p>Already have an account?</p>
          <button
            className="btn btn-primary w-100"
            type="button"
            onClick={() => navigate("/loginpage")}
          >
            Login{" "}
          </button>
        </form>
      </div>
    </div>
  );
}

export default OnboardingForm;
