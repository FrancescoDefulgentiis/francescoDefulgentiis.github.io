import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Newsletter from '../components/blog/Newsletter';
import { getPosts } from '../lib/posts';

const Blog = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        getPosts().then(setPosts);
    }, []);

    return (
        <div className="space-y-8">
            <header>
                <h1 className="text-4xl font-bold mb-2">
                    <span className="text-accent-secondary mr-2">#</span>
                    Blog
                </h1>
                <p className="text-gray-600">&gt; Thoughts, tutorials, and rants.</p>
            </header>

            <div className="grid gap-8 animate-in fade-in duration-500">
                {posts.map(post => (
                    <Link to={`/blog/${post.slug}`} key={post.slug}>
                        <article className="border-2 border-black p-6 hover:translate-x-1 hover:-translate-y-1 transition-transform cursor-pointer shadow-[4px_4px_0px_0px_rgba(0,0,0,0)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] bg-white">
                            <h2 className="text-2xl font-bold mb-2">
                                <span className="text-accent-primary mr-2">##</span>
                                {post.title}
                            </h2>
                            <p className="mb-4 text-sm text-gray-500">{post.date}</p>
                            <p className="mb-4 text-sm text-gray-500">{post.toRead} min read</p>
                            <p className="font-mono">{post.description}</p>
                        </article>
                    </Link>
                ))}
            </div>

            <Newsletter />
        </div>
    );
};

export default Blog;
