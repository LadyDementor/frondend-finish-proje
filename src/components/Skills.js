import React from "react";

export default function Skills({language}) {
  return (
    <div className="skills">
      <h3>Skills</h3>
      <div className="skillsList">
        {language === "en" ? (
          <div className="skillsListGroup">
            <h4>Java Script</h4>
            <p>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.
            </p>
          </div>
        ) : (
          <div className="skillsListGroup">
            <h4>Java Script</h4>
            <p>
              Şehvetle kör olmadıkça çıkmazlar, kusurlular var makamlarından
              çıkıp ruhlarını, yani emeklerini yumuşatırlar.
            </p>
          </div>
        )}

        {language === "en" ? (
          <div className="skillsListGroup">
            <h4>React.Js</h4>
            <p>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.
            </p>
          </div>
        ) : (
          <div className="skillsListGroup">
            <h4>React.Js</h4>
            <p>
              Şehvetle kör olmadıkça çıkmazlar, kusurlular var makamlarından
              çıkıp ruhlarını, yani emeklerini yumuşatırlar.
            </p>
          </div>
        )}

        {language === "en" ? (
          <div className="skillsListGroup">
            <h4>Node.Js</h4>
            <p>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.
            </p>
          </div>
        ) : (
          <div className="skillsListGroup">
            <h4>Node.Js</h4>
            <p>
              Şehvetle kör olmadıkça çıkmazlar, kusurlular var makamlarından
              çıkıp ruhlarını, yani emeklerini yumuşatırlar.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
