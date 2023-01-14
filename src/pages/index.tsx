import { Features } from '@components/Features';
import { Footer } from '@components/Footer';
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
      <Footer />
    </>
  );
}

export default Home;
