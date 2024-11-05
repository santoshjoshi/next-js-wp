// graphql/fetchMenuItems.ts
import createApolloClient from "@/app/apollo-wrapper"; // Adjust the path if necessary
import { GET_MAIN_MENU_ITEMS } from "@/app/wp-lib/graphql-queries/queries"; // Adjust the path if necessary

export const fetchMenuItems = async () => {
    console.log("fetchMenuItems called"); // This should log when the function is called
    const apolloClient = createApolloClient();

    try {
        const { data } = await apolloClient.query({
            query: GET_MAIN_MENU_ITEMS,
        });

        console.log("Fetched menu items data:", data); // Log the fetched data

        return {
            props: {
                menuItemss: data.menuItems.nodes || [], // Ensure this is the correct path
            },
        };
    } catch (error) {
        console.error("Error fetching data from GraphQL API:", error);
        return {
            props: {
                menuItemss: [], // Return an empty array on error
            },
        };
    }
};
