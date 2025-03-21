import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import { allCommittees, Committee } from '../../../.contentlayer/generated'
import { AUTHOR_NAME, SITE_NAME, SITE_URL } from '../../../config'
import { convertMDTextToHTML } from '../../../utils/utils'

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const committee = allCommittees.find((item) => item.slug === params.slug) as Committee

  if (!committee) {
    return notFound()
  }

  return {
    title: committee.title,
    description: committee.description,
    openGraph: {
      type: 'article',
      url: `${SITE_URL}/committee/${committee.slug}/`,
      title: committee.title,
      description: committee.description,
      authors: `${AUTHOR_NAME}`,
      siteName: `${SITE_NAME}`,
    },
  }
}

export default function NewsPage({ params }: { params: { slug: string } }) {
  const committee = allCommittees.find((item) => item.slug === params.slug)

  if (!committee) {
    return notFound()
  }

  return (
    <>
      <div className='lg:max-w-[90vw] mx-auto p-2'>
        <div className="flex flex-col">
          <div className="text-left text-top">
          <Image src={committee.image || '/images/default-image.png'} width={600} height={300} className='w-full mt-2 mb-5' alt="" />
          <h1 className='text-3xl font-jamjuree font-bold mb-5 text-red-700'>{committee.title}</h1>
            <div className='font-jamjuree text-detail text-wrap mb-3'
              dangerouslySetInnerHTML={{ __html: convertMDTextToHTML(committee.body.raw) }} />
          </div>
        </div>
      </div>
    </>
  )
}
