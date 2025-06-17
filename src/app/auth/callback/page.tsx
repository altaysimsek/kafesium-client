import { redirect } from 'next/navigation';
import { getUserSession } from '@/lib/auth';

export default async function AuthCallback() {
  const user = await getUserSession();

  if (user) {
    redirect('/');
  }

  redirect('/auth/error');

  // Bu kısım hiçbir zaman çalışmayacak çünkü yukarıdaki redirect'lerden biri her zaman tetiklenecek
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 to-black text-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">Signing in...</h1>
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-500 mx-auto"></div>
      </div>
    </div>
  );
} 