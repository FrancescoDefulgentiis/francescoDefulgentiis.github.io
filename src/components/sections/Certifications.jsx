import React from 'react';

const certs = [
    "AWS Certified Solutions Architect",
    "Meta Frontend Developer",
    "Google Cloud Professional Data Engineer"
];

const Certifications = () => {
    return (
        <section className="animate-in fade-in duration-1000">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
                <span className="text-accent-red mr-2">##</span>
                Certifications
            </h2>
            <ul className="list-none space-y-3 font-mono">
                {certs.map((cert, idx) => (
                    <li key={idx} className="flex items-center group">
                        <span className="text-accent-green mr-3 opacity-50 group-hover:opacity-100 transition-opacity">*</span>
                        <span className="group-hover:underline decoration-accent-red decoration-2 underline-offset-4">{cert}</span>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default Certifications;
