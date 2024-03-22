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
