const INITIAL_STATE = {
  widgetName: 'Bookmarks',
  bookmarkCategories: [
    {
      category: 'web development',
      active: true,
      subCategories: [
        {
          subCategory: 'javaScript',
          bookmarks: [
            {
              title: 'Stack Overflow Functional Programming basics',
              url: 'https://www.google.com',
              favicon: 'FAV',
            },
            {
              title: 'Advanced React and Redux',
              url: 'https://www.google.com',
              favicon: 'FAV',
            },
            {
              title: 'Writing a modern webapp',
              url: 'https://www.google.com',
              favicon: 'FAV',
            },
            {
              title: 'React.js tutorial',
              url: 'https://www.google.com',
              favicon: 'FAV',
            },
            {
              title: 'Is javaScript the future?',
              url: 'https://www.google.com',
              favicon: 'FAV',
            },
            {
              title: 'Why Angular is shit and dead',
              url: 'https://www.google.com',
              favicon: 'FAV',
            },
          ],
        },
        {
          subCategory: 'tools',
          bookmarks: [
            {
              title: 'The best build tools 2017',
              url: 'https://www.google.com',
              favicon: 'FAV',
            },
            {
              title: 'Gerrit code review',
              url: 'https://www.google.com',
              favicon: 'FAV',
            },
            {
              title: 'Travis CI - Test and deploy',
              url: 'https://www.google.com',
              favicon: 'FAV',
            },
            {
              title: 'Why 100% unit coverage is a myth',
              url: 'https://www.google.com',
              favicon: 'FAV',
            },
          ],
        },
        {
          subCategory: 'tutorials',
          bookmarks: [
            {
              title: 'Pluralsight',
              url: 'https://www.google.com',
              favicon: 'FAV',
            },
            {
              title: 'Learn javaScript in 30 days',
              url: 'https://www.google.com',
              favicon: 'FAV',
            },
          ],
        },
      ],
    },
    {
      category: 'entertainment',
      subCategories: [
        {
          subCategory: 'News',
          bookmarks: [
            {
              title: 'CNN',
              url: 'https://www.google.com',
              favicon: 'FAV',
            },
            {
              title: 'Liberal hippy bs',
              url: 'https://www.google.com',
              favicon: 'FAV',
            },
          ],
        },
        {
          subCategory: 'Comics',
          bookmarks: [
            {
              title: 'Cyanide and Happiness',
              url: 'https://www.google.com',
              favicon: 'FAV',
            },
            {
              title: 'Owlturd.com',
              url: 'https://www.google.com',
              favicon: 'FAV',
            },
          ],
        },
      ],
    },
  ],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    // case expression:
    //   return {
    //     ...state,
    //   };
    default: {
      return state;
    }
  }
};
