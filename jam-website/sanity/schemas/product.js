export default {
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Product Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'artist',
      title: 'Artist / Maker',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'price',
      title: 'Price',
      type: 'string',
      description: 'Format: $XX.XX',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Art & Prints', value: 'art-prints' },
          { title: 'Stickers', value: 'stickers' },
          { title: 'Home & Lifestyle', value: 'home-lifestyle' },
          { title: 'Accessories', value: 'accessories' },
        ],
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'image',
      title: 'Product Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'url',
      title: 'Product URL',
      type: 'url',
      description: 'Link to purchase the product',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 2,
    },
    {
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
      description: 'Show in the featured products section',
      initialValue: false,
    },
  ],
  preview: {
    select: {
      title: 'name',
      artist: 'artist',
      price: 'price',
      media: 'image',
    },
    prepare(selection) {
      const { title, artist, price } = selection
      return {
        ...selection,
        subtitle: `${artist} • ${price}`,
      }
    },
  },
}
