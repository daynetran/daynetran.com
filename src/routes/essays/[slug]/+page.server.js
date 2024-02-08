import { error } from '@sveltejs/kit'
import contentfulFetch from '$lib/data/contentful-fetch.js'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'

export async function load({ params }) {
  const query = `
  {
    pageBlogPostCollection (where:{slug:"${params.slug}"}){
      items {
        slug
        title
        publishedDate
        shortDescription
        featuredImage {
          title
          description
          contentType
          fileName
          size
          url
          width
          height
        }
        content {
          json
        }
        
      }
    }
  }
  `

  const response = await contentfulFetch(query)

  if (!response.ok) {
    throw error(404, {
      message: response.statusText,
    })
  }

  const { data } = await response.json()
  const { items } = data.pageBlogPostCollection

  const pageData = items[0]
  pageData.content = documentToHtmlString(pageData.content.json)

  return {
    office: pageData,
  }
}
