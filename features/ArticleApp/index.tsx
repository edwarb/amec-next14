import NonLoginDashboard from "components/layouts/NonLogin/NonLoginDashboard";
import { Suspense, useEffect } from "react";
import Main from "./components/Main";
import wrapPromise from "shared/utils/wrapPromise";
import { getArticles } from "features/DashboardAdmin/Articles/utils";

function ArticleApp() {
  // learn suspense
  return (
    <NonLoginDashboard>
      <Main />
    </NonLoginDashboard>
  );
}

export default ArticleApp;
