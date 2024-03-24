import { BtnClickEvent, NavLinks, BurgerMenuControls } from '@/types/types';

export interface IProps {
  showBurgerMenu: boolean;
  navLinks: NavLinks;
  scrollingOccurred: boolean;
  burgerMenuControls: BurgerMenuControls;
  onBurgerMenuBtnClick: (e: BtnClickEvent) => void;
}

export interface IStyledProps {
  scrollingOccurred: boolean;
}

export interface IStyledBurgerMenuBtnProps {
  scrollingOccurred: boolean;
  showBurgerMenu: boolean;
}
