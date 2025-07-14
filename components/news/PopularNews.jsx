import React from 'react';
import Title from '../Title';
import SimpleDetailsNewsCard from './items/SimpleDetailsNewsCard';

const PopularNews = ({ type, news }) => {
  return (
    <div className='w-full pb-8 mt-5'>
      <div className='flex flex-col w-full gap-y-[14px]'>
        <Title title='Popular News' />
        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-3 sm:gap-3 lg:gap-x-3'>
          {news.map((item, i) => {
            if (i < 4) {
              return (
                <SimpleDetailsNewsCard
                  type={type}
                  news={item}
                  key={i}
                  height={200}
                />
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default PopularNews;
