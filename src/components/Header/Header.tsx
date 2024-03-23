import { FC, useEffect, useState } from 'react';
import { Container, Nav, StyledHeader } from './Header.styled';
import { Link } from 'react-router-dom';
import { PagePaths, navLinks, anchorLinks } from '@/constants';
import Logo from '@/icons/logo.svg?react';
import { BtnClickEvent } from '@/types/types';
import { makeBlur } from '@/utils';
import Menu from '@/components/Menu';

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

  const toggleShowMobileMenu = () => {
    setShowMobileMenu((prevState) => !prevState);
  };

  const onMenuBtnClick = (e: BtnClickEvent) => {
    toggleShowMobileMenu();
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
          anchorLinks={anchorLinks}
          showMobileMenu={showMobileMenu}
          onMenuBtnClick={onMenuBtnClick}
          navLinks={navLinks}
          scrollingOccurred={scrollingOccurred}
          onAnchorLinkClick={toggleShowMobileMenu}
        />
      </Container>
    </StyledHeader>
  );
};

export default Header;
