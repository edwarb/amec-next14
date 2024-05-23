import Main from "./components/Main";
import NonLoginDashboard from "components/layouts/NonLogin/NonLoginDashboard";

function HajiCareApp() {
  return (
    <NonLoginDashboard>
      <Main />
    </NonLoginDashboard>
  );
}

export default HajiCareApp;
