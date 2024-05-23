import Main from "./components/Main";
import NonLoginDashboard from "components/layouts/NonLogin/NonLoginDashboard";

function CovidCareApp() {
  return (
    <NonLoginDashboard>
      <Main />
    </NonLoginDashboard>
  );
}

export default CovidCareApp;
