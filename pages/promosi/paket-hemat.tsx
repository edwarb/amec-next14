import PaketHematApp from "features/PaketApp/PaketHematApp";
import { createGetStaticProps } from "lib/i18n";

function PaketHematPage() {
  return (
    <>
      <PaketHematApp />
    </>
  );
}

export default PaketHematPage;


export const getStaticProps = createGetStaticProps();
