import React from "react";

export default function Skills({ language }) {
  return (
    <div className="skills">
      <h3>Skills</h3>
      <div className="skillsList">
        {language === "en" ? (
          <div className="skillsListGroup">
            <h4>Java Script</h4>
            <p>
              A versatile programming language commonly used for web
              development. Used to create interactive user interfaces and
              dynamic websites.
            </p>
          </div>
        ) : (
          <div className="skillsListGroup">
            <h4>Java Script</h4>
            <p>
              Web geliştirme için yaygın olarak kullanılan çok yönlü bir
              programlama dili. Etkileşimli kullanıcı arayüzleri ve dinamik web
              siteleri oluşturmak için kullanılır.
            </p>
          </div>
        )}

        {language === "en" ? (
          <div className="skillsListGroup">
            <h4>React.Js</h4>
            <p>
              A popular JavaScript library used for building user interfaces.
              Allows for efficient and reusable components that update in real
              time.
            </p>
          </div>
        ) : (
          <div className="skillsListGroup">
            <h4>React.Js</h4>
            <p>
              Kullanıcı arayüzleri oluşturmak için kullanılan popüler bir
              JavaScript kitaplığı. Gerçek zamanlı olarak güncellenen verimli ve
              yeniden kullanılabilir bileşenlere olanak tanır.
            </p>
          </div>
        )}

        {language === "en" ? (
          <div className="skillsListGroup">
            <h4>Python</h4>
            <p>
              A high-level programming language used for a variety of purposes,
              from web development to data analysis and machine learning.
            </p>
          </div>
        ) : (
          <div className="skillsListGroup">
            <h4>Python</h4>
            <p>
              Web geliştirmeden veri analizine ve makine öğrenimine kadar
              çeşitli amaçlarla kullanılan üst düzey bir programlama dili.
            </p>
          </div>
        )}

        {language === "en" ? (
          <div className="skillsListGroup">
            <h4>Java</h4>
            <p>
              Java is an open source, object-oriented, platform independent,
              highly efficient, multifunctional, high-level, interpreted and
              compiled language that was developed by James Gosling, a Sun
              Microsystems engineer.
            </p>
          </div>
        ) : (
          <div className="skillsListGroup">
            <h4>Java</h4>
            <p>
              Java, Sun Microsystems mühendislerinden James Gosling tarafından
              geliştirilmeye başlanmış açık kaynak kodlu, nesneye yönelik,
              platform bağımsız, yüksek verimli, çok işlevli, yüksek seviye, hem
              yorumlanan hem de derlenen bir dildir.
            </p>
          </div>
        )}

        {language === "en" ? (
          <div className="skillsListGroup">
            <h4>HTML</h4>
            <p>
              The standard markup language used for creating web pages. Provides
              the structure and content of a webpage.
            </p>
          </div>
        ) : (
          <div className="skillsListGroup">
            <h4>HTML</h4>
            <p>
              Web sayfaları oluşturmak için kullanılan standart biçimlendirme
              dili. Bir web sayfasının yapısını ve içeriğini sağlar.
            </p>
          </div>
        )}

        {language === "en" ? (
          <div className="skillsListGroup">
            <h4>CSS</h4>
            <p>
              A styling language used to create visually appealing and
              responsive websites. Allows for the separation of presentation and
              content.
            </p>
          </div>
        ) : (
          <div className="skillsListGroup">
            <h4>CSS</h4>
            <p>
              Görsel olarak çekici ve duyarlı web siteleri oluşturmak için
              kullanılan bir stil dili. Sunum ve içeriğin ayrılmasını sağlar.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
