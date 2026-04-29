import { NextResponse } from "next/server";

type Post = {
    id: number;
    title: string;
    content: string;
};

export async function GET() {
    const posts: Post[] = [
        { id: 1, title: "Hello Next.js", content: "Post 1 content" },
        { id: 2, title: "Learning Next.js", content: "Post 2 content" },
    ];

    return NextResponse.json(posts);
}