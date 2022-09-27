import { IProduct } from './IProduct';

export interface IUser {
  name?: string;
  email: string;
  password: string;
  repeatPassword?: string;
  phone?: string;
  checkbox?: boolean;
  cart?: IProduct[];
  whishList?: string[];
}
