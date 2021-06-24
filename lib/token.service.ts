import { NextPageContext } from 'next/types';
import Cookies from 'universal-cookie';
import {redirectUser} from "./auth";
import {fetchSecureAPI} from "./api";


class TokenService {
	public saveToken(token: string) {
		const cookies = new Cookies();
		cookies.set('token', token, { path: '/' });
		return Promise.resolve();
	}

	public deleteToken() {
		const cookies = new Cookies();
		cookies.remove('token', { path: '/' });
		return;
	}

	public checkAuthToken(token: string, ssr: boolean): Promise<any> {
		//return FetchService.isofetchAuthed(`/auth/validate`, { token }, 'POST', ssr);
		return fetchSecureAPI(token, '/auth/validate');
	}

	public async authenticateTokenSsr(ctx: NextPageContext) {
		const ssr = !!ctx.req;
		const cookies = new Cookies(ssr ? ctx.req.headers.cookie : null);
		const token = cookies.get('token');

		const response = await this.checkAuthToken(token, ssr);
		if (!response.success) {
			this.deleteToken();
			redirectUser(ctx, '/');
		}
	}
}

export default TokenService;