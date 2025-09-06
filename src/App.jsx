const App = () => {
    // --- Data for Page Content ---

    const benefits = [
        {
            icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>`,
            title: "Saves Time",
            description: "Focus on the conversation, not on note-taking. Get concise, actionable summaries instantly after your meeting."
        },
        {
            icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>`,
            title: "Improves Collaboration",
            description: "Keep everyone aligned. Share summaries with stakeholders to ensure no one misses key decisions and action items."
        },
        {
            icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>`,
            title: "Ensures Accurate Records",
            description: "Our AI provides an unbiased, accurate transcript and summary, creating a reliable source of truth for every discussion."
        }
    ];

    const testimonials = [
        {
            quote: "This is a game-changer for our remote team. We spend less time writing recaps and more time executing. The accuracy is mind-blowing!",
            name: "Aisha Khan",
            title: "Project Manager, Innovate Inc."
        },
        {
            quote: "As someone who jumps between client calls all day, AI summaries are perfect. I can quickly catch up on meetings I missed and grab key client feedback.",
            name: "Ben Carter",
            title: "Account Executive, Solutions Co."
        }
    ];

    // --- JSX for the Component ---

    return (
        <div>
            {/* Header */}
            <header className="bg-white shadow-sm sticky top-0 z-50">
                <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                    <div className="text-2xl font-bold text-slate-800">
                        CollabSuite
                    </div>
                    <nav>
                        <a href="#cta" className="cta-button-primary">Try It Now</a>
                    </nav>
                </div>
            </header>

            <main>
                {/* 1. Hero Section */}
                <section className="text-center py-20 px-6 bg-white">
                    <div className="container mx-auto">
                        <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-4 leading-tight">
                            Never Miss a Detail with AI-Powered Meeting Summaries
                        </h1>
                        <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mb-8">
                            CollabSuite now automatically transcribes, analyzes, and summarizes your meetings in real-time. Get key insights, action items, and decisions delivered instantly.
                        </p>
                        <a href="#cta" className="cta-button-primary text-lg">
                            Upgrade to Access
                        </a>
                        <div className="mt-12 animate-fade-in-up">
                            <img
                                src="https://placehold.co/900x500/E2E8F0/475569?text=AI+Summary+Generation+in+Action"
                                alt="Animation showing AI meeting summary generation"
                                className="rounded-lg shadow-2xl mx-auto transform transition-transform duration-500 hover:scale-105"
                            />
                        </div>

                    </div>
                </section>

                {/* 2. Feature Explanation Section */}
                <section id="features" className="py-20 px-6">
                    <div className="container mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Focus on What Matters Most</h2>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-12">Leave the note-taking to our intelligent AI.</p>
                        <div className="grid md:grid-cols-3 gap-12">
                            {benefits.map(benefit => (
                                <div key={benefit.title} className="bg-white p-8 rounded-lg shadow-lg">
                                    <div className="flex justify-center mb-4" dangerouslySetInnerHTML={{ __html: benefit.icon }}></div>
                                    <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                                    <p className="text-slate-600">{benefit.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 3. Demo Section */}
                <section id="demo" className="py-20 px-6 bg-white">
                    <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
                        <div className="md:pr-10">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">See It in Action</h2>
                            <p className="text-lg text-slate-600 mb-6">
                                Watch this short demo to see how CollabSuite’s AI transforms a 30-minute meeting into a 2-minute scannable summary, complete with action items and key topics.
                            </p>
                            <a href="#cta" className="cta-button-primary">Enable Feature Now</a>
                        </div>
                        <div className="aspect-w-16 aspect-h-9">
                            <iframe
                                src="https://www.youtube.com/embed/dQw4w9WgXcQ" /* Placeholder video */
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className="w-full h-full rounded-lg shadow-2xl">
                            </iframe>
                        </div>
                    </div>
                </section>

                {/* 4. Testimonials Section */}
                <section id="testimonials" className="py-20 px-6">
                    <div className="container mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-12">Trusted by High-Performing Teams</h2>
                        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                            {testimonials.map(t => (
                                <div key={t.name} className="testimonial-card">
                                    <p className="text-slate-600 italic mb-6">"{t.quote}"</p>
                                    <p className="font-bold text-slate-800">{t.name}</p>
                                    <p className="text-sm text-slate-500">{t.title}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 5. Final CTA Section */}
                <section id="cta" className="bg-blue-600 text-white py-20 px-6 text-center">
                    <div className="container mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Supercharge Your Meetings?</h2>
                        <p className="text-lg mb-8 max-w-2xl mx-auto">
                            Unlock AI-powered summaries today and reclaim your focus.
                        </p>
                        <a href="#" className="inline-block px-10 py-4 bg-white text-blue-600 font-bold rounded-lg shadow-lg hover:bg-slate-100 transition-transform transform hover:scale-105">
                            Start Your Free Trial
                        </a>
                    </div>
                </section>
            </main>

            {/* 6. Footer */}
            <footer className="bg-slate-800 text-slate-400 py-12 px-6">
                <div className="container mx-auto text-center">
                    <div className="mb-4">
                        <a href="#" className="px-3 hover:text-white">About</a>
                        <a href="#" className="px-3 hover:text-white">Contact</a>
                        <a href="#" className="px-3 hover:text-white">FAQ</a>
                        <a href="#" className="px-3 hover:text-white">Privacy Policy</a>
                        <a href="#" className="px-3 hover:text-white">Terms of Service</a>
                    </div>
                    <p>&copy; {new Date().getFullYear()} CollabSuite. All Rights Reserved.</p>
                </div>
            </footer>
        </div>
    );
};
export default App;

//ReactDOM.render(<App />, document.getElementById('root'));
