import Hero from '../components/Hero';
import Profile from '../components/Profile';
import Carousel from '../components/Carousel';
import Services from '../components/Services';
import PortfolioGrid from '../components/PortfolioGrid';

export default function Home() {
  return (
    <>
      <Hero />
      <Profile />
      <Carousel />
      <Services />
      <PortfolioGrid />
    </>
  );
}
