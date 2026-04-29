import Link from "next/link";
import type { Post } from "@/types/post";

async function getPost(id: string): Promise<Post | undefined> {
    const res = await fetch(`/api/posts`, {
        cache: "no-store",
    });
    const posts: Post[] = await res.json();

    return posts.find((p) => p.id === Number(id));
}

export default async function PostDetail({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;
    const post = await getPost(id);

    if (!post) {
        return (
            <div className="p-10">
                <p className="text-gray-600 mb-4">Post not found</p>
                <Link href="/blog" className="text-blue-600 hover:text-blue-800">
                    ← Back to blog
                </Link>
            </div>
        );
    }

    return (
        <main className="max-w-4xl mx-auto p-10">
            <Link href="/blog" className="text-blue-600 hover:text-blue-800 mb-6 inline-block">
                ← Back to blog
            </Link>
            <article className="bg-white p-8 rounded-lg shadow-sm">
                <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
                <p className="text-gray-600 leading-relaxed">{post.content}</p>
            </article>
        </main>
    );
}