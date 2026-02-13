import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn: process.env.NODE_ENV === 'production',
})

const builder = imageUrlBuilder(client)

export function urlFor(source) {
  return builder.image(source)
}

// Query helpers
export async function getBlogPosts() {
  return client.fetch(`
    *[_type == "blogPost"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      category,
      publishedAt,
      excerpt,
      featuredImage,
      featured
    }
  `)
}

export async function getBlogPost(slug) {
  return client.fetch(
    `
    *[_type == "blogPost" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      category,
      publishedAt,
      excerpt,
      featuredImage,
      body
    }
  `,
    { slug }
  )
}

export async function getResearchItems() {
  return client.fetch(`
    *[_type == "researchItem"] | order(year desc) {
      _id,
      title,
      source,
      year,
      category,
      type,
      url,
      description,
      featured
    }
  `)
}

export async function getProducts() {
  return client.fetch(`
    *[_type == "product"] {
      _id,
      name,
      artist,
      price,
      category,
      image,
      url,
      description,
      featured
    }
  `)
}

export async function getFeaturedContent() {
  return client.fetch(`{
    "posts": *[_type == "blogPost" && featured == true] | order(publishedAt desc)[0...3] {
      _id,
      title,
      slug,
      category,
      publishedAt,
      excerpt
    },
    "research": *[_type == "researchItem" && featured == true] | order(year desc)[0...4] {
      _id,
      title,
      source,
      year,
      type,
      url
    }
  }`)
}
