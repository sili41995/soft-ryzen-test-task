import { BtnClickEvent } from '@/types/types';

export interface IProps {
  onMeetApesBtnClick: (e: BtnClickEvent) => void;
}

export interface IStyledProps {
  mobileBgImage: string;
  tabletBgImage: string;
  desktopBgImage: string;
}
