import { BtnClickEvent, NavLinks, SectionIds } from '@/types/types';

export interface IProps {
  scrollingOccurred: boolean;
  onMenuBtnClick: (e: BtnClickEvent) => void;
  showMobileMenu: boolean;
  navLinks: NavLinks;
  sectionIds: SectionIds;
}

export interface IStyledProps {
  scrollingOccurred: boolean;
}

export interface IStyledMenuBtnProps {
  scrollingOccurred: boolean;
  showMobileMenu: boolean;
}
