import { Metadata } from 'next'
import { allCommittees, Committee } from '../../.contentlayer/generated'
import Image from 'next/image'
import Layout from '../../components/Layout'
import { AUTHOR_NAME, SITE_NAME, SITE_URL } from '../../config'

// Get page data
const subcommittees = allCommittees.filter((item) => item.slug.endsWith('subcommittee'))

export default function CommitteeMain() {
  return (
    <>
      <div className='lg:max-w-[90vw] mx-auto p-2'>
        <div className="flex flex-col">
          <div className="text-left text-top">
          <Image src='/images/thacca-committee.png' width={600} height={300} className='w-full mt-2 mb-5' alt="" />
          <h1 className='text-3xl font-jamjuree font-bold mb-5 text-red-700'>คณะกรรมการ</h1>
            <ul className='list-disc list-inside mb-5'>
              <li className='mb-2'><a href="/committee/strategic-committee/">คณะกรรมการยุทธศาสตร์ซอฟต์พาวเวอร์แห่งชาติ</a></li>
              <li className='mb-2'><a href="/committee/development-committee/">คณะกรรมการพัฒนาซอฟต์พาวเวอร์แห่งชาติ</a></li>
            </ul>
          <h1 className='text-3xl font-jamjuree font-bold mb-5 text-red-700'>คณะอนุกรรมการ</h1>
            <ul className='list-disc list-inside mb-5'>
              {subcommittees.map((committee) => (
                <li className='mb-2' key={committee.slug}><a href={`/committee/${committee.slug}/`}>{committee.title}</a></li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}
