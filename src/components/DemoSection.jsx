/*
* Description:
A visual demo showcasing the feature in action (video, GIF, or interactive mockup).

Purpose:
Show, don’t just tell → build trust and understanding.
* */
export default function DemoSection(){
    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6 text-center">
                <div className="max-w-screen-md mx-auto mb-8 lg:mb-12">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                        See It in Action
                    </h2>
                </div>

                {/* Embedded Video */}
                <div className="mx-auto max-w-4xl">
                    <div className="aspect-w-16 aspect-h-9">
                        <iframe
                            className="w-full h-full rounded-lg shadow-xl border border-gray-200 dark:border-gray-700"
                            src="https://www.youtube.com/embed/dQw4w9WgXcQ" // Replace with your video URL
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen>
                        </iframe>
                    </div>
                    <p className="mt-4 text-center text-gray-500 dark:text-gray-400">
                        Watch a 2-minute demo of how our AI transforms your meetings.
                    </p>
                </div>

                {/* Example Output */}
                <div className="mt-8 lg:mt-12 mx-auto max-w-4xl">
                    <h3 className="mb-6 text-2xl font-bold dark:text-white">Example Summary Output</h3>
                    <pre className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 text-left text-sm text-gray-800 dark:text-gray-200 overflow-x-auto shadow-lg border border-gray-200 dark:border-gray-700">
                        <code>
                            <span className="font-bold text-blue-600 dark:text-blue-400">[Key Decisions]</span><br/>- The team agreed to move forward with the Q3 marketing campaign.<br/>- Project 'Phoenix' budget approved for $15,000.<br/><br/><span className="font-bold text-blue-600 dark:text-blue-400">[Action Items]</span><br/>- @Sarah to finalize the campaign brief by EOD Friday.<br/>- @Mike to allocate development resources for the new landing page.
                        </code>
                    </pre>
                </div>
            </div>
        </section>
    );
}