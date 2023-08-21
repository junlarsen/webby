import Link from 'next/link';

export default function CompletedPage() {
  return (
    <>
      <h1>You have completed all of the reviews</h1>

      <Link href="/">Go home</Link>
    </>
  );
}
