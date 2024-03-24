import { FC } from 'react';
import { IProps } from './HiddenSectionTitle.types';
import { Title } from './HiddenSectionTitle.styled';

const HiddenSectionTitle: FC<IProps> = ({ title }) => <Title>{title}</Title>;

export default HiddenSectionTitle;
