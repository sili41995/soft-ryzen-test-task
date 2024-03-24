import { FC, useEffect, useState } from 'react';
import { Container, Nav, StyledHeader } from './Header.styled';
import { Link } from 'react-router-dom';
import { PagePaths, navLinks, anchorLinks } from '@/constants';
import Logo from '@/icons/logo.svg?react';
import { BtnClickEvent } from '@/types/types';
import { makeBlur } from '@/utils';
import Menu from '@/components/Menu';

const Header: FC = () => {
  const [showBurgerMenu, setShowBurgerMenu] = useState<boolean>(false);
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [scrollingOccurred, setScrollingOccurred] = useState<boolean>(false);

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
        />
      </Container>
    </StyledHeader>
  );
};

export default Header;
