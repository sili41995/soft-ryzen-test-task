import { FC } from 'react';
import { Title } from './FakeSectionTitle.styled';
import { IProps } from './FakeSectionTitle.types';

const FakeSectionTitle: FC<IProps> = ({ title }) => <Title>{title}</Title>;

export default FakeSectionTitle;
