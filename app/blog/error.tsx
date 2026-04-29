"use client";
export default function Error({ error, reset }: { error: Error; reset: () => void }) {
    return (
        <div className="p-10 text-red-500">
            <p>Something went wrong</p>
            <button onClick={reset} className="mt-2 px-4 py-2 bg-red-500 text-white rounded">
                Try again
            </button>
        </div>
    );
}