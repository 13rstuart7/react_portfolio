// Footer.js

import React from 'react';

function Footer() {
  return (
    <footer>
      <div>
        <p>Connect with me:</p>
        <ul>
          <li>
            <a href="https://github.com/username" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </li>
          <li>
            <a href="https://linkedin.com/in/username" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </li>
          <li>
            <a href="https://stackoverflow.com/users/1234567/username" target="_blank" rel="noopener noreferrer">
              Stack Overflow
            </a>
          </li>
          <li>
            <a href="https://twitter.com/username" target="_blank" rel="noopener noreferrer">
              Twitter
            </a>
          </li>
          {/* Add more links as needed */}
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
