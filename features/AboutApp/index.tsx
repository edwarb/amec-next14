import NonLoginDashboard from "components/layouts/NonLogin/NonLoginDashboard";
import Image from "next/image";

function AboutApp() {
  return (
    <NonLoginDashboard>
      <main>
        <div>our story</div>
        <Image
          alt="Our Story"
          src={"/img/facility/OurStory.png"}
          width={200}
          height={100}
        />
        
        <Image
          alt="Graph Our Story"
          src={"/img/facility/GraphFull.png"}
          width={1200}
          height={200}
        />
      </main>
    </NonLoginDashboard>
  );
}

export default AboutApp;
