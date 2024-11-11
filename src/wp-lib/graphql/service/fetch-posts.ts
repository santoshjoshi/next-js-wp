// graphql/fetchMenuItems.ts
import { GetPostsPaginatedDocument, GetPostsPaginatedQuery, GetPostsPaginatedQueryVariables } from "@/__generated__/types";
import createApolloClient from "@/wp-lib/graphql/apollo-client"; // Adjust the path if necessary

export async function fetchPosts(limit: number, cursor: string = ""): Promise<GetPostsPaginatedQuery["posts"]> {
  // Calculate the cursor for pagination based on page number
  const after = cursor == null ? "" : cursor;
  console.log("after {}", after)
  const apolloClient = createApolloClient();
  try {
    const { data } = await apolloClient.query<GetPostsPaginatedQuery>({
      query: GetPostsPaginatedDocument,
      variables: { first: limit, after } as GetPostsPaginatedQueryVariables,
    });


    console.log("PageInfo {} ", data?.posts?.pageInfo);
    return {
      nodes: data?.posts?.nodes,
      pageInfo: data?.posts?.pageInfo,
    };
  } catch (error) {
    console.error("Error fetching posts:", error);
    throw new Error("Failed to fetch posts");
  }
}