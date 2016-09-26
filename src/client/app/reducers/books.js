// const INITIAL_STATE = {
//   [
//     {
//       title: 'javascript',
//     },
//     {
//       title: 'javascript 1',
//     },
//     {
//       title: 'javascript 2',
//     },
//     {
//       title: 'javascript 3',
//     },
//   ];
// }
//
// export default (state = INITIAL_STATE, action) => {
//   switch (action.type) {
//     case BOOKS_REQUESTED:
//       return {
//         ...state,
//       }
//
//     default:
//       return state;
//   }
// }


export default function () {
  return [
    {
      title: 'javascript',
    },
    {
      title: 'javascript 1',
    },
    {
      title: 'javascript 2',
    },
    {
      title: 'javascript 3',
    },
  ];
}
