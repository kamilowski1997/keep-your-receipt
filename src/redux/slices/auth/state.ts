import { UserDetailsType } from '../../../utils/interfaces/auth';

type AuthState = {
  user?: UserDetailsType;
  signInState: { loading: boolean; success?: boolean };
  signUpState: { loading: boolean; success?: boolean };
};

export type { AuthState };
