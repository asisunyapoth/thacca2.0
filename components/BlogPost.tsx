'use client' // Marks this as a client component

import { useEffect } from 'react'
import Prism from 'prismjs'
import 'prismjs/components/prism-bash'
import 'prismjs/components/prism-css'
import 'prismjs/components/prism-javascript'
import 'prismjs/components/prism-jsx'
import 'prismjs/components/prism-php'
import 'prismjs/components/prism-pug'
import 'prismjs/components/prism-markup-templating'
import { News } from '../.contentlayer/generated'
import PostHeader from './PostHeader'
import PostFooter from './PostFooter'

export default function ShowNews({ news }: { news: News }) {
  useEffect(() => {
    Prism.highlightAll()
  }, [])

  return (
    <>
      <div className='max-w-7xl mx-auto p-4'>
        <div className="flex flex-col">
          <div className="text-left text-top">
            <h1 className='text-3xl font-bold mb-5'>{news.title}</h1>
            <img src={news.image} className='w-full mt-5 mb-5' alt="" />
            <p className='font-jamjuree text-detail text-wrap' dangerouslySetInnerHTML={{ __html: news.body.html }} />
          </div>
        </div>
      </div>
    </>
  )
}
