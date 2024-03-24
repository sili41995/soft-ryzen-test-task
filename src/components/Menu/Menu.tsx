import { FC } from 'react';
import { MenuBtn, ControlsWrap, BurgerMenuBtn } from './Menu.styled';
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
}) => {
  const menuBtnTitle = showMenu ? 'CLOSE' : 'MENU';
  const burgerMenuBtnTitle = showBurgerMenu ? 'CLOSE' : 'MENU';

  return (
    <>
      {showMenu && (
        <AnchorLinksList
          scrollingOccurred={scrollingOccurred}
          anchorLinks={anchorLinks}
          onAnchorLinkClick={onAnchorLinkClick}
        />
      )}
      {showBurgerMenu && <BurgerMenu />}
      <ControlsWrap>
        <BurgerMenuBtn
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
        <NavLinksList
          navLinks={navLinks}
          scrollingOccurred={scrollingOccurred}
        />
      </ControlsWrap>
    </>
  );
};

export default Menu;
