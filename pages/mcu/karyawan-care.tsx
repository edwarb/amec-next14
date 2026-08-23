import KaryawanApp from "features/MCUApp/KaryawanCareApp";
import { createGetStaticProps } from "lib/i18n";

function KaryawanPage() {
  return (
    <>
      <KaryawanApp />
    </>
  );
}

export default KaryawanPage;


export const getStaticProps = createGetStaticProps(["mcuKaryawan"]);
