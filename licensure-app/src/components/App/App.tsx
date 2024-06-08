import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { TonConnectUIProvider } from '@tonconnect/ui-react';

// @ts-expect-error
import { ErrorBoundaryWrapper } from 'components/ErrorBoundary/ErrorBoundaryWrapper/ErrorBoundaryWrapper';
import { AppRoutes } from 'components/AppRoutes/AppRoutes';
import { GlobalStyle } from './GlobalStyle';
import { LicensesProvider } from 'components/LicensesContext/LicensesContext';

// this manifest is used temporarily for development purposes
const manifestUrl =
  'https://raw.githubusercontent.com/Licensure-TMA/frontend/main/licensure-app/public/tonconnect-manifest.json';

const queryClient = new QueryClient({
  defaultOptions: { queries: { refetchOnWindowFocus: false } },
});

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <ErrorBoundaryWrapper>
        <BrowserRouter>
          <TonConnectUIProvider manifestUrl={manifestUrl}>
            <QueryClientProvider client={queryClient}>
              <LicensesProvider>
                <AppRoutes />
              </LicensesProvider>
            </QueryClientProvider>
          </TonConnectUIProvider>
        </BrowserRouter>
      </ErrorBoundaryWrapper>
    </>
  );
};