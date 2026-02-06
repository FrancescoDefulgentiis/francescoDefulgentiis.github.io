import React from 'react';

const SearchBar = ({ value, onChange }) => {
    return (
        <div className="relative">
            <input
                type="text"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder="> search posts..."
                className="w-full px-4 py-3 bg-white border-black font-mono text-sm 
                           placeholder-gray-500 focus:outline-none focus:border-accent-primary
                           transition-colors duration-200"
            />
            {value && (
                <button
                    onClick={() => onChange('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 
                               hover:text-black transition-colors font-mono"
                    aria-label="Clear search"
                >
                    [×]
                </button>
            )}
        </div>
    );
};

export default SearchBar;
