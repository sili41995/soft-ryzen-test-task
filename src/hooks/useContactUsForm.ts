import { SubmitHandler, useForm } from 'react-hook-form';
import { ICredentials, IUseContactUsForm } from '@/types/types';

const useContactUsForm = (): IUseContactUsForm => {
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

  return {
    handleSubmit,
    invalidUsernameValue,
    invalidWalletAddressValue,
    handleFormSubmit,
    register,
    showDefaultBtnTitle,
    showErrorBtnTittle,
    isSubmitSuccessful,
  };
};

export default useContactUsForm;
