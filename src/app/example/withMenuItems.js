// lib/withMenuItems.js
import { fetchMenuItems } from "./fetchMenuItems";

export const withMenuItems = (getServerSidePropsFunc) => {
  return async (context) => {
    const menuItems = await fetchMenuItems();

    const originalProps = getServerSidePropsFunc
      ? await getServerSidePropsFunc(context)
      : {};

    return {
      props: {
        ...originalProps.props,
        menuItems,
      },
    };
  };
};
