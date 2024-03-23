import { FC } from 'react';
import { Container, MenuBtn, ControlsWrap } from './Menu.styled';
import { IProps } from './Menu.types';
import AnchorLinksList from '@/components/AnchorLinksList';
import NavLinksList from '@/components/NavLinksList';

const Menu: FC<IProps> = ({
  scrollingOccurred,
  onMenuBtnClick,
  showMobileMenu,
  navLinks,
  anchorLinks,
  onAnchorLinkClick,
}) => {
  const menuBtnTitle = showMobileMenu ? 'CLOSE' : 'MENU';

  return (
    <Container>
      {showMobileMenu && (
        <AnchorLinksList
          scrollingOccurred={scrollingOccurred}
          anchorLinks={anchorLinks}
          onAnchorLinkClick={onAnchorLinkClick}
        />
      )}
      <ControlsWrap>
        <MenuBtn
          onClick={onMenuBtnClick}
          scrollingOccurred={scrollingOccurred}
          showMobileMenu={showMobileMenu}
        >
          {menuBtnTitle}
        </MenuBtn>
        <NavLinksList navLinks={navLinks} scrollingOccurred />
      </ControlsWrap>
    </Container>
  );
};

export default Menu;
