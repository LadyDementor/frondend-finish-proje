import React from "react";

export default function Projects({ language }) {
  return (
    <div className="projects">
      <span className="profileLine"></span>
      <h3>Projects</h3>
      <div className="kartlarGrup">
        <div className="projects-list">
          <img src=".\icons\Rectangle 41 KADIN.png" />
          <h4>Workintech</h4>

          {language === "en" ? (
            <p className="aciklama">
              In this project, I worked in a web application with a small movie
              database, I manipulated with two different reducers. I used all
              the state and action generators available, and you'll be creating
              reducer/redux pairings from scratch.
            </p>
          ) : (
            <p className="aciklama">
              İngilizce Bu projede, küçük bir film veritabanı içeren bir web
              uygulamasında çalıştım, iki farklı reducer ile işlem yaptım.Hem
              mevcut tüm state ve action oluşturucuları kullandım, hem de
              sıfırdan reducer/redux pairing'leri oluşturacaksınız.
            </p>
          )}
          <div className="techStack">
            <p>react</p>
            <p>redux</p>
            <p>axios</p>
          </div>
          <div className="details">
            <a
              href="https://github.com/LadyDementor/fsweb-s10g2-redux-filmler"
              target="_blank"
            >
              <p> GitHub</p>
            </a>
            <a
              href="https://redux-filmler-six.vercel.app/movies"
              target="_blank"
            >
              <p> Viev Site</p>
            </a>
          </div>
        </div>

        <div className="projects-list">
          <img src=".\icons\Rectangle 41.png" />
          <h4>Random Jokes</h4>

          {language === "en" ? (
            <p className="aciklama">
              To be able to write an asynchronous action creator in this project
              I used redux-thunk as middleware, it's a part of the data I
              created. I also saved the part in localStorage. After making the
              necessary adjustments and adding an item to my favorites, I
              display a success toast message.
            </p>
          ) : (
            <p className="aciklama">
              Bu projede asenkron bir action creator yazabilmek için
              redux-thunk'ı middleware olarak kullandım,oluşturduğum datanın bir
              kısmını da localStorage içerisinde sakladım.Gerekli ayarlamaları
              yaptıktan sonra ve bir öge favorilere eklendikten sonra başarı
              toast mesajı görüntülüyorum.
            </p>
          )}

          <div className="techStack">
            <p>react</p>
            <p>redux</p>
            <p>axios</p>
          </div>
          <div className="details">
            <a
              href="https://github.com/LadyDementor/fsweb-s10g4-thunk-and-apis"
              target="_blank"
            >
              <p> Githup</p>
            </a>
            <a href="https://thunk-and-apis-puce.vercel.app/" target="_blank">
              <p> Viev Site</p>
            </a>
          </div>
        </div>

        <div className="projects-list">
          <img src=".\icons\Rectangle 41 PC.png" />
          <h4>Journey</h4>

          {language === "en" ? (
            <p className="aciklama">
              The gratitude journal is an effective method for mental well-being
              and can help one develop a positive outlook on life. In this
              project, by listing previously added notes, I made my project a
              way that notes can be deleted and new notes can be added.
            </p>
          ) : (
            <p className="aciklama">
              Minnet günlüğü, Zihinsel iyi oluş için etkili bir yöntemdir ve
              kişinin hayata pozitif bir bakış açısı geliştirmesine yardımcı
              olabilir. Bu projede içerisinde daha önce eklenmiş notlar
              listeleyerek projemi notlar silinebilen ve yeni notlar eklenebilen
              bir hale getirdim.
            </p>
          )}

          <div className="techStack">
            <p>react</p>
            <p>redux</p>
            <p>axios</p>
          </div>
          <div className="details">
            <a
              href="https://github.com/LadyDementor/fsweb-s10-challenge"
              target="_blank"
            >
              <p>GitHub</p>
            </a>
            <a href="https://minnetgunlugu-pi.vercel.app/" target="_blank">
              <p>Viev Site</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
