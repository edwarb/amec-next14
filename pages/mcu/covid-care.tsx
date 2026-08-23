import CovidCareApp from "features/MCUApp/CovidCareApp";
import { createGetStaticProps } from "lib/i18n";

function CovidCarePage() {
  return (
    <>
      <CovidCareApp />
    </>
  );
}

export default CovidCarePage;


export const getStaticProps = createGetStaticProps();
