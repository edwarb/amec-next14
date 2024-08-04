import { withAdmin } from "core/HOC/withAdmin";
import DashboardAdminHomepageApp from "features/DashboardAdmin/Homepage";

function DashboardAdminPage() {
  return (
    <>
      <DashboardAdminHomepageApp />
    </>
  );
}

export default withAdmin(DashboardAdminPage);
