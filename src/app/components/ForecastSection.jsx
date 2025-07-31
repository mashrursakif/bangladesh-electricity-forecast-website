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
    <div className='w-[800px] max-w-[800px] mt-20'>
      <h2 className='text-teal-900 text-4xl font-semibold'>5 Day Forecast</h2>

      <p className='text-lg text-gray-800 mt-2'>
        Projected generation and loadshed for upcoming days
      </p>

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

      <p className='mt-6 '>
        The forecasts are updated daily at 2 A.M. GMT (UTC+0)
      </p>
    </div>
  );
}
