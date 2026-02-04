import React, { useState, useEffect } from 'react';

import Newsletter from '../components/blog/Newsletter';
import PostCard from '../components/blog/PostCard';
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
                    <PostCard key={post.slug} post={post} />
                ))}
            </div>

            <Newsletter />
        </div>
    );
};

export default Blog;
