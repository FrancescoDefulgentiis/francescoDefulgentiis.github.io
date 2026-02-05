import React, { useState } from 'react';

const projects = [
    {
        title: "Currently employed at Ntt Data Italia",
        shortDesc: "Software Engineer & Consultant.",
        details: "Building full stack solutions across a diverse technology landscape on the back-end and front-end. I collaborate directly with clients to understand their needs and deliver tailored, production-ready software."
    },
    {
        title: "Personal Portfolio",
        shortDesc: "This website.",
        details: `I built this site primarily as a personal diary. A space to log progress embracing the \"build in public\" philosophy, I've stepped out of my local environment to share my work. To get this project off the ground, I used a stack of fast and simple tools. React: For a lean, component-based architecture. Vite: To build and serve the app efficiently. Tailwind CSS: To handle styling without the heavy lifting of traditional frameworks.`
    },
    {
        title: "RogueLike Pinball game",
        shortDesc: "A pixel-art pinball game with roguelike elements.",
        details: `This is a work in progress project I'm building in Godot 4 with GDScript. I will soon make a dedicated post about it.`
    },
    {
        title: "inkHub",
        shortDesc: "Customizable Home Dashboard",
        details: `InkHub is a versatile hardware platform that integrates the high-contrast clarity of e-ink technology with the processing power of a Raspberry Pi. At its core, the project focuses on modular utility. Rather than functioning as a closed system, InkHub is designed to be an extensible ecosystem. By prioritizing open customizability and collaborative input, the device allows for a wide range of applications.`
    }
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
                        className={`border-2 border-black p-4 transition-all cursor-pointer shadow-[2px_2px_0px_0px_rgba(0,0,0,0)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-0.5 ${openIndex === idx ? 'bg-gray-50' : 'bg-white hover:bg-gray-50'}`}
                        onClick={() => toggle(idx)}
                    >
                        <div className="flex justify-between items-center select-none">
                            <h3 className="font-bold text-lg font-mono flex items-center">
                                <span className="text-accent-primary mr-3">###</span>
                                {project.title}
                            </h3>
                            <span className="font-mono text-xl">{openIndex === idx ? '[-]' : '[+]'}</span>
                        </div>
                        <p className="mt-2 font-mono text-sm text-gray-600">
                            {project.shortDesc}
                        </p>
                        <p className="font-mono text-sm text-accent-secondary mb-1">&gt; details</p>

                        {openIndex === idx && (
                            <div className="mt-4 pt-4 border-t border-gray-300 animate-in fade-in slide-in-from-top-1 duration-200">
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
