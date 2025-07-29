import { forecastData } from '../../public/data';
import ForecastSection from './components/ForecastSection';
import TodaySection from './components/TodaySection';

export default function Home() {
  const todayData = forecastData[0];

  return (
    <div>
      <div className='bg-gradient flex justify-center items-center min-h-[400px]'>
        <div className='max-w-[600px]'>
          <h1 className='text-white text-5xl font-semibold'>
            Bangladesh Electricity Generation and Loadshed Forecast
          </h1>

          <p className='text-gray-100 text-xl mt-4'>
            Using a machine learning model trained on Bangladesh&apos;s
            electricity and weather data to forecast power generation and
            predict loadshed
          </p>
        </div>
      </div>

      <div className='flex flex-col items-center p-8'>
        <TodaySection data={todayData} />

        <ForecastSection />
      </div>
    </div>
  );
}
