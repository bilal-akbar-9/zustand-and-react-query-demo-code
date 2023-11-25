import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Navbar from './components/Navbar.jsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Todos from './components/Todos.jsx';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 3,
      refetchOnWindowFocus: true,
      refetchOnMount: true,
      refetchOnReconnect: true,
      staleTime: 5000, // The query will be read from the cache up to 5 minutes (useful for data that changes often)
      cacheTime: 6000, // The query will be removed from the cache after 24 hours
    },
  },
});
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
		<QueryClientProvider client={queryClient}>
    <ReactQueryDevtools />
			<>
				<Navbar />
        <App />
        <Todos />
			</>
		</QueryClientProvider>
	</React.StrictMode>
);
