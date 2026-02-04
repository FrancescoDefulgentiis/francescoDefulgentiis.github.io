import React from 'react';
import { Link } from 'react-router-dom';

const PostCard = ({ post }) => {
    return (
        <Link to={`/blog/${post.slug}`}>
            <article className="border-2 border-black p-6 hover:translate-x-1 hover:-translate-y-1 transition-transform cursor-pointer shadow-[4px_4px_0px_0px_rgba(0,0,0,0)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] bg-white h-full">
                <h2 className="text-2xl font-bold mb-2">
                    <span className="text-accent-primary mr-2">##</span>
                    {post.title}
                </h2>
                <div className="flex gap-4 mb-4 text-sm text-gray-500 font-mono">
                    <span>{post.date}</span>
                    <span>{post.toRead} min read</span>
                </div>
                <p className="font-mono">{post.description}</p>
            </article>
        </Link>
    );
};

export default PostCard;
