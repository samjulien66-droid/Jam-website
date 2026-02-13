export default {
  name: 'researchItem',
  title: 'Research Item',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'source',
      title: 'Source',
      type: 'string',
      description: 'Publication, organization, or author',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'year',
      title: 'Year',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'CIA & Foreign Intervention', value: 'cia-intervention' },
          { title: 'Elite Networks', value: 'elite-networks' },
          { title: 'Drugs & Power', value: 'drugs-power' },
          { title: 'Housing & Homelessness', value: 'housing-homelessness' },
        ],
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'type',
      title: 'Source Type',
      type: 'string',
      options: {
        list: [
          { title: 'Primary Source', value: 'primary' },
          { title: 'Academic', value: 'academic' },
          { title: 'Investigation', value: 'investigation' },
          { title: 'Book', value: 'book' },
          { title: 'Documentary', value: 'documentary' },
        ],
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'url',
      title: 'URL',
      type: 'url',
      description: 'Link to the source (if available online)',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
      description: 'Brief description of what this source covers',
    },
    {
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
      description: 'Show this item on the main Research page',
      initialValue: false,
    },
  ],
  orderings: [
    {
      title: 'Year, New',
      name: 'yearDesc',
      by: [{ field: 'year', direction: 'desc' }],
    },
    {
      title: 'Category',
      name: 'categoryAsc',
      by: [{ field: 'category', direction: 'asc' }],
    },
  ],
  preview: {
    select: {
      title: 'title',
      source: 'source',
      year: 'year',
    },
    prepare(selection) {
      const { title, source, year } = selection
      return {
        title,
        subtitle: `${source} • ${year}`,
      }
    },
  },
}
