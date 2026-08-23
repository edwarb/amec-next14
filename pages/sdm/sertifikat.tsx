import SertifikatApp from "features/SDMApp/SertifikatApp";
import { createGetStaticProps } from "lib/i18n";

function GallerySertifikatPage() {
  return (
    <>
      <SertifikatApp />
    </>
  );
}

export default GallerySertifikatPage;


export const getStaticProps = createGetStaticProps();
