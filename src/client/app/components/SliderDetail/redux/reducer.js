const INITIAL_STATE = {
  widgetIdentifier: 'SliderDetail',
  widgetName: 'Slider',
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
  asyncStatus: {
    inProgress: false,
    error: false,
    errorMessage: undefined,
  },
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {

    default: {
      return state;
    }
  }
};
