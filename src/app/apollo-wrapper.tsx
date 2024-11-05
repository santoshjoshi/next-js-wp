
import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

import  {env} from "@/app/env/server"
const createApolloClient = () => {

  console.log("Creating client");
  return new ApolloClient({
    ssrMode: true, // Enable server-side rendering mode
    link: new HttpLink({ uri: env.NEXT_PUBLIC_WORDPRESS_API_URL, fetch }),
    cache: new InMemoryCache(),
  });
};

export default createApolloClient;
 