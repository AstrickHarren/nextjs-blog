import { allPosts } from "@/.contentlayer/generated";
import Link from "next/link";

export default function Home() {
  return (
    <div className="prose dark:prose-invert">
      {allPosts.map((post) => (
        <Link href={post.slug} style={{ textDecoration: "none" }}>
          <div className="border-2 border-stone-100 rounded m-4 px-10 shadow backdrop-blur-md">
            <article key={post._id}>
              <h2>{post.title}</h2>
              {post.description && (
                <p className="text-secondary">{post.description}</p>
              )}
            </article>
          </div>
        </Link>
      ))}
    </div>
  );
}
