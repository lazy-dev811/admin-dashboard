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
    header: false,
    background: false,
    posX: 60,
    posY: 60,
  },
};

export default (state = INITIAL_STATE) => state;
