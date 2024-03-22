import { FC } from 'react';
import { Title } from './HiddenSectionTitle.styled';
import { IProps } from './HiddenSectionTitle.types';

const HiddenSectionTitle: FC<IProps> = ({ title }) => <Title>{title}</Title>;

export default HiddenSectionTitle;
