import { createClient } from 'next-sanity'

export const client = createClient({
  projectId: 'kj361trk',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
})

export async function getBlogPosts() {
  return client.fetch(`
    *[_type == "blogPost"] | order(publishedAt desc) {
      _id,
      title,
      "slug": slug.current,
      category,
      publishedAt,
      excerpt,
      featured
    }
  `)
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
      url,
      featured
    }
  `)
}
