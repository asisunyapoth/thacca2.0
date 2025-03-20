import Link from 'next/link'
import {
  Blog,
  News,
  Inspiration,
  Podcasts,
  Resources,
  Tools,
} from '../.contentlayer/generated'
import { formatDate } from '../utils'
import { Icon } from './Icon'
import { AUTHOR_NAME } from '../config'

export default function PostHeader({
  data,
}: {
  data: Blog | News | Inspiration | Podcasts | Resources | Tools
}) {
  return (
    <>
    </>
  )
}
