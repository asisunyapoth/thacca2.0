import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { allNews, News } from '../../../.contentlayer/generated'
import Image from 'next/image'
import Layout from '../../../components/Layout'
import BlogPost from '../../../components/BlogPost'
import { AUTHOR_NAME, SITE_NAME, SITE_URL } from '../../../config'
import { format } from 'date-fns'
import { convertMDTextToHTML } from '../../../utils/utils'

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const news = allNews.find((news) => news.slug === params.slug) as News

  if (!news) {
    return notFound()
  }

  return {
    title: news.title,
    description: news.description,
    openGraph: {
      type: 'article',
      url: `${SITE_URL}/news/${news.slug}/`,
      title: news.title,
      description: news.description,
      publishedTime: news.date,
      authors: `${AUTHOR_NAME}`,
      tags: news.tags,
      images: [
        {
          url: `${SITE_URL}/og-card.png`,
          width: 1600,
          height: 800,
          alt: `${SITE_NAME}`,
          type: 'image/jpeg',
        },
      ],
      siteName: `${SITE_NAME}`,
    },
  }
}

export default function NewsPage({ params }: { params: { slug: string } }) {
  const news = allNews.find((news) => news.slug === params.slug)

  if (!news) {
    return notFound()
  }

  return (
    <>
      <div className='lg:max-w-[90vw] mx-auto p-2'>
        <div className="flex flex-col">
          <div className="text-left text-top">
          <Image src={news.image || '/images/fallback-image.jpg'} className='w-full mt-2 mb-5' alt="" />
          <h1 className='text-3xl font-jamjuree font-bold mb-5 text-red-700'>{news.title}</h1>
            <p className='font-jamjuree text-detail text-wrap mb-3'>
              {news.date ? format(new Date(news.date), 'd MMM yyyy') : 'Date not available'}
            </p>
            <div className='font-jamjuree text-detail text-wrap mb-3'
              dangerouslySetInnerHTML={{ __html: convertMDTextToHTML(news.body.raw) }} />
            <p className='font-jamjuree text-detail text-wrap mb-3'>Tags : {news.tags}</p>
          </div>
        </div>
      </div>
    </>
  )
}
