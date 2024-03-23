import ArtsSection from '@/components/ArtsSection';
import ContactUsSection from '@/components/ContactUsSection';
import FaqSection from '@/components/FaqSection';
import MindMapSection from '@/components/MindMapSection';
import AboutSection from '@/components/AboutSection';
import { FC, useRef } from 'react';
import HeroSection from '@/components/HeroSection';
import { BtnClickEvent } from '@/types/types';
import { makeBlur } from '@/utils';

const HomePage: FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const onMeetApesBtnClick = (e: BtnClickEvent) => {
    sectionRef.current?.scrollIntoView({ behavior: 'smooth' });

    makeBlur(e.currentTarget);
  };

  return (
    <>
      <HeroSection onMeetApesBtnClick={onMeetApesBtnClick} />
      <AboutSection />
      <MindMapSection />
      <FaqSection />
      <ArtsSection />
      <ContactUsSection sectionRef={sectionRef} />
    </>
  );
};

export default HomePage;
