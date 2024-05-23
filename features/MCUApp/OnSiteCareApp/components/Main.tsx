import Image from "next/image";

function Main() {
  return (
    <main className="grid-content flex flex-row">
      <h1 className="text-center">{`COVID Care`}</h1>
      <Image
        className="self-center justify-self-center"
        alt="Promo Covid Poster"
        src={"/img/facility/promoCovidNew.jpeg"}
        width={300}
        height={100}
      />
      <p>
        {`Guna membantu upaya pemerintah dalam memperluas pelaksanaan tes masif
        COVID-19, Amalia Medical Center menyediakan fasilitas Rapid Test dan PCR
        Test. Perluasan tes COVID-19 secara masif berperan penting terhadap
        upaya percepatan penanganan COVID-19. Sehingga, jumlah pengidap COVID-19
        dapat segera terpetakan dan selanjutnya diisolasi untuk memutus mata
        rantai penyebaran COVID-19. Rapid test adalah metode skrining awal untuk
        mendeteksi antibodi, yaitu IgM dan IgG, yang diproduksi oleh tubuh untuk
        melawan virus Corona. Antibodi ini akan dibentuk oleh tubuh bila ada
        paparan virus Corona. Selain Rapid test, PCR test juga penting. Tes PCR
        akan memastikan hasil dari rapid test. Sampai saat ini, tes PCR
        merupakan pemeriksaan diagnostik yang dianggap paling akurat untuk
        memastikan apakah seseorang menderita COVID-19 atau tidak.`}
      </p>
    </main>
  );
}

export default Main;
