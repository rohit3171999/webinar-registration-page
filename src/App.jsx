import React from "react";

export default function App() {
    return (
        <div className="font-sans leading-relaxed m-0">
            {/* Hero Section */}
            <section className="text-center py-12 px-5 bg-[#f5faff]">
                <h1 className="text-4xl md:text-5xl text-[#222] font-bold">
                    Never Miss a Detail with AI-Powered Meeting Summaries
                </h1>
                <p className="text-lg text-gray-600 my-3">
                    Get instant, accurate, and organized summaries of every meeting.
                </p>
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg text-base mt-5 mx-2 hover:bg-blue-700">
                    Try It Now
                </button>
                <img
                    src="https://via.placeholder.com/600x300"
                    alt="AI Meeting Summary Demo"
                    className="mt-6 max-w-full rounded-lg mx-auto"
                />
            </section>

            {/* Feature Section */}
            <section className="py-12 px-5 bg-white">
                <h2 className="text-3xl text-center mb-6 font-semibold">
                    Why Use Real-Time AI Summaries?
                </h2>
                <div className="flex flex-wrap justify-center gap-6">
                    <div className="flex-1 min-w-[250px] bg-gray-100 p-6 rounded-lg text-center shadow">
                        <h3 className="text-xl font-semibold">⏳ Save Time</h3>
                        <p className="text-gray-700">Skip note-taking, focus on discussions.</p>
                    </div>
                    <div className="flex-1 min-w-[250px] bg-gray-100 p-6 rounded-lg text-center shadow">
                        <h3 className="text-xl font-semibold">🤝 Improve Collaboration</h3>
                        <p className="text-gray-700">Share summaries instantly with your team.</p>
                    </div>
                    <div className="flex-1 min-w-[250px] bg-gray-100 p-6 rounded-lg text-center shadow">
                        <h3 className="text-xl font-semibold">📑 Accurate Records</h3>
                        <p className="text-gray-700">Always have a reliable meeting log.</p>
                    </div>
                </div>
            </section>

            {/* Demo Section */}
            <section className="text-center py-12 px-5 bg-[#f5faff]">
                <h2 className="text-3xl mb-6 font-semibold">See It in Action</h2>
                <video
                    className="w-4/5 max-w-xl mx-auto rounded-lg"
                    controls
                >
                    <source
                        src="https://www.w3schools.com/html/mov_bbb.mp4"
                        type="video/mp4"
                    />
                    Your browser does not support video.
                </video>
                <div className="mt-6 inline-block p-6 border border-gray-300 rounded-lg bg-white text-left">
                    <h3 className="text-xl font-semibold mb-2">Sample Summary</h3>
                    <p>
                        ✅ Project deadlines confirmed <br />
                        ✅ Next sprint starts Monday <br />
                        ✅ Client feedback integrated
                    </p>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-12 px-5 bg-white">
                <h2 className="text-3xl text-center mb-6 font-semibold">What Teams Say</h2>
                <blockquote className="italic text-center text-gray-700 max-w-xl mx-auto mb-6">
                    “Perfect for remote teams — we save hours every week.” – Beta User
                </blockquote>
                <blockquote className="italic text-center text-gray-700 max-w-xl mx-auto">
                    “Finally, no one forgets action items after calls.” – Early Adopter
                </blockquote>
            </section>

            {/* CTA Section */}
            <section className="text-center py-12 px-5 bg-[#f5faff]">
                <h2 className="text-3xl mb-6 font-semibold">Ready to Get Started?</h2>
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg text-base mt-2 mx-2 hover:bg-blue-700">
                    Start Free Trial
                </button>
                <button className="bg-white text-blue-600 border-2 border-blue-600 px-6 py-3 rounded-lg text-base mt-2 mx-2 hover:bg-blue-50">
                    Upgrade Plan
                </button>
            </section>

            {/* Footer */}
            <footer className="text-center py-5 bg-[#222] text-white text-sm">
                <p>
                    © 2025 CollabSuite |{" "}
                    <a href="#" className="underline hover:text-gray-300">
                        Privacy
                    </a>{" "}
                    |{" "}
                    <a href="#" className="underline hover:text-gray-300">
                        Terms
                    </a>
                </p>
            </footer>
        </div>
    );
}
