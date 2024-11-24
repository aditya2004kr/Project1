import { Routes, Route, Navigate } from 'react-router-dom';
import { SignIn, SignUp, useAuth } from '@clerk/clerk-react';
import { Layout } from './components/Layout';
import { Dashboard } from './pages/Dashboard';
import { Analytics } from './pages/Analytics';
import { Reports } from './pages/Reports';
import { Users } from './pages/Users';
import { Settings } from './pages/Settings';

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { isSignedIn, isLoaded } = useAuth();

  if (!isLoaded) {
    return <div className="flex min-h-screen items-center justify-center">Loading...</div>;
  }

  if (!isSignedIn) {
    return <Navigate to="/sign-in" />;
  }

  return <>{children}</>;
}

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/sign-in/*" element={
        <div className="flex min-h-screen items-center justify-center bg-gray-50">
          <SignIn routing="path" path="/sign-in" />
        </div>
      } />
      <Route path="/sign-up/*" element={
        <div className="flex min-h-screen items-center justify-center bg-gray-50">
          <SignUp routing="path" path="/sign-up" />
        </div>
      } />
      
      <Route path="/" element={
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>
      }>
        <Route index element={<Dashboard />} />
        <Route path="analytics" element={<Analytics />} />
        <Route path="reports" element={<Reports />} />
        <Route path="users" element={<Users />} />
        <Route path="settings" element={<Settings />} />
        {/* <Route path="help" element={<Help />} /> */}
      </Route>
    </Routes>
  );
}