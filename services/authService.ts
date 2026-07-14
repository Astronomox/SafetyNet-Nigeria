import { supabase } from './supabaseClient';

export interface AuthUser {
  id: string;
  email: string;
  name?: string;
  avatar?: string;
  phone?: string;
  role?: 'citizen' | 'responder' | 'admin';
  verified?: boolean;
}

// Sign Up with Email
export async function signUpWithEmail(email: string, password: string, name: string) {
  try {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          name: name,
          role: 'citizen',
          verified: false
        }
      }
    });

    if (error) throw error;
    return { user: data.user, error: null };
  } catch (error: any) {
    console.error('Sign up error:', error);
    return { user: null, error: error.message };
  }
}

// Sign In with Email
export async function signInWithEmail(email: string, password: string) {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password
    });

    if (error) throw error;
    return { user: data.user, session: data.session, error: null };
  } catch (error: any) {
    console.error('Sign in error:', error);
    return { user: null, session: null, error: error.message };
  }
}

// Sign In with Google
export async function signInWithGoogle() {
  try {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: window.location.origin
      }
    });

    if (error) throw error;
    return { error: null };
  } catch (error: any) {
    console.error('Google sign in error:', error);
    return { error: error.message };
  }
}

// Sign Out
export async function signOut() {
  try {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
    return { error: null };
  } catch (error: any) {
    console.error('Sign out error:', error);
    return { error: error.message };
  }
}

// Get Current User
export async function getCurrentUser(): Promise<AuthUser | null> {
  try {
    const { data: { user } } = await supabase.auth.getUser();
    
    if (!user) return null;

    return {
      id: user.id,
      email: user.email!,
      name: user.user_metadata?.name,
      avatar: user.user_metadata?.avatar_url,
      phone: user.user_metadata?.phone,
      role: user.user_metadata?.role || 'citizen',
      verified: user.user_metadata?.verified || false
    };
  } catch (error) {
    console.error('Get user error:', error);
    return null;
  }
}

// Check if user is authenticated
export async function isAuthenticated(): Promise<boolean> {
  const { data: { session } } = await supabase.auth.getSession();
  return !!session;
}

// Reset Password
export async function resetPassword(email: string) {
  try {
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/reset-password`
    });

    if (error) throw error;
    return { error: null };
  } catch (error: any) {
    console.error('Reset password error:', error);
    return { error: error.message };
  }
}

// Update User Profile
export async function updateUserProfile(updates: Partial<AuthUser>) {
  try {
    const { error } = await supabase.auth.updateUser({
      data: updates
    });

    if (error) throw error;
    return { error: null };
  } catch (error: any) {
    console.error('Update profile error:', error);
    return { error: error.message };
  }
}