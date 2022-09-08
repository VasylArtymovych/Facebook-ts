export interface IUser {
  id: number;
  name: string;
  email: string;
  phone: string;
  address: { city: string };
}

export interface IPost {
  id: number;
  title: string;
  body: string;
}
