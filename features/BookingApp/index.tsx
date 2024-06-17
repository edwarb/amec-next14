import Main from "./components/Main";
import NonLoginDashboard from "components/layouts/NonLogin/NonLoginDashboard";

function BookingApp() {
  return (
    <NonLoginDashboard>
      <Main />
    </NonLoginDashboard>
  );
}

export default BookingApp;
