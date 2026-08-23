import AnalisisLabApp from "features/SDMApp/AnalisisLabApp";
import { createGetStaticProps } from "lib/i18n";

function GalleryAnalisisLabPage() {
  return (
    <>
      <AnalisisLabApp />
    </>
  );
}

export default GalleryAnalisisLabPage;


export const getStaticProps = createGetStaticProps();
