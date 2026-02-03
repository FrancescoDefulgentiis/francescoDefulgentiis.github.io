import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';

const Layout = () => {
    const location = useLocation();

    const isActive = (path) => location.pathname === path;

    return (
        <div className="min-h-screen bg-white p-4 md:p-8 max-w-4xl mx-auto border-x-2 border-black min-w-[320px]">
            <header className="mb-12 border-b-2 border-black pb-4 flex justify-between items-end">
                <div>
                    {/* Minimal brand or similar if needed */}
                </div>
                <nav>
                    <ul className="flex gap-6 font-mono">
                        <li>
                            <Link
                                to="/"
                                className={`font-bold px-1 py-0.5 transition-colors ${isActive('/') ? 'bg-black text-white' : 'hover:bg-gray-200'}`}
                            >
                                [Root]
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/blog"
                                className={`font-bold px-1 py-0.5 transition-colors ${isActive('/blog') ? 'bg-black text-white' : 'hover:bg-gray-200'}`}
                            >
                                [Blog]
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header>
            <main className="fade-in">
                <Outlet />
            </main>
            <footer className="mt-24 pt-8 border-t-2 border-black text-sm text-gray-600 font-mono">
                <p>&gt; © {new Date().getFullYear()} Francesco De Fulgentiis. END_OF_FILE</p>
            </footer>
        </div>
    );
};

export default Layout;
