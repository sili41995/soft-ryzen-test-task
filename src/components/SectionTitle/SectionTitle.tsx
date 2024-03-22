import { FC } from 'react';
import { Title } from './SectionTitle.styled';
import { IProps } from './SectionTitle.types';

const SectionTitle: FC<IProps> = ({ title }) => <Title>{title}</Title>;

export default SectionTitle;
