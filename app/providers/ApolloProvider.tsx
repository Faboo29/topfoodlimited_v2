'use client';

import { useApollo } from '@/apollo';
import { ApolloProvider as ApolloProviderComponent } from '@apollo/client';

type ProvidersProps = {
  children: React.ReactNode;
};

const ApolloProvider = ({ children }: ProvidersProps) => {
  const client = useApollo();

  return <ApolloProviderComponent client={client}>{children}</ApolloProviderComponent>;
};

export default ApolloProvider;
