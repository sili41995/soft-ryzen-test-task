import Container from '@/components/Container';
import DecorativeDivider from '@/components/DecorativeDivider';
import StorySection from '@/components/StorySection';
import { FC } from 'react';

const HomePage: FC = () => {
  return (
    <>
      <Container>
        <StorySection />
      </Container>
      <DecorativeDivider />
    </>
  );
};

export default HomePage;
