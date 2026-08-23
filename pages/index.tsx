import HomepageApp from "features/HomepageApp";
import { createGetStaticProps } from "lib/i18n";

function Home() {
  return (
    <>
      <HomepageApp />
    </>
  );
}

export default Home;

export const getStaticProps = createGetStaticProps();
