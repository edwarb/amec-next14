import MmrApp from "features/VaccineImmuneApp/MmrApp";
import { createGetStaticProps } from "lib/i18n";

function MMRPage() {
  return (
    <>
      <MmrApp />
    </>
  );
}

export default MMRPage;


export const getStaticProps = createGetStaticProps(["vaccineMmr"]);
