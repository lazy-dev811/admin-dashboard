const INITIAL_STATE = {
  data: {
    quote: 'I am a riddle, or a quote',
  },
  config: {
    header: false,
    background: false,
    position: {
      bottom: 60,
      left: 60,
    },
  },
};

export default (state = INITIAL_STATE) => state;
