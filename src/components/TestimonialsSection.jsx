/*
* Description:
Displays quotes or reviews from beta testers/early adopters.

Purpose:
Provide social proof and credibility.
* */
export default function TestimonialsSection(){
    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
                <div className="mx-auto max-w-screen-sm">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                        What Teams Are Saying
                    </h2>
                    <p className="mb-8 font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">
                        Hear from early adopters who have already transformed their workflow with our AI assistant.
                    </p>
                </div>
                <div className="grid gap-8 lg:grid-cols-2">
                    <figure className="flex flex-col justify-center items-center p-8 text-center bg-gray-50 rounded-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700 shadow-md">
                        <blockquote className="mx-auto mb-4 max-w-2xl text-gray-500 lg:mb-8 dark:text-gray-400">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">"A total game-changer"</h3>
                            <p className="my-4">"This tool has saved me at least 5 hours a week. I can actually focus on the conversation instead of frantically typing notes. The summaries are scarily accurate."</p>
                        </blockquote>
                        <figcaption className="flex justify-center items-center space-x-3">
                            <img className="w-9 h-9 rounded-full" src="https://placehold.co/36x36/E2E8F0/4A5568?text=JS" alt="profile picture Jane Smith"/>
                            <div className="space-y-0.5 font-medium dark:text-white text-left">
                                <div>Jane Smith</div>
                                <div className="text-sm font-light text-gray-500 dark:text-gray-400">Product Manager at Innovate Inc.</div>
                            </div>
                        </figcaption>
                    </figure>
                    <figure className="flex flex-col justify-center items-center p-8 text-center bg-gray-50 rounded-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700 shadow-md">
                        <blockquote className="mx-auto mb-4 max-w-2xl text-gray-500 lg:mb-8 dark:text-gray-400">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">"Essential for remote teams"</h3>
                            <p className="my-4">"As a distributed team, keeping everyone aligned is tough. The AI summaries ensure everyone who couldn't make a call is up-to-speed in minutes. It's become essential."</p>
                        </blockquote>
                        <figcaption className="flex justify-center items-center space-x-3">
                            <img className="w-9 h-9 rounded-full" src="https://placehold.co/36x36/E2E8F0/4A5568?text=MD" alt="profile picture Mark Davis"/>
                            <div className="space-y-0.5 font-medium dark:text-white text-left">
                                <div>Mark Davis</div>
                                <div className="text-sm font-light text-gray-500 dark:text-gray-400">Engineering Lead at Tech Solutions</div>
                            </div>
                        </figcaption>
                    </figure>
                </div>
            </div>
        </section>
    );
}