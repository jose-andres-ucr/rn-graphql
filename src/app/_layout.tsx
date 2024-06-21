import React from "react";
import { Stack } from "expo-router";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

// Initialize Apollo Client
const client = new ApolloClient({
  uri: "https://graphql.anilist.co",
  cache: new InMemoryCache(),
});

export default function RootLayout() {
  return (
    <ApolloProvider client={client}>
      <Stack />
    </ApolloProvider>
  );
}
