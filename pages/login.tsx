import LoginApp from "features/LoginApp";
import { createGetStaticProps } from "lib/i18n";

function LoginPage() {
  return (
    <>
      <LoginApp />
    </>
  );
}

export default LoginPage;


export const getStaticProps = createGetStaticProps();
