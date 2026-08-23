import BookingApp from "features/BookingApp";
import { createGetStaticProps } from "lib/i18n";

function AboutPage() {
  return (
    <>
      <BookingApp />
    </>
  );
}

export default AboutPage;


export const getStaticProps = createGetStaticProps();
