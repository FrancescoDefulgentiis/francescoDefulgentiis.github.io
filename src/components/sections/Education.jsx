import React from 'react';

const Education = () => {
    return (
        <section className="animate-in fade-in duration-500">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
                <span className="text-accent-primary mr-2">##</span>
                Education
            </h2>
            <div className="border-l-4 border-black pl-4 py-1 hover:border-accent-primary transition-colors">
                <h3 className="font-bold text-lg font-mono">Bachelor's degree in Software Engineering</h3>
                <p className="text-gray-600 font-mono"> University of Rome "La Sapienza"</p>
                <p className="text-sm mt-2 text-gray-500 font-mono">&gt; Focused on Software Architecture and Data Science.</p>
            </div>
        </section>
    );
};

export default Education;
