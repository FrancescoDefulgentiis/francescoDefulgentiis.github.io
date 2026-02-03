import React, { useState } from 'react';

const projects = [
    {
        title: "Currently emplyed at Ntt Data Italia",
        shortDesc: "Software Engineer & Consultant.",
        details: "brief description of my job"
    },
    {
        title: "Project Beta",
        shortDesc: "Minimalist task manager.",
        details: "React + Firebase. Focus on Brutalist design principles."
    },
    {
        title: "Portfolio",
        shortDesc: "This website.",
        details: "React + Vite + Tailwind CSS."
    },
];

const WorkProjects = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggle = (idx) => {
        setOpenIndex(openIndex === idx ? null : idx);
    };

    return (
        <section className="animate-in fade-in duration-700">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
                <span className="text-accent-primary mr-2">##</span>
                Work & Projects
            </h2>
            <div className="space-y-4">
                {projects.map((project, idx) => (
                    <div
                        key={idx}
                        className={`border-2 border-black p-4 transition-all cursor-pointer shadow-[2px_2px_0px_0px_rgba(0,0,0,0)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-0.5 ${openIndex === idx ? 'bg-black text-white' : 'bg-white hover:bg-gray-50'}`}
                        onClick={() => toggle(idx)}
                    >
                        <div className="flex justify-between items-center select-none">
                            <h3 className="font-bold text-lg font-mono flex items-center">
                                <span className={`${openIndex === idx ? 'text-accent-secondary' : 'text-accent-primary'} mr-3`}>###</span>
                                {project.title}
                            </h3>
                            <span className="font-mono text-xl">{openIndex === idx ? '[-]' : '[+]'}</span>
                        </div>
                        <p className={`mt-2 font-mono text-sm ${openIndex === idx ? 'text-gray-300' : 'text-gray-600'}`}>
                            {project.shortDesc}
                        </p>

                        {openIndex === idx && (
                            <div className="mt-4 pt-4 border-t border-gray-600 animate-in fade-in slide-in-from-top-1 duration-200">
                                <p className="font-mono text-sm text-accent-secondary mb-1">&gt; details</p>
                                <p className="font-mono text-sm">{project.details}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default WorkProjects;
