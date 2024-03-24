import { FC } from 'react';
import { IProps } from './FakeSectionTitle.types';
import { Title } from './FakeSectionTitle.styled';

const FakeSectionTitle: FC<IProps> = ({ title }) => <Title>{title}</Title>;

export default FakeSectionTitle;
