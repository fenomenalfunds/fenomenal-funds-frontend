export interface IRegisterIn {
	fullname: string;
	username: string;
	email: string;
	password: string;
}

export interface ILoginIn {
	username: string;
	password: string;
}

export interface iAuthInfo {
	jwt: string;
	id: string;
	username: string;
	photo: object;
	fullname: string;
	email: string;
}