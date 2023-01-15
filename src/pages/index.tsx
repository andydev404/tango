import { ReactElement } from 'react';
import { Features } from '@components/Features';
import { HeroSection } from '@components/HeroSection';
import { HowWorks } from '@components/HowWorks';
import { PrimaryLayout } from '@layouts/PrimaryLayout';

function Home() {
  return (
    <>
      <HeroSection />
      <HowWorks />
      <Features />
    </>
  );
}

export default Home;
Home.getLayout = (page: ReactElement) => {
  return <PrimaryLayout page={{ title: 'Inicio' }}>{page}</PrimaryLayout>;
};
