import React, { useEffect, useState } from 'react';
import { HashRouter, Routes, Route, Outlet, Navigate } from 'react-router-dom';
import { RoutePath } from './types';
import { isAuthenticated } from './services/authService';
import { Shell } from './components/Shell';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Signup } from './pages/Signup';
import { ForgotPassword } from './pages/ForgotPassword';
import { MapDashboard } from './pages/MapDashboard';
import { Chat } from './pages/Chat';
import { Profile } from './pages/Profile';
import { Report } from './pages/Report';
import { Alerts } from './pages/Alerts';
import { Donate } from './pages/Donate';
import { Impact } from './pages/Impact';
import { History } from './pages/History';
import { Responder } from './pages/Responder';
import { Library } from './pages/Library';
import { Landing } from './pages/Landing';

const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAuth, setIsAuth] = useState<boolean | null>(null);

  useEffect(() => {
    isAuthenticated().then(setIsAuth);
  }, []);

  if (isAuth === null) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-ink">
        <div className="flex flex-col items-center gap-4">
          <div className="size-10 animate-spin border-2 border-mint border-t-transparent" style={{ borderRadius: '9999px' }} />
          <p className="eyebrow text-mint">Establishing uplink</p>
        </div>
      </div>
    );
  }

  return isAuth ? <>{children}</> : <Navigate to={RoutePath.LANDING} replace />;
};

// Shell layout: nav rail on desktop, bottom dock on mobile
const ShellLayout: React.FC = () => (
  <Shell>
    <Outlet />
  </Shell>
);

// Full screen layout: no persistent nav (map, chat, report flows)
const FullScreenLayout: React.FC = () => (
  <div className="flex min-h-screen flex-col bg-ink text-bone">
    <Outlet />
  </div>
);

export default function App() {
  return (
    <HashRouter>
      <Routes>
        {/* Public routes */}
        <Route path={RoutePath.LANDING} element={<Landing />} />
        <Route path={RoutePath.LOGIN} element={<Login />} />
        <Route path={RoutePath.SIGNUP} element={<Signup />} />
        <Route path={RoutePath.FORGOT_PASSWORD} element={<ForgotPassword />} />

        {/* Protected routes with navigation shell */}
        <Route element={<ProtectedRoute><ShellLayout /></ProtectedRoute>}>
          <Route path={RoutePath.HOME} element={<Home />} />
          <Route path={RoutePath.ALERTS} element={<Alerts />} />
          <Route path={RoutePath.PROFILE} element={<Profile />} />
          <Route path={RoutePath.LIBRARY} element={<Library />} />
          <Route path={RoutePath.HISTORY} element={<History />} />
          <Route path={RoutePath.IMPACT} element={<Impact />} />
        </Route>

        {/* Protected full screen routes */}
        <Route element={<ProtectedRoute><FullScreenLayout /></ProtectedRoute>}>
          <Route path={RoutePath.MAP} element={<MapDashboard />} />
          <Route path={RoutePath.CHAT} element={<Chat />} />
          <Route path={RoutePath.REPORT} element={<Report />} />
          <Route path={RoutePath.DONATE} element={<Donate />} />
          <Route path={RoutePath.RESPONDER} element={<Responder />} />
        </Route>

        <Route path="*" element={<Navigate to={RoutePath.LANDING} replace />} />
      </Routes>
    </HashRouter>
  );
}
