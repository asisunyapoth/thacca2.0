import { Metadata } from 'next'
import { allAbouts, About } from '../../.contentlayer/generated'
import Layout from '../../components/Layout'
import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'
import { AUTHOR_NAME, SITE_NAME, SITE_URL } from '../../config'

// Get page data
const about = allAbouts.find((about: About) => about?.slug === '_index') as About

export default function AboutPage() {
  return (
    <>
    <div className='lg:max-w-[90vw] mx-auto p-2'>
      <div className="flex flex-col">
        <div className="text-left text-top">
          <img src={about.image} className='w-full mt-2 mb-5' alt="" />
          <div className='font-jamjuree text-detail text-wrap mb-3'
            dangerouslySetInnerHTML={{ __html: about.body.raw }} />
        </div>
      </div>
    </div>
    </>
  )
}
