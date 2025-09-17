/*
* Description:
Reinforces the call-to-action at the end of the page.

Purpose:
Give users a final nudge to convert before leaving.
* */
export default function CTASection(){
    return (
        <section className="bg-gray-50 dark:bg-gray-800">
            <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                <div className="mx-auto max-w-screen-sm text-center">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold leading-tight text-gray-900 dark:text-white">
                        Ready to Experience Smarter Meetings?
                    </h2>
                    <p className="mb-8 font-light text-gray-500 dark:text-gray-400 md:text-lg">
                        Stop taking notes and start leading conversations. Register for our upcoming webinar to see how our AI can transform your workflow today.
                    </p>
                    <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                        <a href="#" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                            Register Now
                        </a>
                        <a href="#" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                            Learn more
                        </a>
                    </div>
                </div>
            </div>
        </section>

    );
}