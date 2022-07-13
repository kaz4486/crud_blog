const initialState = {
  posts: [
    {
      id: '1',
      title: 'Article title',
      shortDescription: 'Short description of the article...',
      content: 'Main content of the article',
      publishedDate: new Date('02-02-2022'),
      author: 'John Doe',
      category: 'Movies',
    },
    {
      id: '2',
      title: 'Article title II',
      shortDescription: 'Short description of the article...',
      content: 'Main content of the article',
      publishedDate: new Date('03-02-2022'),
      author: 'Jakub Wędrowycz',
      category: 'Sport',
    },
    {
      id: '3',
      title: 'Article title III',
      shortDescription: 'Short description of the article...',
      content: 'Main content of the article',
      publishedDate: new Date('04-02-2022'),
      author: 'Zoltan Chivay',
      category: 'Sport',
    },
  ],
  categories: [
    { id: 1, name: 'Sport' },
    { id: 2, name: 'News' },
    { id: 3, name: 'Movies' },
  ],
};

export default initialState;
