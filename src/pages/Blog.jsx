import React from 'react';

const Blog = () => {
    return (
        <div className="space-y-8">
            <header>
                <h1 className="text-4xl font-bold mb-2">
                    <span className="text-accent-green mr-2">#</span>
                    Blog
                </h1>
                <p className="text-gray-600">&gt; Thoughts, tutorials, and rants.</p>
            </header>

            <div className="grid gap-8">
                <article className="border-2 border-black p-6 hover:translate-x-1 hover:-translate-y-1 transition-transform cursor-pointer shadow-[4px_4px_0px_0px_rgba(0,0,0,0)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                    <h2 className="text-2xl font-bold mb-2">
                        <span className="text-accent-red mr-2">##</span>
                        Hello World
                    </h2>
                    <p className="mb-4 text-sm text-gray-500">2026-02-03</p>
                    <p>First post placeholder. More strictly typed thoughts coming soon.</p>
                </article>
            </div>
        </div>
    );
};

export default Blog;
