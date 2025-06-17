'use client';
import { Landing } from './landing';
import { LoginHomepage } from './login-homepage';
import { useAuth } from '@/contexts/auth-context';

export const HomepageWrapper = () => {
  const { user } = useAuth();

  if (user) {
    return <LoginHomepage />;
  }

  return (
    <Landing />
  );
};