import React from 'react';
import Image from 'next/image';
import logo from '@/assets/logo.png';
import Category from './Category';
import Link from 'next/link';
import { AiFillYoutube, AiOutlineTwitter } from 'react-icons/ai';
import { FaFacebookF } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='w-full'>
      <div className='bg-[#1e1919]'>
        <div className='px-4 md:px-8 py-10 w-full gap-12 grid lg:grid-cols-4 grid-cols-1'>
          <div className='w-full'>
            <div className='w-full flex flex-col gap-y-[14px]'>
              <Image
                className=''
                width={200}
                height={100}
                src={logo}
                alt='logo'
              />
              <h2 className='text-slate-300'>
                Welcome to News Portal, your trusted source for the latest news,
                insightful articles, and trending stories from around the world.
                Our mission is to keep you informed, inspired, and engaged with
                high-quality journalism and diverse perspectives.
              </h2>
              <h2 className='text-slate-300'>
                Stay connected with us for daily updates and in-depth coverage
                on topics that matter to you. We are committed to delivering
                accurate, timely, and relevant information to empower our
                readers and foster a well-informed community.
              </h2>
            </div>
          </div>
          <div className='w-full flex flex-col gap-y-[14px]'>
            <div className='text-xl font-bold text-white relative before:absolute before:w-[4px] before:bg-[#c80000] before:h-full before:-left-0 pl-3'>
              Gallery
            </div>
            <div className='grid grid-cols-3 gap-2'>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((img, i) => (
                <div key={i} className='w-full h-[85px] relative'>
                  <Image
                    className=''
                    layout='fill'
                    src={
                      'https://res.cloudinary.com/dpj4vsqbo/image/upload/v1696951679/news/btbfqrvjqhso6n842reb.jpg'
                    }
                    alt='images'
                  />
                </div>
              ))}
            </div>
          </div>
          <div>
            <Category categories={[]} titleStyle='text-white' />
          </div>
          <div className='w-full flex flex-col gap-y-[14px]'>
            <div
              className={`text-xl font-bold text-white relative before:absolute before:w-[4px] before:bg-[#c80000] before:h-full before:-left-0 pl-3`}>
              Recent News
            </div>
            <div className='grid grid-cols-1 gap-y-4 pt-3'>
              {[1, 2, 3, 4].map((r, i) => (
                <Link key={i} href={'#'} className='flex w-full'>
                  <div className='group relative overflow-hidden w-[90px] h-[75px]'>
                    <div className='w-[90px] h-[75px] block group-hover:scale-[1.1] transition-all duration-[1s]'>
                      <Image
                        className=''
                        layout='fill'
                        src={
                          'https://res.cloudinary.com/dpj4vsqbo/image/upload/v1696951679/news/btbfqrvjqhso6n842reb.jpg'
                        }
                        alt='images'
                      />
                      <div className='w-full h-full block absolute invisible group-hover:visible bg-white cursor-pointer opacity-5 transition-all duration-300'></div>
                    </div>
                  </div>
                  <div className='w-[calc(100%-90px)] pl-2'>
                    <div className='flex flex-col gap-y-1 '>
                      <h2 className='text-sm font-semibold text-white hover:text-[#c80000]'>
                        David Malan The consistent one among freaks
                      </h2>
                      <div className='flex gap-x-2 text-xs font-normal text-white'>
                        <span>October 6, 2023</span>
                        <span>Anamul Ismal</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className='bg-[#262323]'>
        <div className='px-4 md:px-8 py-5 flex flex-col md:flex-row gap-3 justify-between items-center'>
          <div className='flex gap-y-2 gap-x-2 text-gray-400 justify-start items-center'>
            <span>Copyright &copy; 2025</span>
            <Link href={'#'}>Learn with Project</Link>
          </div>
          <div className='flex gap-x-[1px]'>
            <a
              className='w-[37px] h-[35px] text-white flex justify-center items-center bg-[#ffffff2b]'
              href=''>
              <FaFacebookF />
            </a>
            <a
              className='w-[37px] h-[35px]  text-white  flex justify-center items-center bg-[#ffffff2b]'
              href=''>
              <AiOutlineTwitter />
            </a>
            <a
              className='w-[37px] h-[35px]  text-white flex justify-center items-center bg-[#ffffff2b]'
              href=''>
              <AiFillYoutube />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
