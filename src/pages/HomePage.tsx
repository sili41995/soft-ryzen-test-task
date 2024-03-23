import ArtsSection from '@/components/ArtsSection';
import ContactUsSection from '@/components/ContactUsSection';
import FaqSection from '@/components/FaqSection';
import MindMapSection from '@/components/MindMapSection';
import AboutSection from '@/components/AboutSection';
import { FC } from 'react';
import HeroSection from '@/components/HeroSection';

const HomePage: FC = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <MindMapSection />
      <FaqSection />
      <ArtsSection />
      <ContactUsSection />
    </>
  );
};

export default HomePage;
