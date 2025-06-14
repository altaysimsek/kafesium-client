import { redirect } from 'next/navigation';

export default async function AuthCallback() {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/auth/me`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      cache: 'no-store'
    });

    if (response.ok) {
      redirect('/');
    } else {
      redirect('/auth/error');
    }
  } catch (error) {
    console.error('Callback error:', error);
    redirect('/auth/error');
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 to-black text-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">Giriş yapılıyor...</h1>
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-500 mx-auto"></div>
      </div>
    </div>
  );
} 