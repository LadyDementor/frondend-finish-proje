import React from "react";
import { Link } from "react-scroll";

export default function Bio({ language }) {
  return (
    <div className="heroBox">
      <div className="heroLeft">
        <div className="isim">
          <div className="line"></div>
          <p>Burcu Çalgın</p>
        </div>
        {language === "en" ? (
          <div>
            <h2>
              Creative thinker
              <br />
              Minimalism lover
            </h2>{" "}
            <br /> <br />
            <p className="isimP">
              Hi, I’m Burcu. I’m a full-stack developer. If you are looking for
              a Developer who to craft solid and scalable frontend products with
              great user experiences. Let’s shake hands with me.
            </p>
          </div>
        ) : (
          <div>
            <h2>
              Yaratıcı Düşünür <br />
              Minimalizm Aşığı
            </h2>
            <p className="isimP">
              Merhaba, ben Burcu. Ben bir full-stack geliştiricisiyim. Eğer
              harika kullanıcı tecrübesi olan sağlam frontend ürünler üretebilen
              bir geliştirici arıyorsanız, birlikte çalışalım.
            </p>
          </div>
        )}

        {language === "en" ? (
          <div className="buttons">
            <div className="button-1">
              <Link to="footer" smooth={true} duration={2000}>
                <p>Hire me</p>
              </Link>
            </div>
            <div className="button-2">
              <img src=".\icons\github.png" alt="github" />
              <a href="https://github.com/LadyDementor">
                <p>GitHub</p>
              </a>
            </div>
            <div className="button-2">
              <img src=".\icons\LinkedIn.png" alt="linkedIn" />
              <a href="https://www.linkedin.com/in/burcu-%C3%A7alg%C4%B1n-52016014a//">
                <p>LinkedIn</p>
              </a>
            </div>
          </div>
        ) : (
          <div className="buttons">
            <div className="button-1">
              <Link to="footer" smooth={true} duration={2000}>
                <p>Beni İşe Al</p>
              </Link>
            </div>
            <div className="button-2">
              <img src=".\icons\github.png" alt="github" />
              <a href="https://github.com/LadyDementor">
                <p>GitHub</p>
              </a>
            </div>
            <div className="button-2">
              <img src=".\icons\LinkedIn.png" alt="linkedIn" />
              <a href="https://www.linkedin.com/in/burcu-%C3%A7alg%C4%B1n-52016014a/">
                <p>LinkedIn</p>
              </a>
            </div>
          </div>
        )}
      </div>

      <img src=".\icons\image1.png" alt="icon" />
    </div>
  );
}
