import { FC } from 'react';
import SectionTitle from '@/components/SectionTitle';
import FaqSectionList from '@/components/FaqSectionList';
import Container from '@/components/Container';
import { faqSectionCards } from '@/constants';
import { IProps } from './FaqSection.types';
import { Section } from './FaqSection.styled';

const FaqSection: FC<IProps> = ({ sectionRef }) => (
  <Section ref={sectionRef}>
    <Container>
      <SectionTitle title='FAQ' />
      <FaqSectionList faqSectionCards={faqSectionCards} />
    </Container>
  </Section>
);

export default FaqSection;
