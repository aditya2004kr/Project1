import { ClerkProvider } from '@clerk/clerk-react';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AppRoutes } from './routes';

const queryClient = new QueryClient();

// Replace with your actual Clerk publishable key
const CLERK_PUBLISHABLE_KEY = 'pk_test_aGFwcHktbW9ua2V5LTcxLmNsZXJrLmFjY291bnRzLmRldiQ';

function App() {
  return (
    <ClerkProvider publishableKey={CLERK_PUBLISHABLE_KEY}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </QueryClientProvider>
    </ClerkProvider>
  );
}

export default App;