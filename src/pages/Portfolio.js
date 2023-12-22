//6 project cards inside.
import React from "react";
import { MDBBadge } from "mdb-react-ui-kit";
import "./pages.css";

import terseSocialMediaScreenshot from "../assets/terse-social-mediaScreenshot.png";
import WeatherDashboardScreenshot from "../assets/Weather-DashboardScreenshot.png";
import DayplannerScreenshot from "../assets/DayplannerScreenshot.png";
import PWDGeneratorScreenshot from "../assets/PWD-GeneratorScreenshot.png";
import textEditorScreenshot from "../assets/text-editorScreenshot.png";
import artBeatsScreenshot from "../assets/ArtBeats.png";

//JSX 6 cards.
export default function Portfolio() {
  return (
    <div class="row row-cols-1 row-cols-sm-3 g-4">
      <div className="col">
        <div className="card w-60 h-40 m-5">
        <img
          className="imgScreenshot"
          src={terseSocialMediaScreenshot}
          class="card-img-top"
          alt="Palm Springs Road"
        />
          <div className="card-body">
            <h5 className="card-title">Terse social Media App</h5>
            <p className="card-text">
             Using Terse, I can send and receive messages but they are only allowed to be one word. 
             It is fun to choose a word that is unique or descriptive of how I'm feeling or how my day is going.
            </p>
            <div className="d-flex justify-content-evenly">
              <a
                href="https://tersesocialmedia-production.up.railway.app/"
                className="btn btn-primary"
              >
                Website
              </a>
            </div>
            <div className="tersesocialmediaTechnologies">
              <MDBBadge pill className="mx-2" color="info" light>
                Node JS
              </MDBBadge>
              <MDBBadge pill className="mx-2" color="info" light>
                Javascript
              </MDBBadge>
              <MDBBadge pill className="mx-2" color="info" light>
                MongoDB
              </MDBBadge>
              <MDBBadge pill className="mx-2" color="info" light>
                React JS
              </MDBBadge>
              <MDBBadge pill className="mx-2" color="info" light>
                Express JS
              </MDBBadge>
              <MDBBadge pill className="mx-2" color="info" light>
                API - Server Side
              </MDBBadge>
              <MDBBadge pill className="mx-2" color="info" light>
                JWT Authentification
              </MDBBadge>
            </div>
          </div>
        </div>
      </div>

      <div className="col">
        <div className="card w-60 h-40 m-5">
          <img
            className="imgScreenshot"
            src={WeatherDashboardScreenshot}
            class="card-img-top"
            alt="Hollywood Sign on The Hill"
          />
          <div className="card-body">
            <h5 className="card-title">Weather Dashboard App</h5>
            <p className="card-text">
              Built using a third-party server-side Weather API, search for your
              your 5 day weather conditions of your favourite cities
            </p>
            <div className="d-flex justify-content-evenly">
              {/* links to github and deployed app */}
              <a
                href="https://13rstuart7.github.io/weather_dashboard/"
                className="btn btn-primary"
              >
                App
              </a>
              <a
                href="https://github.com/13rstuart7/weather_dashboard"
                className="btn btn-primary"
              >
                Github
              </a>
            </div>
            <MDBBadge
              pill
              className="mx-2"
              color="info"
              light
              style={{ margin: "23px" }}
            >
              HTML5
            </MDBBadge>
            <MDBBadge
              pill
              className="mx-2"
              color="info"
              light
              style={{ margin: "23px" }}
            >
              CSS
            </MDBBadge>
            <MDBBadge
              pill
              className="mx-2"
              color="info"
              light
              style={{ margin: "23px" }}
            >
              JavaScript
            </MDBBadge>
          </div>
        </div>
      </div>

      <div className="col">
        <div className="card w-60 h-40 m-5">
          <img
            className="imgScreenshot"
            src={textEditorScreenshot}
            class="card-img-top"
            alt="Palm Springs Road"
          />
          <div className="card-body">
            <h5 className="card-title">TextEd Text Editor App</h5>
            <p className="card-text">
              A note-taking app, created using webpack, manifest, indexedDB json
              and a service worker to allow you to write up and save notes
              offline.
            </p>
            <div className="d-flex justify-content-evenly">
              <a
                href="https://text-editor-123456-60c3c47eb0e3.herokuapp.com/"
                className="btn btn-primary"
              >
                App
              </a>
              <a
                href="https://github.com/13rstuart7/text_editor"
                className="btn btn-primary"
              >
                Github
              </a>
            </div>
            <div className="texteditorTechnologies">
              <MDBBadge pill className="mx-2" color="info" light>
                JavaScript
              </MDBBadge>
              <MDBBadge pill className="mx-2" color="info" light>
                Heroku
              </MDBBadge>
              <MDBBadge pill className="mx-2" color="info" light>
                Manifest JSON
              </MDBBadge>
              <MDBBadge pill className="mx-2" color="info" light>
                PWA
              </MDBBadge>
              <MDBBadge pill className="mx-2" color="info" light>
                Service Worker
              </MDBBadge>
              <MDBBadge pill className="mx-2" color="info" light>
                IndexedDB
              </MDBBadge>
              <MDBBadge pill className="mx-2" color="info" light>
                Webpack
              </MDBBadge>
            </div>
          </div>
        </div>
      </div>

      <div className="col">
        <div className="card w-60 h-40 m-5">
        <img
            className="imgScreenshot"
            src={artBeatsScreenshot}
            class="card-img-top"
            alt="Palm Springs Road"
          />
          <div className="card-body">
            <h5 className="card-title">ArtBeats App</h5>
            <p className="card-text">
            Let any user listen music samples and explore a virtual Harvard Art Museum.

            </p>
            <div className="d-flex justify-content-evenly">
              <a
                href="https://github.com/JeremyBlau/ArtBeats"
                className="btn btn-primary"
              >
                Github
              </a>
            </div>
            <div className="artbeatsTechnologies">
              <MDBBadge pill className="mx-2" color="info" light>
                Node JS
              </MDBBadge>
              <MDBBadge pill className="mx-2" color="info" light>
                JavaScript
              </MDBBadge>
              <MDBBadge pill className="mx-2" color="info" light>
                MySQL
              </MDBBadge>
              <MDBBadge pill className="mx-2" color="info" light>
                API- Client Side
              </MDBBadge>
              <MDBBadge pill className="mx-2" color="info" light>
                Express JS
              </MDBBadge>
              <MDBBadge pill className="mx-2" color="info" light>
                Sequelize
              </MDBBadge>
              <MDBBadge pill className="mx-2" color="info" light>
                Insomnia
              </MDBBadge>
            </div>
          </div>
        </div>
      </div>

      <div className="col">
        <div className="card w-60 h-40 m-5">
          <img
            className="imgScreenshot"
            src={DayplannerScreenshot}
            class="card-img-top"
            alt="Los Angeles Skyscrapers"
          />
          <div className="card-body">
            <h5 className="card-title">Day Planner App</h5>
            <p className="card-text">
              An app built with JavaScript, using a client-side API,this is a
              colour-coded schedule app, allowing you to save events in a
              calender.
            </p>
            <div className="d-flex justify-content-evenly">
              <a
                href="https://13rstuart7.github.io/dayplanner/"
                className="btn btn-primary"
              >
                App
              </a>
              <a
                href="https://github.com/13rstuart7/dayplanner"
                className="btn btn-primary"
              >
                Github
              </a>
            </div>
            <div className="dayplannerTechnologies">
              <MDBBadge pill className="mx-2" color="info" light>
                HTML5
              </MDBBadge>
              <MDBBadge pill className="mx-2" color="info" light>
                CSS
              </MDBBadge>
              <MDBBadge pill className="mx-2" color="info" light>
                JavaScript
              </MDBBadge>
              <MDBBadge pill className="mx-2" color="info" light>
                JQuery
              </MDBBadge>
              <MDBBadge pill className="mx-2" color="info" light>
                Moment JS
              </MDBBadge>
            </div>
          </div>
        </div>
      </div>

      <div className="col">
        <div className="card w-60 h-40 m-5">
          <img
            className="imgScreenshot"
            src={PWDGeneratorScreenshot}
            class="card-img-top"
            alt="Skyscrapers"
          />
          <div className="card-body">
            <h5 className="card-title">Generate My Password App</h5>
            <p className="card-text">
              This app was created with JavaScript, it allows the user to
              generate a random password for websites.
            </p>
            <div className="d-flex justify-content-evenly">
              <a
                href="https://13rstuart7.github.io/pwd_generator/"
                className="btn btn-primary"
              >
                App
              </a>
              <a
                href="https://github.com/13rstuart7/pwd_generator"
                className="btn btn-primary"
              >
                Github
              </a>
            </div>
            <div className="PWDGeneratorTechnologies">
              <MDBBadge pill className="mx-2" color="info" light>
                HTML5
              </MDBBadge>
              <MDBBadge pill className="mx-2" color="info" light>
                CSS
              </MDBBadge>
              <MDBBadge pill className="mx-2" color="info" light>
                JavaScript
              </MDBBadge>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
