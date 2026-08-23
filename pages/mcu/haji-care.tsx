import HajiCareApp from "features/MCUApp/HajiCareApp";
import { createGetStaticProps } from "lib/i18n";

function HajiCareCare() {
  return (
    <>
      <HajiCareApp />
    </>
  );
}

export default HajiCareCare;


export const getStaticProps = createGetStaticProps(["mcuHaji"]);
