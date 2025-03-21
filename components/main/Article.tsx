import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { allNews, News } from '../../.contentlayer/generated'
import { pick } from '@contentlayer2/client'
import { sortByDate } from '../../utils'
import { extractUniqueTags } from '../../utils/tags'
import { format } from 'date-fns'
import { getSummaryText, getIcon } from '../../utils/utils';

const Article = () => {
  // Pick relevant fields from blogs and sort by date
  let news = allNews.map((news) =>
    pick(news, ['title', 'body', 'date', 'slug', 'description', 'image', 'tags'])
  )
  news = news.sort(sortByDate)
  news = news.slice(0, 3)

    return (
        <div className="lg:max-w-[90vw] mx-auto px-2">
        <div className="border-[0.5px] border-white">
          <div className='p-5 border-[0.5px] border-b-0 border-black text-center'>
            <h1 className='text-[42px] font-bold  text-black'>ข่าวสาร</h1>
          </div>
          {news.map((item, i) => (
            <Link href={'/news/' + item.slug } key={i} className="lg:flex ">
              <div className='border-[0.5px] lg:border-b-0 border-black lg:block flex justify-between'>
                <div className='h-[100px] w-full lg:w-[90px] border-[0.5px] lg:border-t-0 lg:border-b-black lg:border-r-0 border-r-black py-5 flex items-center justify-center'>
                  {item.date ? format(new Date(item.date), 'd/M/yy') : 'N/A'}
                </div>
                <div className='h-[100px] w-full lg:w-[90px] flex items-center py-5 text-center'>
                  <Image src={getIcon('')} width={50} height={50} className='mx-auto' alt="" />
                </div>
              </div>
              <div className='w-full border-[0.5px] lg:border-l-0 lg:border-b-0 border-black'>
                <div className='h-full flex flex-col md:flex-row lg:flex-row justify-between items-center gap-4 mx-auto p-5'>
                  <div className='lg:order-1 order-2 space-y-[24px] md:w-[450px] lg:w-full'>
                    <p className='text-title' dangerouslySetInnerHTML={{ __html: item.title }} />
                    <p className='font-jamjuree text-detail text-wrap' 
                      dangerouslySetInnerHTML={{ __html: getSummaryText(item) }}></p>
                    <p className='font-jamjuree text-detail'>{item.tags}</p>
                  </div>
                  <div className='lg:order-2  md:order-2 order-1 mb-2 '>
                    <img src={item.image} className='w-full md:w-[450px] lg:w-[340px]' alt="" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
          <div className='p-5 border-[0.5px] border-black text-center'>
            <Link href={'/news'} className="flex justify-center">
              <div className="text-mini btn btn border-[3px] border-black text-black px-[50px] py-2 w-fit">
                ดูทั้งหมด
              </div>
            </Link>
          </div>
        </div>
      </div>  
    );
};

export default Article;