import { RefObject } from 'react';

export interface IProps {
  sectionRef: RefObject<HTMLElement>;
}

export interface IStyledProps {
  mobileImg: string;
  tabletImg: string;
  desktopImg: string;
}
