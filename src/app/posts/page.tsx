// pages/menu.js

import { GetPostsPaginatedQuery } from "@/__generated__/types";
import { fetchPosts } from "@/wp-lib/graphql/service/fetch-posts";
import PostsList from "@/app/posts/post-list";

export default async function MenuPage() {
  const postsData: GetPostsPaginatedQuery["posts"]["nodes"] = await fetchPosts(3, "");
  console.log("postsData")

  return <PostsList initialPosts={postsData} totalPagesInServer="5" />;
}