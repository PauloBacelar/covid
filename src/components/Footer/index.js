import React from "react";
import "./styles.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <p className="footer__sources">
          All sources on{" "}
          <a
            href="https://github.com/PauloBacelar/covid"
            target="_blank"
            rel="noreferrer"
            className="footer__link"
          >
            GitHub
          </a>
        </p>
        <p>
          Made with &lt;3 by{" "}
          <a
            href="https://twitter.com/paulowebdev"
            target="_blank"
            rel="noreferrer"
            className="footer__link"
          >
            Paulo Bacelar
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
