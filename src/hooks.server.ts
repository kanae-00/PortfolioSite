import type { Handle } from '@sveltejs/kit';

const BASIC_AUTH_USER = process.env.BASIC_AUTH_USER ?? '';
const BASIC_AUTH_PASSWORD = process.env.BASIC_AUTH_PASSWORD ?? '';
const AUTH_COOKIE = 'portfolio_auth';

export const handle: Handle = async ({ event, resolve }) => {
  if (!BASIC_AUTH_USER || !BASIC_AUTH_PASSWORD) {
    return resolve(event);
  }

  // セッションCookieが有効ならそのまま通す（SvelteKitのクライアントナビゲーション対応）
  if (event.cookies.get(AUTH_COOKIE) === '1') {
    return resolve(event);
  }

  const authorization = event.request.headers.get('authorization');

  if (authorization) {
    const [scheme, encoded] = authorization.split(' ');
    if (scheme === 'Basic' && encoded) {
      try {
        const decoded = atob(encoded);
        const colonIndex = decoded.indexOf(':');
        if (colonIndex > -1) {
          const user = decoded.slice(0, colonIndex);
          const password = decoded.slice(colonIndex + 1);
          if (user === BASIC_AUTH_USER && password === BASIC_AUTH_PASSWORD) {
            event.cookies.set(AUTH_COOKIE, '1', {
              path: '/',
              httpOnly: true,
              sameSite: 'lax',
              maxAge: 60 * 60 * 24,
              secure: event.url.protocol === 'https:',
            });
            return resolve(event);
          }
        }
      } catch {
        // base64デコード失敗 → 401へフォールスルー
      }
    }
  }

  return new Response('Unauthorized', {
    status: 401,
    headers: {
      'WWW-Authenticate': 'Basic realm="Portfolio", charset="UTF-8"',
    },
  });
};
