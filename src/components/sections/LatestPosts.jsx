import React, { useState, useEffect } from 'react';
import PostCard from '../blog/PostCard';
import { getPosts } from '../../lib/posts';

const LatestPosts = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        getPosts().then(allPosts => {
            setPosts(allPosts.slice(0, 2));
        });
    }, []);

    if (posts.length === 0) return null;

    return (
        <section className="animate-in fade-in duration-500">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
                <span className="text-accent-primary mr-2">##</span>
                Latest Posts
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
                {posts.map(post => (
                    <PostCard key={post.slug} post={post} />
                ))}
            </div>
        </section>
    );
};

export default LatestPosts;
