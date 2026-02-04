import React, { useState } from 'react';

const Newsletter = () => {
    const buttondown_username = 'pepe_aster';

    return (
        <section className="mt-16 pt-8 border-t border-dashed border-gray-400">
            <h3 className="text-xl font-bold mb-4 flex items-center">
                <span className="text-accent-secondary mr-2 text-md">&lt;My Awesome Newsletter /&gt;</span>
            </h3>
            <p className="mb-6 text-sm text-gray-600 font-mono">
                Get notified when I post something new. No spam, just some pepe.
            </p>

            <form
                action={`https://buttondown.email/api/emails/embed-subscribe/${buttondown_username}`}
                method="post"
                target="popupwindow"
                onSubmit={() => window.open(`https://buttondown.email/${buttondown_username}`, 'popupwindow')}
                className="flex flex-col sm:flex-row gap-4 max-w-md"
            >
                <input
                    type="email"
                    name="email"
                    id="bd-email"
                    required
                    placeholder="your@email.com"
                    className="flex-1 bg-gray-50 border-b-2 border-gray-300 focus:border-accent-primary px-3 py-2 outline-none font-mono text-sm transition-colors placeholder:text-gray-400"
                />
                <button
                    type="submit"
                    className="font-mono text-sm font-bold border-2 border-transparent hover:border-black px-4 py-2 hover:bg-gray-100 transition-all active:bg-gray-200"
                >
                    &gt; Subscribe
                </button>
            </form>
        </section>
    );
};

export default Newsletter;
