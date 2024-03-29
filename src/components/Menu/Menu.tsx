import { FC } from 'react';
import NavLinksList from '@/components/NavLinksList';
import BurgerMenu from '@/components/BurgerMenu';
import { AriaLabels } from '@/constants';
import { IProps } from './Menu.types';
import { Container, ControlsWrap, BurgerMenuBtn } from './Menu.styled';

const Menu: FC<IProps> = ({
  scrollingOccurred,
  navLinks,
  showBurgerMenu,
  onBurgerMenuBtnClick,
  burgerMenuControls,
  burgerMenuBtnTitle,
}) => (
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
        aria-label={AriaLabels.burgerMenuBtn}
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

export default Menu;
