import InfluenzaApp from "features/VaccineImmuneApp/InfluenzaApp";
import { createGetStaticProps } from "lib/i18n";

function InfluenzaPage() {
  return (
    <>
      <InfluenzaApp />
    </>
  );
}

export default InfluenzaPage;


export const getStaticProps = createGetStaticProps(["vaccineInfluenza"]);
