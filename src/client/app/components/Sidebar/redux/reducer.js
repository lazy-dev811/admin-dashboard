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
          name: 'SubItem1',
        },
        {
          name: 'SubItem2',
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
