import React, { useState } from 'react';
import { Mail, Check, AlertCircle, Loader2 } from 'lucide-react';

const Newsletter = () => {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState('idle');
    const [message, setMessage] = useState('');

    const NEWSLETTER_API_URL = "http://100.126.2.53:9000/api/public/subscription";
    const LIST_UUID = "6c161527-ff0c-4959-a7dc-718f847de374";

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');
        setMessage('');

        const payload = {
            email: email,
            list_uuids: [LIST_UUID],
        };

        console.log('Newsletter Subscription Attempt:', {
            url: NEWSLETTER_API_URL,
            payload: payload
        });

        try {
            const response = await fetch(NEWSLETTER_API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload)
            });

            console.log('Newsletter Response Status:', response.status);
            console.log('Newsletter Response Headers:', Object.fromEntries(response.headers.entries()));

            let data = {};
            const contentType = response.headers.get("content-type");
            if (contentType && contentType.indexOf("application/json") !== -1) {
                data = await response.json();
                console.log('Newsletter Response Data:', data);
            } else {
                const text = await response.text();
                console.log('Newsletter Response Text (Non-JSON):', text);
            }

            if (response.ok) {
                setStatus('success');
                setMessage('You are subscribed! Check your inbox for confirmation.');
                setEmail('');
            } else {
                const errorMsg = data.message || `Subscription failed (Status: ${response.status}).`;
                console.error('Newsletter Subscription Failed:', errorMsg);
                throw new Error(errorMsg);
            }
        } catch (error) {
            console.error('Newsletter Fetch Error:', error);
            setStatus('error');
            setMessage(error.message || 'Something went wrong. Please try again later.');
        }
    };

    return (
        <section className="mt-16 pt-8 border-t border-dashed border-gray-400">
            <div className="w-full max-w-md mx-auto p-6 border-2 border-black bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                    <Mail className="h-5 w-5" />
                    Join the Newsletter
                </h3>
                <p className="text-gray-600 mb-4 text-sm font-mono">
                    Get updates on my latest experiments and projects. No spam, ever.
                </p>

                {status === 'success' ? (
                    <div className="bg-green-100 border border-green-400 text-green-700 p-3 rounded flex items-center gap-2">
                        <Check className="h-4 w-4" />
                        <span className="font-mono text-sm">{message}</span>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                        <div className="relative">
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="your@email.com"
                                required
                                className="w-full p-2 bg-gray-50 border-2 border-black focus:outline-none focus:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-shadow font-mono text-sm"
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={status === 'loading'}
                            className="bg-black text-white font-bold py-2 px-4 hover:bg-gray-800 transition-colors flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed font-mono text-sm"
                        >
                            {status === 'loading' ? (
                                <Loader2 className="h-4 w-4 animate-spin" />
                            ) : (
                                '> Subscribe'
                            )}
                        </button>

                        {status === 'error' && (
                            <div className="text-red-500 text-sm flex items-center gap-1 mt-1 font-mono">
                                <AlertCircle className="h-3 w-3" />
                                {message}
                            </div>
                        )}
                    </form>
                )}
            </div>
        </section>
    );
};

export default Newsletter;
