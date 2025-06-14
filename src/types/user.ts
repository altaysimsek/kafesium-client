export interface SteamProfile {
  id: number;
  userId: number;
  displayName: string;
  avatar: string;
  profileUrl: string;
  country: string;
  lastLogin: string;
  createdAt: string;
  updatedAt: string;
}

export interface User {
  id: number;
  name: string;
  steamId: string;
  role: 'NORMAL' | 'ADMIN';
  createdAt: string;
  updatedAt: string;
  steamProfile: SteamProfile;
}

export interface UserResponse {
  status: 'success' | 'error';
  data: User;
}