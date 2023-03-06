import React from "react";
import "../styles/pages/about.css";

import profile from "../assets/profile.jpg";

import Layout from "../components/Layout";
import Typography from "../components/Typography";

const About = () => {
   return (
      <Layout pages>
         <div>
            <div className="about__content__flex">
               <Line>
                  <Paragraph>
                     Hi, namaku <strong>Helka Septyawan</strong> biasa dipanggil
                     helka, yah atau panggil aja sesukanya asal "sopan".
                  </Paragraph>
                  <Paragraph>
                     Aku lahir di Kecamatan Tambakboyo Kabupaten Tuban Jawa
                     Timur pada tanggal 6 September 1999, hobi? mungkin suka
                     bulu tangkis, yah itu juga main -5x dalam setahun, gpp yah
                     yang penting punya hobi, meskipun gak begitu pro 😳.
                  </Paragraph>
                  <Paragraph>
                     Untuk hobi mungkin ada satu lagi, yaitu koding, gak tau
                     kenapa bagus aja nulis source code yang warna warni gitu.
                     awal mula belajar tertarik tentang dunia pemrograman karena
                     ada film "hacker", kok menarik nih terus aku searching dan
                     ternyata harus sekolah jurusan informatika.
                  </Paragraph>
               </Line>
               <div className="about__image">
                  <img src={profile} alt="photo profile" />
               </div>
            </div>
            <Paragraph>
               Dimulai dari tertarik pada dunia pemrograman, kemudian aku
               berkuliah di Universitas Amikom Yogyakarta mengambil jurusan
               Informatika, dengan fokus pemrograman. untuk pengalaman yang
               dulunya sekolah MAN atau Madrasah Aliyah yang tidak mempunyai
               basic tentang pemrograman, hal tersebut menjadi shock dan sangat
               berat harus menyesuaikan dengan teman-teman sekelas baik itu yang
               sudah familiar dengan pemrograman atau belum.
            </Paragraph>
            <Paragraph>
               Untuk bahasa pemrograman pertama aku belajar bahasa c++ untuk
               latihan algoritma pemrograman dan data struktur, kemudian belajar
               PHP pada masa memperdalam PHP mengenal istilah "Framework".
               mengenal framework pertama kali yaitu "Laravel" dengan konsep MVC
               kemudian aku belajar memperdalam framework tersebut selama 3
               bulan, kemudian mengenal framework lainnya yaitu "React" dengan
               bahasa pemrograman Javascript, dari mengenal react kemudian
               lama-kelamaan menjadi nyaman untuk menggunakan dan sampai
               sekarang dan berfokus pada bahasa pemrograman javascript dan
               framework react.
            </Paragraph>
         </div>
      </Layout>
   );
};

const Paragraph = ({ children }) => {
   return (
      <Typography variant="p" className="about__description">
         {children}
      </Typography>
   );
};

const Line = ({ children }) => {
   return (
      <div
         style={{
            displa: "grid",
            gridTemplate: "auto",
            gridAutoFlow: "row",
            gap: "40px",
            width: "100%",
         }}>
         {children}
      </div>
   );
};

export default About;
