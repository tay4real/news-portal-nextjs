import Footer from '@/components/Footer';
import HeadLines from '@/components/HeadLines';
import DetailsNews from '@/components/news/DetailsNews';
import DetailsNewsCol from '@/components/news/DetailsNewsCol';
import DetailsNewsRow from '@/components/news/DetailsNewsRow';
import NewsCard from '@/components/news/items/NewsCard';
import SimpleNewsCard from '@/components/news/items/SimpleNewsCard';
import LatestNews from '@/components/news/LatestNews';
import PopularNews from '@/components/news/PopularNews';
import Title from '@/components/Title';
import { base_api_url } from '@/config/config';

const Home = async () => {
  const news_data = await fetch(`${base_api_url}/api/all/news`, {
    next: {
      revalidate: 5,
    },
  });
  const { news } = await news_data?.json();

  return (
    <div>
      <main>
        <HeadLines news={news} />
        <div className='bg-slate-100'>
          <div className='px-4 md:px-8 py-8'>
            <div className='flex flex-wrap'>
              <div className='w-full lg:w-6/12'>
                <LatestNews news={news['Education']} />
              </div>
              <div className='w-full lg:w-6/12 mt-5 lg:mt-0'>
                <div className='flex w-full flex-col gap-y-[14px] pl-0 lg:pl-2'>
                  <Title title='Technology' />
                  <div className='grid grid-cols-1 sm:grid-cols-2 gap-[14px]'>
                    {news['Technology'].map((item, i) => {
                      if (i < 4) {
                        return <SimpleNewsCard key={i} item={item} />;
                      }
                    })}
                  </div>
                </div>
              </div>
            </div>
            <PopularNews type='Popular news' news={news['Travel']} />
            {/* First Section */}
            <div className='w-full'>
              <div className='flex flex-wrap'>
                <div className='w-full lg:w-8/12'>
                  <DetailsNewsRow
                    news={news['Sports']}
                    category='Sports'
                    type='details-news'
                  />
                  <DetailsNews category='Health' news={news['Health']} />
                </div>
                <div className='w-full lg:w-4/12'>
                  <DetailsNewsCol
                    news={news['Education']}
                    category='Education'
                  />
                </div>
              </div>
            </div>

            {/* Second Section */}
            <div className='w-full'>
              <div className='flex flex-wrap'>
                <div className='w-full lg:w-4/12'>
                  <div className='pr-2'>
                    <DetailsNewsCol
                      news={news['Education']}
                      category='Politics'
                    />
                  </div>
                </div>
                <div className='w-full lg:w-8/12'>
                  <div className='pl-2'>
                    <DetailsNewsRow
                      news={news['Travel']}
                      category='Travel'
                      type='details-news'
                    />
                    <DetailsNews
                      news={news['Travel']}
                      category={'International'}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Third Section */}
            <div className='w-full'>
              <div className='flex flex-wrap'>
                <div className='w-full lg:w-8/12'>
                  <div>
                    <DetailsNewsRow
                      news={news['Technology']}
                      category='Technology'
                      type='details-news'
                    />
                  </div>
                </div>
                <div className='w-full lg:w-4/12'>
                  <div className='pl-2'>
                    <Title title='Recent News' />
                    <div className='grid grid-cols-1 gap-y-[14px] mt-4'>
                      {news['Sports']?.map((item, i) => {
                        if (i < 4) {
                          return <NewsCard item={item} key={i} />;
                        }
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
