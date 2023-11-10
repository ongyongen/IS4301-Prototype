import Layout from '../../Layout';
import { PageTitle } from '../../components/PageTitle/PageTitle';
import { useState } from 'react';

const UNI_STUDENTS = "University Students"
const WORKING_ADULTS = "Working Adults"
const HOME_MAKERS = "Home Makers"
const RETIREES = "Retirees"
const BUSINESS_OWNERS = "Business Owners"

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import { BarChart, Bar, Rectangle } from 'recharts';
import { data_1, data_2, data_3, data_4, data_5 } from './CustomerInsights.config';

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
                <div className="flex flex-row">
                    <div className='w-1/2 mr-20'>
                        <p className="p-6 text-xl">Most Common Query Categories</p>
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
                        <p className="p-6 text-xl">Complementary Products / Services Used</p>
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
                <div className="flex flex-row">
                    <div className='w-1/2'>
                        <p className="p-6">New Signups</p>
                        <LineChart
                            width={500}
                            height={300}
                            data={data_3}
                            margin={{
                                top: 5,
                                right: 30,
                                left: 20,
                                bottom: 5,
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Line type="monotone" dataKey="signups" stroke="#82ca9d" />
                        </LineChart>
                    </div>
                    <div className='w-1/2'>
                        <p className="p-6">Customer Churn Rate</p>
                        <LineChart
                            width={500}
                            height={300}
                            data={data_4}
                            margin={{
                                top: 5,
                                right: 30,
                                left: 20,
                                bottom: 5,
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Line type="monotone" dataKey="churn" stroke="#82ca9d" />
                        </LineChart>
                    </div>
                </div>
            </div>

            <div className='mt-10 mb-10 justify-evenly flex w-full flex-row'>
                <div className="flex flex-row">
                    <div className='w-1/2'>
                        <p className="p-6">Number of signups made on chatbot</p>
                        <BarChart
                            width={1000}
                            height={300}
                            data={data_5}
                            margin={{
                                top: 5,
                                right: 30,
                                left: 20,
                                bottom: 5,
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name"
                                tick={{ fontSize: 12 }}
                                tickLine={false}
                                width={300}
                            />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="signups" fill="#82ca9d" activeBar={<Rectangle fill="gold" stroke="purple" />} />
                        </BarChart>
                    </div>
                </div>
            </div>
        </Layout>
    );
};


export default CustomerInsights;
