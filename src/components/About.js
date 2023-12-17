// src/components/About.js

import React from 'react';

const About = () => {
  return (
    <div>
      <img src={require("./IMG_2426.JPG")} alt="Profile" width="85px" height="125px" />
      {/* Fill out a few sentences about myself, */}
      <p>
        My name is Reiken Stuart, I am happily married and have two beautiful children. I have worked in sales for the past few years but recently 
        decided to go back to school and finished the full stack coding program at the University of Utah. In finishing the course I've found a new
         appreciation for coding and web-development. I am extremely excited to see what doors will open and where my life will take me with finding
        a new carreer and building on my knowledge and experience. I love to play sports, video games and spend time with family and friends. I am 
        also a car and motorcycle enthusiast. I am very excited to see where coding can take me and how much there is to learn. 
      </p>
    </div>
  );
};

export default About;
