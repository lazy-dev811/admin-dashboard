export function selectBook(book) {
  return {
    type: 'SELECT_BOOK',
    payLoad: book,
  };
}

export const BOOKS_REQUESTED = 'BOOKS_REQUESTED';
export const booksRequested = (data) => {
  return {
    type: BOOKS_REQUESTED,
    books: data,
  };
};

export const BUTTON_CLICKED = 'BUTTON_CLICKED';
export const buttonClicked = (data) => {
  console.log('data', data);
  return {
    type: BUTTON_CLICKED,
    buttonHasBeenClicked: true,
  };
};

export const GREET_REQUESTED = 'GREET_REQUESTED';
export const greetRequested = () => {
  console.log('greet requested ACTION');
  return {
    type: GREET_REQUESTED,
  };
};
