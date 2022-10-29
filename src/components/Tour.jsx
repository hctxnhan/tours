import { useState } from 'react';

const MAX_INFO_LENGTH = 200;

export default function Tour({ data, handleRemoveTour }) {
  const [readMore, setReadMore] = useState(true);

  return (
    <div className='bg-white shadow-lg w-[500px]'>
      <div>
        <img
          className='w-full h-[270px] object-cover object-center'
          src={data.image}
          alt=''
        />
      </div>
      <div className='p-4 pt-6 pb-8 flex flex-col gap-2'>
        <div className='flex gap-4 justify-between'>
          <p className='font-semibold text-xl uppercase text-slate-900'>
            {data.name}
          </p>
          <p className='text-red-500 font-bold'>${data.price}</p>
        </div>
        <p className='text-slate-700'>
          {readMore
            ? data.info.substring(0, MAX_INFO_LENGTH).trim().concat('... ')
            : data.info.trim().concat(' ')}
          <button
            onClick={() => setReadMore(!readMore)}
            className='font-semibold text-red-500'
          >
            {readMore ? 'Read more' : 'Show less'}
          </button>
        </p>
        <button
          onClick={() => handleRemoveTour(data.id)}
          className='uppercase border-2 text-red-500 border-red-500 py-1 px-3 rounded-md hover:bg-red-500 hover:text-white font-bold'
        >
          Not interested
        </button>
      </div>
    </div>
  );
}
