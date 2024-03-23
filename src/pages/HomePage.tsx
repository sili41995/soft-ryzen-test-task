import ArtsSection from '@/components/ArtsSection';
import ContactUsSection from '@/components/ContactUsSection';
import Container from '@/components/Container';
import FaqSection from '@/components/FaqSection';
import MindMapSection from '@/components/MindMapSection';
import AboutSection from '@/components/AboutSection';
import { FC } from 'react';

const HomePage: FC = () => {
  return (
    <>
      <AboutSection />
      <Container>
        <MindMapSection />
        <FaqSection />
        <ArtsSection />
        <ContactUsSection />
      </Container>
    </>
  );
};

export default HomePage;
