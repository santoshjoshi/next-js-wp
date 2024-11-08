// graphql/fetchMenuItems.ts
import createApolloClient from "@/wp-lib/graphql/apollo-client"; // Adjust the path if necessary
import { GetMenuDocument, GetMenuQuery, GetMenuQueryVariables } from "@/__generated__/types";

export const fetchMenuItems = async (location: "PRIMARY" | "FOOTER") => {
  const apolloClient = createApolloClient();

  try {
    const { data } = await apolloClient.query({
      query: GetMenuDocument,
      variables: { location }  as GetMenuQueryVariables,
    });

    console.log("Fetched menu items data:", data);

    const data2 = data as GetMenuQuery;
    return data2.menuItems?.nodes ?? []; // Return the nodes of the fetched menu items

  } catch (error) {
    console.error("Error fetching data from GraphQL API:", error);
    return []; // Return an empty array if there's an error
  }
};


