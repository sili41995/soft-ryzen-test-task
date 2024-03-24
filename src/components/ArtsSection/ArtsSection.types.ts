import { ArtsSectionCards } from '@/types/types';
import { RefObject } from 'react';

export interface IProps {
  sectionRef: RefObject<HTMLElement>;
  artsSectionCards: ArtsSectionCards;
}
