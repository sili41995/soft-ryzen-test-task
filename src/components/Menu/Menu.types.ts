import { BtnClickEvent, NavLinks, AnchorLinks } from '@/types/types';

export interface IProps {
  onMenuBtnClick: (e: BtnClickEvent) => void;
  showMobileMenu: boolean;
  navLinks: NavLinks;
  scrollingOccurred: boolean;
  anchorLinks: AnchorLinks;
  onAnchorLinkClick: () => void;
}

export interface IStyledProps {
  scrollingOccurred: boolean;
  showMobileMenu: boolean;
}
