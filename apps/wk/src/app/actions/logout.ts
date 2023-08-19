'use server';

import { deleteSession } from '@/utils/session';
import { redirect } from 'next/navigation';

export async function logout() {
  'use server';
  deleteSession();
  return redirect('/');
}
