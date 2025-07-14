import React from 'react';
import LoadingSpinner from 'react-spinners-components';
import Marquee from 'react-fast-marquee';
import Link from 'next/link';

const HeadLines = ({ news }) => {
  return (
    <div className='bg-white shadow flex flex-wrap '>
      <div className='flex md:w-[170px] w-full bg-[#dddddd] relative after:absolute after:bg-[#dddddd] after:w-[20px] after:left-[160px] after:skew-x-[20deg] after:top-0 after:bottom-0 after:z-30'>
        <div className='md:pl-8 pl-4 w-full py-2 flex justify-start items-center gap-x-1'>
          <span>
            <LoadingSpinner
              type='Ripple'
              colors={['#800000', '#c80000']}
              size={'30px'}
            />
          </span>
          <h2 className='text-[#333333] font-semibold text-lg'>Headlines</h2>
        </div>
      </div>
      <div className='flex md:w-[calc(100%-170px)] w-full'>
        <div className='flex w-full justify-start items-center'>
          <Marquee>
            {Object.keys(news).length > 0 &&
              Object.keys(news).map((c, i) => (
                <div
                  className='py-3 block font-semibold hover:text-[#c80000] pr-12 text-sm'
                  key={i}>
                  {news[c].length > 0 &&
                    news[c].map((n, j) => (
                      <Link key={n._id} href={`/news/${n.slug}`}>
                        {n.title}
                      </Link>
                    ))}
                </div>
              ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default HeadLines;
