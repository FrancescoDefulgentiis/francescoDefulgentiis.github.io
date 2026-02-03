import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Markdown from 'react-markdown';
import { getPost } from '../lib/posts';

const BlogPost = () => {
    const { slug } = useParams();
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getPost(slug)
            .then(data => {
                setPost(data);
                setLoading(false);
            })
            .catch(() => {
                setLoading(false);
            });
    }, [slug]);

    if (loading) {
        return <div className="font-mono text-xl animate-pulse">&gt; Loading data_stream...</div>;
    }

    if (!post) {
        return (
            <div className="space-y-4">
                <h1 className="text-4xl font-bold text-accent-primary">404_POST_NOT_FOUND</h1>
                <Link to="/blog" className="text-black hover:bg-black hover:text-white px-2 py-1 transition-colors">
                    &lt; Return to Index
                </Link>
            </div>
        );
    }

    return (
        <article className="animate-in fade-in duration-500 max-w-none">
            <Link to="/blog" className="inline-block mb-8 text-sm text-gray-500 hover:text-black hover:underline decoration-accent-primary">
                &lt; Back to Blog
            </Link>

            <header className="mb-12 border-b-2 border-dashed border-gray-300 pb-8">
                <h1 className="text-3xl md:text-5xl font-bold mb-4 tracking-tighter">
                    {post.data.title}
                </h1>
                <div className="text-gray-500 font-mono text-sm flex gap-4">
                    <span>DATE: {post.data.date}</span>
                    <span className="text-accent-primary">--READ_MODE</span>
                </div>
            </header>

            <div className="prose prose-p:font-mono prose-headings:font-bold prose-headings:font-mono prose-a:text-accent-primary prose-a:no-underline hover:prose-a:underline prose-code:text-accent-secondary prose-code:bg-gray-100 prose-code:px-1 prose-code:py-0.5 prose-code:rounded-none prose-pre:bg-gray-900 prose-pre:text-gray-100 prose-pre:rounded-none prose-pre:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] prose-pre:border-2 prose-pre:border-black">
                <Markdown>
                    {post.content}
                </Markdown>
            </div>

            <div className="mt-16 pt-8 border-t-2 border-black">
                <p className="font-mono text-center text-sm text-gray-500">
                    *** END OF STREAM ***
                </p>
            </div>
        </article>
    );
};

export default BlogPost;
