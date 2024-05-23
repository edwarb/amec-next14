import Footer from "components/layouts/NonLogin/Footer";
import Header from "components/layouts/NonLogin/Header";
import Image from "next/image";

interface Props {
  type:
    | "CAMPAK"
    | "DEMAM_KUNING"
    | "INFLUENZA"
    | "MENINGITIS"
    | "MMR"
    | "TIFOID"
    | "VAKSIN_MR";
}

function VaccineApp(props: Props) {
  const { type } = props;
  return (
    <>
      <Header />
      <main className="grid-content">
        <Image
          className="grid-full w-full h-200"
          alt="Our Story"
          width={1200}
          height={200}
          src={"/img/facility/campak01.png"}
        />
        {type === "CAMPAK" && <div>{"campak"}</div>}
        {type === "DEMAM_KUNING" && <div>{"demam"}</div>}
        {type === "INFLUENZA" && <div>{"influenza"}</div>}
        {type === "MENINGITIS" && <div>{"meningitis"}</div>}
        {type === "MMR" && <div>{"mmr"}</div>}
        {type === "TIFOID" && <div>{"tifoid"}</div>}
        {type === "VAKSIN_MR" && <div>{"vaksin mr"}</div>}
      </main>
      <Footer />
    </>
  );
}

export default VaccineApp;
