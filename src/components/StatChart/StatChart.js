import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from 'recharts';
const StatChart = () => {
    const topics = useLoaderData();
    const { data } = topics;
    return (
        <div className='d-flex flex-direction-column justify-content-center align-item-center mb-5 p-5 bg-secondary'>
            <div className='bg-light rounded'>
                <BarChart width={500} height={300} data={data}>
                    <CartesianGrid strokeDasharray="0 7" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="total" fill="blue" />
                </BarChart>
            </div>
        </div>
    );
};
export default StatChart;


