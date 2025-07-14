import React from 'react';
import Title from '../Title';
import SimpleDetailsNewsCard from './items/SimpleDetailsNewsCard';

const DetailsNews = ({ category, news }) => {
  return (
    <div className='w-full flex flex-col gap-[14px] pr-2 py-8'>
      <Title title={category} />
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-x-3 gap-y-3 lg:gap-x-3'>
        <SimpleDetailsNewsCard
          news={news[0]}
          type='details-news'
          height={300}
        />
        <SimpleDetailsNewsCard
          news={news[1]}
          type='details-news'
          height={300}
        />
      </div>
    </div>
  );
};

export default DetailsNews;
