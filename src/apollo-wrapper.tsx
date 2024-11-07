
import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

import { env } from "@/env/server";
const createApolloClient = () => {

  console.log("Creating client");
  return new ApolloClient({
    ssrMode: true, // Enable server-side rendering mode
    link: new HttpLink({ uri: env.NEXT_PUBLIC_WORDPRESS_API_URL, fetch }),
    cache: new InMemoryCache(),
  });
};

export default createApolloClient;