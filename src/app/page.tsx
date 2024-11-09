"use client"

import { IconBox, IconFile, IconFolder, IconPencil, IconTag, IconUser } from "@tabler/icons-react";
import Link from "next/link";
import React from "react";


export default function Home() {
  return (
    <article className="prose-m-none">
      
        
      <div className="grid md:grid-cols-3 gap-4 mt-6 not-prose p-4">
        <Link
          className=" border h-48 bg-green-300/30 rounded-lg p-4 flex flex-col justify-between hover:scale-[1.02] transition-all"
          href="/posts"
        >
          <IconPencil size={32} className="" />
          <span className="text-center">
            Posts{" "}
            <span className="block text-sm text-muted-foreground">
              All posts from your WordPress
            </span>
          </span>
        </Link>
        <Link
          className="border h-48 bg-yellow-900/35 rounded-lg p-4 flex flex-col justify-between hover:scale-[1.02] transition-all"
          href="/pages"
        >
          <IconFile size={32} />
          <span>
            Pages{" "}
            <span className="block text-sm text-muted-foreground">
              Custom pages from your WordPress
            </span>
          </span>
        </Link>
        <Link
          className="border h-48 bg-orange-400/45 rounded-lg p-4 flex flex-col justify-between hover:scale-[1.02] transition-all"
          href="/posts/authors"
        >
          <IconUser size={32} />
          <span>
            Authors{" "}
            <span className="block text-sm text-muted-foreground">
              List of the authors from your WordPress
            </span>
          </span>
        </Link>
        <Link
          className="border h-48 bg-fuchsia-500/50 rounded-lg p-4 flex flex-col justify-between hover:scale-[1.02] transition-all"
          href="/posts/tags"
        >
          <IconTag size={32} />
          <span>
            Tags{" "}
            <span className="block text-sm text-muted-foreground">
              Content by tags from your WordPress
            </span>
          </span>
        </Link>
        <Link
          className="border h-48 bg-teal-100/20 rounded-lg p-4 flex flex-col justify-between hover:scale-[1.02] transition-all"
          href="/posts/categories"
        >
          <IconBox size={32} />
          <span>
            Categories{" "}
            <span className="block text-sm text-muted-foreground">
              Categories from your WordPress
            </span>
          </span>
        </Link>
        <a
          className="border h-48 bg-accent/50 rounded-lg p-4 flex flex-col justify-between hover:scale-[1.02] transition-all"
          href="#"
        >
          <IconFolder size={32} />
          <span>
            Documentation{" "}
            <span className="block text-sm text-muted-foreground">
              How to use `this template`
            </span>
          </span>
        </a>
      </div>
    </article>
  );
}
