import { FC } from 'react';
import { AriaLabels, regExp } from '@/constants';
import Discord from '@/icons/discord.svg?react';
import Wallet from '@/icons/wallet.svg?react';
import Input from '@/components/Input';
import { useContactUsForm } from '@/hooks';
import { BtnClickEvent } from '@/types/types';
import { makeBlur } from '@/utils';
import { Form, SubmitFormBtn } from './ContactUsForm.styled';

const ContactUsForm: FC = () => {
  const {
    register,
    handleSubmit,
    invalidUsernameValue,
    invalidWalletAddressValue,
    handleFormSubmit,
    showDefaultBtnTitle,
    showErrorBtnTittle,
    isSubmitSuccessful,
  } = useContactUsForm();

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
      <SubmitFormBtn
        type='submit'
        onClick={onSubmitBtnClick}
        aria-label={AriaLabels.submitBtn}
      >
        {showDefaultBtnTitle && 'MINT'}
        {isSubmitSuccessful && 'MINTED'}
        {showErrorBtnTittle && 'ERROR'}
      </SubmitFormBtn>
    </Form>
  );
};

export default ContactUsForm;
