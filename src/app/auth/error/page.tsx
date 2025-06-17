import { Shield } from 'lucide-react';
import Link from 'next/link';

export default function AuthError() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 to-black text-white flex items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
          <Shield className="w-8 h-8 text-red-500" />
        </div>
        <h1 className="text-2xl font-bold mb-4">Sign In Failed</h1>
        <p className="text-gray-400 mb-8">An error occurred while signing in with Steam.</p>
        <Link
          href="/"
          className="px-6 py-3 bg-green-500 hover:bg-green-600 rounded-lg font-medium transition-colors inline-block"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
} 