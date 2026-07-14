import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { resetPassword } from '../services/authService';
import { RoutePath } from '../types';
import { AuthPanel } from '../components/AuthPanel';

export const ForgotPassword: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);
    const { error: resetError } = await resetPassword(email);
    if (resetError) {
      setError(resetError);
      setIsLoading(false);
    } else {
      setSuccess(true);
      setIsLoading(false);
    }
  };

  return (
    <AuthPanel className="min-h-svh">
      <div className="flex min-h-svh flex-col text-bone">
        <div className="p-5 lg:p-8">
          <button
            onClick={() => navigate(RoutePath.LOGIN)}
            className="flex size-11 items-center justify-center border border-line bg-ink/70 text-bone backdrop-blur transition-colors hover:border-mint"
            aria-label="Back to sign in"
          >
            <span className="material-symbols-outlined">arrow_back</span>
          </button>
        </div>

        <div className="flex flex-1 items-center justify-center px-5 pb-10">
          <div className="w-full max-w-md animate-rise">
            {success ? (
              <div className="ticks border border-mint/40 bg-ink/85 p-8 text-center backdrop-blur">
                <div className="mx-auto mb-4 flex size-14 items-center justify-center border border-mint/40 bg-mint/10">
                  <span className="material-symbols-outlined filled text-[30px] text-mint">mark_email_read</span>
                </div>
                <h2 className="display text-2xl">Reset link sent</h2>
                <p className="mt-3 text-sm text-ash">
                  Check <span className="font-mono text-bone">{email}</span> for instructions to reset your password.
                </p>
                <button
                  onClick={() => navigate(RoutePath.LOGIN)}
                  className="ticks mt-7 w-full bg-mint py-3.5 font-display text-sm font-bold uppercase tracking-wide text-ink transition-transform active:scale-[0.99]"
                >
                  Back to Sign In
                </button>
              </div>
            ) : (
              <div className="ticks border border-line bg-ink/85 p-7 backdrop-blur lg:p-8">
                <p className="eyebrow text-mint">Account Recovery</p>
                <h2 className="display mt-2 text-3xl">Reset password</h2>
                <p className="mt-3 text-sm text-ash">Enter the email on your account. We'll send you a secure reset link.</p>

                {error && (
                  <div className="mt-4 border border-flare/40 bg-flare/10 px-4 py-2.5">
                    <p className="text-sm text-flare">{error}</p>
                  </div>
                )}

                <form onSubmit={handleResetPassword} className="mt-5 space-y-4">
                  <label className="block">
                    <span className="eyebrow text-ash">Email</span>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@example.com"
                      autoComplete="email"
                      required
                      className="mt-1.5 w-full border border-line bg-panel-2 px-4 py-3 text-[15px] text-bone placeholder:text-ash/50 focus:border-mint focus:ring-0"
                      style={{ borderRadius: 4 }}
                    />
                  </label>
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="ticks flex w-full items-center justify-center gap-2 bg-mint py-3.5 font-display text-sm font-bold uppercase tracking-wide text-ink transition-all hover:shadow-glow-mint active:scale-[0.99] disabled:opacity-60"
                  >
                    {isLoading ? (
                      <span className="size-5 animate-spin rounded-full border-2 border-ink border-t-transparent" />
                    ) : (
                      'Send Reset Link'
                    )}
                  </button>
                </form>

                <p className="mt-6 text-center text-sm text-ash">
                  Remembered it?{' '}
                  <Link to={RoutePath.LOGIN} className="font-semibold text-mint hover:text-bone">
                    Sign in
                  </Link>
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </AuthPanel>
  );
};
