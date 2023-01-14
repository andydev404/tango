import { Features } from '@components/Features';
import { Header } from '@components/Header';
import { HeroSection } from '@components/HeroSection';
import { HowWorks } from '@components/HowWorks';

function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <HowWorks />
        <Features />
      </main>
    </>
  );
}

export default Home;
