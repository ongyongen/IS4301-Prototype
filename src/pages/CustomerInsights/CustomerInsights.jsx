import Layout from '../../Layout';
import { PageTitle } from '../../components/PageTitle/PageTitle';
import { useState } from 'react';

const UNI_STUDENTS = "University Students"
const WORKING_ADULTS = "Working Adults"
const HOME_MAKERS = "Home Makers"
const RETIREES = "Retirees"
const BUSINESS_OWNERS = "Business Owners"

import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, PieChart, Pie, Tooltip } from 'recharts';
import { data_1, data_2, data_4, data_5, data_6 } from './CustomerInsights.config';

const CustomerInsights = () => {

    const [selectedCustomer, setSelectedCustomer] = useState("Select Customer Demographic")
    const [showDropdown, setShowDropdown] = useState(false)

    const updateSelectedCustomer = (customer) => {
        setSelectedCustomer(customer)
        setShowDropdown(false)

    }

    return (
        <Layout>
            <div className="flex flex-col flex-wrap justify-center items-center">
                <PageTitle title={"Customer Insights"} className={'text-center'} />
                <div className="flex flex-col items-center mt-4">
                    <p className='mb-4'>Selected Demographic :</p>
                    <button
                        id="dropdownDefaultButton"
                        data-dropdown-toggle="dropdown"
                        onClick={() => setShowDropdown(true)}
                        className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button"
                    >
                        {selectedCustomer}
                    </button>

                    {showDropdown &&
                        <div id="dropdown" className="w-full mt-5 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700">
                            <ul className="text-sm text-gray-700 dark:text-gray-200 m-2">
                                <li>
                                    <p className="p-2 hover:bg-blue-100" onClick={() => updateSelectedCustomer(UNI_STUDENTS)}>{UNI_STUDENTS}</p>
                                </li>
                                <li>
                                    <p className="p-2 hover:bg-blue-100" onClick={() => updateSelectedCustomer(WORKING_ADULTS)}>{WORKING_ADULTS}</p>
                                </li>
                                <li>
                                    <p className="p-2 hover:bg-blue-100" onClick={() => updateSelectedCustomer(HOME_MAKERS)}>{HOME_MAKERS}</p>
                                </li>
                                <li>
                                    <p className="p-2 hover:bg-blue-100" onClick={() => updateSelectedCustomer(BUSINESS_OWNERS)}>{BUSINESS_OWNERS}</p>
                                </li>
                                <li>
                                    <p className="p-2 hover:bg-blue-100" onClick={() => updateSelectedCustomer(RETIREES)}>{RETIREES}</p>
                                </li>
                            </ul>
                        </div>
                    }
                </div>
            </div>

            <div className='mt-10 mb-10 justify-evenly flex w-full flex-row'>
                <div className="flex flex-row w-5/6 justify-evenly">
                    <div className='bg-purple-100 text-center p-4 m-2 rounded-md'>
                        <p>Total Market Share Capture</p>
                        <p className="font-bold text-lg">30%</p>
                    </div>
                    <div className='bg-purple-100 text-center p-4 m-2 rounded-md'>
                        <p>Total number of customers</p>
                        <p className="font-bold text-lg">123,456</p>
                    </div>
                    <div className='bg-purple-100 text-center p-4 m-2 rounded-md'>
                        <p>% share of segment among all customers</p>
                        <p className="font-bold text-lg">11%</p>
                    </div>
                </div>
            </div>

            <div className='mt-10 mb-10 justify-evenly flex w-full flex-row'>
                <div className="flex flex-row">
                    <div className='w-1/2'>
                        <p className="p-6">Breakdown by Gender </p>
                        <PieChart width={350} height={250}>
                            <Pie
                                dataKey="value"
                                isAnimationActive={false}
                                data={data_4}
                                cx="50%"
                                cy="50%"
                                outerRadius={80}
                                fill="#9cccf7"
                                label
                            />
                            <Tooltip />
                        </PieChart>
                    </div>
                    <div className='w-1/2'>
                        <p className="p-6">Breakdown by Age Group </p>
                        <PieChart width={350} height={250}>
                            <Pie
                                dataKey="value"
                                isAnimationActive={false}
                                data={data_5}
                                cx="50%"
                                cy="50%"
                                outerRadius={80}
                                fill="#9cccf7"
                                label
                            />
                            <Tooltip />
                        </PieChart>
                    </div>
                    <div className='w-1/2'>
                        <p className="p-6">Breakdown by Profession </p>
                        <PieChart width={350} height={250}>
                            <Pie
                                dataKey="value"
                                isAnimationActive={false}
                                data={data_6}
                                cx="50%"
                                cy="50%"
                                outerRadius={80}
                                fill="#9cccf7"
                                label
                            />
                            <Tooltip />
                        </PieChart>
                    </div>
                </div>
            </div>

            <div className='mt-10 mb-10 justify-evenly flex w-full flex-row'>
                <div className="flex flex-row">
                    <div className='w-1/2 mr-20'>
                        <p className="p-6">Competitive Products / Services Used</p>
                        <ResponsiveContainer width={500} height={300}>
                            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data_1}>
                                <PolarGrid />
                                <PolarAngleAxis dataKey="subject" />
                                <PolarRadiusAxis />
                                <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                            </RadarChart>
                        </ResponsiveContainer>
                    </div>
                    <div className='w-1/2'>
                        <p className="p-6">Complementary Products / Services Used</p>
                        <ResponsiveContainer width={500} height={300}>
                            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data_2}>
                                <PolarGrid />
                                <PolarAngleAxis dataKey="subject" />
                                <PolarRadiusAxis />
                                <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                            </RadarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>

            <div className='mt-10 mb-10 justify-evenly flex w-full flex-row'>
                <div className="flex">
                    <div className=''>
                        <p className="p-6">Areas of Interests</p>
                        <table className="border-collapse mt-4 mr-20 w-[500px]">
                            <tr>
                                <th className="border bg-gray-100 p-2">Query</th>
                                <th className="border bg-gray-100 p-2">Rank</th>
                                <th className="border bg-gray-100 p-2">Further Explanation</th>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 p-2 text-sm text-center">Personal Finance</td>
                                <td className="border border-gray-300 p-2 text-sm text-center">1</td>
                                <td className="border border-gray-300 p-2 text-sm text-center text-blue-400 underline">View</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 p-2 text-sm text-center">Fintech</td>
                                <td className="border border-gray-300 p-2 text-sm text-center">2</td>
                                <td className="border border-gray-300 p-2 text-sm text-center text-blue-400 underline">View</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 p-2 text-sm text-center">Wealth Management</td>
                                <td className="border border-gray-300 p-2 text-sm text-center">3</td>
                                <td className="border border-gray-300 p-2 text-sm text-center text-blue-400 underline">View</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 p-2 text-sm text-center">Investing</td>
                                <td className="border border-gray-300 p-2 text-sm text-center">4</td>
                                <td className="border border-gray-300 p-2 text-sm text-center text-blue-400 underline">View</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 p-2 text-sm text-center">Mobile Payments</td>
                                <td className="border border-gray-300 p-2 text-sm text-center">5</td>
                                <td className="border border-gray-300 p-2 text-sm text-center text-blue-400 underline">View</td>
                            </tr>
                        </table>
                    </div>
                    <div className='w-1/2'>
                        <p className="p-6">Common Queries</p>
                        <table className="border-collapse mt-4 w-[500px]">
                            <tr>
                                <th className="border bg-gray-100 w-1/6 p-2">Query</th>
                                <th className="border bg-gray-100 w-1/6 p-2">Rank</th>
                                <th className="border bg-gray-100 w-1/6 p-2">Further Explanation</th>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 p-2 text-sm text-center">Bank account setup</td>
                                <td className="border border-gray-300 p-2 text-sm text-center">1</td>
                                <td className="border border-gray-300 p-2 text-sm text-center text-blue-400 underline">View</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 p-2 text-sm text-center">E-wallet transfer</td>
                                <td className="border border-gray-300 p-2 text-sm text-center">2</td>
                                <td className="border border-gray-300 p-2 text-sm text-center text-blue-400 underline">View</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 p-2 text-sm text-center">Wealth management</td>
                                <td className="border border-gray-300 p-2 text-sm text-center">3</td>
                                <td className="border border-gray-300 p-2 text-sm text-center text-blue-400 underline">View</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 p-2 text-sm text-center">Check account balance</td>
                                <td className="border border-gray-300 p-2 text-sm text-center">4</td>
                                <td className="border border-gray-300 p-2 text-sm text-center text-blue-400 underline">View</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 p-2 text-sm text-center">Smart Investing</td>
                                <td className="border border-gray-300 p-2 text-sm text-center">5</td>
                                <td className="border border-gray-300 p-2 text-sm text-center text-blue-400 underline">View</td>
                            </tr>
                        </table>
                    </div>

                </div>
            </div>
        </Layout>
    );
};


export default CustomerInsights;
