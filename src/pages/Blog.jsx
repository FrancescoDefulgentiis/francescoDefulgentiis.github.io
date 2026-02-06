import React, { useState, useEffect, useMemo } from 'react';

import Newsletter from '../components/blog/Newsletter';
import PostCard from '../components/blog/PostCard';
import SearchBar from '../components/blog/SearchBar';
import { getPosts } from '../lib/posts';

const POSTS_PER_PAGE = 10;

const Blog = () => {
    const [posts, setPosts] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        getPosts().then(setPosts);
    }, []);

    useEffect(() => {
        setCurrentPage(1);
    }, [searchQuery]);

    const filteredPosts = useMemo(() => {
        if (!searchQuery.trim()) return posts;

        const query = searchQuery.toLowerCase();
        return posts.filter(post => {
            const title = (post.title || '').toLowerCase();
            const description = (post.description || '').toLowerCase();
            const tags = (post.tags || []).join(' ').toLowerCase();
            const body = (post.body || '').toLowerCase();

            return title.includes(query) ||
                description.includes(query) ||
                tags.includes(query) ||
                body.includes(query);
        });
    }, [posts, searchQuery]);

    const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
    const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
    const paginatedPosts = filteredPosts.slice(startIndex, startIndex + POSTS_PER_PAGE);

    return (
        <div className="space-y-8">
            <header className="space-y-2">
                <h1 className="text-4xl font-bold">
                    <span className="text-accent-secondary mr-2">#</span>
                    Blog
                </h1>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <p className="text-gray-600 mb-0 leading-relaxed">&gt; Thoughts, tutorials, and rants.</p>
                    <div className="sm:w-64">
                        <SearchBar value={searchQuery} onChange={setSearchQuery} />
                    </div>
                </div>
            </header>

            <div className="grid gap-8 animate-in fade-in duration-500">
                {paginatedPosts.length > 0 ? (
                    paginatedPosts.map(post => (
                        <PostCard key={post.slug} post={post} />
                    ))
                ) : (
                    <p className="text-gray-500 font-mono">&gt; No posts found matching "{searchQuery}"</p>
                )}
            </div>

            {(
                <div className="flex items-center justify-center gap-4 font-mono text-sm">
                    <button
                        onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                        disabled={currentPage === 1}
                        className={`font-bold px-1 py-0.5 transition-colors hover:text-accent-primary hover:bg-gray-100 ${currentPage === 1 ? 'text-gray-400' : ''}`}
                    >
                        &lt; prev
                    </button>
                    <span className="text-gray-600">
                        {currentPage} / {totalPages}
                    </span>
                    <button
                        onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                        disabled={currentPage === totalPages}
                        className={`font-bold px-1 py-0.5 transition-colors hover:text-accent-primary hover:bg-gray-100 ${currentPage === totalPages ? 'text-gray-400' : ''}`}
                    >
                        next &gt;
                    </button>
                </div>
            )}

            <Newsletter />
        </div>
    );
};

export default Blog;
