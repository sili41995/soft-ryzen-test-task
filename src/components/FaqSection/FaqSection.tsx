import { FC } from 'react';
import SectionTitle from '@/components/SectionTitle';
import { faqSectionCards } from '@/constants';
import FaqSectionList from '@/components/FaqSectionList';
import { Section } from './FaqSection.styled';
import Container from '@/components/Container';

const FaqSection: FC = () => {
  return (
    <Section>
      <Container>
        <SectionTitle title='FAQ' />
        <FaqSectionList faqSectionCards={faqSectionCards} />
      </Container>
    </Section>
  );
};

export default FaqSection;
