import { getServerSession } from 'next-auth';
import { Login } from '@/app/login';
import { Logout } from '@/app/logout';

export default async function Home() {
  const session = await getServerSession();

  return (
    <div>
      <Login />
      <Logout />

      <pre>{JSON.stringify(session, null, 2)}</pre>
    </div>
  );
}
