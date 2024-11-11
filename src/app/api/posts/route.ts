import { NextResponse } from "next/server";
import { fetchPosts } from "@/wp-lib/graphql/service/fetch-posts";

// This handles the GET request for fetching posts with pagination
export async function GET(request: Request) {
  const url = new URL(request.url);
  
  // Parse the query parameters for 'page' and 'limit' with defaults
  //const page = parseInt(url.searchParams.get("page") || "1", 10);
  const after = url.searchParams.get("after") ;
  console.log("Limit is ",url.searchParams.get("limit") );
  //const limit =  parseInt(  url.searchParams.get("limit") || "10" ,  1);
  const limit = parseInt(url.searchParams.get("limit") || "10", 10);
  //const page = parseInt(url.searchParams.get("page") || "1", 10);


  console.log("Parms are after {} -- limit {}", after, limit)

  try {
    // Fetch posts using the custom fetchPosts function
    const posts = await fetchPosts(limit, after);

    console.log(posts);
    // Return the posts as a JSON response
    return NextResponse.json(posts);
  } catch (error) {
    // Return an error response in case of failure
    console.error("Error fetching posts:", error);
    return NextResponse.json({ error: "Error fetching posts" }, { status: 500 });
  }
}
