import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const SimpleNewsCard = ({ item, type }) => {
  return (
    <div className='group relative '>
      <div className='overflow-hidden'>
        <div
          className={`${
            type ? 'h-[270px] sm:h-[470px]' : 'h-[228px]'
          } w-full group-hover:scale-[1.1] transition-all duration-[1s]`}>
          {item?.image ? (
            <Image layout='fill' src={item.image} alt='images' />
          ) : (
            <div className='bg-gray-200 w-full h-full flex items-center justify-center text-gray-500'>
              No Image Available
            </div>
          )}
        </div>
        <div className='w-full h-full block absolute invisible group-hover:visible bg-white cursor-pointer opacity-5 transition-all duration-300'></div>
        <div className='left-5 absolute bottom-4 flex justify-start items-start flex-col text-white font-semibold gap-y-2'>
          <div className='px-[6px] py-[2px] rounded-sm text-[13px] bg-[#c80000]'>
            {item?.category && item.category}
          </div>
          <Link
            href={item?.slug ? `/news/${item.slug}` : ''}
            className='text-xl'>
            {item?.title && item.title}
          </Link>
          <div className='flex gap-x-2 text-sm'>
            <span>{item?.date && item.date}</span>
            <span>{item?.writerName && item.writerName}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimpleNewsCard;
