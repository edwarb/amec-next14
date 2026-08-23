import VaksinMR from "features/VaccineImmuneApp/VaksinMrApp";
import { createGetStaticProps } from "lib/i18n";

function VaksinMRPage() {
  return (
    <>
      <VaksinMR />
    </>
  );
}

export default VaksinMRPage;


export const getStaticProps = createGetStaticProps(["vaccineMr"]);
