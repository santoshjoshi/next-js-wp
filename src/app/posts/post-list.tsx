"use client";
import { useState } from "react";
import { Card, CardHeader, CardBody, CardFooter, Divider, Link, User } from "@nextui-org/react";
import { GetPostsPaginatedQuery } from "@/__generated__/types";

import PostsSkeleton from "./skeleton";
import PostPagination from "@/components/pagination/post-paginations";


export default function PostsList({ initialPosts, totalPagesInServer }) {
  // Initial posts is already an array of nodes, so you can set it directly
  const [posts, setPosts] = useState<GetPostsPaginatedQuery["posts"]["nodes"]>(initialPosts || []);
  const [currentPage, setCurrentPage] = useState(1);
  const [after, setCurrentAfter] = useState(initialPosts.pageInfo.endCursor);
  const [totalPages, setTotalPages] = useState(totalPagesInServer); // Set this according to your total posts count logic

  const [loading, setLoading] = useState(false);

  const handlePageChange = async (page: number) => {
    setLoading(true); // Start loading
    const response = await fetch(`/api/posts?limit=3&after=${after}`);
    const data = await response.json();
    console.log(data)
    setPosts(data);  
    setCurrentPage(page)
    setTotalPages(10);
    setCurrentAfter(data.pageInfo.endCursor);
    setLoading(false); // Stop loading
  };

  return (
    <div>
      <div className="flex grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4"> 
        {loading ? (
            <PostsSkeleton />
          ) : (
            posts.nodes.map((post) => (
              <div className="w-full" key={post.id} suppressHydrationWarning>
                  <Card className="w-full">
                    <CardHeader className="flex gap-3">
                      <div className="flex flex-col">
                        <p className="text-md text-center font-bold">{post.title}</p>
                      </div>
                    </CardHeader>
                    <Divider />
                    <CardBody>
                      <div dangerouslySetInnerHTML={{ __html: trimToWords(post.excerpt, 40) }} />
                      <div className="mb-3 mt-6 flex flex-wrap gap-2">
                        {post.categories.nodes.map((tag) => (
                          <div key={tag.id} className="inline-block rounded-md bg-[#e3f2ff] px-3 py-[5px] capitalize">
                            <Link isExternal href={tag.link}>
                              <span className="text-xs font-normal text-[#0b5599]">{tag.name}</span>
                            </Link>
                          </div>
                        ))}
                      </div>
                    </CardBody>
                    <Divider />
                    <CardFooter>
                      <User
                        name={post.author?.node?.name || "Unknown Author"}
                        description={formatDate(post.date)}
                        avatarProps={{ src: post.author?.node?.avatar.url }}
                      />
                      <Link isExternal showAnchorIcon href={post.link}>
                        Read More
                      </Link>
                    </CardFooter>
                  </Card>
            </div>
            ))
          )}
      
      </div>
        <div className="w-full mt-4">

        <PostPagination
            totalItems={totalPages}
            itemsPerPage={3}
            page={currentPage}
            onChange={handlePageChange}
          />
 
        </div>
    </div>
      
     
  );
}

function trimToWords(content: string, wordLimit: number): string {
  const textOnly = content.replace(/<[^>]+>/g, "");
  const words = textOnly.split(/\s+/);
  return words.slice(0, wordLimit).join(" ");
}

function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
