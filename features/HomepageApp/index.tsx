import NonLoginDashboard from 'components/layouts/NonLogin/NonLoginDashboard';
import IntroSection from './components/IntroSection';
import Testimony from './components/Testimony';
import Facility from './components/Facility';
import SocialMedia from './components/SocialMedia';
import Features from './components/Features';
import PartnerLogos from './components/Partner';
import Booking from './components/Booking';

export default function Main() {

  return (
    <div className="bg-white">
      {/* Header */}
      <NonLoginDashboard>

        <main className="isolate">
          {/* Hero section */}
          <IntroSection />

          {/* Logo Partner */}
          <PartnerLogos />

          {/* Feature section */}
          <Features />

          {/* Testimonial section */}
          <Testimony />

          {/* Facility section */}
          <Facility />

          {/* Booking section */}
          <Booking />

          {/* Social Media Section */}
          <SocialMedia />
        </main>
      </NonLoginDashboard>
    </div>
  );
}
