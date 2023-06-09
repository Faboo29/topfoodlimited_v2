'use client';

import ApolloProvider from './providers/ApolloProvider';
import { AppContextProvider } from './providers/AppContext';

type ProvidersProps = {
  children: React.ReactNode;
};

const Providers = ({ children }: ProvidersProps) => {
  return (
    <ApolloProvider>
      <AppContextProvider>{children}</AppContextProvider>
    </ApolloProvider>
  );
};

export default Providers;
