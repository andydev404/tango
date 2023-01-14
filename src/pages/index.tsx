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
      </main>
    </>
  );
}

export default Home;
