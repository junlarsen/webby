import { getSessionOrRedirect } from '@/utils/session';
import { LogoutForm } from '@/components/logout-form';
import { getAssignments, getUser } from '@/utils/wk';
import { Review } from '@/components/review';
import { redirect } from 'next/navigation';

export default async function ReviewsPage() {
  const token = getSessionOrRedirect();
  const user = await getUser(token);
  const userJson = await user.json();
  const assignments = await getAssignments(token);
  const assignmentsJson = await assignments.json();

  if (assignmentsJson.total_count === 0) {
    return redirect('/completed');
  }

  return (
    <main>
      <div className="flex gap-2 justify-between h-[26px]">
        <h1>
          {userJson.data.username} &mdash; level {userJson.data.level}
        </h1>

        <LogoutForm />
      </div>

      <Review token={token} />
    </main>
  );
}
