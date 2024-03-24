import { BtnClickEvent, NavLinks, AnchorLinks } from '@/types/types';

export interface IProps {
  showBurgerMenu: boolean;
  showMenu: boolean;
  navLinks: NavLinks;
  anchorLinks: AnchorLinks;
  scrollingOccurred: boolean;
  onAnchorLinkClick: () => void;
  onMenuBtnClick: (e: BtnClickEvent) => void;
  onBurgerMenuBtnClick: (e: BtnClickEvent) => void;
}

export interface IStyledProps {
  scrollingOccurred: boolean;
  showMenu: boolean;
}

export interface IStyledBurgerMenuBtnProps {
  scrollingOccurred: boolean;
  showMenu: boolean;
  showBurgerMenu: boolean;
}
