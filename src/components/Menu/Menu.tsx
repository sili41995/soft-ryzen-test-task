import { FC } from 'react';
import { Container, MenuBtn, ControlsWrap, BurgerMenuBtn } from './Menu.styled';
import { IProps } from './Menu.types';
import AnchorLinksList from '@/components/AnchorLinksList';
import NavLinksList from '@/components/NavLinksList';
import BurgerMenu from '../BurgerMenu';

const Menu: FC<IProps> = ({
  scrollingOccurred,
  onMenuBtnClick,
  showMenu,
  navLinks,
  anchorLinks,
  onAnchorLinkClick,
  showBurgerMenu,
  onBurgerMenuBtnClick,
  burgerMenuControls,
}) => {
  const menuBtnTitle = showMenu ? 'CLOSE' : 'MENU';
  const burgerMenuBtnTitle = showBurgerMenu ? 'CLOSE' : 'MENU';

  return (
    <Container>
      {showBurgerMenu && <BurgerMenu burgerMenuControls={burgerMenuControls} />}
      <ControlsWrap>
        <BurgerMenuBtn
          showBurgerMenu={showBurgerMenu}
          onClick={onBurgerMenuBtnClick}
          scrollingOccurred={scrollingOccurred}
          showMenu={showBurgerMenu}
        >
          {burgerMenuBtnTitle}
        </BurgerMenuBtn>
        <MenuBtn
          onClick={onMenuBtnClick}
          scrollingOccurred={scrollingOccurred}
          showMenu={showMenu}
        >
          {menuBtnTitle}
        </MenuBtn>
        {showMenu && (
          <AnchorLinksList
            scrollingOccurred={scrollingOccurred}
            anchorLinks={anchorLinks}
            onAnchorLinkClick={onAnchorLinkClick}
          />
        )}
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
