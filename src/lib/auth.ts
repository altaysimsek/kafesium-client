import { cookies } from "next/headers";

export async function getUserSession() {
  try {
    const cookieStore = await cookies();
    const cookieHeader = cookieStore.toString();

    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/auth/me`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Cookie': cookieHeader
      },
      cache: 'no-store'
    });

    if (!response.ok) {
      return null;
    }


    const user = await response.json();
    return user;
  } catch (error) {
    console.error('Auth check error:', error);
    return null;
  }
}