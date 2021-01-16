export interface UserState {
  loading: boolean;
  error: string | null;
  user: any;
}

export interface AuthParams {
  email: string;
  password: string;
}
