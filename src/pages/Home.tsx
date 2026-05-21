import Hero from '../components/Hero';
import Profile from '../components/Profile';
import Carousel from '../components/Carousel';
import Services from '../components/Services';
import PortfolioGrid from '../components/PortfolioGrid';
import ContactSection from '../components/ContactSection';
import HowItWorks from '../components/HowItWorks';
import LatestProjects from '../components/LatestProjects';

export default function Home() {
  return (
    <main>
      <Hero />
      <div className="relative z-10 bg-white">
        <Profile />
        <PortfolioGrid />
        <Services />
        <HowItWorks />
        <LatestProjects />
        <ContactSection />
        <Carousel />
      </div>
    </main>
  );
}
