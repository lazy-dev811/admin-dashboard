// state of reducer
export default function (state = null, action) {
  switch (action.type) {
    case 'SELECT_BOOK':
      return action.payLoad;
  }
  return state;
}
