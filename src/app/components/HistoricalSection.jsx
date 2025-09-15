'use client';

import Link from 'next/link';
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

export default function HistoricalSection({ historyData }) {
	const [displayData, setDisplayData] = useState(historyData.slice(-30));
	// const [showForecast, setShowForecast] = useState(false);

	const handleChange = (e) => {
		const range = parseInt(e.target.value);
		const rangedData = range == -1 ? historyData : historyData.slice(-range);
		setDisplayData(rangedData);
	};

	// const handleCheck = (e) => {
	// 	setShowForecastCheck(e.target.checked);

	// 	const fullData = showForecast
	// 		? [...displayData, ...forecastData]
	// 		: displayData;
	// 	setDisplayData(fullData);
	// };

	return (
		<div className='w-full max-w-[800px] mt-20'>
			<div className='px-5'>
				<h2 className='text-teal-900 text-4xl font-semibold'>
					Historical Performance
				</h2>

				<p className='text-lg text-gray-900 mt-2'>
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

				{/* <div className='mt-3 flex gap-2 justify-start items-center text-lg'>
				<input
					id='forecast-checkbox'
					type='checkbox'
					checked={showForecast}
					onChange={(e) => {
						setShowForecast(e.target.checked);
					}}
					className='accent-teal-700 w-[20px] h-[20px]'
				/>
				<label htmlFor='forecast-checkbox'>Show Forecast</label>
			</div> */}
			</div>

			<div>
				<div className='mt-8'>
					<h3 className='mb-6 text-2xl px-6'>Generation</h3>

					<div className='overflow-x-scroll'>
						<LineChart width={800} height={400} data={displayData}>
							<CartesianGrid />
							<Line
								stroke='blue'
								strokeWidth={2}
								dataKey='prediction.generation'
								name='Prediction'
							/>
							<Line
								stroke='green'
								strokeWidth={2}
								dataKey='label.generation'
								name='Observed'
							/>

							<XAxis dataKey='date' />
							<YAxis />
							<Legend />
							<Tooltip />
						</LineChart>
					</div>
				</div>

				<div className='mt-8'>
					<h3 className='mb-6 text-2xl px-6'>Loadshed</h3>

					<div className='overflow-x-scroll'>
						<LineChart width={800} height={400} data={displayData}>
							<CartesianGrid />
							<Line
								stroke='purple'
								strokeWidth={2}
								dataKey='prediction.loadshed'
								name='Prediction'
							/>
							<Line
								stroke='red'
								strokeWidth={2}
								dataKey='label.loadshed'
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
		</div>
	);
}
