import { FC } from 'react';
import { logout } from '@/app/actions/logout';

export const LogoutForm: FC = () => {
  return (
    <form action={logout}>
      <button className="border border-black" type="submit">
        Log out
      </button>
    </form>
  );
};
