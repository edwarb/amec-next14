import OnSiteCareApp from "features/MCUApp/OnSiteCareApp";
import { createGetStaticProps } from "lib/i18n";

function OnSiteCarePage() {
  return (
    <>
      <OnSiteCareApp />
    </>
  );
}

export default OnSiteCarePage;


export const getStaticProps = createGetStaticProps(["mcuOnsite"]);
