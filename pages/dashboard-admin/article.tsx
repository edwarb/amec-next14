import { withAdmin } from "core/HOC/withAdmin";
import DashboardAdminArticlesApp from "features/DashboardAdmin/Articles";

function DashboardAdminArticlePage() {
  return (
    <>
      <DashboardAdminArticlesApp />
    </>
  );
}

export default withAdmin(DashboardAdminArticlePage);
