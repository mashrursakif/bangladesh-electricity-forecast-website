'use client';

import {
	CartesianGrid,
	XAxis,
	YAxis,
	Tooltip,
	BarChart,
	Bar,
	ResponsiveContainer,
} from 'recharts';

export default function ForecastSection({ forecastData }) {
	return (
		<div className='w-full max-w-[800px] mt-20'>
			<div className='px-5'>
				<h2 className='text-teal-900 text-4xl font-semibold'>7 Day Forecast</h2>

				<p className='text-lg text-gray-800 mt-2'>
					Projected generation and loadshed for upcoming days
				</p>
			</div>

			<div className='flex flex-wrap'>
				<div className='mt-8 w-full max-w-[400px]'>
					<h3 className='mb-6 text-2xl text-center text-blue-600'>
						Generation
					</h3>

					<div className='mt-8'>
						<ResponsiveContainer width='95%' height={320}>
							<BarChart data={forecastData}>
								<CartesianGrid />
								<XAxis
									dataKey='date'
									tickFormatter={(dateStr) => {
										const weekday = new Date(dateStr).toLocaleDateString(
											'en-US',
											{ weekday: 'short' }
										);
										return weekday;
									}}
								/>
								<YAxis padding={{ top: 40 }} />
								<Tooltip />
								<Bar
									fill='#1E90FF'
									dataKey='prediction.generation'
									name='Generation'
								/>
							</BarChart>
						</ResponsiveContainer>
					</div>
				</div>

				<div className='mt-8 w-full max-w-[400px]'>
					<h3 className='mb-6 text-2xl text-center text-red-600'>Loadshed</h3>

					<div className='mt-8'>
						<ResponsiveContainer width='95%' height={320}>
							<BarChart data={forecastData}>
								<CartesianGrid />
								<XAxis
									dataKey='date'
									tickFormatter={(dateStr) => {
										const weekday = new Date(dateStr).toLocaleDateString(
											'en-US',
											{ weekday: 'short' }
										);
										return weekday;
									}}
								/>
								<YAxis />
								<Tooltip />
								<Bar
									fill='#EF4444'
									dataKey='prediction.loadshed'
									name='Loadshed'
								/>
							</BarChart>
						</ResponsiveContainer>
					</div>
				</div>
			</div>

			<p className='mt-6'>
				The forecasts are updated daily at 2 A.M. Bangladesh Standard Time
				(UTC+6)
			</p>
		</div>
	);
}
