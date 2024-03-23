import { PagePaths } from '@/constants';
import { MouseEvent, ReactNode } from 'react';

export interface IFaqSectionCard {
  title: string;
  description: string;
  avatar: string;
}

export type FaqSectionCards = Readonly<IFaqSectionCard[]>;

export type ArtsSectionCards = Readonly<string[]>;

export interface IMindMapSectionCard {
  title: string;
  text: string;
}

export type MindMapSectionCards = Readonly<IMindMapSectionCard[]>;

export interface ICredentials {
  username: string;
  walletAddress: string;
}

export interface IRegExp {
  username: RegExp;
  walletAddress: RegExp;
}

export type BtnClickEvent = MouseEvent<HTMLButtonElement>;

export interface INavLink {
  path: PagePaths;
  icon: ReactNode;
}

export type NavLinks = Readonly<INavLink[]>;
