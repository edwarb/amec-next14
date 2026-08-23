import PaketBulanIniApp from "features/PaketApp/PaketBulanIniApp";
import { createGetStaticProps } from "lib/i18n";

function PaketBulanIniPage() {
  return (
    <>
      <PaketBulanIniApp />
    </>
  );
}

export default PaketBulanIniPage;


export const getStaticProps = createGetStaticProps();
