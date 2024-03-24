import { NavLinks } from '@/types/types';

export interface IProps {
  navLinks: NavLinks;
  scrollingOccurred: boolean;
  showBurgerMenu: boolean;
}

export interface IStyledProps {
  scrollingOccurred: boolean;
  showBurgerMenu: boolean;
}
