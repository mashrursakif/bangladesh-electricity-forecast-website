'use client';

import { forecastData } from '../../../public/data';
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from 'recharts';

export default function ForecastSection() {
  return (
    <div className='w-[800px] max-w-[800px] mt-12'>
      <h2 className='text-teal-900 text-4xl font-bold'>5 Day Forecast</h2>

      <div className='mt-8'>
        <LineChart width={800} height={400} data={forecastData}>
          <CartesianGrid />
          <Line
            stroke='blue'
            strokeWidth={2}
            dataKey='generation_prediction'
            name='Generation'
          />
          <Line
            stroke='red'
            strokeWidth={2}
            dataKey='loadshed_prediction'
            name='Loadshed'
          />
          <XAxis dataKey='date' />
          <YAxis />
          <Legend />
          <Tooltip />
        </LineChart>
      </div>
    </div>
  );
}
