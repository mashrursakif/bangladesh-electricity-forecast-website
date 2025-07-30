'use client';

import Link from 'next/link';
import { data } from '../../../public/data';
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from 'recharts';
import { useState } from 'react';
import RangeDropdown from './RangeDropdown';

export default function HistoricalSection() {
  const [displayData, setDisplayData] = useState(data.slice(-30));

  const handleChange = (e) => {
    const range = parseInt(e.target.value);
    const rangedData = range == -1 ? data : data.slice(-range);
    setDisplayData(rangedData);
  };

  return (
    <div className='w-[800px] max-w-[800px] mt-20'>
      <h2 className='text-teal-900 text-4xl font-semibold'>
        Historical Performance
      </h2>

      <p className='text-lg text-gray-800 mt-2'>
        Compare accuracy of the model with real-world data from{' '}
        <Link
          className='text-blue-900 font-semibold underline'
          href='https://erp.powergrid.gov.bd/w/generations/view_generations'
          target='_blank'
          rel='noopener noreferrer'
        >
          PGCB
        </Link>
      </p>

      <div className='mt-3'>
        <label className='text-lg'>View data for: </label>
        <RangeDropdown onChange={handleChange} />
      </div>

      <div>
        <div className='mt-8'>
          <h3 className='mb-6 text-2xl'>Generation</h3>

          <LineChart width={800} height={400} data={displayData}>
            <CartesianGrid />
            <Line
              stroke='blue'
              strokeWidth={2}
              dataKey='generation_prediction'
              name='Prediction'
            />
            <Line
              stroke='green'
              strokeWidth={2}
              dataKey='generation_label'
              name='Observed'
            />
            <XAxis dataKey='date' />
            <YAxis />
            <Legend />
            <Tooltip />
          </LineChart>
        </div>

        <div className='mt-8'>
          <h3 className='mb-6 text-2xl'>Loadshed</h3>

          <LineChart width={800} height={400} data={displayData}>
            <CartesianGrid />
            <Line
              stroke='red'
              strokeWidth={2}
              dataKey='loadshed_prediction'
              name='Prediction'
            />
            <Line
              stroke='purple'
              strokeWidth={2}
              dataKey='loadshed_label'
              name='Observed'
            />
            <XAxis dataKey='date' />
            <YAxis />
            <Legend />
            <Tooltip />
          </LineChart>
        </div>
      </div>
    </div>
  );
}
