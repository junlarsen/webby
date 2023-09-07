'use client';

import { FC } from 'react';
import { signIn } from 'next-auth/react';

export const Login: FC = () => {
  return <button onClick={() => signIn('cognito')}>Log in</button>;
};
