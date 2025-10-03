/*
* Description:
Explains what the feature does and why it matters.

Purpose:
Provide clarity and highlight benefits with visuals/icons.
* */
function FeatureExplaination({features, highlights}){
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
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                    <div>
                        <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-blue-100 lg:h-12 lg:w-12 dark:bg-blue-900">
                            {/* Icon: Automated Note-Taking */}
                            <svg className="w-5 h-5 text-blue-600 lg:w-6 lg:h-6 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg>
                        </div>
                        <h3 className="mb-2 text-xl font-bold dark:text-white">{features}</h3>
                        <p className="text-gray-500 dark:text-gray-400">
                            {highlights}
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );


}
export default FeatureExplaination