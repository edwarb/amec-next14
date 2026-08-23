import CSRApp from "features/SDMApp/CSRApp";
import { createGetStaticProps } from "lib/i18n";

function GalleryCSRPage() {
  return (
    <>
      <CSRApp />
    </>
  );
}

export default GalleryCSRPage;


export const getStaticProps = createGetStaticProps();
