import { useRef } from 'react';
import { ISectionRefs } from '@/types/types';

const useSectionRefs = (): ISectionRefs => {
  const contactUsSectionRef = useRef<HTMLElement>(null);
  const artsSectionRef = useRef<HTMLElement>(null);
  const faqSectionRef = useRef<HTMLElement>(null);
  const mindMapSectionRef = useRef<HTMLElement>(null);
  const aboutSectionRef = useRef<HTMLElement>(null);

  return {
    contactUsSectionRef,
    artsSectionRef,
    faqSectionRef,
    mindMapSectionRef,
    aboutSectionRef,
  };
};

export default useSectionRefs;
