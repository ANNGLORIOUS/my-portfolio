import React from "react";
import { FaDiscord, FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer--container">
      <div className="footer--link--container">
        <div className="footer--social--icon">
          <ul>
            <li>
              <a
                href="https://discord.gg/annglorious22/"
                className="navbar--content"
                target="_blank"
                rel="noreferrer"
              >
                <FaDiscord size={32} color="black" />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/Annglorious"
                className="navbar--content"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub size={32} color="black" />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/annglorious-mueni/"
                className="navbar--content"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin size={32} color="black" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <hr className="divider" />
      <div className="footer--content--container">
        <p className="footer--content">Made with 💖 by AnnGLorious</p>
      </div>
    </footer>
  );
}

export default Footer;