import Head from "next/head";
import PendaftaranJpetsApp from "features/PendaftaranJpetsApp";
import { createGetStaticProps } from "lib/i18n";

function PendaftaranJpetsPage() {
  return (
    <>
      <Head>
        <title>Pendaftaran JPETS - Amalia Medical Center</title>
        <meta
          name="description"
          content="Formulir Pendaftaran Japan Pre-Entry Tuberculosis Screening (JPETS) di Klinik Utama Amalia Medical Center Jakarta."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <PendaftaranJpetsApp />
    </>
  );
}

export default PendaftaranJpetsPage;

export const getStaticProps = createGetStaticProps();

