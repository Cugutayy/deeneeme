export default {
  name: 'photo',
  title: 'Photos',
  type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'string' },
    { name: 'category', title: 'Category', type: 'string' },
    { name: 'image', title: 'Image', type: 'image' }
  ]
};
