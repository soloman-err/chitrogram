export type FullUser = {
  user: User;
  token: string;
};

export type RegisterType = {
  email: string;
  password: string;
};

export type User = {
  _id: string;
  email: string;
  password: string;
  role: 'admin' | 'customer' | 'supplier';
  profile?: Profile;
  createdAt: string | number | Date | undefined;
};

export type Profile = {
  _id?: string;
  user?: string;
  name: {
    firstName: string;
    lastName: string;
  };
};
