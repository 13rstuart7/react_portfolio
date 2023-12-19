import React from "react";
import { Link } from "react-router";

export default function Header() {
  return (
    // <!-- Background image --> */}
    <header>
      <div
        className="p-5 text-center bg-image"
        style={{
          backgroundImage: `url("https://www.google.com/imgres?imgurl=https%3A%2F%2Fblogger.googleusercontent.com%2Fimg%2Fb%2FR29vZ2xl%2FAVvXsEhHSiqzmcT6-1CpIWbWIBruOf2tmWLfZta_AQyfuPHYSFfXtj6MhuIfoMxjwZ515rzhiwEiLIOMPyreGLuI6q1FpWz3N7SMhX_EMkD7mOWh45E02xPrfemBxGIXAe0YJ8Rdf9Oq7A9aSKS7OGNtOFtbz9nuG_fK9f-2WW2qLhdnoEjLWpyskZnZmdta4w%2Fs1920%2FBEAUTIFUL-WALLPAPER-FOR-LAPTOP.webp&tbnid=PgB17NbJscwt6M&vet=12ahUKEwiX3YeOp5qDAxX9PUQIHSv-C1MQMyhaegUIARDIAg..i&imgrefurl=https%3A%2F%2Fwww.heroscreen.cc%2F2022%2F11%2Fwallpaper-laptop-beautiful-sunset.html&docid=I3X-PncBc_7YtM&w=1920&h=1080&q=background%20photos%20with%20laptop&ved=2ahUKEwiX3YeOp5qDAxX9PUQIHSv-C1MQMyhaegUIARDIAg")`,
          height: "290px",
        }}
      >
        <div
          className="mask"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.6);" }}
        >
          <div className="d-flex justify-content-center align-items-center h-100">
            <div className="text-white">
              <h1 className="mb-3">Reiken Stuart</h1>
              <h4 className="mb-3">Coding Solutions </h4>

              <a
                className="btn btn-outline-light btn-lg"
                href="http://localhost:3000/#contact"
                role="button"
              >
                Let's Talk
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
