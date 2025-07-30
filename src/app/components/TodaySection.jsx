const generationColorCodes = {
  Low: 'bg-red-500',
  Moderate: 'bg-yellow-500',
  High: 'bg-green-500',
};

const loadshedColorCodes = {
  Low: 'bg-green-500',
  Moderate: 'bg-yellow-500',
  Critical: 'bg-red-500',
};

export default function TodaySection({ data }) {
  let generationStatus = 'Moderate';
  if (data.generation_prediction < 4000) {
    generationStatus = 'Low';
  } else if (data.generation_prediction > 12000) {
    generationStatus = 'High';
  }

  let loadshedStatus = 'Moderate';
  if (data.loadshed_prediction < 300) {
    loadshedStatus = 'Low';
  } else if (data.loadshed_prediction > 4000) {
    loadshedStatus = 'Critical';
  }

  return (
    <div className='w-[800px] max-w-[800px] mt-8'>
      <h2 className='text-teal-900 text-4xl font-semibold'>Today's Forecast</h2>

      <p className='text-lg text-gray-800 mt-2'>
        Predicted electricity generation and loadshed for today
      </p>

      <div className='flex gap-6 mt-6'>
        <div className='p-4 bg-gray-100 rounded w-[240px] shadow-md'>
          <h3 className='text-2xl text-gray-900 font-medium'>Generation</h3>

          <p className='text-gray-900 text-xl font-bold'>
            {data.generation_prediction} MW
          </p>

          <div className='flex gap-2 items-center mt-2'>
            <p className='text-lg'>
              Status: <b className='font-semibold'>{generationStatus}</b>
            </p>

            <div
              className={`w-4 h-4 rounded-full ${generationColorCodes[generationStatus]}`}
            ></div>
          </div>
        </div>

        <div className='p-4 bg-gray-100 rounded w-[240px] shadow-md'>
          <h3 className='text-2xl text-gray-900 font-medium'>Loadshed</h3>

          <p className='text-gray-900 text-xl font-bold'>
            {data.loadshed_prediction} MW
          </p>

          <div className='flex gap-2 items-center mt-2'>
            <p className='text-lg'>
              Status: <b className='font-semibold'>{loadshedStatus}</b>
            </p>

            <div
              className={`w-4 h-4 rounded-full ${loadshedColorCodes[loadshedStatus]}`}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
