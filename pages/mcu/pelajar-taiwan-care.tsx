import StudentCareApp from "features/MCUApp/StudentCareApp";
import { createGetStaticProps } from "lib/i18n";

function StudentCarePage() {
  return (
    <>
      <StudentCareApp />
    </>
  );
}

export default StudentCarePage;


export const getStaticProps = createGetStaticProps(["mcuStudent"]);
