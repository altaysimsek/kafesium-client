'use client';

import React, { createContext, useContext, useState } from 'react';
import { User } from '@/types/user';

interface AuthContextType {
  user: User | null;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ userInitial, children }: { userInitial: User | null, children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(userInitial);

  return (
    <AuthContext.Provider value={{ user }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);