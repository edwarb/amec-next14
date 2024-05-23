import Main from "./components/Main";
import NonLoginDashboard from "components/layouts/NonLogin/NonLoginDashboard";

function FamilyCareApp() {
  return (
    <NonLoginDashboard>
      <Main />
    </NonLoginDashboard>
  );
}

export default FamilyCareApp;
