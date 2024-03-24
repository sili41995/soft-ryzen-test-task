import { BtnClickEvent, NavLinks, BurgerMenuControls } from '@/types/types';

export interface IProps {
  burgerMenuBtnTitle: string;
  showBurgerMenu: boolean;
  navLinks: NavLinks;
  scrollingOccurred: boolean;
  burgerMenuControls: BurgerMenuControls;
  onBurgerMenuBtnClick: (e: BtnClickEvent) => void;
}

export interface IStyledProps {
  scrollingOccurred: boolean;
  showBurgerMenu: boolean;
}
