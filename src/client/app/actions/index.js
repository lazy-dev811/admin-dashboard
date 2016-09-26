export function selectBook(book) {
  return {
    type: 'SELECT_BOOK',
    payLoad: book,
  };
}

export const BOOKS_REQUESTED = 'BOOKS_REQUESTED';
export const booksRequested = (data) => {
  console.log('data', data);
  return {
    type: BOOKS_REQUESTED,
    books: data,
  };
}
