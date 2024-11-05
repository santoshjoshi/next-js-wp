// lib/fetchMenuItems.js
import { gql } from "@apollo/client";
import createApolloClient from "@/app/apollo-wrapper";

// Define your GraphQL query
export const GET_MAIN_MENU_ITEMS = gql`
  query GetMenuItems {
    menuItems {
      nodes {
        id
        label
        url
        uri
        title
      }
    }
  }
`;

// Named export of the fetch function
export const fetchMenuItems = async () => {
  const client = createApolloClient();

  try {
    const { data } = await client.query({
      query: GET_MAIN_MENU_ITEMS,
    });
    return data.menuItems.nodes;
  } catch (error) {
    console.error("Error fetching menu items:", error);
    return []; // Return an empty array if fetching fails
  }
};
