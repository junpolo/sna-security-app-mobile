export interface User {
  email: string;
  password: string;
}

export interface UserLoginResponse {
  message: string;
  accessToken: string;
}
