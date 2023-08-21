'use client';

import { FC, useState } from 'react';
import { login } from '@/app/actions/login';

export const LoginForm: FC = () => {
  const [error, setError] = useState<string | null>(null);
  const onSubmit = async (data: FormData) => {
    const result = await login(data);
    if ('error' in result) {
      setError(result.error ?? null);
    }
  };

  return (
    <form action={onSubmit} className="flex gap-2">
      {error && <p>Error: {error}</p>}
      <div className="flex-grow">
        <div className="flex">
          <input
            className="border border-black min-w-0 sm:w-auto w-full flex-1"
            type="text"
            required
            name="token"
            placeholder="wanikani api token"
          />
        </div>
      </div>
      <button className="border border-black whitespace-nowrap" type="submit">
        Log in
      </button>
    </form>
  );
};
