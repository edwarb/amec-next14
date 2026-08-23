import FamilyCareApp from "features/MCUApp/FamilyCareApp";
import { createGetStaticProps } from "lib/i18n";

function FamilyCarePage() {
  return (
    <>
      <FamilyCareApp />
    </>
  );
}

export default FamilyCarePage;


export const getStaticProps = createGetStaticProps(["mcuFamily"]);
