import Breadcrumb from '@/components/Breadcrumb';
import Category from '@/components/Category';
import Footer from '@/components/Footer';
import NewsCard from '@/components/news/items/NewsCard';
import SimpleDetailsNewsCard from '@/components/news/items/SimpleDetailsNewsCard';
import PopularNews from '@/components/news/PopularNews';
import Search from '@/components/Search';
import Title from '@/components/Title';
import React from 'react';

const Details = async ({ params }) => {
  const { slug } = await params;
  return (
    <div>
      <div className='bg-white shadow py-4'>
        <div className='px-4 md:px-8 w-full'>
          <Breadcrumb one={'category'} two={slug} />
        </div>
      </div>
      <div className='bg-slate-200 w-full'>
        <div className='px-4 md:px-8 w-full py-8'>
          <div className='flex flex-wrap'>
            <div className='w-full xl:w-8/12'>
              <div className='w-full pr-0 xl:pr-4'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
                  {/* {[1, 2, 3, 4, 5, 6].map((news, i) => (
                    <SimpleDetailsNewsCard
                      news={{}}
                      key={i}
                      type={'details-news'}
                      height={200}
                    />
                  ))} */}
                </div>
              </div>
            </div>
            <div className='w-full xl:w-4/12'>
              <div className='w-full pr-0 xl:pl-4'>
                <div className='flex flex-col gap-y-8'>
                  <Search />
                  <div className='w-full flex flex-col gap-y-[14px] bg-white pt-4'>
                    <div className='pl-4'>
                      <Title title='Recent News' />
                    </div>
                    <div className='grid grid-cols-1 gap-y-3'>
                      {[1, 2, 3, 4, 5, 6].map((news, i) => (
                        <NewsCard key={i} />
                      ))}
                    </div>
                  </div>
                  <div className='p-4 bg-white'>
                    <Category titleStyle={'text-gray-700 font-bold'} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='pt-8'>
            {/* <PopularNews type={'Popular News'} /> */}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Details;
