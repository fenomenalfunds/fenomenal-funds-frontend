import {NextPageContext} from "next";

export interface IGlobalStatus {
	message: string;
}

export interface IAppContext {
	Component: any;
	ctx: NextPageContext;
}

export interface IRdedirectOptions {
	ctx: NextPageContext;
	status: number;
}
