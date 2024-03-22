import { ReactNode } from 'react';

export interface IProps {
  placeholder: string;
  invalidField: boolean;
  settings: object;
  error: string;
  icon: ReactNode;
}

export interface IStyledProps {
  invalidField: boolean;
}
