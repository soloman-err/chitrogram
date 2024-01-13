import LoadContent from '@/components/LoadContent';

export default async function Home() {
  return (
    <main className="container rounded-xl min-h-screen bg-dark/5 p-2 md:p-4">
      <LoadContent />
    </main>
  );
}
