// graphql/fetchMenuItems.ts
import createApolloClient from "@/wp-lib/graphql/apollo-client"; // Adjust the path if necessary
import { GetPostsPaginatedDocument, GetPostsPaginatedQuery, GetPostsPaginatedQueryVariables } from "@/__generated__/types";

export const fetchPosts = async (first , after : "") => {
  const apolloClient = createApolloClient();

  try {
    const { data } = await apolloClient.query({
      query: GetPostsPaginatedDocument,
      variables: { first, after  }  as GetPostsPaginatedQueryVariables,
    });

    console.log("Fetched posts data:", data);

    const data2 = data as GetPostsPaginatedQuery;
    return data2.posts?.nodes ?? [];
    //return data2.posts ?? []; // Return the nodes of the fetched menu items

  } catch (error) {
    console.error("Error fetching data from GraphQL API:", error);
    return []; // Return an empty array if there's an error
  }
};


