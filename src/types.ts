export interface ICredentials {
  email: string;
  password: string;
}

export interface IError {
  code: string;
}

export interface ISignUPCredentials extends ICredentials {
  name: string;
  birthday?: Date;
}

export interface IUserData extends Omit<ISignUPCredentials, 'password'> {
  telegram?: string;
  gender?: string;
}

export interface IUserDataWithId extends IUserData, IWithId {}

export interface IUpdateUserData
  extends Partial<Omit<IUserData, 'birthday' | 'email'>> {}

export interface IUpdateUserDataWithPassword extends IUpdateUserData {
  password?: string;
}

export interface ITwitData {
  text: string;
  createdAt: Date;
  image: string;
  authorId: string;
}

export interface IWithId {
  id: string;
}

export interface ITwitDataWithUser extends Omit<ITwitData, 'authorId'> {
  authorName: string;
  authorEmail: string;
}

export interface ITwitDataWithId extends ITwitData, IWithId {}

export interface ITwitDataWithUserWithId extends ITwitDataWithUser, IWithId {}
