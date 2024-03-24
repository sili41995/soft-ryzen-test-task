import { FC, useEffect, useState } from 'react';
import { Container, Nav, StyledHeader } from './Header.styled';
import { Link } from 'react-router-dom';
import { PagePaths, navLinks, anchorLinks, Sections } from '@/constants';
import Logo from '@/icons/logo.svg?react';
import { BtnClickEvent, BurgerMenuControls } from '@/types/types';
import { makeBlur, smoothScroll } from '@/utils';
import Menu from '@/components/Menu';
import { IProps } from './Header.types';

const Header: FC<IProps> = ({ sectionRefs }) => {
  const [showBurgerMenu, setShowBurgerMenu] = useState<boolean>(false);
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [scrollingOccurred, setScrollingOccurred] = useState<boolean>(false);
  const {
    aboutSectionRef,
    artsSectionRef,
    contactUsSectionRef,
    faqSectionRef,
    mindMapSectionRef,
  } = sectionRefs;

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

  const onAnchorLinkClick = () => {
    showMenu && setShowMenu(false);
    showBurgerMenu && setShowBurgerMenu(false);
  };

  const onMenuBtnClick = (e: BtnClickEvent) => {
    setShowMenu((prevState) => !prevState);
    makeBlur(e.currentTarget);
  };

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

  return (
    <StyledHeader>
      <Container scrollingOccurred={scrollingOccurred}>
        {!scrollingOccurred && (
          <Nav>
            <Link to={PagePaths.homePath}>
              <Logo />
            </Link>
          </Nav>
        )}
        <Menu
          anchorLinks={anchorLinks}
          showMenu={showMenu}
          navLinks={navLinks}
          scrollingOccurred={scrollingOccurred}
          showBurgerMenu={showBurgerMenu}
          onMenuBtnClick={onMenuBtnClick}
          onAnchorLinkClick={onAnchorLinkClick}
          onBurgerMenuBtnClick={onBurgerMenuBtnClick}
          burgerMenuControls={burgerMenuControls}
        />
      </Container>
    </StyledHeader>
  );
};

export default Header;
