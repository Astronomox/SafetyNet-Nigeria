import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { signUpWithEmail, signInWithGoogle } from '../services/authService';
import { RoutePath } from '../types';
import { AuthPanel } from '../components/AuthPanel';

const Field: React.FC<{
  label: string; type: string; value: string; onChange: (v: string) => void;
  placeholder: string; autoComplete?: string; trailing?: React.ReactNode;
}> = ({ label, type, value, onChange, placeholder, autoComplete, trailing }) => (
  <label className="block">
    <span className="eyebrow text-ash">{label}</span>
    <div className="relative mt-1.5">
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        autoComplete={autoComplete}
        required
        className="w-full border border-line bg-panel-2 px-4 py-2.5 text-[15px] text-bone placeholder:text-ash/50 focus:border-mint focus:ring-0"
        style={{ borderRadius: 4 }}
      />
      {trailing && <div className="absolute inset-y-0 right-3 flex items-center">{trailing}</div>}
    </div>
  </label>
);

export const Signup: React.FC = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    if (password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }

    setIsLoading(true);
    const { error: signupError } = await signUpWithEmail(email, password, name);
    if (signupError) {
      setError(signupError);
      setIsLoading(false);
    } else {
      setSuccess(true);
      setTimeout(() => navigate(RoutePath.LOGIN), 2000);
    }
  };

  const handleGoogleSignup = async () => {
    setError('');
    const { error: googleError } = await signInWithGoogle();
    if (googleError) setError(googleError);
  };

  if (success) {
    return (
      <div className="flex min-h-svh items-center justify-center bg-ink px-6">
        <div className="ticks w-full max-w-sm animate-rise border border-mint/40 bg-panel p-8 text-center">
          <div className="mx-auto mb-4 flex size-14 items-center justify-center border border-mint/40 bg-mint/10">
            <span className="material-symbols-outlined filled text-[30px] text-mint">check_circle</span>
          </div>
          <h2 className="display text-2xl text-bone">You're on the network</h2>
          <p className="mt-3 text-sm text-ash">Check your email to verify your account. Redirecting to sign in.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-svh bg-ink text-bone lg:grid lg:grid-cols-2">
      {/* Image panel — desktop only */}
      <AuthPanel className="hidden lg:block lg:min-h-screen">
        <div className="flex h-full flex-col justify-between p-12">
          <Link to={RoutePath.LANDING} className="flex w-fit items-center gap-3">
            <div className="flex size-10 items-center justify-center border border-mint/40 bg-ink/60 backdrop-blur">
              <span className="material-symbols-outlined text-[22px] text-mint">health_and_safety</span>
            </div>
            <div>
              <p className="display text-base">SafetyNet</p>
              <p className="eyebrow text-[9px] text-mint">National Emergency Response</p>
            </div>
          </Link>
          <div>
            <p className="eyebrow mb-4 text-mint">Join · 36 States · One Network</p>
            <h1 className="display text-6xl xl:text-7xl">
              Be the<br /><span className="text-mint">first to</span><br />respond.
            </h1>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-bone/80">
              Report incidents, verify alerts in your community, and get life-saving guidance when it matters most.
            </p>
          </div>
        </div>
      </AuthPanel>

      {/* Form column — fits one screen on mobile */}
      <div className="flex min-h-svh flex-col justify-center px-6 py-5 lg:min-h-screen lg:items-center lg:px-16">
        <div className="w-full max-w-md animate-rise lg:mx-auto">
          {/* Mobile brand header */}
          <Link to={RoutePath.LANDING} className="mb-4 flex items-center gap-3 lg:hidden">
            <div className="flex size-9 items-center justify-center border border-mint/40 bg-mint/10">
              <span className="material-symbols-outlined text-[20px] text-mint">health_and_safety</span>
            </div>
            <div>
              <p className="display text-sm">SafetyNet</p>
              <p className="eyebrow text-[8px] text-mint">National Emergency Response</p>
            </div>
          </Link>

          <p className="eyebrow text-mint">New Operator</p>
          <h2 className="display mt-1 text-3xl lg:text-4xl">Create account</h2>

          {error && (
            <div className="ticks mt-3 border border-flare/40 bg-flare/10 px-4 py-2.5">
              <p className="text-sm text-flare">{error}</p>
            </div>
          )}

          <form onSubmit={handleSignup} className="mt-4 space-y-3">
            <Field label="Full Name" type="text" value={name} onChange={setName} placeholder="Adaeze Okonkwo" autoComplete="name" />
            <Field label="Email" type="email" value={email} onChange={setEmail} placeholder="you@example.com" autoComplete="email" />
            <Field
              label="Password"
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={setPassword}
              placeholder="Minimum 6 characters"
              autoComplete="new-password"
              trailing={
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="text-ash hover:text-bone" aria-label={showPassword ? 'Hide password' : 'Show password'}>
                  <span className="material-symbols-outlined text-[20px]">{showPassword ? 'visibility_off' : 'visibility'}</span>
                </button>
              }
            />
            <Field
              label="Confirm Password"
              type={showPassword ? 'text' : 'password'}
              value={confirmPassword}
              onChange={setConfirmPassword}
              placeholder="Repeat your password"
              autoComplete="new-password"
            />
            <button
              type="submit"
              disabled={isLoading}
              className="ticks !mt-4 flex w-full items-center justify-center gap-2 bg-mint py-3 font-display text-sm font-bold uppercase tracking-wide text-ink transition-all hover:shadow-glow-mint active:scale-[0.99] disabled:opacity-60"
            >
              {isLoading ? (
                <span className="size-5 animate-spin rounded-full border-2 border-ink border-t-transparent" />
              ) : (
                <>
                  Join the Network
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </>
              )}
            </button>
          </form>

          <div className="my-4 flex items-center gap-4">
            <div className="h-px flex-1 bg-line" />
            <span className="eyebrow text-[9px] text-ash">or</span>
            <div className="h-px flex-1 bg-line" />
          </div>

          <button
            onClick={handleGoogleSignup}
            className="flex w-full items-center justify-center gap-3 border border-line bg-panel py-3 text-sm font-medium text-bone transition-colors hover:border-ash"
            style={{ borderRadius: 4 }}
          >
            <svg className="size-5" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
            </svg>
            Continue with Google
          </button>

          <p className="mt-4 text-center text-sm text-ash">
            Already registered?{' '}
            <Link to={RoutePath.LOGIN} className="font-semibold text-mint hover:text-bone">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};
