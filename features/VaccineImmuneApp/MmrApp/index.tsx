import Main from "./components/Main";
import NonLoginDashboard from "components/layouts/NonLogin/NonLoginDashboard";

function MmrApp() {
  return (
    <NonLoginDashboard>
      <Main />
    </NonLoginDashboard>
  );
}

export default MmrApp;
