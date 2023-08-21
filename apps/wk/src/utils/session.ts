import { BearerToken } from '@/utils/wk';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export const getSession = (): BearerToken | null => {
  return cookies().get('wk_token')?.value ?? null;
};

export const getSessionOrRedirect = (to = '/'): BearerToken => {
  return getSession() ?? redirect(to);
};

export const deleteSession = () => {
  return cookies().delete('wk_token');
};

export const setSession = (token: BearerToken) => {
  cookies().set('wk_token', token);
};
