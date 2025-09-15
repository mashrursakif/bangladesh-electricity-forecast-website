import About from './components/About';
import ForecastSection from './components/ForecastSection';
import HistoricalSection from './components/HistoricalSection';
import MethodologySection from './components/MethodologySection';
import TodaySection from './components/TodaySection';

export default async function Home() {
	// const todayData = forecastData[0];

	const getPredictions = await fetch(
		'https://raw.githubusercontent.com/mashrursakif/bangladesh-electricity-forecast-pipeline/main/predictions.json',
		{ cache: 'no-store' }
	);

	const predictions = await getPredictions.json();

	const forecast = predictions['forecast'];
	const history = predictions['history'];
	const todayData = forecast[0];

	return (
		<div>
			<div className='bg-gradient flex justify-center items-center min-h-[400px] p-8'>
				<div className='max-w-[600px]'>
					<h1 className='text-white text-4xl sm:text-5xl font-semibold'>
						Bangladesh Electricity Generation and Loadshed Forecast
					</h1>

					<p className='text-gray-100 text-xl mt-4'>
						Using a machine learning model trained on Bangladesh&apos;s
						electricity and weather data to forecast power generation and
						predict loadshed
					</p>
				</div>
			</div>

			<div className='flex flex-col items-center pt-8 pb-32'>
				<TodaySection data={todayData} />

				<ForecastSection forecastData={forecast} />

				<HistoricalSection historyData={history} />

				<MethodologySection />

				<About />
			</div>
		</div>
	);
}
