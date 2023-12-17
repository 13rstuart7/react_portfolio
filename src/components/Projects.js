// src/components/Projects.js

import React from 'react';

const Projects = () => {
  return (
    <div>
      <a href="https://13rstuart7.github.io/Horiseon/">
        <img src="https://user-images.githubusercontent.com/135680232/253657057-e12cb131-1e1c-463d-b184-73f113541365.png" alt="Horiseon Project" width="400px" height="200px" />
      </a>
      <a href="https://github.com/13rstuart7">
        {/* Provide a meaningful description for the image */}
        <img src={require("./Screenshot_1.png")} alt="GitHub Repository" width="400px" height="200px" />
      </a>
      <a href="https://github.com/13rstuart7">
        {/* Provide a meaningful description for the image */}
        <img src="https://img.freepik.com/premium-photo/desktop-source-code-wallpaper-by-computer-language-with-coding-programming_33771-595.jpg" alt="Coding Workspace" width="400px" height="200px" />
      </a>
      <a href="https://tersesocialmedia-production.up.railway.app/">
        <img src={require("./project2.png")} alt="Terse Social Media Project" width="400px" height="200px" />
      </a>
    </div>
  );
};

export default Projects;
