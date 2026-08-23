import MeningitisApp from "features/VaccineImmuneApp/MeningitisApp";
import { createGetStaticProps } from "lib/i18n";

function MeningitisPage() {
  return (
    <>
      <MeningitisApp />
    </>
  );
}

export default MeningitisPage;


export const getStaticProps = createGetStaticProps(["vaccineMeningitis"]);
