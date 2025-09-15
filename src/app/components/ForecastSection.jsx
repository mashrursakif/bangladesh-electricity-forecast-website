'use client';

import { CartesianGrid, XAxis, YAxis, Tooltip, BarChart, Bar } from 'recharts';

export default function ForecastSection({ forecastData }) {
	return (
		<div className='w-[800px] max-w-[800px] mt-20'>
			<h2 className='text-teal-900 text-4xl font-semibold'>7 Day Forecast</h2>

			<p className='text-lg text-gray-800 mt-2'>
				Projected generation and loadshed for upcoming days
			</p>

			<div className='flex flex-wrap'>
				<div className='mt-8'>
					<h3 className='mb-6 text-2xl text-center text-blue-600'>
						Generation
					</h3>

					<div className='mt-8'>
						<BarChart width={400} height={320} data={forecastData}>
							<CartesianGrid />
							<XAxis dataKey='date' />
							<YAxis padding={{ top: 40 }} />
							<Tooltip />
							<Bar
								fill='#1E90FF'
								dataKey='prediction.generation'
								name='Generation'
							/>
						</BarChart>
					</div>
				</div>

				<div className='mt-8'>
					<h3 className='mb-6 text-2xl text-center text-red-600'>Loadshed</h3>

					<div className='mt-8'>
						<BarChart width={400} height={320} data={forecastData}>
							<CartesianGrid />
							<XAxis dataKey='date' />
							<YAxis />
							<Tooltip />
							<Bar
								fill='#EF4444'
								dataKey='prediction.loadshed'
								name='Loadshed'
							/>
						</BarChart>
					</div>
				</div>
			</div>

			<p className='mt-6'>
				The forecasts are updated daily at 2 A.M. GMT (UTC+0)
			</p>
		</div>
	);
}
