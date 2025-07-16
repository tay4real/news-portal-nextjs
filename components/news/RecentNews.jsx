import React from 'react';
import Title from '../Title';
import NewsCard from './items/NewsCard';
import { base_api_url } from '@/config/config';

const RecentNews = async () => {
  const res = await fetch(`${base_api_url}/api/recent/news`, {
    next: {
      revalidate: 1,
    },
  });

  const { news } = await res.json();
  return <div>RecentNews</div>;
};

export default RecentNews;
