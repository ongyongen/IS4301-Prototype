import Layout from "../../Layout"
import { PageTitle } from "../../components/PageTitle/PageTitle"
import { CommonButton } from "../../components/Button/CommonButton"
import { useState } from "react"

export const CustomerTable = () => {

    const [showModal, setShowModal] = useState(false)
    const [showReport, setShowReport] = useState(false)


    return (
        <Layout>
            <div className="flex flex-col flex-wrap justify-center items-center">
                <PageTitle title={"Customer Chatbot Records"} className={'text-center'} />
            </div>
            <CommonButton
                className="ml-16 mt-4"
                buttonText={"Download Monthly Summary Report"}
                onClickAction={() => setShowReport(true)}
            />

            {showModal && <div id="default-modal" aria-hidden="true" className="flex overflow-y-auto overflow-x-hidden ml-60 fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
                <div className="w-1/3 relative p-4">
                    <div className="relative bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-700">
                        <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                Feedback
                            </h3>
                            <button type="button" onClick={() => setShowModal(false)} className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="default-modal">
                                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                </svg>
                            </button>
                        </div>
                        <div className="p-4 md:p-5 space-y-4">
                            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                That chatbot can make it easier for me to select language. I am more familiar with Chinese so it is good if i can talk to the chatbot in Chinese instead.
                            </p>
                        </div>
                    </div>
                </div>
            </div>}



            {showReport && <div id="default-modal" aria-hidden="true" className="flex overflow-y-auto overflow-x-hidden ml-52 mt-32 fixed top-0 right-0 left-0 z-50  w-1/2 md:inset-0 h-[calc(100%-1rem)] max-h-full">
                <div className="w-full relative p-4">
                    <div className="relative bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-700">
                        <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                Monthly Report
                            </h3>
                            <button type="button" onClick={() => setShowReport(false)} className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="default-modal">
                                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                </svg>
                            </button>
                        </div>
                        <div className="p-4 md:p-5 space-y-4">
                            <h1 className="font-bold">Overall Rating</h1>
                            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                Users provided an average of 4.5 / 5 ratings for the month of November 2023. Overall, users had a pleasant experience with the chatbot.
                                Based on the previous month, the current chatbot improved in terms of making it easier and more intuitive for users to choose their preferred language of communication
                            </p>
                            <h1 className="font-bold">Clarity of Communication</h1>
                            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                Users found the chatbot easy to understand and interact with in general. Users were able to select their preferred language choices and type in that preferred language.
                                As an improvement, users generally wish to see the choose language prompt at the start of their interactions easily and not during the middle.
                            </p>
                            <h1 className="font-bold">Personalization</h1>
                            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                Users found that the insights generated by the chatbot were useful and targeted to their circumstances. 80% of the customers who used the chatbot expressed that they could use the
                                insights generated to fulfill their initial requests. 90% of the customers were also satisfied with the chatbot's matching process and believed that they got
                                matched to a financial advisor that were able to sufficiently address their needs. <br></br><br></br>

                                Some areas of improvement is that, 20% of customers believe the chatbot can obtain more contextualised information about their past spending habits. 30% of customers
                                believe that the chatbot asked too many repeated
                            </p>
                            <p>. . . . scroll down for more</p>
                            <CommonButton buttonText={"Download as PDF"} className="mr-4" />
                            <CommonButton buttonText={"Download as Word Document"} />
                        </div>
                    </div>
                </div>
            </div>}


            <div className="flex flex-col items-center mt-4">
                <table className="border-collapse mt-4 w-[90%]">
                    <tr>
                        <th className="border bg-gray-100 w-1/6 p-2">Customer Name</th>
                        <th className="border bg-gray-100 w-1/6 p-2">Demographic</th>
                        <th className="border bg-gray-100 w-1/6 p-2">Phone Number</th>
                        <th className="border bg-gray-100 w-1/6 p-2">Session Time</th>
                        <th className="border bg-gray-100 w-1/6 p-2">Rating</th>
                        <th className="border bg-gray-100 w-1/6 p-2">Feedback</th>
                    </tr>
                    <tr>
                        <td className="border border-gray-300 p-2 text-sm text-center">Jane</td>
                        <td className="border border-gray-300 p-2 text-sm text-center">University Student</td>
                        <td className="border border-gray-300 p-2 text-sm text-center">XXXXX</td>
                        <td className="border border-gray-300 p-2 text-sm text-center">3 hours</td>
                        <td className="border border-gray-300 p-2 text-sm text-center">5.0</td>
                        <td className="border border-gray-300 p-2 text-sm text-center text-blue-500 underline cursor-pointer" onClick={() => setShowModal(true)}>View Feedback</td>
                    </tr>
                    <tr>
                        <td className="border border-gray-300 p-2 text-sm text-center">Jacob</td>
                        <td className="border border-gray-300 p-2 text-sm text-center">University Student</td>
                        <td className="border border-gray-300 p-2 text-sm text-center">XXXXX</td>
                        <td className="border border-gray-300 p-2 text-sm text-center">2 hours</td>
                        <td className="border border-gray-300 p-2 text-sm text-center">4.5</td>
                        <td className="border border-gray-300 p-2 text-sm text-center text-blue-500 underline">View Feedback</td>
                    </tr>
                    <tr>
                        <td className="border border-gray-300 p-2 text-sm text-center">Alex</td>
                        <td className="border border-gray-300 p-2 text-sm text-center">Early Career Individual</td>
                        <td className="border border-gray-300 p-2 text-sm text-center">XXXXX</td>
                        <td className="border border-gray-300 p-2 text-sm text-center">2 hours</td>
                        <td className="border border-gray-300 p-2 text-sm text-center">4.2</td>
                        <td className="border border-gray-300 p-2 text-sm text-center text-blue-500 underline">View Feedback</td>
                    </tr>
                    <tr>
                        <td className="border border-gray-300 p-2 text-sm text-center">Jackie</td>
                        <td className="border border-gray-300 p-2 text-sm text-center">Pre-University Student</td>
                        <td className="border border-gray-300 p-2 text-sm text-center">XXXXX</td>
                        <td className="border border-gray-300 p-2 text-sm text-center">4 hours</td>
                        <td className="border border-gray-300 p-2 text-sm text-center">4.9</td>
                        <td className="border border-gray-300 p-2 text-sm text-center text-blue-500 underline">View Feedback</td>
                    </tr>
                    <tr>
                        <td className="border border-gray-300 p-2 text-sm text-center">Alexis</td>
                        <td className="border border-gray-300 p-2 text-sm text-center">Working Professional</td>
                        <td className="border border-gray-300 p-2 text-sm text-center">XXXXX</td>
                        <td className="border border-gray-300 p-2 text-sm text-center">2 hours</td>
                        <td className="border border-gray-300 p-2 text-sm text-center">5.0</td>
                        <td className="border border-gray-300 p-2 text-sm text-center text-blue-500 underline">View Feedback</td>
                    </tr>
                    <tr>
                        <td className="border border-gray-300 p-2 text-sm text-center">Martha</td>
                        <td className="border border-gray-300 p-2 text-sm text-center">Homemaker</td>
                        <td className="border border-gray-300 p-2 text-sm text-center">XXXXX</td>
                        <td className="border border-gray-300 p-2 text-sm text-center">1.5 hours</td>
                        <td className="border border-gray-300 p-2 text-sm text-center">3.0</td>
                        <td className="border border-gray-300 p-2 text-sm text-center text-blue-500 underline">View Feedback</td>
                    </tr>
                    <tr>
                        <td className="border border-gray-300 p-2 text-sm text-center">Pamela</td>
                        <td className="border border-gray-300 p-2 text-sm text-center">Working Professional</td>
                        <td className="border border-gray-300 p-2 text-sm text-center">XXXXX</td>
                        <td className="border border-gray-300 p-2 text-sm text-center">2.5 hours</td>
                        <td className="border border-gray-300 p-2 text-sm text-center">4.5</td>
                        <td className="border border-gray-300 p-2 text-sm text-center text-blue-500 underline">View Feedback</td>
                    </tr>
                    <tr>
                        <td className="border border-gray-300 p-2 text-sm text-center">Lucas</td>
                        <td className="border border-gray-300 p-2 text-sm text-center">Working Professional</td>
                        <td className="border border-gray-300 p-2 text-sm text-center">XXXXX</td>
                        <td className="border border-gray-300 p-2 text-sm text-center">2.5 hours</td>
                        <td className="border border-gray-300 p-2 text-sm text-center">4.5</td>
                        <td className="border border-gray-300 p-2 text-sm text-center text-blue-500 underline">View Feedback</td>
                    </tr>
                    <tr>
                        <td className="border border-gray-300 p-2 text-sm text-center">Emily</td>
                        <td className="border border-gray-300 p-2 text-sm text-center">Working Professional</td>
                        <td className="border border-gray-300 p-2 text-sm text-center">XXXXX</td>
                        <td className="border border-gray-300 p-2 text-sm text-center">6 hours</td>
                        <td className="border border-gray-300 p-2 text-sm text-center">5.0</td>
                        <td className="border border-gray-300 p-2 text-sm text-center text-blue-500 underline">View Feedback</td>
                    </tr>


                </table>
                <nav className="mt-10" aria-label="Page navigation example">
                    <ul className="flex items-center -space-x-px h-10 text-base">
                        <li>
                            <a href="#" className="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                                <span className="sr-only">Previous</span>
                                <svg className="w-3 h-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</a>
                        </li>
                        <li>
                            <a href="#" aria-current="page" className="z-10 flex items-center justify-center px-4 h-10 leading-tight text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">3</a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">4</a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">5</a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                                <span className="sr-only">Next</span>
                                <svg className="w-3 h-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                                </svg>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </Layout>
    )
}