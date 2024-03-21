import Container from '@/components/Container';
import DecorativeDivider from '@/components/DecorativeDivider';
import FaqSection from '@/components/FaqSection';
import MindMapSection from '@/components/MindMapSection';
import StorySection from '@/components/StorySection';
import { FC } from 'react';

const HomePage: FC = () => {
  return (
    <>
      <Container>
        <StorySection />
      </Container>
      <DecorativeDivider />
      <Container>
        <MindMapSection />
        <FaqSection />
      </Container>
    </>
  );
};

export default HomePage;
