import React from "react";

export default function Profile({ language }) {
  return (
    <div className="profile">
      <span className="profileLine"></span>

      <h3> {language === "en" ? "Profile" : "Profile"}</h3>
      <div className="profileBox1">
        <div className="profileBox">
          <h4>{language === "en" ? "Profile" : "Profil"}</h4>
          <div className="dogumTarihi">
            <div className="solBolum">
              <p>{language === "en" ? "Date of birth" : "Doğum tarihi"}</p>
              <p>{language === "en" ? "City of residence" : "İkamet şehrim"}</p>
              <p>
                {language === "en" ? "Educational status" : "Eğitim bilgilerim"}
              </p>
              <br />
              <br />
              <p>
                {language === "en" ? "Preferred role" : "Tercih ettiğim rol"}
              </p>
            </div>
            <div className="sagBolum">
              <p>29.06.1994</p>
              <p>İstanbul</p>
              <p>
                Süleyman Demirel Üniversitesi
                <br />
                {language === "en" ? "Licence" : "Lisans"}, 2017
                <br />
                <br />
              </p>
              <p>Frontend, UI</p>
            </div>
          </div>
        </div>
        {language === "en" ? (
          <div className="aboutMe">
            <h4>About Me</h4>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam
              aut, odit laborum aliquam voluptatum nisi mollitia.
              <br />
              <br /> Mnima accusamus ratione soluta aperiam sit voluptate? Dicta
              quod deserunt quam temporibus cumque magnam!
            </p>
          </div>
        ) : (
          <div className="aboutMe">
            <h4>Hakkımda</h4>
            <p>
              Süleyman Demirel Üniversitesinde Gıda Mühendisliği bölümünden
              2017'de mezun oldum.Mevzun olduktan sonra üretim ve satış
              yöneticiliği alanında toplam 4 sene çalışma tecrübem oldu.
              <br />
              <br /> 2022 yılında tekrar üniversite sınavına girerek Ahmet
              Yesevi Üniversitesini kazandım.Hala okumakta olduğum bölümün
              2.sınıfındayım.Şu anda aynı zamanda Workintech ile 6 aylık yoğun
              ve hızlandırılmış full stack web geliştirme kursuna kaydoldum,
              burada ekip ortamlarında gerçek hayattaki yazılım projelerini
              öğrenip uyguluyorum. Bu program sayesinde çeşitli teknolojilerde
              yeterlilik kazandım ve proje geliştirmede aktif olarak yer aldım.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
