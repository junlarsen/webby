import { getSessionOrRedirect } from '@/utils/session';
import { LogoutForm } from '@/components/logout-form';
import { getUser } from '@/utils/wk';
import { Review } from '@/components/review';
import { StoredSubjectProvider } from '@/app/reviews/subject-store';

export default async function ReviewsPage() {
  const token = getSessionOrRedirect();
  const user = await getUser(token);
  const json = await user.json();
  return (
    <main>
      <div className="flex gap-2 justify-between h-[26px]">
        <h1>
          {json.data.username} &mdash; level {json.data.level}
        </h1>

        <LogoutForm />
      </div>

      <StoredSubjectProvider token={token}>
        <Review token={token} />
      </StoredSubjectProvider>
    </main>
  );
}
