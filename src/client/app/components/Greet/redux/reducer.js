const INITIAL_STATE = {
  data: {
    person: {
      name: 'Vincent',
      surname: 'Bollaert',
    },
    weather: 'a fierce mild',
    date: '16 October 2016',
  },
  config: {
    position: {
      right: 60,
      bottom: 60,
    },
    components: {},
    dimensions: {},
  },
};

export default (state = INITIAL_STATE) => state;
