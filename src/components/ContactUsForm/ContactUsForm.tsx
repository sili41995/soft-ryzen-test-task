import { regExp } from '@/constants';
import { BtnClickEvent, ICredentials } from '@/types/types';
import { FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Form, SubmitFormBtn } from './ContactUsForm.styled';
import Discord from '@/icons/discord.svg?react';
import Wallet from '@/icons/wallet.svg?react';
import Input from '@/components/Input';
import { makeBlur } from '@/utils';

const ContactUsForm: FC = () => {
  const { register, formState, handleSubmit, reset, getFieldState } =
    useForm<ICredentials>();
  const { invalid: invalidUsernameValue } = getFieldState(
    'username',
    formState
  );
  const { invalid: invalidWalletAddressValue } = getFieldState(
    'walletAddress',
    formState
  );
  const { isSubmitted, isSubmitSuccessful } = formState;
  const showDefaultBtnTitle = !isSubmitted;
  const showErrorBtnTittle = isSubmitted && !isSubmitSuccessful;

  const handleFormSubmit: SubmitHandler<ICredentials> = (data) => {
    console.log(data);
    reset();
  };

  const onSubmitBtnClick = (e: BtnClickEvent) => {
    makeBlur(e.currentTarget);
  };

  return (
    <Form onSubmit={handleSubmit(handleFormSubmit)}>
      <Input
        placeholder='@username'
        invalidField={invalidUsernameValue}
        icon={<Discord />}
        error='Wrong discord'
        settings={{
          ...register('username', {
            required: true,
            pattern: regExp.username,
          }),
        }}
      />
      <Input
        placeholder='Wallet address'
        invalidField={invalidWalletAddressValue}
        icon={<Wallet />}
        error='Wrong address'
        settings={{
          ...register('walletAddress', {
            required: true,
            pattern: regExp.walletAddress,
          }),
        }}
      />
      <SubmitFormBtn type='submit' onClick={onSubmitBtnClick}>
        {showDefaultBtnTitle && 'MINT'}
        {isSubmitSuccessful && 'MINTED'}
        {showErrorBtnTittle && 'ERROR'}
      </SubmitFormBtn>
    </Form>
  );
};

export default ContactUsForm;
