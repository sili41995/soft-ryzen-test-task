import { FC } from 'react';
import { IProps } from './Input.types';
import { Error, IconWrap, InputWrap, Label, StyledInput } from './Input.styled';

const Input: FC<IProps> = ({
  placeholder,
  invalidField,
  settings,
  error,
  icon,
}) => (
  <Label>
    <InputWrap>
      <IconWrap>{icon}</IconWrap>
      <StyledInput
        placeholder={placeholder}
        invalidField={invalidField}
        type='text'
        {...settings}
      />
    </InputWrap>
    <Error invalidField={invalidField}>{error}</Error>
  </Label>
);

export default Input;
