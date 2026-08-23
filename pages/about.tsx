import AboutApp from "features/AboutApp";
import { createGetStaticProps } from "lib/i18n";

function AboutPage() {
  return (
    <>
      <AboutApp />
    </>
  );
}

export default AboutPage;

export const getStaticProps = createGetStaticProps(["about"]);
