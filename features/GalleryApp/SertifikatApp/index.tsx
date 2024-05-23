import NonLoginDashboard from "components/layouts/NonLogin/NonLoginDashboard";
import { Card } from "components/ui/card";
import Image from "next/image";

function SertifikatApp() {
  return (
    <NonLoginDashboard>
      <main className="grid-content">
        <h1 className="text-center">{`Certificates`}</h1>
        <div className="grid grid-cols-3 gap-4">
          {Array(12)
            .fill(0)
            .map((val, idx) => {
              return (
                <CardImage
                  width={400}
                  height={600}
                  alt={`facility-${idx + 1}`}
                  src={`/img/facility/sertifikat${String(idx + 1).padStart(
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

export default SertifikatApp;

interface Props {
  alt: string;
  src: string;
  width?: number;
  height?: number;
}
function CardImage({ src, alt, width = 400, height = 300 }: Props) {
  return (
    <Card className="p-2 overflow-hidden">
      <Image alt={alt} src={src} width={width} height={height} />
    </Card>
  );
}
