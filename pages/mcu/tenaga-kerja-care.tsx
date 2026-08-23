import TenagaKerjaApp from "features/MCUApp/TenagaKerjaCareApp";
import { createGetStaticProps } from "lib/i18n";

function TenagaKerjaPage() {
  return (
    <>
      <TenagaKerjaApp />
    </>
  );
}

export default TenagaKerjaPage;


export const getStaticProps = createGetStaticProps(["mcuTenagaKerja"]);
