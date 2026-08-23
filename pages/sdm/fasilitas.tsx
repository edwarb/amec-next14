import FacilityApp from "features/SDMApp/FacilityApp";
import { createGetStaticProps } from "lib/i18n";

function GalleryFacilityPage() {
  return (
    <>
      <FacilityApp />
    </>
  );
}

export default GalleryFacilityPage;


export const getStaticProps = createGetStaticProps();
