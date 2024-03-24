import { FC } from 'react';
import { Link } from 'react-router-dom';
import Logo from '@/icons/logo.svg?react';
import { PagePaths, navLinks } from '@/constants';
import Menu from '@/components/Menu';
import { useHeader } from '@/hooks';
import { IProps } from './Header.types';
import { Container, Nav, StyledHeader } from './Header.styled';

const Header: FC<IProps> = ({ sectionRefs }) => {
  const {
    burgerMenuControls,
    scrollingOccurred,
    showBurgerMenu,
    onBurgerMenuBtnClick,
    burgerMenuBtnTitle,
  } = useHeader(sectionRefs);

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
          burgerMenuBtnTitle={burgerMenuBtnTitle}
          navLinks={navLinks}
          scrollingOccurred={scrollingOccurred}
          showBurgerMenu={showBurgerMenu}
          onBurgerMenuBtnClick={onBurgerMenuBtnClick}
          burgerMenuControls={burgerMenuControls}
        />
      </Container>
    </StyledHeader>
  );
};

export default Header;
