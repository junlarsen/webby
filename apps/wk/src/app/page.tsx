import { redirect } from 'next/navigation';
import { getSession } from '@/utils/session';
import { LoginForm } from '@/components/login-form';
import { Text } from '@/components/text';

export default function Home() {
  const token = getSession();
  if (token !== null) {
    return redirect('/reviews');
  }

  return (
    <main>
      <div className="flex flex-col gap-2 justify-between h-[26px]">
        <h1>WaniKani Reviews</h1>
        <LoginForm />
      </div>
    </main>
  );
}
