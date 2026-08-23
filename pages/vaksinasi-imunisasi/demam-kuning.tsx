import DemamKuningApp from "features/VaccineImmuneApp/DemamKuningApp";
import { createGetStaticProps } from "lib/i18n";

function DemamPage() {
  return (
    <>
      <DemamKuningApp />
    </>
  );
}

export default DemamPage;


export const getStaticProps = createGetStaticProps(["vaccineYellowFever"]);
