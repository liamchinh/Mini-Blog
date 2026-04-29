import Link from "next/link";
import type { Post } from "@/types/post";

async function getPosts(): Promise<Post[]> {
    const baseUrl = process.env.VERCEL_URL
        ? `https://${process.env.VERCEL_URL}`
        : "http://localhost:3000";
    const res = await fetch(`${baseUrl}/api/posts`, { cache: "no-store" });
    return res.json();
}

export default async function BlogPage() {
    const posts = await getPosts();

    return (
        <main className="p-10">
            <h1 className="text-2xl font-bold mb-4">Blog</h1>

            <div className="space-y-4">
                {posts.map((post) => (
                    <div key={post.id} className="p-4 border rounded-lg hover:shadow-md transition-shadow bg-white">
                        <Link href={`/blog/${post.id}`}>
                            <h2 className="text-xl font-semibold text-blue-600 hover:text-blue-800">{post.title}</h2>
                        </Link>
                        <p className="text-gray-600 mt-2 line-clamp-2">{post.content}</p>
                    </div>
                ))}
            </div>
        </main>
    );
}