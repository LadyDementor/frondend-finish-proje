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
              I graduated from Süleyman Demirel University, Department of Food
              Engineering, in 2017. After graduation, I had a total of 4 years
              of working experience in the field of production and sales
              management.
              <br />
              <br /> In 2022, I took the university exam again and got into
              Ahmet Yesevi University. I am still in the second year of the
              department I am studying. Currently, I have also enrolled in a
              6-month intensive and accelerated full stack web development
              course with Workintech, where I learn and implement real-life
              software projects in team environments. Thanks to this program, I
              gained proficiency in various technologies and took an active part
              in project development.
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
