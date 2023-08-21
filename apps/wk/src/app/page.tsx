import { redirect } from 'next/navigation';
import { getSession } from '@/utils/session';
import { LoginForm } from '@/components/login-form';

export default function Home() {
  const token = getSession();
  if (token !== null) {
    return redirect('/reviews');
  }

  return (
    <main>
      <div className="flex flex-col gap-4 justify-between h-[26px]">
        <h1 className="text-lg font-semibold">WaniKani Reviews</h1>
        <LoginForm />

        <p>
          This is a website/mini-application made for the purpose of accelerating WaniKani reviews. It works by asking
          for both the meaning and the reading at once, halving the amount of cards needed to review.
        </p>

        <p>The website is mobile-friendly, making it easy to do your reviews quickly on mobile too.</p>

        <p>
          This way, the user does not have to fully type out each meaning and answer, significantly reducing the time
          required to perform your reviews. It is thus more comparable to Anki than the WaniKani review app. If you are
          concerned about not learning how to use the Japanese input method editor, then simply do not use this website.
        </p>

        <div>
          <h2 className="font-semibold">How it works:</h2>

          <ol className="list-disc list-inside">
            <li>Paste your WaniKani token above, and log in</li>
            <li>Press the middle of the screen to reveal the answer</li>
            <li>Press either "correct" or "incorrect" to mark the answer as correct or not</li>
            <li>If you are on desktop, press "F" to exit.</li>
          </ol>
        </div>

        <div>
          <h2 className="font-semibold">Alternative applications</h2>

          <ol className="list-disc list-inside">
            <li>
              Tsurukame for iOS works nice, but having to press-hold to reveal answers in its Anki mode makes it
              unbearably slow.
            </li>
            <li>
              The WaniKani website/app is great, especially if you spice it up with userscripts, but it doesn't support
              single-card mode.
            </li>
            <li>I'm generally not a fan of mobile apps, so this was the easiest solution for me.</li>
          </ol>
        </div>

        <div>
          <h2 className="font-semibold">Privacy concerns</h2>

          <p>
            We do not track or store any of your personal data. The website uses a single, non-tracking cookie to keep
            your WaniKani API key stored in your browser so that you do not need to provide the WaniKani API key every
            time.
          </p>
          <p>By using the application, you consent to the above usage of cookies.</p>
        </div>

        <p className="mt-16">
          Made by{' '}
          <a className="underline" href="https://jun.codes">
            Mats Jun
          </a>
          , &copy; {new Date().getUTCFullYear()}
        </p>
      </div>
    </main>
  );
}
