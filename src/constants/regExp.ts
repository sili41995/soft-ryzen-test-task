import { IRegExp } from '@/types/types';

const regExp: IRegExp = {
  username: /^@.{1,}$/,
  walletAddress: /^[^\s]{19}$/,
};

export default regExp;
