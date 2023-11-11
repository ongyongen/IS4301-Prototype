import Layout from '../../Layout';
import { PageTitle } from '../../components/PageTitle/PageTitle';
import { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { BarChart, Bar, Rectangle, PieChart, Pie } from 'recharts';
import { months, data, data_1, data_2, data_3, data_4, data_5 } from './ChatbotInsights.config';


const ChatbotInsights = () => {

    const [selectedCustomer, setSelectedCustomer] = useState("Select Month")
    const [showDropdown, setShowDropdown] = useState(false)

    const updateSelectedCustomer = (customer) => {
        setSelectedCustomer(customer)
        setShowDropdown(false)

    }

    return (
        <Layout>
            <div className="flex flex-col flex-wrap justify-center items-center">
                <PageTitle title={"Chatbot Insights"} className={'text-center'} />
                <div className="flex flex-col items-center mt-4">
                    <p className='mb-4'>Selected Month :</p>
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
                                {months.map((month) => {
                                    return (
                                        <li key={month}>
                                            <p className="p-2 hover:bg-blue-100" onClick={() => updateSelectedCustomer(month)}>{month}</p>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    }
                </div>
            </div>

            <div className='mt-10 mb-10 justify-evenly flex w-full flex-row'>
                <div className="flex flex-row w-5/6 justify-evenly">
                    <div className='bg-purple-100 text-center p-4 m-2 rounded-md'>
                        <p>Total matches for Jan 2023</p>
                        <p className="font-bold text-lg">5095</p>
                    </div>
                    <div className='bg-purple-100 text-center p-4 m-2 rounded-md'>
                        <p>Average Match Success Rate</p>
                        <p className="font-bold text-lg">90%</p>
                    </div>
                    <div className='bg-purple-100 text-center p-4 m-2 rounded-md'>
                        <p>Average Satisfaction Score</p>
                        <p className="font-bold text-lg">4.5</p>
                    </div>
                </div>
            </div>

            <div className='mt-10 mb-10 justify-evenly flex w-full flex-row'>
                <div className="flex flex-row">
                    <div className='w-1/2'>
                        <p className="p-6">Total matches made for the current month</p>
                        <LineChart
                            width={1000}
                            height={300}
                            data={data}
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
                            <Line type="monotone" dataKey="matches" stroke="#ce9fed" />
                        </LineChart>
                    </div>
                </div>
            </div>
            <div className='mt-10 mb-10 justify-evenly flex w-full flex-row'>
                <div className="flex flex-row">
                    <div className='w-1/2'>
                        <p className="p-6">Match Success Rate (%)</p>
                        <LineChart
                            width={1000}
                            height={300}
                            data={data_1}
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
                            <Line type="monotone" dataKey="success_rate" stroke="#ce9fed" />
                        </LineChart>
                    </div>
                </div>
            </div>

            <div className='mt-10 mb-10 justify-evenly flex w-full flex-row'>
                <div className="flex flex-row">
                    <div className='w-1/2'>
                        <p className="p-6">Matching Statistics </p>
                        <PieChart width={400} height={250}>
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
                        <p className="p-6">Reasons for poor match </p>
                        <PieChart width={400} height={250}>
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
                </div>
            </div>

            <div className='mt-10 mb-10 justify-evenly flex w-full flex-row'>
                <div className="flex flex-row">
                    <div className='w-1/2'>
                        <p className="p-6">Customers who use the chatbot frequently</p>
                        <BarChart
                            width={500}
                            height={300}
                            data={data_2}
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
                            <Bar dataKey="usage_rate" fill="#82ca9d" activeBar={<Rectangle fill="gold" stroke="#82ca9d" />} />
                        </BarChart>
                    </div>
                    <div className='w-1/2'>
                        <p className="p-6">Customers who do not use the chatbot frequently </p>
                        <BarChart
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
                            <XAxis dataKey="name"
                                tick={{ fontSize: 12 }}
                                tickLine={false}
                                width={300}
                            />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="usage_rate" fill="#82ca9d" activeBar={<Rectangle fill="gold" stroke="#82ca9d" />} />
                        </BarChart>
                    </div>
                </div>
            </div>

           
        </Layout>
    );
};

export default ChatbotInsights;
