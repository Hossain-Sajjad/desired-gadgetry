import React, { useEffect, useState } from 'react';
import { LineChart, Line, YAxis, XAxis, BarChart, Tooltip, Legend, CartesianGrid, Bar, AreaChart, Area, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';
import './Dashboard.css'
const Dashboard = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setData(data));
    }, []);

    return (
        <div>
            <h3 className='pt-4 text-3xl'>Charts :</h3>
            <div className='dashboard-container'>
                <div>
                    <LineChart width={600} height={600} data={data}>
                        <Line dataKey={'investment'} />
                        <Line dataKey={'revenue'} />
                        <Line dataKey={'sell'} />
                        <XAxis dataKey="month"></XAxis>
                        <YAxis></YAxis>
                        <Legend width={100} wrapperStyle={{ top: 40, right: 20, backgroundColor: '#f5f5f5', border: '1px solid #d5d5d5', borderRadius: 3, lineHeight: '40px' }} />
                        <Tooltip wrapperStyle={{ width: 100, backgroundColor: '#ccc' }} />
                    </LineChart>
                </div>
                <div>
                    <BarChart width={600} height={600} data={data}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" stroke="#8884d8" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey={'investment'} fill="#8884d8" />
                        <Bar dataKey={'revenue'} fill="#82ca9d" />
                        <Bar dataKey={'sell'} fill="#326126" />
                    </BarChart>
                </div>
                <div>
                    <AreaChart width={600} height={600} data={data}
                        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                        <defs>
                            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                                <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                            </linearGradient>
                            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                                <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                            </linearGradient>
                            <linearGradient id="colorZv" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#326126" stopOpacity={0.8} />
                                <stop offset="95%" stopColor="#326126" stopOpacity={0} />
                            </linearGradient>
                        </defs>
                        <XAxis dataKey="month" />
                        <YAxis />
                        <CartesianGrid strokeDasharray="3 3" />
                        <Tooltip />
                        <Area type="monotone" dataKey={'investment'} stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
                        <Area type="monotone" dataKey={'revenue'} stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
                        <Area type="monotone" dataKey={'sell'} stroke="#326126" fillOpacity={1} fill="url(#colorZv)" />
                    </AreaChart>
                </div>
                <div>
                    <RadarChart outerRadius={200} width={600} height={600} data={data}>
                        <PolarGrid />
                        <PolarAngleAxis dataKey="month" />
                        <PolarRadiusAxis angle={30} domain={[0, 150]} />
                        <Radar name='investment' dataKey={'investment'} stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                        <Radar name='revenue' dataKey={'revenue'} stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
                        <Radar name='sell' dataKey={'sell'} stroke="#326126" fill="#326126" fillOpacity={0.6} />
                        <Legend />
                    </RadarChart>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;