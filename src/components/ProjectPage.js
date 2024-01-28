import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
//import OnboardingForm from "./OnboardingForm";
import { Link } from "react-router-dom";

const studentData = [
  { id: 1, name: "Caleb" },
  { id: 2, name: "Emmanuel" },
  { id: 3, name: "Jesus" },
  { id: 3, name: "Ifeoye" },
  { id: 3, name: "Unknown" },
];

const ProjectPage = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        paddingTop: "10rem",
        alignItems: "center",
      }}
    >
      <div
        className="m-auto w-50 justify-content-center "
        style={{
          Height: "50%",
          border: "5px solid black",
          padding: "5%",
          // backgroundColor: "yellow",
        }}
      >
        <h1 style={{ margin: "auto", textAlign: "center", color: "navy" }}>
          AGILE DEVOPS GROUP
        </h1>
        <br></br>
        <h6
          style={{
            margin: "auto",
            textAlign: "center",
            color: "navy",
            paddingBottom: "1rem",
          }}
        >
          {" "}
          Kindly click on the button below to go to the major Project
        </h6>
        <ul
          style={{
            display: "flex",
            margin: "auto",
            textAlign: "center",
            paddingBottom: "1rem",
          }}
        >
          {studentData.map((person) => (
            <li key={person.id} style={{ marginLeft: "8%" }}>
              {person.name}
            </li>
          ))}
        </ul>

        <Link to="/onboardingform">
          <button
            style={{
              marginLeft: "15%",
              textAlign: "center",
              width: "70%",
              backgroundColor: "navy",
              color: "white",
              display: "inline-block",
            }}
            type="button"
            className="btn btn-outline-primary"
          >
            View
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProjectPage;
