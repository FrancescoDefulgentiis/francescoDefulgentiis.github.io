import React from 'react';
import Education from '../components/sections/Education';
import WorkProjects from '../components/sections/WorkProjects';
import Certifications from '../components/sections/Certifications';

const Home = () => {
    return (
        <div className="space-y-16">
            <section className="animate-in fade-in duration-300">
                <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tighter">
                    <span className="text-accent-red mr-2 select-none">#</span>
                    Francesco De Fulgentiis
                </h1>
                <p className="text-xl md:text-2xl font-mono border-l-4 border-accent-green pl-4 py-1 italic">
                    Software Engineer. Minimalist. Builder.
                </p>
            </section>

            <Education />
            <WorkProjects />
            <Certifications />

            <section className="animate-in fade-in duration-1000 delay-300 border-t-2 border-black pt-8">
                <p className="font-mono text-gray-600 mb-4">&gt; Want to see more?</p>
                <a href="/blog" className="inline-block bg-black text-white px-4 py-2 font-bold hover:bg-accent-red transition-colors">
                    [Read the Blog]
                </a>
            </section>
        </div>
    );
};

export default Home;
