export default {
  name: 'run',
  title: 'Runs',
  type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'string' },
    { name: 'date', title: 'Date', type: 'datetime' },
    { name: 'location', title: 'Location', type: 'string' },
    { name: 'distance', title: 'Distance', type: 'string' },
    { name: 'recap', title: 'Recap', type: 'text' }
  ]
};
