'use client';

import { useApollo } from '@/apollo';
import { ApolloProvider } from '@apollo/client';

type ProvidersProps = {
  children: React.ReactNode;
};

const Providers = ({ children }: ProvidersProps) => {
  const client = useApollo();

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default Providers;
