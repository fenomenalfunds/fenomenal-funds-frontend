import {postAPI} from "./api";
import Router from "next/router";
import _ from 'lodash';
import nookies from "nookies";

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

export function getUser(ctx) {
	const cookies = nookies.get(ctx);
	if(!_.isEmpty(cookies)) {
		return JSON.parse(cookies.ffsession);
	} else {
		return {};
	}
}

export function setUser(ctx, value) {
	nookies.set(ctx,'ffsession', JSON.stringify(value));
	return value;
}

export function destroyUser(ctx) {
	nookies.destroy(ctx, 'ffsession');
	return true;
}