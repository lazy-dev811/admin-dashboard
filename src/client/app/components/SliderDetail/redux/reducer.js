const INITIAL_STATE = {
  data: {
    selectedPerson: {
      picture: '',
      name: 'Vincent',
      company: 'Some company',
      balance: 'Some balance',
      age: '27',
      about: 'Some thing about me',
    },
    activeState: true,
  },
  config: {
    components: {
      body: true,
    },
    dimensions: {
      width: 470,
      height: 600,
    },
    position: {
      top: 20,
      left: 40,
    },
    // transparentBg: true,
    transparentScrollbar: true,
    displaySettings: false,
  },
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {

    default: {
      return state;
    }
  }
};
