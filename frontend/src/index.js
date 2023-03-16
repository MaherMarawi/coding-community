import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AuthContextProvider } from './context/authContext';
import { DarkModeContextProvider } from './context/darkModeContext';
import { QueryClientProvider, QueryClient } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import { SearchContextProvider } from './context/searchContext';
import { NavigatorContextProvider } from './context/navContext';
const queryClient = new QueryClient({
  defaultOptions: { queries: { staleTime: 1000 * 60 * 2 } }
})
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DarkModeContextProvider>
      <NavigatorContextProvider>
        <SearchContextProvider>
          <QueryClientProvider client={queryClient}>
            <AuthContextProvider>
              <App />
            </AuthContextProvider>
            <ReactQueryDevtools />
          </QueryClientProvider>
        </SearchContextProvider>
      </NavigatorContextProvider>
    </DarkModeContextProvider>
  </React.StrictMode>
);

