import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Area, Bar, BarChart, CartesianGrid, ComposedChart, Legend, Line, LineChart, Pie, PieChart, Tooltip, XAxis, YAxis } from 'recharts';
import './Statistics.css'

const Statistics = () => {
  const lodeData = useLoaderData();
  const data3 = lodeData.data;
  const data01 = [
    {
      "name": "Group A",
      "value": 400
    },
    {
      "name": "Group B",
      "value": 300
    },
    {
      "name": "Group C",
      "value": 300
    },
    {
      "name": "Group D",
      "value": 200
    },
    {
      "name": "Group E",
      "value": 278
    },
    {
      "name": "Group F",
      "value": 189
    }
  ];
  const data02 = [
    {
      "name": "Group A",
      "value": 2400
    },
    {
      "name": "Group B",
      "value": 4567
    },
    {
      "name": "Group C",
      "value": 1398
    },
    {
      "name": "Group D",
      "value": 9800
    },
    {
      "name": "Group E",
      "value": 3908
    },
    {
      "name": "Group F",
      "value": 4800
    },
    {
      "name": "Group G",
      "value": 5800
    },
    {
      "name": "Group H",
      "value": 3800
    },
    {
      "name": "Group I",
      "value": 9800
    },
    {
      "name": "Group J",
      "value": 6800
    },
    {
      "name": "Group K",
      "value": 2800
    },

  ];
  return (
    <div>
        <h2 className="text-center mt-3">Explore My Simple Chart Disney</h2>
      <div className='piechart-container'>
        <div className='pieChart'>
          <PieChart className='mx-auto' width={730} height={450}>
            <Pie data={data3} dataKey="total" nameKey="name" cx="50%" cy="50%" innerRadius={120} outerRadius={150} fill="#82ca9d" label />
            <Tooltip />
          </PieChart>
        </div>
        <div className='pieChart'>
          <PieChart className='mx-auto' width={730} height={450}>
            <Pie data={data3} dataKey="total" nameKey="name" cx="50%" cy="50%" outerRadius={120} fill="#8884d8" label />
            <Tooltip />
          </PieChart>
        </div>
        <div className='pieChart'>
          <PieChart className='mx-auto' width={730} height={450}>
            <Pie data={data01} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
            <Pie data={data02} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={90} fill="#82ca9d" label />
          </PieChart>
        </div>
        <div className="pieChart">
          <BarChart width={830} height={550} data={data01}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="value" fill="#82ca9d" />
          </BarChart>
        </div>
        <div className="pieChart">
          <LineChart width={830} height={550} data={data02}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="value" stroke="#8884d8" />
          </LineChart>
        </div>
        <div className="pieChart">
          <ComposedChart width={830} height={550} data={data02}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <CartesianGrid stroke="#f5f5f5" />
            <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" />
            <Bar dataKey="value" barSize={20} fill="#413ea0" />
            <Line type="monotone" dataKey="value" stroke="#ff7300" />
          </ComposedChart>
        </div>
      </div>
    </div>
  );
};

export default Statistics;