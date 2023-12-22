import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardHeader,
  MDBCardFooter,
  MDBBtn,
} from "mdb-react-ui-kit";
import ProfileImage from "../assets/reikenstuartProfileImg.png";

const AboutMe = () => {
  return (
    <div>
      <div className="aboutMe aboutMeContainer">
        <img
          src={ProfileImage}  // Corrected the variable name to ProfileImage
          className="profile-picture"
          alt="profile"
          style={{
            paddingTop: "35px",
          }}
        />
        <p
          className="aboutMe text"
          style={{
            paddingTop: "35px",
            fontSize: "20px",
          }}
        >
          Hi there, I'm Reiken, and I am a full stack web developer.
          <br />
          You are welcome to look around.
          <br />
          Email me at 13rstuart7@gmail.com
          <br />
          <span>
            <a href="https://github.com/13rstuart7">GitHub {"   "} </a>
          </span>
          <span>
            <a href="https://www.linkedin.com/in/reiken-stuart-2273732a4/">
              LinkedIn {"   "}
            </a>
          </span>
          <span>
            <a href="https://docs.google.com/document/d/1NQ5PMCORTi9vUIIJXEZlBYEKpKIC3H5n/edit">
              CV{"   "}
            </a>
          </span>
          <br />
        </p>
      </div>
      <MDBCard
        alignment="center"
        className="myBackgroundcard w-auto p-3 text-start"
      >
        <MDBCardHeader>Let's work together</MDBCardHeader>
        <MDBCardBody style={{ backgroundColor: "#F2FCFA" }}>
          <MDBCardTitle>My Background</MDBCardTitle>
          <MDBCardText className="myBackgroundText">
            {/* Your background text */}
          </MDBCardText>
          <MDBBtn href="#portfolio">My Apps</MDBBtn>
        </MDBCardBody>
        <MDBCardFooter className="text-muted"></MDBCardFooter>
      </MDBCard>
    </div>
  );
};

export default AboutMe;
