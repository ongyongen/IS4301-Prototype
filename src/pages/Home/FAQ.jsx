import { useState } from 'react';
import Arrow from '../../../public/assets/arrow.svg';
export const FAQ = ({ title, paragraph }) => {
    const [showMoreDetails, setShowMoreDetails] = useState(false);

    return (
        <div className="flex align-middle justify-center">
            <div
                className=" w-5/6  p-2 rounded-lg dark:bg-gray-800"
                id="faq"
                role="tabpanel"
                aria-labelledby="faq-tab"
            >
                <div
                    id="accordion-flush"
                    data-accordion="collapse"
                    data-active-classes="bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
                    data-inactive-classes="text-gray-500 dark:text-gray-400"
                >
                    <h2 id="accordion-flush-heading-1">
                        <button
                            type="button"
                            onClick={() => setShowMoreDetails(!showMoreDetails)}
                            className="flex items-center justify-between w-full py-5 font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400"
                            data-accordion-target="#accordion-flush-body-1"
                            aria-expanded="true"
                            aria-controls="accordion-flush-body-1"
                        >
                            <span>{title}</span>
                            {!showMoreDetails && (
                                <div className="w-4">
                                    <img src={Arrow} />
                                </div>
                            )}
                            {showMoreDetails && (
                                <img src={Arrow} className="w-4 rotate-180" />
                            )}
                        </button>
                    </h2>
                    {showMoreDetails && (
                        <div
                            id="accordion-flush-body-1"
                            aria-labelledby="accordion-flush-heading-1"
                        >
                            <div className="py-5 border-b border-gray-200 dark:border-gray-700">
                                <p className="mb-2 text-gray-500 dark:text-gray-400">
                                    {paragraph}
                                </p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
