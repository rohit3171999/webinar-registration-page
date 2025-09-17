/*
* Description:
Explains what the feature does and why it matters.

Purpose:
Provide clarity and highlight benefits with visuals/icons.
* */
function FeatureExplaination(){
    return (
        <section className="bg-gray-50 dark:bg-gray-800">
            <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                <div className="max-w-screen-md mb-8 lg:mb-16 text-center mx-auto">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                        How It Transforms Your Workflow
                    </h2>
                    <p className="text-gray-500 sm:text-xl dark:text-gray-400">
                        Discover how our AI-powered assistant turns tedious meetings into productive, actionable outcomes.
                    </p>
                </div>
                <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
                    <div>
                        <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-blue-100 lg:h-12 lg:w-12 dark:bg-blue-900">
                            {/* Icon: Automated Note-Taking */}
                            <svg className="w-5 h-5 text-blue-600 lg:w-6 lg:h-6 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg>
                        </div>
                        <h3 className="mb-2 text-xl font-bold dark:text-white">Automated Note-Taking</h3>
                        <p className="text-gray-500 dark:text-gray-400">
                            Our AI joins your calls and automatically transcribes the entire conversation in real-time, so you never miss a word.
                        </p>
                    </div>
                    <div>
                        <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-blue-100 lg:h-12 lg:w-12 dark:bg-blue-900">
                            {/* Icon: Intelligent Summaries */}
                            <svg className="w-5 h-5 text-blue-600 lg:w-6 lg:h-6 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.056 0l4.25 1.822a1 1 0 00.788 0l7-3a1 1 0 000-1.84l-7-3zM3.25 9.051l.956 1.912A1 1 0 005.25 12h9.5a1 1 0 00.956-1.037l.956-1.912L10 12.311 3.25 9.051zM3.25 13.051l.956 1.912A1 1 0 005.25 16h9.5a1 1 0 00.956-1.037l.956-1.912L10 16.311 3.25 13.051z"></path></svg>
                        </div>
                        <h3 className="mb-2 text-xl font-bold dark:text-white">Intelligent Summaries</h3>
                        <p className="text-gray-500 dark:text-gray-400">
                            Receive concise, AI-generated summaries with key takeaways and action items delivered right after every meeting.
                        </p>
                    </div>
                    <div>
                        <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-blue-100 lg:h-12 lg:w-12 dark:bg-blue-900">
                            {/* Icon: Searchable Archives */}
                            <svg className="w-5 h-5 text-blue-600 lg:w-6 lg:h-6 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                        </div>
                        <h3 className="mb-2 text-xl font-bold dark:text-white">Searchable Archives</h3>
                        <p className="text-gray-500 dark:text-gray-400">
                            Easily search through all your past meeting transcripts and summaries to find exactly what you need, instantly.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );


}
export default FeatureExplaination