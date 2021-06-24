import {postAPI, securePostAPI} from "./api";
import Router from "next/router";
import _ from 'lodash';
import nookies, {destroyCookie, setCookie} from "nookies";

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
		return cookies.token;
	} else {
		return {};
	}
}

export function setUser(ctx, value) {
	const cookie = nookies.set(ctx,'ffsession', JSON.stringify(value));
	setCookie(ctx,'ffsession', JSON.stringify(value));
	return value;
}

export function destroyUser(ctx) {
	nookies.destroy(ctx, 'ffsession');
	destroyCookie(ctx, 'ffsession');
	console.log('logged out', getUser(ctx));
	return true;
}

export async function updateUser(ctx, data) {
	const token = getUser(ctx).jwt;
	console.log('TOKEN', token, 'DATA', data);
	return await securePostAPI(token, '/user')
}