import { FC, useEffect, useState } from 'react';
import { Container, Nav, StyledHeader } from './Header.styled';
import { Link } from 'react-router-dom';
import { PagePaths, navLinks, sectionIds } from '@/constants';
import Logo from '@/icons/logo.svg?react';
import { BtnClickEvent } from '@/types/types';
import { makeBlur } from '@/utils';
import Menu from '../Menu';

const Header: FC = () => {
  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false);
  const [scrollingOccurred, setScrollingOccurred] = useState<boolean>(false);

  useEffect(() => {
    const onScroll = () => {
      const offset = window.scrollY;
      if (offset > 1) {
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

  const onMenuBtnClick = (e: BtnClickEvent) => {
    setShowMobileMenu((prevState) => !prevState);
    makeBlur(e.currentTarget);
  };

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
          sectionIds={sectionIds}
          showMobileMenu={showMobileMenu}
          onMenuBtnClick={onMenuBtnClick}
          navLinks={navLinks}
          scrollingOccurred={scrollingOccurred}
        />
      </Container>
    </StyledHeader>
  );
};

export default Header;
