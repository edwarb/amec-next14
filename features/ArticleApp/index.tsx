import NonLoginDashboard from "components/layouts/NonLogin/NonLoginDashboard";
import Main from "./components/Main";

function ArticleApp() {
  // learn suspense
  return (
    <NonLoginDashboard>
      <Main />
    </NonLoginDashboard>
  );
}

export default ArticleApp;
