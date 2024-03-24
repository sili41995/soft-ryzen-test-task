import { FC } from 'react';
import { Container, ControlsWrap, BurgerMenuBtn } from './Menu.styled';
import { IProps } from './Menu.types';
import NavLinksList from '@/components/NavLinksList';
import BurgerMenu from '../BurgerMenu';

const Menu: FC<IProps> = ({
  scrollingOccurred,
  navLinks,
  showBurgerMenu,
  onBurgerMenuBtnClick,
  burgerMenuControls,
}) => {
  const burgerMenuBtnTitle = showBurgerMenu ? 'CLOSE' : 'MENU';

  return (
    <Container>
      {showBurgerMenu && (
        <BurgerMenu
          scrollingOccurred={scrollingOccurred}
          burgerMenuControls={burgerMenuControls}
        />
      )}
      <ControlsWrap>
        <BurgerMenuBtn
          showBurgerMenu={showBurgerMenu}
          onClick={onBurgerMenuBtnClick}
          scrollingOccurred={scrollingOccurred}
        >
          {burgerMenuBtnTitle}
        </BurgerMenuBtn>
        <NavLinksList
          navLinks={navLinks}
          scrollingOccurred={scrollingOccurred}
          showBurgerMenu={showBurgerMenu}
        />
      </ControlsWrap>
    </Container>
  );
};

export default Menu;
