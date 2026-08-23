import Tifoid from "features/VaccineImmuneApp/TifoidApp";
import { createGetStaticProps } from "lib/i18n";

function TifoidPage() {
  return (
    <>
      <Tifoid />
    </>
  );
}

export default TifoidPage;


export const getStaticProps = createGetStaticProps(["vaccineTyphoid"]);
