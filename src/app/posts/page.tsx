// pages/menu.js

import { GetPostsPaginatedQuery } from "@/__generated__/types";
import { fetchPosts } from "@/wp-lib/graphql/service/fetch-posts";
import {Card, CardHeader, CardBody, CardFooter, Divider, Link, User} from "@nextui-org/react";


export default async function MenuPage() {

  try {
   // const menuItems = await fetchMenu("PRIMARY");
    const posts: GetPostsPaginatedQuery["posts"]["nodes"]= await fetchPosts(6, "");
  
    return (
      <>
      
      <div className="flex grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
        {posts.map((post) => (

          <div className="w-full"  key={post.id} suppressHydrationWarning>

              <Card className="w-full" key={post.id}>
              <CardHeader className="flex gap-3">
        
                <div className="flex flex-col">
                  <p className="text-md text-center font-bold">{post.title}</p>
                </div>
              </CardHeader>
              <Divider/>
              <CardBody> 
                <div  dangerouslySetInnerHTML={{__html: trimToWords(post.excerpt, 40) }}    suppressHydrationWarning />

                <div className="mb-3 mt-6 flex flex-wrap gap-2">
                  {post.categories.nodes.map((tag) => (
                    <div key={tag.id} className="inline-block rounded-md bg-[#e3f2ff] px-3 py-[5px] capitalize">
                         <Link className="text-right ml-auto" isExternal href={tag.link} >
                            <span className="text-xs font-normal text-[#0b5599]">{tag.name}</span>
                        </Link>
                      </div>
                    ))}
                 </div>
              </CardBody>
              <Divider/>
              <CardFooter>
                  <User className="capitalize"  
                    name={post.author?.node?.name || "Unknown Author"} 
                    description ={formatDate(post.date)}
                    avatarProps={{
                      src: post.author?.node?.avatar.url
                    }}
                  />
                    <Link className="text-right ml-auto"  isExternal showAnchorIcon href={post.link} >
                    Read More
                    </Link>
              </CardFooter>
              </Card>
            </div>
          ))}

        </div>
      </>
    );
  } catch (error) {
    console.error("Error fetching data:", error);
    return <div>Error fetching data</div>;
  }

};


function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function trimToWords(content, wordLimit) {
  // Strip HTML tags, split by spaces, and trim to the desired number of words
  const textOnly = content.replace(/<[^>]+>/g, ''); // Remove HTML tags
  const words = textOnly.split(/\s+/); // Split into words
  const truncatedText = words.slice(0, wordLimit).join(' '); // Get the first 'wordLimit' words
  return truncatedText;
}