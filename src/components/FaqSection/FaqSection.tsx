import { FC } from 'react';
import SectionTitle from '@/components/SectionTitle';
import { Sections, faqSectionCards } from '@/constants';
import FaqSectionList from '@/components/FaqSectionList';
import { Section } from './FaqSection.styled';
import Container from '@/components/Container';

const FaqSection: FC = () => {
  return (
    <Section id={Sections.faq}>
      <Container>
        <SectionTitle title='FAQ' />
        <FaqSectionList faqSectionCards={faqSectionCards} />
      </Container>
    </Section>
  );
};

export default FaqSection;
