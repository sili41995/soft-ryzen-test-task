import { FC } from 'react';
import { Accent, Title } from './SectionTitle.styled';
import { IProps } from './SectionTitle.types';

const SectionTitle: FC<IProps> = ({ title, accent, textAlign = 'center' }) => (
  <Title textAlign={textAlign}>
    {title}
    {accent && <Accent>{` ${accent}`}</Accent>}
  </Title>
);

export default SectionTitle;
