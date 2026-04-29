import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Welcome to Mini Blog
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          A simple blog built with Next.js, TypeScript, and Tailwind CSS
        </p>
        <Link
          href="/blog"
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
        >
          View Blog Posts
        </Link>
      </div>
    </div>
  );
}