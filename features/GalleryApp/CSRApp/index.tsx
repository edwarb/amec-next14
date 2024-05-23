import NonLoginDashboard from "components/layouts/NonLogin/NonLoginDashboard";
import CardImage from "../shared/components/CardImage";

function CSRApp() {
  return (
    <NonLoginDashboard>
      <main className="grid-content">
        <h1 className="text-center">{`Corporate Social Responsibility`}</h1>
        <div className="grid grid-cols-4 gap-4">
          {Array(12)
            .fill(0)
            .map((val, idx) => {
              return (
                <CardImage
                  alt={`facility-${idx + 1}`}
                  src={`/img/facility/csr${String(idx + 1).padStart(
                    2,
                    "0"
                  )}.png`}
                />
              );
            })}
        </div>
      </main>
    </NonLoginDashboard>
  );
}

export default CSRApp;
