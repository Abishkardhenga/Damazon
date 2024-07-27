import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { BrowserRouter,  } from 'react-router-dom';
import Productpage from './pages/Productpage.tsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { StoreProvider } from './Store.tsx';

import { CookiesProvider } from 'react-cookie';
import RouterPage from './pages/RouterPage.tsx';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StoreProvider>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <CookiesProvider>
          <RouterPage></RouterPage>

        </CookiesProvider>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} position={"bottom"} />
    </QueryClientProvider>
  </StoreProvider>
);
