import { AnchorLinks } from '@/types/types';

export interface IProps {
  scrollingOccurred: boolean;
  anchorLinks: AnchorLinks;
  onAnchorLinkClick: () => void;
}

export interface IStyledProps {
  scrollingOccurred: boolean;
}
