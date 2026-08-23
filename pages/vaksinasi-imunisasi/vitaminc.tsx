import VitaminC from "features/VaccineImmuneApp/VitaminCApp";
import { createGetStaticProps } from "lib/i18n";

function VitaminCPage() {
  return (
    <>
      <VitaminC />
    </>
  );
}

export default VitaminCPage;


export const getStaticProps = createGetStaticProps(["vaccineVitaminC"]);
