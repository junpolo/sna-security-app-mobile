export interface User {
  email: string;
  password: string;
}

export interface UserLoginResponse {
  message: string;
  accessToken: string;
  expires: string;
}

export interface TokenAndExpiry extends Omit<UserLoginResponse, "message"> {}
