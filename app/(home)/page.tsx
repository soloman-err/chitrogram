'use client';
import LoadContent from '@/components/shared/LoadContent';

export default async function Home() {
  return (
    <main className={`container rounded-xl min-h-screen p-2 md:p-4`}>
      <LoadContent />
    </main>
  );
}
