'use client';

import { FC } from 'react';
import { signOut } from 'next-auth/react';

export const Logout: FC = () => {
  return <button onClick={() => signOut()}>Sign out</button>;
};
