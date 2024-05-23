import NonLoginDashboard from "components/layouts/NonLogin/NonLoginDashboard";
import Image from "next/image";

function AboutApp() {
  return (
    <NonLoginDashboard>
      <main className={"grid-content"}>
        <Image
          alt="Our Story"
          src={"/img/facility/OurStory.png"}
          width={200}
          height={100}
        />

        <Image
          alt="Graph Our Story"
          src={"/img/facility/GraphFull.png"}
          width={1200}
          height={200}
        />

        <hr className={"w-[40]"} />

        <div>{TEXT["about_1"]}</div>

        <Image
          alt="Our Story"
          src={"/img/facility/Pembatas1.png"}
          width={200}
          height={100}
        />

        <Image
          alt="Our Story"
          src={"/img/facility/OurMission.png"}
          width={200}
          height={100}
        />

        <ul>
          {([0, 1, 2] as const).map((val) => (
            <li>{TEXT[`mission_${val}`]}</li>
          ))}
        </ul>

        <Image
          alt="Our Story"
          src={"/img/facility/OurVision.png"}
          width={200}
          height={100}
        />

        <Image
          alt="Our Story"
          src={"/img/facility/Pembatas2.png"}
          width={200}
          height={100}
        />

        <ul>
          {([0, 1, 2] as const).map((val) => (
            <li>{TEXT[`vision_${val}`]}</li>
          ))}
        </ul>

        <Image
          alt="Our Story"
          src={"/img/facility/OurCulture.png"}
          width={200}
          height={100}
        />

        <Image
          alt="Our Story"
          src={"/img/facility/Orang.png"}
          width={200}
          height={100}
        />

        <div>
          {
            "Budaya perusahaan Amalia Medical Center diambil dari kata COMFORT dan ditanamkan bagi seluruh karyawan-karyawati sehingga menjadi bagian dari kesadaran dan budaya kerja perusahaan. Comfort artinya memiliki perasaan nikmat hingga muncul efek nyaman dalam diri kita. Comfort sendiri telah kami rasakan dalam bidang yang kami tekuni saat ini. Mulai dari pekerjaan yang kami lakukan, tugas yang harus kami selesaikan, serta melayani pelanggan dengan sepenuh hati, juga kami lakukan dengan nyaman."
          }
        </div>
        <div>
          {
            "Hal yang lebih penting dari Comfort adalah kami menginginkan pelanggan yang datang ke Amalia Medical Center merasakan kenyamanan itu sendiri. Dengan demikian, kepuasan kami adalah refleksi dari kepuasan pelanggan. Harapan kami adalah agar pelanggan mengajak sanak saudara atau rekan sejawat untuk mempercayakan kepada kami sebagai tempat pemeriksaan kesehatan."
          }
        </div>

        <Image
          alt="Our Story"
          src={"/img/facility/Pembatas3.png"}
          width={200}
          height={100}
        />

        <Image
          alt="Our Story"
          src={"/img/facility/Comfort.png"}
          width={200}
          height={100}
        />

        <div className={"grid grid-cols-2 "}>
          {COMFORT_TABLE.map((cValue) => (
            <div className="flex flex-col gap-2">
              <h4>{cValue["header"]}</h4>
              <div>{cValue["content"]}</div>
            </div>
          ))}
        </div>
      </main>
    </NonLoginDashboard>
  );
}

export default AboutApp;

const TEXT = {
  about_1:
    "Amalia medical center didirikan pada tahun 2000, berada dibawah badan hukum Yayasan Solidaritas Kemanusiaan Amanah, yang berlokasi di pemukiman Cipinang Cempedak, Jakarta Timur. Yayasan ini didirikan oleh Irjen.Pol (P). Prof. Dr. Farouk Muhammad, Yayasan ini telah memberikan sumbangsih antara lain untuk anak-anak yatim, para janda, korban bencana alam, dan kaum dhuafa lainnya. Sejak itu, kami merekrut tenaga- tenaga Para Medis Profesional dibidangnya. Kami selaku Direktur mulai berkecimpung dalam “Dunia Medical TKI” dengan menghadiri dan aktif dalam berbagai seminar dan diskusi yang terkait dengan pelayanan kepada TKI, yang diselenggarakan oleh berbagai pihak ( Depnaker, Depkes/Dinkes, Asosiasi Apjati, Hiptek, dan lainnya)",
  mission_0: `Menyediakan pelayanan kesehatan yang komperensif untuk pekerja dengan praktek medis yang berlaku, bersyarat ilmiah dan berstandar internasional.`,
  mission_1: `Terus mengembangkan diri melalui Program Jaminan Kualitas, menanamkan pengetahuan di sumber daya manusia dan meningkatkan peralatan, dan juga Informasi Teknologi (IT).`,
  mission_2: `Menjadikan kami sebagai contributor tunggal “Amanah” dari yayasan solidaritas manusia untuk sosial dan kesejahteraan kemanusiaan.`,

  vision_0: `Menyediakan pelayanan kesehatan yang komperensif untuk pekerja dengan praktek medis yang berlaku, bersyarat ilmiah dan berstandar internasional.`,
  vision_1: `Terus mengembangkan diri melalui Program Jaminan Kualitas, menanamkan pengetahuan di sumber daya manusia dan meningkatkan peralatan, dan juga Informasi Teknologi (IT).`,
  vision_2: `Menjadikan kami sebagai contributor tunggal “Amanah” dari yayasan solidaritas manusia untuk sosial dan kesejahteraan kemanusiaan.`,
};

const COMFORT_TABLE = [
  {
    header: "Caring",
    content: `Kepedulian adalah sikap kami terhadap pelanggan. Dengan sikap peduli maka pelanggan akan lebih mudah dalam berinteraksi dengan karyawan.`,
  },
  {
    header: "Observant",
    content:
      "Selain observant yang artinya adalah memperhatikan dengan teliti. Observant juga kami artikan dengan taat kepada peraturan yang berlaku, baik kode etik tenaga medis maupun kode etik tenaga kerja. Kami mengamati kebutuhan pelanggan dan memperhatikan kepuasan Anda.",
  },
  {
    header: "Mindful",
    content:
      "Kami melakukan pekerjaan dengan penuh hati- hati, pengamatan jeli untuk pengambilan keputusan dan hasil laboratorium adalah hal yang wajib.",
  },
  {
    header: "Friendly",
    content:
      "Keramah-tamahan kami akan dapat mempererat hubungan antara karyawan, medis maupun non medis dengan pelanggan.",
  },
  {
    header: "Mindful",
    content:
      "Kami melakukan pekerjaan dengan penuh hati- hati, pengamatan jeli untuk pengambilan keputusan dan hasil laboratorium adalah hal yang wajib.",
  },
  {
    header: "Friendly",
    content:
      "Keramah-tamahan kami akan dapat mempererat hubungan antara karyawan, medis maupun non medis dengan pelanggan.",
  },
  {
    header: "Obliging",
    content:
      "Kami sigap membantu siapa saja yang membutuhkan pertolongan. Dibawah naungan yayasan social, membantu orang lain telah tertanam pada jiwa kami.",
  },
  {
    header: "Responsible",
    content:
      "Melakukan tugas dalam pekerjaan adalah termasuk menjalankan ibadah bagi kami. Kami siap bertanggung jawab atas segala yang kami kerjakan. Mawas diri terhadap rasa tanggung jawab ini membuat kami akan lebih berhati-hati setiap hal apapun yang kami lakukan.",
  },
  {
    header: "Tactful",
    content:
      "Kami belajar menjadi bijaksana setiap hari. Melalui perjalanan Amalia Medical Center yang panjang dan berliku-liku, kami belajar dan terus belajar menjadi pribadi yang lebih baik. Dimulai dari pribadi masing-masing, maka Amalia Medical Center terbentuk oleh pribadi yang unggul.",
  },
];
