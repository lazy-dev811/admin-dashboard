const INITIAL_STATE = {
  loggedIn: false,
  sidebarItems: [
    {
      name: 'Home',
      url: '/',
    },
    {
      name: 'About',
      url: '/about',
    },
    {
      name: 'More',
      url: '',
      subItems: [
        {
          name: 'Add',
        },
        {
          name: 'Remove',
        },
      ],
    },
  ],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default: {
      return state;
    }
  }
};
