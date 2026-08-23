import CampakApp from "features/VaccineImmuneApp/CampakApp";
import { createGetStaticProps } from "lib/i18n";

function CampakPage() {
  return (
    <>
      <CampakApp/>
    </>
  );
}

export default CampakPage;


export const getStaticProps = createGetStaticProps(["vaccineCampak"]);
