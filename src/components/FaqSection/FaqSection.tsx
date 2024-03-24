import { FC } from 'react';
import SectionTitle from '@/components/SectionTitle';
import { Sections, faqSectionCards } from '@/constants';
import FaqSectionList from '@/components/FaqSectionList';
import { Section } from './FaqSection.styled';
import Container from '@/components/Container';
import { IProps } from './FaqSection.types';

const FaqSection: FC<IProps> = ({ sectionRef }) => {
  return (
    <Section id={Sections.faq} ref={sectionRef}>
      <Container>
        <SectionTitle title='FAQ' />
        <FaqSectionList faqSectionCards={faqSectionCards} />
      </Container>
    </Section>
  );
};

export default FaqSection;
