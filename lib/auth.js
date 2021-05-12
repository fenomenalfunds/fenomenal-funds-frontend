import {postAPI} from "./api";
import Router from "next/router";

export async function userLogin(loginInfo) {
	return await postAPI('/auth/local', loginInfo);
}

export function redirectUser(ctx, location) {
	if (ctx.req) {
		ctx.res.writeHead(302, { Location: location });
		ctx.res.end();
	} else {
		Router.push(location);
	}
}