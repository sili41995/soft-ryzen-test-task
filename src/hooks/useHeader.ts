import { useEffect, useState } from 'react';
import { Sections } from '@/constants';
import {
  BtnClickEvent,
  BurgerMenuControls,
  ISectionRefs,
  IUseHeader,
} from '@/types/types';
import { makeBlur, smoothScroll } from '@/utils';

const useHeader = (sectionRefs: ISectionRefs): IUseHeader => {
  const [showBurgerMenu, setShowBurgerMenu] = useState<boolean>(false);
  const [scrollingOccurred, setScrollingOccurred] = useState<boolean>(false);
  const {
    aboutSectionRef,
    artsSectionRef,
    contactUsSectionRef,
    faqSectionRef,
    mindMapSectionRef,
  } = sectionRefs;
  const burgerMenuBtnTitle = showBurgerMenu ? 'CLOSE' : 'MENU';

  useEffect(() => {
    const onScroll = () => {
      const offset = window.scrollY;
      if (offset > 10) {
        setScrollingOccurred(true);
      } else {
        setScrollingOccurred(false);
      }
    };

    window.addEventListener('scroll', onScroll);

    return () => {
      removeEventListener('scroll', onScroll);
    };
  }, [scrollingOccurred]);

  const onBurgerMenuBtnClick = (e: BtnClickEvent) => {
    setShowBurgerMenu((prevState) => !prevState);
    makeBlur(e.currentTarget);
  };

  const onAboutBtnClick = (e: BtnClickEvent) => {
    aboutSectionRef.current && smoothScroll(aboutSectionRef.current);
    makeBlur(e.currentTarget);
    setShowBurgerMenu(false);
  };

  const onArtsBtnClick = (e: BtnClickEvent) => {
    artsSectionRef.current && smoothScroll(artsSectionRef.current);
    makeBlur(e.currentTarget);
    setShowBurgerMenu(false);
  };

  const onFaqBtnClick = (e: BtnClickEvent) => {
    faqSectionRef.current && smoothScroll(faqSectionRef.current);
    makeBlur(e.currentTarget);
    setShowBurgerMenu(false);
  };

  const onMintBtnClick = (e: BtnClickEvent) => {
    contactUsSectionRef.current && smoothScroll(contactUsSectionRef.current);
    makeBlur(e.currentTarget);
    setShowBurgerMenu(false);
  };

  const onMMapBtnClick = (e: BtnClickEvent) => {
    mindMapSectionRef.current && smoothScroll(mindMapSectionRef.current);
    makeBlur(e.currentTarget);
    setShowBurgerMenu(false);
  };

  const burgerMenuControls: BurgerMenuControls = [
    { title: Sections.about, onClick: onAboutBtnClick },
    { title: Sections.mMap, onClick: onMMapBtnClick },
    { title: Sections.faq, onClick: onFaqBtnClick },
    { title: Sections.arts, onClick: onArtsBtnClick },
    { title: Sections.mint, onClick: onMintBtnClick },
  ];

  return {
    burgerMenuControls,
    scrollingOccurred,
    showBurgerMenu,
    onBurgerMenuBtnClick,
    burgerMenuBtnTitle,
  };
};

export default useHeader;
