import React from "react";
import "../pages";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardHeader,
  MDBCardFooter,
  MDBBtn,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";

// profile picture and about me
import ProfilePic from "/src/assets/reikenstuartProfileImg.png";

export default function AboutMe() {
  return (
    <div>
      <div>
        <div className="aboutMe aboutMeContainer">
          <img
            src={ProfilePic}
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
            {/* <br />
        I am excited to solve real-world problems with my applications.
        <br />
        I have recently completed a full-stack web development course at the
        University of Utah.
        <br />
        This is where I gained invaluable experience in React JS, Javascript{" "}
        <br />
        TypeScript, APIs as well as HTML and CSS. */}
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
            {/* <p
          style={{
            fontSize: "15px",
          }}
        >
          Competencies: JavaScript ES6+, CSS3, HTML5, SQL, NoSQL
          <br /> MySQL, MongoDB, GitHub, Express, React.js <br /> Node.js,
          Handlebars, JQuery, Bootstrap MUI- Material Design <br /> CSS
          Framework, Client-Side and 3rd Party APIs.
        </p> */}
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
              Full-stack web developer with a background in sales and management.
              Branching off in to a new and exciting direction with a focus on
              building practical, intuitive and user-friendly web applications
              which solve real-world problems, with emphasis on mobile-first
              design and development. Experience in JavaScript, Bootstrap,
              React.js, MongoDB, NoSQL, SQL, Express.js, React j.s and Node.js,
              as well as responsive web design. Soft-skills gained from previous
              employment include project management, leadership, teamwork and
              communication. I’m excited to use my skills as part of a
              quality-driven team to build better experiences for web-users.
              <br />
              <br />
              My other interests include language learning, especially Spanish.
              I have also been playing competitive sports since I was 4 years old 
              with a primary focus on Basketball. My biggest passion in life is my 
              family and I enjoy life with my wife and two children.
              
            </MDBCardText>
            <MDBBtn href="#portfolio">My Apps</MDBBtn>
          </MDBCardBody>
          <MDBCardFooter className="text-muted"></MDBCardFooter>
        </MDBCard>
      </div>
    </div>
  );
}
