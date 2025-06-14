'use client';

import React, { createContext, useContext, useState } from 'react';
import { User } from '@/types/user';

interface AuthContextType {
  user: User | null;
  setUser: (user: User | null) => void;
}

const defaultContext: AuthContextType = {
  user: null,
  setUser: () => {},
}

const AuthContext = createContext<AuthContextType>(defaultContext);

export function AuthProvider({ userInitial, children }: { userInitial: User | null, children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(userInitial);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);