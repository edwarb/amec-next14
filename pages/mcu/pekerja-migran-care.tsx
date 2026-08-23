import PekerjaMigranApp from "features/MCUApp/PekerjaMigranCareApp";
import { createGetStaticProps } from "lib/i18n";

function PekerjaMigranPage() {
  return (
    <>
      <PekerjaMigranApp />
    </>
  );
}

export default PekerjaMigranPage;


export const getStaticProps = createGetStaticProps(["mcuMigran"]);
