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

export const data_5 = [
    {
        name: '1 Nov',
        signups: 60,
        amt: 2400,
    },
    {
        name: '2 Nov',
        signups: 55,
        amt: 2210,
    },
    {
        name: '3 Nov',
        signups: 70,
        amt: 2290,
    },
    {
        name: '4 Nov',
        signups: 81,
        amt: 2000,
    },
    {
        name: '5 Nov',
        signups: 65,
        amt: 2181,
    },
    {
        name: '6 Nov',
        signups: 77,
        amt: 2500,
    },
    {
        name: '7 Nov',
        signups: 78,
        amt: 2100,
    },
    {
        name: '8 Nov',
        signups: 79,
        amt: 2100,
    },
    {
        name: '9 Nov',
        signups: 84,
        amt: 230,
    },
    {
        name: '10 Nov',
        signups: 90,
        amt: 234,
    },
    {
        name: '11 Nov',
        signups: 92,
        amt: 2100,
    },
    {
        name: '12 Nov',
        signups: 93,
        amt: 2100,
    },
    {
        name: '13 Nov',
        signups: 94,
        amt: 400,
    },
    {
        name: '14 Nov',
        signups: 95,
        amt: 300,
    },
    {
        name: '15 Nov',
        signups: 97,
        amt: 770,
    },
    {
        name: '16 Nov',
        signups: 95,
        amt: 238,
    },
    {
        name: '17 Nov',
        signups: 96,
        amt: 700,
    },
];

const data_3 = [
    {
        name: 'Jan 2023',
        signups: 100,
    },
    {
        name: 'Feb 2023',
        signups: 112,
    },
    {
        name: 'Mar 2023',
        signups: 134,
    },
    {
        name: 'Apr 2023',
        signups: 99,
    },
    {
        name: 'May 2023',
        signups: 345,
    },
    {
        name: 'Jun 2023',
        signups: 233,
    },
    {
        name: 'Jul 2023',
        signups: 210,
    },
    {
        name: 'Aug 2023',
        signups: 180,
    },
    {
        name: 'Sept 2023',
        signups: 188,
    },
    {
        name: 'Oct 2023',
        signups: 134,
    },
    {
        name: 'Nov 2023',
        signups: 566,
    },
];


const data_4 = [
    {
        name: 'Jan 2023',
        churn: 20,
    },
    {
        name: 'Feb 2023',
        churn: 23,
    },
    {
        name: 'Mar 2023',
        churn: 24,
    },
    {
        name: 'Apr 2023',
        churn: 22,
    },
    {
        name: 'May 2023',
        churn: 21,
    },
    {
        name: 'Jun 2023',
        churn: 15,
    },
    {
        name: 'Jul 2023',
        churn: 10,
    },
    {
        name: 'Aug 2023',
        churn: 8,
    },
    {
        name: 'Sept 2023',
        churn: 12,
    },
    {
        name: 'Oct 2023',
        churn: 9,
    },
    {
        name: 'Nov 2023',
        churn: 5,
    },
];


const data_1 = [
    {
        subject: 'Invest Program',
        A: 120,
        fullMark: 150,
    },
    {
        subject: 'Earn and Learn',
        A: 98,
        fullMark: 150,
    },
    {
        subject: 'Online Banking',
        A: 86,
        fullMark: 150,
    },
    {
        subject: 'Loans',
        A: 99,
        fullMark: 150,
    },
    {
        subject: 'Bank Account',
        A: 85,
        fullMark: 150,
    },
    {
        subject: 'Bank Card',
        A: 65,
        fullMark: 150,
    },
];

const data_2 = [
    {
        subject: 'Robo Advisor',
        A: 120,
        fullMark: 150,
    },
    {
        subject: 'Shopback',
        A: 98,
        fullMark: 150,
    },
    {
        subject: 'Stashaway',
        A: 86,
        fullMark: 150,
    },
    {
        subject: 'GoodBudget',
        A: 99,
        fullMark: 150,
    },
    {
        subject: 'PocketGuard',
        A: 85,
        fullMark: 150,
    },
    {
        subject: 'Mobills',
        A: 65,
        fullMark: 150,
    },
];

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
