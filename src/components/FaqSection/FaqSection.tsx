import { FC } from 'react';
import SectionTitle from '@/components/SectionTitle';
import { faqSectionCards } from '@/constants';
import FaqSectionList from '@/components/FaqSectionList';
import { Section } from './FaqSection.styled';

const FaqSection: FC = () => {
  return (
    <Section>
      <SectionTitle title='FAQ' />
      <FaqSectionList faqSectionCards={faqSectionCards} />
    </Section>
  );
};

export default FaqSection;
