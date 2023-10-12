import React from "react";

export default function Footer({ language }) {
  return (
    <footer className="footer">
      {language === "en" ? (
        <h3 className="letsWork">
          Let's work together and make
          <br />
          your next project a success.
        </h3>
      ) : (
        <h3 className="letsWork">
          Birlikte çalışalım ve bir sonraki projenizi
          <br />
          başarıya taşıyalım.
        </h3>
      )}

      <div className="rectangle">
        <a className="email" href="mailto:burcucalgnn@gmail.com">
          <img src="./icons/el.svg" alt="email icon" />
          <p className="emailcss">burcucalgnn@gmail.com</p>
        </a>

        <nav className="sagF">
          <a className="sagF1" href="">
            Personal Blog
          </a>
          <a className="sagF2" href="https://github.com/LadyDementor">
            GitHub
          </a>
          <a
            className="sagF3"
            href="https://www.linkedin.com/in/burcu-%C3%A7alg%C4%B1n-52016014a/?originalSubdomain=tr"
          >
            Linkedin
          </a>
        </nav>
      </div>
    </footer>
  );
}
