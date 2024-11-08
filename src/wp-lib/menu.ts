
import { gql } from "@apollo/client";

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

export const GET_SITE_TITLE = gql`
  query GetSiteTitle {
    generalSettings {
      title
    }
  }
`;

export default GET_MAIN_MENU_ITEMS;