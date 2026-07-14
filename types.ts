export interface User {
  id: string;
  name: string;
  avatar: string;
  role: 'citizen' | 'responder' | 'admin';
  verified: boolean;
}

export interface Alert {
  id: string;
  title: string;
  description: string;
  type: 'flood' | 'fire' | 'accident' | 'collapse' | 'violence' | 'infrastructure';
  severity: 'low' | 'medium' | 'high' | 'critical';
  timestamp: string;
  location: string;
  verifiedCount: number;
  isOfficial: boolean;
  image?: string;
}

export interface ChatMessage {
  id: string;
  text: string;
  sender: 'user' | 'ai';
  timestamp: Date;
  metadata?: {
    type: 'map' | 'alert' | 'weather';
    data: any;
  };
}

export enum RoutePath {
  LOGIN = '/login',
  LANDING = '/welcome',
  SIGNUP = '/signup',
  FORGOT_PASSWORD = '/forgot-password',
  HOME = '/',
  MAP = '/map',
  ALERTS = '/alerts',
  PROFILE = '/profile',
  REPORT = '/report',
  CHAT = '/chat',
  DONATE = '/donate',
  HISTORY = '/history',
  IMPACT = '/impact',
  RESPONDER = '/responder',
  LIBRARY = '/library'
}