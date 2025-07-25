'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AiOutlineSearch } from 'react-icons/ai';
import { IoClose } from 'react-icons/io5';
import { BsList } from 'react-icons/bs';
import { base_api_url } from '@/config/config';

const Header_Category = () => {
  const path = usePathname();

  const [categories, setCategories] = useState([]);

  const get_categories = async () => {
    try {
      const res = await fetch(`${base_api_url}/api/category/all`);

      const data = await res.json();
      setCategories(data.categories);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    get_categories();
  }, []);

  const [show, setShow] = useState(false);
  const [cate_show, setCateShow] = useState(false);

  return (
    <div className='w-full'>
      <div className='bg-[#c80000] w-full text-white uppercase font-semibold relative'>
        <div className='px-8 flex justify-between items-center relative h-[48px]'>
          {/* Mobile Menu Button */}
          <div
            onClick={() => setCateShow(!cate_show)}
            className={`text-3xl flex lg:hidden font-bold h-full w-[48px] cursor-pointer justify-center items-center ${
              cate_show ? 'bg-[#00000026]' : ''
            } hover:bg-[#00000026]`}>
            <BsList />
          </div>

          {/* Main Links (Desktop) */}
          <div className='flex-wrap hidden lg:flex'>
            <Link
              className={`px-6 font-medium py-[13px] ${
                path === '/' ? 'bg-[#00000026]' : ''
              }`}
              href='/'>
              Home
            </Link>
            {categories.length > 0 &&
              categories.map((c, i) => (
                <Link
                  key={i}
                  className={`px-6 font-medium py-[13px] ${
                    path === `/news/category/${c.category}`
                      ? 'bg-[#00000026]'
                      : ''
                  }`}
                  href={`/news/category/${c.category}`}>
                  {c.category}
                </Link>
              ))}
          </div>

          {/* Search Button */}
          <div className='h-full w-[48px]'>
            <div
              onClick={() => setShow(!show)}
              className={`text-xl ${
                show ? 'bg-[#00000026]' : ''
              } font-bold h-full w-full cursor-pointer justify-center items-center flex hover:bg-[#00000026]`}>
              {show ? <IoClose /> : <AiOutlineSearch />}
            </div>
            <div
              className={`absolute lg:block transition-all text-slate-700 z-20 shadow-lg lg:right-10 top-[50px] w-full lg:w-[300px] right-0 ${
                show ? 'visible' : 'invisible'
              }`}>
              <div className='p-3 bg-white'>
                <div className='flex'>
                  <div className='w-[calc(100%-45px)] h-[40px]'>
                    <input
                      type='text'
                      placeholder='search'
                      className='h-full w-full p-2 border border-slate-300 outline-none bg-slate-100'
                      spellCheck={false}
                    />
                  </div>
                  <div className='w-[45px] hover:bg-red-700 cursor-pointer h-[40px] flex justify-center items-center bg-red-600 text-white text-xl'>
                    <AiOutlineSearch />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Links */}
      {cate_show && (
        <div className='flex flex-wrap lg:hidden py-2 px-[30px]'>
          <Link
            className={`px-4 font-medium py-[5px] ${
              path === '/' ? 'bg-[#00000026]' : ''
            }`}
            href='/'>
            Home
          </Link>
          {categories.length > 0 &&
            categories.map((c, i) => (
              <Link
                key={i}
                className={`px-4 font-medium py-[5px] ${
                  path === `/news/category/${c.category}`
                    ? 'bg-[#00000026]'
                    : ''
                }`}
                href={`/news/category/${c.category}`}>
                {c.category}
              </Link>
            ))}
        </div>
      )}
    </div>
  );
};

export default Header_Category;
