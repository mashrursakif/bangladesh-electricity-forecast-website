import Link from 'next/link';

export default function MethodologySection() {
  return (
    <div className='w-[800px] max-w-[800px] mt-28'>
      <h2 className='text-teal-900 text-3xl font-semibold'>Modelling Method</h2>

      <div className='mt-4'>
        <h3 className='text-gray-800 text-lg font-bold'>Model used:</h3>
        <p className='text-gray-800 text-lg'>
          I've used <b>LightGBM</b> for this task, since it performs quite well
          even when trained on limited amounts of data. Finding publicly
          available data for this task was rather difficult, and using LGBM
          allowed for the model to be properly trained without risking
          overfitting
        </p>
      </div>

      <div className='mt-4'>
        <h3 className='text-gray-800 text-lg font-bold'>Objective:</h3>
        <p className='text-gray-800 text-lg'>
          Predict daily electricity generation and loadshed in Bangladesh based
          on weather data
        </p>
      </div>

      <div className='mt-4'>
        <h3 className='text-gray-800 text-lg font-bold'>Dataset:</h3>
        <p className='text-gray-800 text-lg'>
          I've used aggregated PGCB data, combined with weather data, to create
          the full training dataset. I created an 80-20 time-based split for the
          training and evaluation sets. Then trained two separate LGBM models,
          one for forecasting electricity generation, and one for predicting
          loadshed
        </p>
      </div>

      <div className='mt-4'>
        <h3 className='text-gray-800 text-lg font-bold'>Data sources used:</h3>

        <ul className='list-disc list-inside'>
          <li>
            <Link
              href='/'
              className='text-blue-900 text-lg underline'
              target='_blank'
              rel='noopener noreferrer'
            >
              Power Grid Company Bangladesh (PGCB)
            </Link>
          </li>

          <li>
            <Link
              href='https://data.mendeley.com/datasets/tbrhznpwg9/1'
              className='text-blue-900 text-lg underline'
              target='_blank'
              rel='noopener noreferrer'
            >
              Mendeley High Volume Real-World Weather Data of Bangladesh
            </Link>
          </li>

          <li className='text-gray-800 text-lg'>Open Weather Api</li>
        </ul>
      </div>

      <div className='mt-5'>
        <p className='text-lg text-gray-800 font-medium'>
          Full project and model training data can be found on my{' '}
          <Link
            href='/'
            className='text-blue-900 text-lg underline'
            target='_blank'
            rel='noopener noreferrer'
          >
            GitHub
          </Link>
        </p>
      </div>
    </div>
  );
}
