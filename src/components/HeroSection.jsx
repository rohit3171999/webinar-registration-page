/*
* Description:
The top section of the landing page that immediately grabs attention with the feature headline, subheadline, and primary CTA.

Purpose:
Communicate the main value proposition quickly and push the user towards action (try/upgrade).
* */
export default function HeroSection(){
    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
                <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                    Never Miss a Detail with AI-Powered Meeting Summaries
                </h1>
                <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">
                    Our AI assistant joins your meetings, takes notes, and delivers concise summaries, so you can focus on the conversation, not on note-taking.
                </p>
                <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4 mb-12">
                    <a href="#" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                        Register for Webinar
                        <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                    </a>
                </div>
                <img
                    className="w-full max-w-4xl mx-auto rounded-lg shadow-2xl border border-gray-200 dark:border-gray-700"
                    src="https://www.on24.com/wp-content/uploads/0202/06/Social-Linkedin-1200x627-A-%E2%80%93-NA-2.png"
                    alt="Screenshot of the AI meeting summary feature"
                />
            </div>
        </section>
    );
}