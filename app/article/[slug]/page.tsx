import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { allArticles, Article } from '../../../.contentlayer/generated'
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
  const article = allArticles.find((item) => item.slug === params.slug) as Article

  if (!article) {
    return notFound()
  }

  return {
    title: article.title,
    description: article.description,
    openGraph: {
      type: 'article',
      url: `${SITE_URL}/article/${article.slug}/`,
      title: article.title,
      description: article.description,
      publishedTime: article.date,
      authors: `${AUTHOR_NAME}`,
      tags: article.tags,
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

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = allArticles.find((item) => item.slug === params.slug)

  if (!article) {
    return notFound()
  }

  return (
    <>
      <div className='lg:max-w-[90vw] mx-auto p-2'>
        <div className="flex flex-col">
          <div className="text-left text-top">
          <Image src={article.image || '/images/default-image.png'} width={600} height={300} className='w-full mt-2 mb-5' alt="" />
          <h1 className='text-3xl font-jamjuree font-bold mb-5 text-red-700'>{article.title}</h1>
            <p className='font-jamjuree text-detail text-wrap mb-3'>
              {article.date ? format(new Date(article.date), 'd MMM yyyy') : 'Date not available'} 
            </p>
            <div className='font-jamjuree text-detail text-wrap mb-3'
              dangerouslySetInnerHTML={{ __html: convertMDTextToHTML(article.body.raw) }} />
            <p className='font-jamjuree text-detail text-wrap mb-3'>Tags : { article && article.tags && article.tags.join(' #') }</p>
          </div>
        </div>
      </div>
    </>
  )
}
