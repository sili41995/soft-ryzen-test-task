import ArtsSection from '@/components/ArtsSection';
import ContactUsSection from '@/components/ContactUsSection';
import FaqSection from '@/components/FaqSection';
import MindMapSection from '@/components/MindMapSection';
import AboutSection from '@/components/AboutSection';
import { FC } from 'react';
import HeroSection from '@/components/HeroSection';
import { BtnClickEvent, ISectionRefs } from '@/types/types';
import { makeBlur, smoothScroll } from '@/utils';
import { useOutletContext } from 'react-router-dom';

const HomePage: FC = () => {
  const {
    contactUsSectionRef,
    aboutSectionRef,
    artsSectionRef,
    faqSectionRef,
    mindMapSectionRef,
  } = useOutletContext<ISectionRefs>();

  const onMeetApesBtnClick = (e: BtnClickEvent) => {
    contactUsSectionRef.current && smoothScroll(contactUsSectionRef.current);
    makeBlur(e.currentTarget);
  };

  return (
    <>
      <HeroSection onMeetApesBtnClick={onMeetApesBtnClick} />
      <AboutSection sectionRef={aboutSectionRef} />
      <MindMapSection sectionRef={mindMapSectionRef} />
      <FaqSection sectionRef={faqSectionRef} />
      <ArtsSection sectionRef={artsSectionRef} />
      <ContactUsSection sectionRef={contactUsSectionRef} />
    </>
  );
};

export default HomePage;
