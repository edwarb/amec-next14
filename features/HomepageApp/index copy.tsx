import Header from "components/layouts/NonLogin/Header";
import Facility from "./components/Facility";
import FormRegistration from "./components/FormRegistration";
import IntroSection from "./components/IntroSection";
import LandingSection from "./components/LandingSection";
import Testimony from "./components/Testimony";
import { css } from "@emotion/css";
import Head from "next/head";
import NonLoginDashboard from "components/layouts/NonLogin/NonLoginDashboard";

function HomepageApp() {
  return (
    <NonLoginDashboard>
      <main className="grid-content gap-12 mb-12">
        <IntroSection />
        <LandingSection />
        <Facility />
        <FormRegistration />
        <Testimony />
        <FacebookPage />
        {/* <PartnerSection /> */}
        {/* <FacebookPage /> */}
      </main>
    </NonLoginDashboard>
  );
}

export default HomepageApp;

const FacebookPage = () => {
  return (
    <iframe
      src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Famaliamedicalcenter&tabs=timeline&width=340&height=400&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=157253668024471"
      width="340"
      height="600"
      style={{
        border: "none",
        overflow: "hidden",
      }}
      scrolling="no"
      frameBorder="0"
      allowFullScreen
      allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
    />
  );
};
