import React from "react";
import { useNavigate } from "react-router-dom";
const backgroundImageUrl = "https://source.unsplash.com/1920x1080/?technology";

function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/loginpage");
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
        className="container text-center mt-5"
        style={{ backgroundColor: "#f0f0f0", padding: "20px" }}
      >
        <h2>Welcome to the Dashboard!</h2>
        <p className="text-muted">You are welcome!!!</p>
        <button className="btn btn-danger" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
}

export default Dashboard;
