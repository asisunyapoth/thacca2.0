import { clsx, type ClassValue } from "clsx"
import { News } from "../.contentlayer/generated"
import { twMerge } from "tailwind-merge"
import showdown from 'showdown'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function convertMDTextToHTML(mdText: string) {
  /*
  let result = mdText.replaceAll('#####', '<h5>')
  result = result.replaceAll('####', '<h4>')
  result = result.replaceAll('###', '<h3>')
  result = result.replaceAll('##', '<h2>')
  result = result.replaceAll('#', '<h1>')
  */
  const converter = new showdown.Converter()
  const result = converter.makeHtml(mdText)

  return result
}

export function truncate(str: string, n: number) {
  return (str.length > n ? str.substring(0, n - 1) + '...' : str)
}

export function getSummaryText(news: { body: { html: string } }) : string {
  try {
    return truncate(news.body.html, 200)
  } catch (error) {
    return '-'
  }
}

interface TagsType {
  includes: (industry: string) => boolean;
}

export function getIcon(type: TagsType): string {
  try {
    const industries: string[] = ['sport', 'food', 'festival', 'music', 'book', 'tourism', 'film', 'fashion', 'game', 'art', 'design', 'wellness', 'performingarts'];

    for (let i = 0; i < industries.length; i++) {
      if (type.includes(industries[i])) {
        return '/icon/' + industries[i] + '.png';
      }
    }

    return '/icon/softpower.png';
  } catch (error) {
    return '/icon/softpower.png';
  }
}
