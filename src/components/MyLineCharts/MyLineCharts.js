import React from 'react';
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Legend, Line, LineChart, Scatter, ScatterChart, Tooltip, XAxis, YAxis } from 'recharts';
import './MyLineCharts.css';

const MyLineCharts = () => {
    const data = [
        {
            "month": "Mar",
            "investment": 100000,
            "sell": 241,
            "revenue": 10401
        },
        {
            "month": "Apr",
            "investment": 200000,
            "sell": 423,
            "revenue": 24500
        },
        {
            "month": "May",
            "investment": 500000,
            "sell": 726,
            "revenue": 67010
        },
        {
            "month": "Jun",
            "investment": 500000,
            "sell": 529,
            "revenue": 40405
        },
        {
            "month": "Jul",
            "investment": 600000,
            "sell": 601,
            "revenue": 50900
        },
        {
            "month": "Aug",
            "investment": 700000,
            "sell": 670,
            "revenue": 61000
        }
    ]
    return (
        <div>
            <div className='chart'>
                <div>
                    <LineChart width={550} height={500} data={data}>
                        <Line dataKey={'revenue'} stroke="#8b2252"></Line>
                        <Line dataKey={'investment'} stroke="#22773f"></Line>
                        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                        <XAxis dataKey={'month'}></XAxis>
                        <YAxis></YAxis>
                        <Tooltip></Tooltip>
                    </LineChart>
                </div>
                <div>
                    <AreaChart width={550} height={500} data={data}
                        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                        <defs>
                            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#8b2252" stopOpacity={0.8} />
                                <stop offset="95%" stopColor="##8b2252" stopOpacity={0} />
                            </linearGradient>
                            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                                <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                            </linearGradient>
                        </defs>
                        <XAxis dataKey="month" />
                        <YAxis />
                        <CartesianGrid strokeDasharray="3 3" />
                        <Tooltip />
                        <Area type="monotone" dataKey="revenue" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
                        <Area type="monotone" dataKey="investment" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
                    </AreaChart>
                </div>
            </div>
            <div className='chart'>
                <div>
                    <BarChart width={550} height={500} data={data}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="revenue" fill="#8884d8" />
                        <Bar dataKey="investment" fill="#82ca9d" />
                    </BarChart>
                </div>
                <div>
                    <ScatterChart
                        width={550}
                        height={500}
                        margin={{
                            top: 20,
                            right: 20,
                            bottom: 20,
                            left: 20,
                        }}
                    >
                        <CartesianGrid />
                        <XAxis type="number" dataKey="investment" name="taka" unit="taka" />
                        <YAxis type="number" dataKey="revenue" name="taka" unit="taka" />
                        <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                        <Scatter name="An Organaization" data={data} fill="#8884d8" />
                    </ScatterChart>
                </div>
            </div>

        </div>
    );
};

export default MyLineCharts;