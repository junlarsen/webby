'use server';

import { getUser } from '@/utils/wk';
import { setSession } from '@/utils/session';
import { redirect } from 'next/navigation';

export async function login(form: FormData) {
  'use server';
  const token = form.get('token') ?? null;
  if (!token || typeof token !== 'string') {
    return { error: 'no token was provided' };
  }
  const userResponse = await getUser(token);
  if (userResponse.ok) {
    setSession(token);
    return redirect('/reviews');
  }
  return { error: 'invalid wanikani api token' };
}
